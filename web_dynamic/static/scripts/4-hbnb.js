$(document).ready(function(){
    const amny_id = {};
    $('input[type="checkbox"]').change(function(){
        if ($(this).is(':checked')){
            amny_id[$(this).data('id')] = $(this).data('name')
        }else{
            delete amny_id[$(this).data('id')];
        }
				let h4 = Object.values(amny_id);
				$('.amenities h4').text(h4.join(', '));
    });
		$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});

$.ajax({ 
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    contentType: 'application/json',
    success: function (data) {
    for(let i = 0; i < data.length;i++){
      let place = data[i];
      $('.places ').text('<article><div class="title_box"><h2>'+ place.name +
      '</h2><div class="price_by_night">$'+ place.price_by_night +
      '</div></div><div class="information"><div class="max_guest">'+ place.max_guest +
      '</div><div class="number_rooms">'+ place.number_rooms +
      '</div><div class="number_bathrooms">'+ place.number_bathrooms +
      '</div></div><div class="description">'+ place.description + '</div></article>')
    }}});
$('button').click(function() {
    $.ajax({ 
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search',
        data: JSON.stringify(Object.keys(amny_id)),
        contentType: 'application/json',
        success: function (data) {
        for(let i = 0; i < data.length;i++){
          let place = data[i];
          $('.places ').text('<article><div class="title_box"><h2>'+ place.name +
          '</h2><div class="price_by_night">$'+ place.price_by_night +
          '</div></div><div class="information"><div class="max_guest">'+ place.max_guest +
          '</div><div class="number_rooms">'+ place.number_rooms +
          '</div><div class="number_bathrooms">'+ place.number_bathrooms +
          '</div></div><div class="description">'+ place.description + '</div></article>')
        }
    }
});

}); 

