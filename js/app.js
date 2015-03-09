jQuery(document).ready(function($) {
  console.log("STARTED");
  $('.delete-button').on('click', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
    console.log($(this).parent('li'));
    $(this).parent('li').remove();
  });

  $('.add-button').on('click', function(event){
    console.log("clicked add-button");
    console.log($('.item-to-add').val());
    $('.shop-list').append('<li class="item"><input type="checkbox" id="ch_box" value="'+$('.item-to-add').val()+'"><label>'+$('.item-to-add').val()+'</label><button class="delete-button">Remove</button></li>');
    $('.item-to-add').val('');
  });
});


function add(item_name) {
  $('#shop-list').append('<li class="item"> <input type="checkbox" name="item" value="'+item_name+'"><label>'+item_name+'</label><button class="delete-button">Remove</button></li>');
}