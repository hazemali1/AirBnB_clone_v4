$(document).ready(function(){
    const amny_id = {};
    $('input[type="checkbox"]').change(function(){
        if ($(this).is(':checked')){
            const checkbox = $(this);

            amny_id[checkbox.data('id')] = checkbox.data('name')
        }else{
            delete amny_id[checkbox.data('id')];
        }
    });
});
