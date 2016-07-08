import $ from 'jquery';
import {authKey} from './key.js';

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
