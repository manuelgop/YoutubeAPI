$(document).ready(function(){
var key = 'AIzaSyB97v_oTQxHYyQbXxS8wxiUHOm5DUVlpdY';
var playlistID = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
//https://www.youtube.com/watch?v=1AQAa5cJVT8
var options = {
    part: 'snippet',
    key: key,
    maxResults: 20,
    playlistId: playlistID
}

loadVids();

function loadVids() {
    $.getJSON(URL, options, function (data) {
        var id = data.items[0].snippet.resourceId.videoId;
       // mainVid(id);
       // resultsLoop(data);
       console.log(data);
       mainVid(id);
       resultsLoop(data);
    });
}

function mainVid(id) {
    $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
}

function resultsLoop(data) {
    $.each(data.items, function(i, item){
        var thumb = item.snippet.thumbnails.medium.url;

        $('main').html(`
        <article>
        <img src="${thumb}" alt="" class="thumb">
        <div class="details">
            <h4>Tittle</h4>
            <p>I am a description</p>
        </div>
    </article>
        `);
    });
    

  
}
});