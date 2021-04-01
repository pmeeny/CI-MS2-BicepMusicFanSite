var page = 0;
var eventResults;

/**
 * [getEvents makes an get request using Ajaxto return events with bicep keyword, 
 * 2 events per page, the result is stored in eventResults json object]
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
        if (page > getEvents.json.page.totalPages - 1) {
            page = 0;
        }
    }

    // Ajax get request to return events with bicep keyword, 2 events per page, the result is stored in eventResults json object
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=bicep&apikey=zHOhx31e2Dmjcqp5vASU3g6jrhd7Xt8Z&size=2&locale=*&page=" + page,
        dataType: "json",
        success: function(eventResults) {
            displayEvents(eventResults);
            callback(eventResults);
        },
        error: function(xhr, status, err) {
            // Throw an error to the console if the request is not successful
            console.log(err);
        }
    });
}

/**
 * [displayEvents takes in one parameter , the eventResults object, and displays the event description for the events id]
 * @param  eventResults [The event results object]
 */
function displayEvents(eventResults) {
    var items = $('#events .list-group-item');
    //items.hide();
    var events = eventResults._embedded.events;
    var item = items.first();

    // loop throught the events object and display the event information
    for (var i = 0; i < events.length; i++) {
        item.children('.list-group-item-heading').text(events[i].name);
        item.children('.list-group-item-text').text(events[i].dates.start.localDate);
        try {
            item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
        } catch (err) {
            console.log(err);
        }
        item = item.next();
    }
}

function displayPagination(eventResults) {

}

getEvents(page, displayPagination);