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

function itemTemplate (obj){
  console.log(obj)
  var html =  `
  <div class="beer">
    <div class="beer">${obj.item}</div>
    ${obj.abv}
    ${obj.price}
    ${obj.style}
  </div>
`;
$(".main-content").append(html);
};

function addToPage (arrayOfMenuItems) {
  arrayOfMenuItems.Beer.forEach(itemTemplate);
};
