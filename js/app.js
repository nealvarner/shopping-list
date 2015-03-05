jQuery(document).ready(function($) {
  console.log("STARTED")
  $('.delete-button').on('click', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
    delete_item();
  });

});

function delete_item() {
  console.log("delete func called")
  $(this).parent('li').remove()
}

function add(item_name) {
  $('#shop-list').append('<li class="item"> <input type="checkbox" name="item" value="'+item_name+'">'+item_name+'<button class="delete-button">Remove</button></li>')
}