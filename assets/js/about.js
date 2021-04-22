/*​jshint esversion: 8 */

const clientId = "bb60c805a05440999011d33d17846c61";
const clientSecret = "3290f175cc254cec8a7492fde67287ee";
const bicepArtistID = "73A3bLnfnz5BoQjb4gNCga";
const albumOneID = "4psDRFbIlUM1KUb1omccXo"; 
const albumTwoID = "0EdtTRCl3J22AnWrNpH1w9";
var topTracks;
/**
 * The variable getToken is assigned a spotify token in a JSON object for subsequent spotify api calls
 * The clientID and clientSecret is passed in the headers
 */
var getToken = async () => {
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "Authorization" : "Basic " + btoa(clientId + ":" + clientSecret)
            },
            body: "grant_type=client_credentials"
        });
        // The data object is in json
        const data = await result.json();
        return data;
    };
/**
 * The variable getTopTracks uses the token acquired, and calls a spotify api method to return
 * a json object of the artists top tracks
 */
var getTopTracks = async (token) => {
        const result = await fetch("https://api.spotify.com/v1/artists/" + bicepArtistID + "/top-tracks?market=IE", {
        method: "GET",
            headers: { "Authorization" : "Bearer " + token}
        });
        const data = await result.json();
        // The data object is in json
        return data;
};
/**
 * The variable getAlbums1 uses the token acquired, and calls a spotify api method to return
 * a json object of the artists first album, with the albumID passed in
 */
var getAlbums1 = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/albums/" + albumOneID + "?market=IE", {
    method: "GET",
        headers: { "Authorization" : "Bearer " + token}
    });
    const data = await result.json();
    return data;
};
/**
 * The variable getAlbums2 uses the token acquired, and calls a spotify api method to return
 * a json object of the artists second album, with the albumID passed in
 */
var getAlbums2 = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/albums/" + albumTwoID + "?market=IE", {
    method: "GET",
        headers: { "Authorization" : "Bearer " + token}

    });
    const data = await result.json();
    return data;
};
/**
 * displayAlbum1 displays the album info, track
 * listings and image on the page using jQuery append method
 * @param data [The json data]
 */
function displayAlbum1(data){
    // Set the album image
    var img= "<img alt=" +"bicep " +"album " + "cover" + " id=" + "album1" + " src=" +data.images[0].url + " />";
    $("#album1_image").append(img);
    var albumTracks = data.tracks.items;
    for(var i=0; i<albumTracks.length; i++){
        var track = albumTracks[i].name;
        var href = albumTracks[i].external_urls.spotify;
        // Set the album tracks with link to spotify
        $("#album1_tracks").append("<span>" + (i+1) + ". " +  "<a" + " target=" + "_blank" + "rel=" +"noreferrer" + " href=" + href +">" + track + "</a></span><br>");
    }
    // Set the album information
    $("#album1_info").append("<span>Name: " + data.name + "</span><br>");
    $("#album1_info").append("<span>Release Date: " + data.release_date + "</span><br>");
    $("#album1_info").append("<span>Label: " + data.label + "</span><br>");
    $("#album1_info").append("<span>Track Count: " + data.total_tracks + "</span><br>");
}

/**
 * displayAlbum2 displays the album info, track
 * listings and image on the page using JQuery append mthod
 * @param data [The json data]
 */
function displayAlbum2(data){
    // Set the album image
    var img= "<img alt=" +"isles " +"album " + "cover" + " id=" + "album2" + " src=" +data.images[0].url + " />";
    $("#album2_image").append(img);
    var albumTracks = data.tracks.items;
    for(var i=0; i<albumTracks.length; i++){
        var track = albumTracks[i].name;
        var href = albumTracks[i].external_urls.spotify;
        // Set the album tracks with link to spotify
        $("#album2_tracks").append("<span>" + (i+1) + ". " +  "<a" + " target=" + "_blank" + "rel=" +"noreferrer" + "href=" + href +">"+ track + "</a></span><br>");
    }
    // Set the album information
    $("#album2_info").append("<span>Name: " + data.name + "</span><br>");
    $("#album2_info").append("<span>Release Date: " + data.release_date + "</span><br>");
    $("#album2_info").append("<span>Label: " + data.label + "</span><br>");
    $("#album2_info").append("<span>Track Count: " + data.total_tracks + "</span><br>");
}
/**
 * displayTopTracks displays the top tracks
 * on the page using jQuery append method on the top-track-number div
 * @param data [The json data]
 */
function displayTopTracks(data){
    topTracks = data.tracks;
    for (var i = 0; i < topTracks.length; i++) {
        $("#toptracks").append("<div class=" + "top-track-number" + ">" + topTracks[i].name + "</div>");
    }
}
/**
 * topTrackClicked listens for when a top track
 * div is clicked, and then plays the relevant mp3 clip using JQuery
 * @param data [The json data]
 */
$(document).on("click", ".top-track-number", function topTrackClicked(data) {
    var currentselectedTrack = $(this).text();
    for(var i=0; i<topTracks.length; i++){
       if(currentselectedTrack == topTracks[i].name){
            $("#track-preview").html("<source src="+ topTracks[i].preview_url + " type=audio/mpeg>");
            $("#track-preview").css("display", "inline-block");
            $("#track-preview")[0].load();
        }
    }
});
/**
 * Promises are used to control the order of the function calls, the token is used for
 * all spotify api calls
 */
 getToken().then(returnData =>{
    getAlbums1(returnData.access_token).then(newData=> {
        displayAlbum1(newData);
    });

    getAlbums2(returnData.access_token).then(newData=> {
        displayTopTracks(newData);
        displayAlbum2(newData);
    });

    getTopTracks(returnData.access_token).then(newData=> {
        displayTopTracks(newData);
    });
});