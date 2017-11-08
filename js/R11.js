
window.onload=function(){
$(".tabs li").on("click",function(){
        $(this).addClass("green");
        $(this).css("color","#fff");
        $(".tabs li").not(this).each(function(){
        $(this).removeClass("green");
        $(this).css("color","##646464");
    })
});

$(".tab1").on("click",function(){
   $("#pro-imgs").css('display','block');
   $("#pro-img1").css('display','none');
});
$(".tab2").on("click",function(){
   $("#pro-imgs").css('display','none');
   $("#pro-img1").css('display','block');
});


var i=0;
var p=0;
var t=1;
$("#number").val(t);
function show(){
    $('.product-big').eq(i).fadeIn(300).siblings().fadeOut(300);
    $('.product').eq(i).addClass('bg').siblings().removeClass('bg');
}
$(function(){
    $('.product-big').eq(0).show().siblings().hide();
    //console.log($('.product-big').eq(0));
    $('.product').on('click',function(){
        
        i=$(this).index();
        show();
    });
    $('.select-service1').click(function(){
        //$(this).css('border-color','#009B72');
       if($(this).hasClass('bg')){
           $(this).removeClass('bg');
       }else{
           $(this).addClass('bg');
       }
    });
    $('.select-service2').click(function(){
        if($(this).hasClass('bg')){
            $(this).removeClass('bg');
        }else{
            $(this).addClass('bg');
            $('.select-service3').removeClass('bg');
        }
    });
    $('.select-service3').click(function(){
        if($(this).hasClass('bg')){
            $(this).removeClass('bg');
        }
        else{
            $(this).addClass('bg');
            $('.select-service2').removeClass('bg');
        }
    });
    $('.plus').click(function(){
        $("#number").val(++t);
        $('.minus').css('background','#fff');
    });
    $('.minus').click(function(){
        if(t>1){
            $("#number").val(--t);
        }else if(t==1){
            $('.minus').css('background','#ddd');
            $("#number").val(1);

        }
    });
});

}






























