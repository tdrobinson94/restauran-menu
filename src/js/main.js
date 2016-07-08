import $ from "jquery";
import {authKey} from './key.js';


$.ajax({
  url: "https://json-data.herokuapp.com/restaurant/menu/3",
  dataType: 'json',
  success: function(results){
    // console.log(results)
    var beer = results.item;
    $('#results').append(beer + ' ');
    addToPage(results)
    console.log(results)
  }
});

var firstItem: {};
firstItem = "beer"

function beerTemplate (obj){
  console.log(obj)
  var html =  `
  <div class="beer">
  <div class="beer">${obj.item}</div>
    ${obj.abv}
    ${obj.price}
    ${obj.style}
  </div>
`;
$(".Beer").append(html);
};

function addToPage (arrayOfMenuItems) {
  arrayOfMenuItems.Beer.forEach(beerTemplate);
  arrayOfMenuItems.entrees.forEach(entreesTemplate);
  arrayOfMenuItems.games.forEach(gamesTemplate);
};

function entreesTemplate (obj){
  console.log(obj)
  var html =  `
  <div class="entree">
  <div class="entree">${obj.item}</div>
    ${obj.description}
    ${obj.price}
    ${obj.style}
  </div>
`;
$(".entrees").append(html);
};


function gamesTemplate (obj){
  console.log(obj)
  var gamesHtml =  `
  <div class="my-othergamres">
  <div class="mygames">${obj.item}</div>
    ${obj.description}
    ${obj.item}
    </div>
`;
$(".games").append(gamesHtml);
};

$(window).scroll(function(){
  var top = $(window).scrollTop();
  if (top > 400){
    $('.navbar-background').addClass('black_background');
  }
  else {
    $('.navbar-background').removeClass('black_background');
  }
})

var baseURL = "https://api.flickr.com/services/rest/";

var getFoodImages = function(){
  return $.ajax({
    url: `${baseURL}/`,
    data:{
      method: 'flickr.photos.search',
      api_key: authKey,
      format: 'json',
      nojsoncallback: 1,
      tags: 'sandwiches',
      sort: 'relevance',
      content_type: 1,
      per_page: 5
    },
  }).then(function(data){
    console.log(data)
    addFoodImages(data);
  })

};

getFoodImages();

var addFoodImages = function(info){
  info.photos.photo.forEach(function(photo){
    $('.food-photos').append(`<div class="image-container">
    <img class="food" src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">
    </div>`)
  })
}
