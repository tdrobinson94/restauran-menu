import $ from "jquery";
import {authKey} from './key.js';

var menuItems = function(){
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/3",
    dataType: 'json',
  }).then(function(data){
    console.log(data);
    addToPage(data)
    $('.menu').click(function(){
      $('.dropdown-content').html(`<div></div>`)
    })
    $('.reservations').on('click', function(){
      $('.dropdown-content').html(`
        <div class="reservations-container">
          <form class="form">
            <h3>Full Name</h3>
              <input type="text">
              <br>
            <h3>Number of Guests</h3>
              <input type="text">
              <br>
            <h3>Date</h3>
              <input type="text">
              <br>
            <h3>Special Notes</h3>
              <textarea></textarea>
            <h3>Seating Preference</h3>
              <select>
                <option value="">
                  Indoor
                </option>
                <option value="">
                  Outdoor
                </option>
              </select>
              <br>
              <button class="reserve-table">
                Reserve Table
              </button>
          </form>
        </div>
        `)
        $('.reserve-table').on('click', function(event){
          event.preventDefault();
        })
    })
    $('.story').on('click', function(){
      $('.dropdown-content').html(`
        <div class="story-container">
          <p>
            A friendly Irish neighborhood pub located in the heart of The Whiskey Bar and only 3 short blocks from the world famous Central Park, the Theater District and Times Square. This triple decor of fun boasts 22 HDTV's, internet jukebox and top of the line sound system for customers' enjoyment located throughout the first and second floor bar and restaurants.
            <img src="images/our-story.JPG">
            We feature all the local, national and international sporting events here. Located on our third floor is our Symphony Room, a great place for parties, special events and social get together. Serving lunch and dinner daily, we've got something to suit all our customers' needs.
          </p>
        </div>
        `)
    })
  })

};
menuItems();

function addToPage (arrayOfMenuItems) {
  arrayOfMenuItems.Beer.forEach(beerTemplate);
  arrayOfMenuItems.entrees.forEach(entreesTemplate);
  arrayOfMenuItems.games.forEach(gamesTemplate);
};

function beerTemplate (obj){
  var html =  `
  <div>
    ${obj.item}
    ${obj.abv}
    ${obj.price}
    ${obj.style}
  </div>
`;
$(".beer").append(html);
};

function entreesTemplate (obj){
  var html =  `
  <div class="entree">
    ${obj.item}
    ${obj.description}
    ${obj.price}
    ${obj.style}
  </div>
`;
$(".entrees").append(html);
};

function gamesTemplate (obj){
  var gamesHtml =  `
  <div class="my-othergamres">
    ${obj.item}
    ${obj.description}
    ${obj.item}
    </div>
`;
$(".games").append(gamesHtml);
};

$(".logo").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});
$(".m").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 850
    }, 1500);
    $('.dropdown-content').html(`
      <div>
      </div>
      `)
});
$(".h").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});
$(".r").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 850
    }, 1500);
    $('.dropdown-content').html(`
      <div class="reservations-container">
        <form class="form">
          <h3>Full Name</h3>
            <input type="text">
            <br>
          <h3>Number of Guests</h3>
            <input type="text">
            <br>
          <h3>Date</h3>
            <input type="text">
            <br>
          <h3>Special Notes</h3>
            <textarea></textarea>
          <h3>Seating Preference</h3>
            <select>
              <option value="">
                Indoor
              </option>
              <option value="">
                Outdoor
              </option>
            </select>
            <br>
            <button class="reserve-table">
              Reserve Table
            </button>
        </form>
      </div>
      `)
      $('.reserve-table').on('click', function(event){
        event.preventDefault();
      })
});
$(".s").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 850
    }, 1500);
    $('.dropdown-content').html(`
      <div class="story-container">
        <p>
          A friendly Irish neighborhood pub located in the heart of The Whiskey Bar and only 3 short blocks from the world famous Central Park, the Theater District and Times Square. This triple decor of fun boasts 22 HDTV's, internet jukebox and top of the line sound system for customers' enjoyment located throughout the first and second floor bar and restaurants.
          <img src="images/our-story.JPG">
          We feature all the local, national and international sporting events here. Located on our third floor is our Symphony Room, a great place for parties, special events and social get together. Serving lunch and dinner daily, we've got something to suit all our customers' needs.
        </p>
      </div>
      `)
});
$(".scrollTopButton").click(function(event) {
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});
$(window).scroll(function(){
  var top = $(window).scrollTop();
  if (top > 400){
    $('.navbar-background').addClass('black_background');
  }
  else {
    $('.navbar-background').removeClass('black_background');
  }
})

// $(window).scroll(function(){
//   var top = $(window).scrollTop();
//   if (top > 780){
//     $('.navbar-content').addClass('navbar-invisible');
//   }
//   else {
//     $('.navbar-content').removeClass('navbar-invisible');
//   }
// })

// $(window).scroll(function(){
//   var top = $(window).scrollTop();
//   if (top > 780){
//     $('.navbar-background').addClass('navbar-invisible');
//   }
//   else {
//     $('.navbar-background').removeClass('navbar-invisible');
//   }
// })

// $(window).scroll(function(){
//   var top = $(window).scrollTop();
//   if (top > 800){
//     $('.scrollTopButton').addClass('show');
//   }
//   else {
//     $('.scrollTopButton').removeClass('show');
//   }
// })

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
