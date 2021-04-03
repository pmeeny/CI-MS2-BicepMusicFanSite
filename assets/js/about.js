// taken from https://github.com/awicks44/JavaScript-SpotifyAPI/blob/master/app.js

const clientId = 'bb60c805a05440999011d33d17846c61';
const clientSecret = '3290f175cc254cec8a7492fde67287ee';
const bicepArtistID = '73A3bLnfnz5BoQjb4gNCga';

 // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        console.log(data)
        return data.access_token;
    }

    const getAlbum = async (token) => {

        console.log(token)
        token="BQACaGUHKIaaH8cOtwrguEcMpZOYE_O_S_6WkJ8bPR3y6yF11zAo9JtWf36uWOanVzP13oE-XSvStvnyQrU";
        //const result = await fetch(`https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga/albums?include_groups=album`, {
         
        const result = await fetch(`https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga/top-tracks?market=IE`, {
        method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}

        });

        const data = await result.json();
        console.log(data)
    }

    getAlbum(_getToken())


