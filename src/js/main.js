import $ from "jquery";


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
