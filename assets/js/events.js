//Events variables
var page = 0;
var eventResults;
var google;
const apiKey = "zHOhx31e2Dmjcqp5vASU3g6jrhd7Xt8Z";

/**
 * [getEvents makes an get request
 * using Ajax to return events with bicep keyword,
 * 2 events per page for page 0,
 * the result is stored in eventResults json object]
 * @param  page [The page of the results]
 * @param  callback [callback method]
 */
function getEvents(page, callback) {

    // page must be a valid number
    if (page < 0) {
        page = 0;
        return;
    }
    if (page > 0) {
        if (page > getEvents.eventResults.page.totalPages - 1) {
            page = 0;
        }
    }

    //Ajax get request to return events with bicep keyword,
    //2 events per page, the result is stored in eventResults json object
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?" +
        "keyword=bicep&apikey=" + apiKey +
        "&size=2&locale=*&page=" + page,
        dataType: "json",
        success: function(json) {
            eventResults = json;
            displayEvents(eventResults);
            callback(eventResults);
        },
        error: function(xhr, status, err) {
            // Log an error to the console if the request is not successful
            console.log(err);
        }
    });
}

/**
 * [getEventsForSubsequentPages makes an get
 * request using Ajax to return events with bicep keyword,
 * 2 events per page for subsequent pages,
 * the result is stored in eventResults json object]
 * @param  page [The page of the results]
 * @param  callback [callback method]
 */
function getEventsForSubsequentPages(page, callback) {

    // page must be a valid number
    if (page < 0) {
        page = 0;
        return;
    }

    if (page > 0) {
        if (page > eventResults.page.totalPages - 1) {
            page = 0;
        }
    }

    /** Ajax get request to return events with bicep keyword,
    // 2 events per page for subsequent page updates,
    // the result is stored in eventResults json object */
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?" +
        "keyword=bicep&apikey=" + apiKey +
        "&size=2&locale=*&page=" + page,
        dataType: "json",
        success: function(json) {
            eventResults = json;
            displayEvents(eventResults);
            callback(eventResults);
        },
        error: function(xhr, status, err) {
            // Log an error to the console if the request is not successful
            console.log(err);
        }
    });
}

/**
 * [displayEvents takes in one parameter , the eventResults object,
 * and displays the event description for the events id]
 * @param eventResults [The event results object]
 */
function displayEvents(eventResults) {
    var items = $("#events .individual-event");
    var events = eventResults._embedded.events;
    var item = items.first();

    //loop through the events object and display the event information
    for (var i = 0; i < events.length; i++) {
        item.children(".event-heading").text(events[i].name);
        item.children(".event-text").text(events[i].dates.start.localDate);
        var timeString = events[i].dates.start.localTime;
        item.children(".event-time").text(timeString.slice(0, 5));
        try {
            if(i==0){
                $(".event-venue1").text("Venue: " + events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
                item.children(".event-url-1").html("<a "+ "target=" +"_blank"+ " href=" + events[i].url + ">" + "Buy Tickets" + "</a>");
                var venue1 = events[i]._embedded.venues[0].name + " " + events[i]._embedded.venues[0].city.name;
                initMap(venue1, "map1");
            }
            else{
                $(".event-venue2").text("Venue: "+ events[i]._embedded.venues[0].name+ " in " + events[i]._embedded.venues[0].city.name);
                item.children(".event-url-2").html("<a " + "target=" +"_blank" + " href=" + events[i].url + ">" + "Buy Tickets" + "</a>");

                var venue2 = events[i]._embedded.venues[0].name + " " + events[i]._embedded.venues[0].city.name;
                initMap(venue2, "map2");
            }
        }catch (err) {
            console.log(err);
        }
        item = item.next();
    }
}

  /**
 * [displayPagination takes in one parameter,
 * the eventResults object and displays numbered
 * pagination for the pages of events
 * Credit: https://developers.google.com/maps/documentation/]
 * @param address [Location address]
 * @param mapId [Map ID]
 */
function initMap(address, mapId) {
    const map = new google.maps.Map(document.getElementById(mapId), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    });
    const geocoder = new google.maps.Geocoder();
        geocodeAddress(geocoder, map, address);
  }

  /**
 * [displayPagination takes in one parameter,
 * the eventResults object and displays numbered
 * pagination for the pages of events
 * Credit: https://developers.google.com/maps/documentation/javascript
 * /examples/geocoding-simple#maps_geocoding_simple-javascript]
 * @param  geocoder [The geocoder object]
 * @param resultsMap [Map containing result]
 */
  function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

/**
 * [displayPagination takes in one parameter,
 * the eventResults object and displays numbered
 * pagination for the pages of events]
 * @param  eventResults [The event results object]
 */
function displayPagination(eventResults) {
    var numberofPages = eventResults.page.totalPages;

    for (var i = 0; i < numberofPages; i++) {
        if (i == 0) {
            $("#event-pages").append("<div class=" +"event-page-number" +">" + i + "</div>");
            $(".event-page-number").addClass("selected");

        } else {
            $("#event-pages").append("<div class=" +"event-page-number" +">" + i + "</div>");
        }
    }
}

 /**
 * [Update next and previous divs when previous link clicked]
 */
  function updatePaginationWhenPreviousClicked() {

    if (!(isNextAvailable(eventResults._links.next))) {
        $("#next").hide();
    } else {
        $("#next").show();
    }

    if ((isPrevAvailable(eventResults._links.prev))) {
        $("#previous").show();
    } else {
        $("#previous").hide();
    }
}

 /**
 * [Update next and previous divs when next link clicked]
 */
function updatePaginationWhenNextClicked() {
    if (!(isNextAvailable(eventResults._links.next))) {
        $("#next").hide();
    } else {
        $("#next").show();
    }

    if ((isPrevAvailable(eventResults._links.prev))) {
        $("#previous").show();
    }
}

/**
 * [Update next and previous divs when page selected]
 */
function updatePaginationWhenPageSelected() {
    if (!(isNextAvailable(eventResults._links.next))) {
        $("#next").hide();
    } else {
        $("#next").show();
    }

    if (!(isPrevAvailable(eventResults._links.prev))) {
        $("#previous").hide();
    } else {
        $("#previous").show();
    }
}

 /**
 * [Checks if the previous is available in the links object]
 */
function isPrevAvailable() {
    if (("prev" in eventResults._links)) {
        return true;
    } else {
        return false;
    }
}

 /**
 * [Checks if the next is available in the links object]
 */
function isNextAvailable() {
    if (("next" in eventResults._links)) {
        return true;
    } else {
        return false;
    }
}

/**
 * [eventPageClicked is called when a page number is
 *  clicked, the events for that page is updated
 * from an API call and the events page is
 * updated with the data]
 */
$(document).on("click", ".event-page-number", function eventPageClicked() {
    var currentselectedPage = $(this).text();
    page = currentselectedPage;
    getEventsForSubsequentPages(currentselectedPage,
        updatePaginationWhenPageSelected);
    $(".event-page-number").removeClass("selected");
    $(this).addClass("selected");
});

/**
 * [Click event that will display
 * more information about the event(toggle enabled)
 * if the more info button is clicked
 * displays the 1st entry on results]
 */
$(".event-click-1").click(function(event) {
   event.preventDefault();
   $(".event1-container").toggle();
});

/**
 * [Click event that will display more
 * information about the event(toggle enabled)
 * if the more info button is clicked, 2nd entry on results]
 */
$(".event-click-2").click(function(event) {
    event.preventDefault();
    $(".event2-container").toggle();
 });

 /**
 * [Listener to update events page when previous
 * link clicked]
 */
 $(document).on("click", "#previous", function previousButtonClicked() {
    $(".event-page-number").removeClass("selected");
    $("#event-pages > div:nth-child(" + page + ")").addClass("selected");
    getEventsForSubsequentPages(--page,
        updatePaginationWhenPreviousClicked);
});

 /**
 * [Listener to update events page when next
 * link clicked]
 */
$(document).on("click", "#next", function nextButtonClicked() {
    getEventsForSubsequentPages(++page, updatePaginationWhenNextClicked);
    var cp = page + 1;
    $(".event-page-number").removeClass("selected");
    $("#event-pages > div:nth-child(" + cp + ")").addClass("selected");
});

getEvents(page, displayPagination);