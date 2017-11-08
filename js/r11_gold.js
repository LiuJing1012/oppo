$(function(){
    console.log(1);
    $.ajax({
        type:"GET",
        url:"data/r11_gold.php",
        success:function(data){
            var html=""
            html =`           
                <div class="pro-big">
                    <div class="product-big"><img src="${data.bg_img1}" alt=""/></div>
                    <div class="product-big"><img src="${data.bg_img2}" alt=""/></div>
                    <div class="product-big"><img src="${data.bg_img3}" alt=""/></div>
                    <div class="product-big"><img src="${data.bg_img4}" alt=""/></div>
                    <div class="product-big"><img src="${data.bg_img5}" alt=""/></div>
                </div>
                <div class="pro-small">
                    <ul>
                        <li class="product bg"><img src="${data.sm_img1}" alt=""/></li>
                        <li class="product"><img src="${data.sm_img2}" alt=""/></li>
                        <li class="product"><img src="${data.sm_img3}" alt=""/></li>
                        <li class="product"><img src="${data.sm_img4}" alt=""/></li>
                        <li class="product"><img src="${data.sm_img5}" alt=""/></li>
                    </ul>
                </div>
            `;
            $("#pro-img").html(html);
        },
         error:function(){
            alert("网络出现故障，请检查")
        }
        
    });
//加入购物车前判断用户是否登录
var a1=$("#a1");
var a2=$("#a2");
a1.on('click',function(){
     var uid=sessionStorage.getItem("uid");
    // console.log(uid);
     if (uid == undefined) { 
        a1.attr("href", "login.html"); 
     } else { 
        a1.attr("href", "myorder.html"); 
    } 
});
a2.on('click',function(){
     var uid=sessionStorage.getItem("uid");
    // console.log(uid);
     if (uid == undefined) { 
        a2.attr("href", "login.html"); 
     } else { 
        a2.attr("href", "myorder.html"); 
    } 
});
           
});





