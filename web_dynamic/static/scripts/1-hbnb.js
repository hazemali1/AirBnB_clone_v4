$(document).ready(function(){
    const amny_id = {};
    $('input[type="checkbox"]').change(function(){
        if ($(this).is(':checked')){
            amny_id[$(this).data('data-id')] = $(this).data('data-name')
        }else{
            delete amny_id[$(this).data('data-id')];
        }
    });
});
