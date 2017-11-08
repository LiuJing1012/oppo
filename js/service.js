(()=>{
//find系列
$('.img1').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(find.css('display')=='none'){
		find.show();
		N.hide();
		R.hide();
		A.hide();
		other.hide();
		part.hide();
	}else{
		find.hide();
	}
});
//N系列
$('.img2').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(N.css('display')=='none'){
		N.show();
		find.hide();
		R.hide();
		A.hide();
		other.hide();
		part.hide();
	}else{
		N.hide();
	}
});
//R系列
$('.img3').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(R.css('display')=='none'){
		R.show();
		N.hide();
		find.hide();
		A.hide();
		other.hide();
		part.hide();
	}else{
		R.hide();
	}
});
//A系列
$('.img4').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(A.css('display')=='none'){
		A.show();
		N.hide();
		R.hide();
		find.hide();
		other.hide();
		part.hide();
	}else{
		A.hide();
	}
});
//其他系列
$('.img5').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(other.css('display')=='none'){
		other.show();
		N.hide();
		R.hide();
		A.hide();
		find.hide();
		part.hide();
	}else{
		other.hide();
	}
});
//配件
$('.img6').on('click',function(){
	var find=$('.find');
	var N=$('.N');
	var R=$('.R');
	var A=$('.A');
	var other=$('.other');
	var part=$('.part');
	if(part.css('display')=='none'){
		part.show();
		N.hide();
		R.hide();
		A.hide();
		other.hide();
		find.hide();
	}else{
		part.hide();
	}
});
//热点问题和小技巧
$('.question1').on('click',function(){
	var answer=$('.answer1');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question2').on('click',function(){
	var answer=$('.answer2');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question3').on('click',function(){
	var answer=$('.answer3');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question4').on('click',function(){
	var answer=$('.answer4');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question5').on('click',function(){
	var answer=$('.answer5');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question6').on('click',function(){
	var answer=$('.answer6');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question7').on('click',function(){
	var answer=$('.answer7');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question8').on('click',function(){
	var answer=$('.answer8');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question9').on('click',function(){
	var answer=$('.answer9');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
});
$('.question10').on('click',function(){
	var answer=$('.answer10');
	if(answer.css('display')=='none'){
		answer.show();
	}else{
		answer.hide();
	}
})

})();
