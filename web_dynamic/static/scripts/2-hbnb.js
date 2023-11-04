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
