// const express = require ('express');
// const app = express();

// app.get("/", function(req, res){
//     res.send("Hello world!");
// })

// app.listen(3000, function(){
//     console.log("Exempla app listenning port 3000");
// })


// var titres = document.querySelectorAll("h1");
// titres.appendChild("oucocu");
// console.log(body);

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data.results[0].picture.medium);
//       $(".affiche").attr("src", data.results[0].picture.large);
//     }
//   });

// $.ajax({
//     url: "https://www.themoviedb.org/discover/movie?sort_by=popularity.desc",
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

// $(".affiche").attr("src", "")
// $("h1").html("wesh!");


// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.themoviedb.org/3/authentication/token/new?api_key=%3C%3Capi_key%3E%3E",
//     "method": "GET",
//     "headers": {},
//     "data": "{}"
//   }
  
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

$.ajax({
    url: "https://api.themoviedb.org/3/movie/550?api_key=ccf4d9f34a36ec721752efb1b124ca4b",
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $(".titre").html(data.original_title);
      $(".overview").html(data.overview)
      $(".affiche").attr("src", "https://image.tmdb.org/t/p/w500" + data.poster_path)
    }
  });