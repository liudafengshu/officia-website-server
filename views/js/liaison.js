(function($){
$('.checkbox').click(function(e){
    e.target.children[0].checked = !e.target.children[0].checked
})    

    })(jQuery);