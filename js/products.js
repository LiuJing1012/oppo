(()=>{
var pic1=$('.pic1');
var pic2=$('.pic2');
var pic3=$('.pic3');
var picone=$('.pic1-1');
var pictwo=$('.pic2-2');
var picthree=$('.pic3-3');

picone.mouseover(function(){
    pic1.css('transform','scale(1.1) ');
	pic1.css('transition','transform 1s ease')
});
picone.mouseout(function(){
    pic1.css('transform','scale(1) ');
    pic1.css('transition','transform 1s ease')
});

pictwo.mouseover(function(){
    pic2.css('transform','scale(1.1) ');
	pic2.css('transition','transform 1s ease')
});
pictwo.mouseout(function(){
    pic2.css('transform','scale(1) ');
    pic2.css('transition','transform 1s ease')
});



picthree.mouseover(function(){
    pic3.css('transform','scale(1.1) ');
    pic3.css('transition','transform 1s ease')
});
picthree.mouseout(function(){
    pic3.css('transform','scale(1) ');
    pic3.css('transition','transform 1s ease')
});
})();
