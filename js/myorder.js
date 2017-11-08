$(function(){
    var title1=$("#title1");
    var title2=$("#title2");
    var title3=$("#title3");
    var title4=$("#title4");
    var title5=$("#title5");

    var order=$("#order");
    var address=$("#address");
    var coupon=$("#coupon");
    var account=$("#account");
    var shopping_cart=$("#shopping-cart");
    
    
    var title=$("#title");
    
    title1.on('click',function(){
        
        var html=title1.html();
        title.html(html);

        title1.addClass("active");
        title2.removeClass("active");
        title3.removeClass("active");
        title4.removeClass("active");
        title5.removeClass("active");
       
        if(shopping_cart.css('display')=='none'){
            shopping_cart.show();
            address.hide();
            coupon.hide();
            account.hide();
            order.hide();
        }
    });
    title2.on('click',function(){
        
        var html=title2.html();
        title.html(html);

        title2.addClass("active");
        title1.removeClass("active");
        title3.removeClass("active");
        title4.removeClass("active");
        title5.removeClass("active");
         
        
        if(account.css('display')=='none'){
            account.show();
            address.hide();
            coupon.hide();
            shopping_cart.hide();
            order.hide();
        }
    });
    title3.on('click',function(){
        
        var html=title3.html();
        title.html(html);

        title3.addClass("active");
        title1.removeClass("active");
        title2.removeClass("active");
        title4.removeClass("active");
        title5.removeClass("active");
         
        
        if(coupon.css('display')=='none'){
            coupon.show();
            address.hide();
            account.hide();
            shopping_cart.hide();
            order.hide();
        }
    });
    title4.on('click',function(){
        
        var html=title4.html();
        title.html(html);

        title4.addClass("active");
        title1.removeClass("active");
        title2.removeClass("active");
        title3.removeClass("active");
        title5.removeClass("active");
         
        
        if( address.css('display')=='none'){
             address.show();
            coupon.hide();
            account.hide();
            shopping_cart.hide();
            order.hide();
        }
    });
     title5.on('click',function(){
        
        var html=title5.html();
        title.html(html);

        title5.addClass("active");
        title1.removeClass("active");
        title2.removeClass("active");
        title3.removeClass("active");
        title4.removeClass("active");
         
        
        
             order.show();
            coupon.hide();
            account.hide();
            shopping_cart.hide();
            address.hide();
        
    });


    
});