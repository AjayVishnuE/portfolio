import $ from 'jquery';

$("#showOne").show()
$("#weekbutton1").addClass('current')
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});

$('input[type="radio"]').on('change', function() {
    $("#weekbutton1").removeClass('current');
    $('input[type="radio"]').closest('li.current').removeClass('current');
    $(this).closest('li').addClass('current');
});