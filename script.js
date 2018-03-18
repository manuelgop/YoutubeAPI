$(document).ready(function(){
var key = 'AIzaSyB97v_oTQxHYyQbXxS8wxiUHOm5DUVlpdY';
var playlistID = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

var options ={
    playlistID: playlistID,
    part: 'snippet',
    key: key,
    maxResults: 20,
    
}
loadVids();

function loadVids() {
    console.log('TEEEEESTEO');
    
    $.getJSON(URL,options, function (data) {
        console.log(data)  
       })
    
}

function mainVid(id) {
    $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
}
});