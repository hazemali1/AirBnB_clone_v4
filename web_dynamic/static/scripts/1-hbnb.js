$(document).ready(function(){
    const amny_id = {};
    $('input[type="checkbox"]').change(function(){
        if ($(this).is(':checked')){
            amny_id[$(this).data('id')] = $(this).data('name')
        }else{
            delete amny_id[$(this).data('id')];
        }
				$('.amenities h4').text("helooooooooooooooooo");
    });
});
