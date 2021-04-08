const clientId = 'bb60c805a05440999011d33d17846c61';
const clientSecret = '3290f175cc254cec8a7492fde67287ee';
const bicepArtistID = '73A3bLnfnz5BoQjb4gNCga'

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


var getAlbums = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/albums/4psDRFbIlUM1KUb1omccXo?market=IE`, {
    method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}

    });
    const data = await result.json();
    return data;
}


getToken().then(returnData =>{
    getAlbums(returnData.access_token).then(newData=> {
        console.log(newData);
        //displayTopTracks(newData);
        displayAlbum(newData)
        console.log(newData);
    })
});

function displayAlbum(data){
    //var img1 = new Image();
    //img1.setAttribute("src",data.images[0]);
    var img= '<img src ="' +data.images[0].url + '" />';
    $("#album1").append(img)
}

function displayTopTracks(data){
    var topTracks = data.tracks;
    console.log(topTracks)

    for (var i = 0; i < topTracks.length; i++) {
        console.log(topTracks[i].name);
        var leadingNumber = i+1;
        $("#toptracks").append('<div class="top-track-number">' + leadingNumber + '. ' + topTracks[i].name + '</div>')
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
  
