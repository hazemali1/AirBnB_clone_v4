$(document).ready(function(){
    const amny_id = {};
    $('input[type="checkbox"]').change(function(){
        const checkbox = $(this);
        if ($(this).is(':checked')){
            amny_id[checkbox.data('id')] = checkbox.data('name')
        }else{
            delete amny_id[checkbox.data('id')];
        }
    });
});
