$(document).ready(function(){
var key = 'AIzaSyB97v_oTQxHYyQbXxS8wxiUHOm5DUVlpdY';
var playlistID = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

var options = {
    part: 'snippet',
    key: key,
    maxResults: 20,
    playlistId: playlistID
}

loadVids();

function loadVids() {
    $.getJSON(URL, options, function (data) {
        //var id = data.items[0].snippet.resourceId.videoId;
       // mainVid(id);
       // resultsLoop(data);
       console.log(data);
    });
}

function mainVid(id) {
    $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
}
});