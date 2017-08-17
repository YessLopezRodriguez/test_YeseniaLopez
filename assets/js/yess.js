$(document).ready(function(){

$('#itemslider').carousel({ interval: 3000 });

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});

$('.detail').click(function(){
    var title = $(this).parent().parent().find('a').attr("title");
    var img = $(this).parent().parent().find('img').attr("src");
    var img2 = $(this).parent().parent().find('img').attr("src");
    $('.modal-title').html(title);
    $('#img_modal1').attr('src', img);
    $('#img_modal2').attr('src', img2);

});

    $('.hover').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },

        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});




