//fetch url
let url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=S4m33r4&limit=1&api_key=';
let apiKey = 'd14224bbdbf51e2b2445f81731bedc57';
let fetchUrl = url + apiKey + '&format=json';

//fetch data
fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        let track = data.recenttracks.track[0].name;
        let artist = data.recenttracks.track[0].artist['#text'];
        let album = data.recenttracks.track[0].album['#text'];
        let image = data.recenttracks.track[0].image[3]['#text'];
        let url = data.recenttracks.track[0].url;
        let mbid = data.recenttracks.track[0].album.mbid;

        console.log('Track:', track + ' by ' + artist + ' from ' + album + 'id: ' + mbid);

        //check if the track is playing
        let nowPlaying = data.recenttracks.track[0]['@attr'];
        if (nowPlaying) {
            document.getElementById('track').textContent = 'Now Playing: ' + track;
        } else {
            document.getElementById('track').textContent = 'Last Played: ' + track;
        }

        //display data
        // document.getElementById('track').innerHTML = track;
        document.getElementById('artist').innerHTML = artist;
        document.getElementById('album').innerHTML = album;
        document.getElementById('image').src = image;
        document.getElementById('url').href = url;
    })
    .catch(error => console.error('Error:', error));

    