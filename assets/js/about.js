const clientId = 'bb60c805a05440999011d33d17846c61';
const clientSecret = '3290f175cc254cec8a7492fde67287ee';
const bicepArtistID = '73A3bLnfnz5BoQjb4gNCga';
var topTracks;

var getToken = async () => {
        console.log ("in getToken 1");
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        return data;
    }

var getTopTracks = async (token) => {
        const result = await fetch(`https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga/top-tracks?market=IE`, {
        method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}

        });
        const data = await result.json();
        return data;
}


var getAlbums1 = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/albums/4psDRFbIlUM1KUb1omccXo?market=IE`, {
    method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}

    });
    const data = await result.json();
    return data;
}

var getAlbums2 = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/albums/0EdtTRCl3J22AnWrNpH1w9?market=IE`, {
    method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}

    });
    const data = await result.json();
    return data;
}

getToken().then(returnData =>{
    getAlbums1(returnData.access_token).then(newData=> {
        displayAlbum1(newData)
    })

    getAlbums2(returnData.access_token).then(newData=> {
        displayTopTracks(newData);
        displayAlbum2(newData)
    })

    getTopTracks(returnData.access_token).then(newData=> {
        displayTopTracks(newData);
        topTrackClicked(newData);
    })
});

function displayAlbum1(data){
    var img= '<img alt="bicep album called bicep" id="album1" src ="' +data.images[0].url + '" />';
    $("#album1_image").append(img)
    console.log(data);
    var albumTracks = data.tracks.items;;
    for(var i=0; i<albumTracks.length; i++){
        var track = albumTracks[i].name;
        var href = albumTracks[i].external_urls.spotify;
        $("#album1_tracks").append("<span>" + (i+1) + ". "  +  "<a" + ' target="_blank"' + " href=" + href +">" + track + "</a></span><br>");
    }
    $("#album1_info").append("<span>Name: " + data.name + "</span><br>");
    $("#album1_info").append("<span>Release Date: " + data.release_date + "</span><br>");
    $("#album1_info").append("<span>Label: " + data.label + "</span><br>");
    $("#album1_info").append("<span>Track Count: " + data.total_tracks + "</span><br>");
}

function displayAlbum2(data){
    var img= '<img alt="bicep album called isles"  id="album2" src ="' +data.images[0].url + '" />';
    $("#album2_image").append(img)

    var albumTracks = data.tracks.items;
    console.log(albumTracks)
    for(var i=0; i<albumTracks.length; i++){
        var track = albumTracks[i].name;
        var href = albumTracks[i].external_urls.spotify;
        $("#album2_tracks").append("<span>" + (i+1) + ". "  +  "<a" + ' target="_blank"' + " href=" + href +">" + track + "</a></span><br>");
    }

    $("#album2_info").append("<span>Name: " + data.name + "</span><br>");
    $("#album2_info").append("<span>Release Date: " + data.release_date + "</span><br>");
    $("#album2_info").append("<span>Label: " + data.label + "</span><br>");
    $("#album2_info").append("<span>Track Count: " + data.total_tracks + "</span><br>");
}

function displayTopTracks(data){
    topTracks = data.tracks;
    console.log(topTracks);
    for (var i = 0; i < topTracks.length; i++) {
        var leadingNumber = i+1;
        $("#toptracks").append('<div class="top-track-number">'+ topTracks[i].name + '</div>')
    } 
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      console.log(value)
      $("#toptracks .top-track-number").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function topTrackClicked(data){
    var topTracks = data
    return toptracks;
}

$(document).on('click', ".top-track-number", function clickedButton(data) {
    var currentselectedTrack = $(this).text();
    console.log("in here");

    console.log(topTracks);
    for(var i=0; i<topTracks.length; i++){
       if(currentselectedTrack == topTracks[i].name){
            console.log("found it");
            console.log(currentselectedTrack);
            $("#track-preview").html("<source src=" + topTracks[i].preview_url + " type=audio/mpeg>");
            $("#track-preview").css("display", "inline-block");
            $("#track-preview")[0].load();
        }
    }
});