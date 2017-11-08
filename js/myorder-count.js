$(function(){
  // 数量的加减，伴随小计的变化
  var t=1;
  $(".add").click(function(){
    t++;
    $(".num").html(t);
    var price=parseFloat($("#price").html());
    var total=(price*t).toFixed(2);
    $("#subtotal").html(total);
  });
  $(".subtract").click(function(){
    if(t>1){
      t--;
      $(".num").html(t);
      var price=parseFloat($("#price").html());
      var total=(price*t).toFixed(2);
       $("#subtotal").html(total);  
    }else if(t==1){
    $(".num").html(1);
    }
  }); 
  //实现全选的复选框的功能
  
  var checkAll=$(".shopping-cart-nav input");
  $(".shopping-cart-nav input").click(function(){
    var inputs=$(".product-img input");
    for(var input of inputs){
      input.checked=this.checked;
    }
  });

  var inputs=$(".product-img input");
  for(var input of inputs){
    input.click(function(){
      if(!this.checked){
        checkAll.checked=false;
      }else{
        var unchb=$(".product-img input:not(:checked)");
        if(unchb){
          checkAll.checked=false;
        }else{
           chbAll.checked=true;
        }
      }
    })
  }

  
})
