var page = 0;
var eventResults;

/**
 * [getEvents makes an get request using Ajax to return events with bicep keyword, 
 * 2 events per page for page 0, the result is stored in eventResults json object]
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

    // Ajax get request to return events with bicep keyword, 2 events per page, the result is stored in eventResults json object
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=bicep&apikey=zHOhx31e2Dmjcqp5vASU3g6jrhd7Xt8Z&size=2&locale=*&page=" + page,
        dataType: "json",
        success: function(json) {
            eventResults = json;
            //console.log(ajaxResult);
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
 * [getEventsForSubsequentPages makes an get request using Ajax to return events with bicep keyword, 
 * 2 events per page for subsequent pages, the result is stored in eventResults json object]
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

       // Ajax get request to return events with bicep keyword, 2 events per page for subsequent page updates, the result is stored in eventResults json object
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=bicep&apikey=zHOhx31e2Dmjcqp5vASU3g6jrhd7Xt8Z&size=2&locale=*&page=" + page,
        dataType: "json",
        success: function(json) {
            eventResults = json;
            displayEvents(eventResults);
        },
        error: function(xhr, status, err) {
            // Log an error to the console if the request is not successful
            console.log(err);
        }
    });
}

/**
 * [displayEvents takes in one parameter , the eventResults object, and displays the event description for the events id]
 * @param  eventResults [The event results object]
 */
function displayEvents(eventResults) {
    var items = $('#events .individual-event');
    //items.hide();
    var events = eventResults._embedded.events;
    var item = items.first();

    // loop throught the events object and display the event information
    for (var i = 0; i < events.length; i++) {
        item.children('.event-heading').text(events[i].name);
        item.children('.event-text').text(events[i].dates.start.localDate);
        try {
            item.children('.event-venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
        } catch (err) {
            console.log(err);
        }
        item = item.next();
    }
}

/**
 * [displayPagination takes in one parameter , the eventResults object, and displays numbered pagination for the pages of events]
 * @param  eventResults [The event results object]
 */
function displayPagination(eventResults) {
    var numberofPages = eventResults.page.totalPages;

    for (var i = 0; i < numberofPages; i++) {
        $("#event-pages").append('<div class="event-page-number">' + i + '</div>');
    }
}

/**
 * [eventPageClicked is called when a page number is clicked, the events for that page is updated from an API call and the events page is updated with the data
 */
$(document).on('click', ".event-page-number", function eventPageClicked() {
    var currentselectedPage = $(this).text();
    page = currentselectedPage;
    getEventsForSubsequentPages(currentselectedPage)
});

getEvents(page, displayPagination);