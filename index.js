const APIKEY = "ccf4d9f34a36ec721752efb1b124ca4b";
let baseURL = "https://api.themoviedb.org/3/";
let configData = null;
let baseImageURL = null;

let getConfig = function(){
    let url = "".concat(baseURL, "configuration?api_key=", APIKEY);
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            baseImageURL = data.images.secre_base_url;
            configData = data.images;
            console.log("Config >> ");
            console.log(data);
            runSearch("jaws");
        })
        .catch((err) => {
            console.error(err);
        })
}

let runSearch = function(keyword){
    let url = "".concat(baseURL, "search/movie?api_key=", APIKEY, "&query=", keyword);
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            displayData(data);  
        })
}

let displayData = function(data){
    $(".result").append("<table class='table'><thead><tr><th scope='col'>Poster</th><th scope='col'>Title</th><th scope='col'>Overview</th><th scope='col'>Release Date</th><th scope='col'>Download</th></tr></thead><tbody></table>");
    for(let i = 0; i<data.results.length; i++){
        let year_released = data.results[i].release_date.substring(0,4);
        let download_link = "https://thepiratebay3.org/index.php?q=" + data.results[i].title + "+"+ year_released;
        let poster_img = `<img class="poster" alt="${data.results[i].poster_path ? data.results[i].title + " poster" : "No Poster avaliable"}" src="${data.results[i].poster_path ? "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path : ''}">`;
        $(".table").append("<tr><td scope='row'>"+ poster_img +"</td><td>"+ data.results[i].title +"</td><td>"+ data.results[i].overview +"</td><td>"+ year_released +"</td><td><a target='_blank' href='"+ download_link +"'>Download</a></td></tr>");
    }
}

document.addEventListener('DOMContentLoaded', getConfig);
