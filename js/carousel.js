//1:页面加载成功
$(function(){
    //2:发送AJAX请求
    $.ajax({
        type:"GET",
        url:"data/carousel.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
						<div class="item">
						   <a href="${o.href}">
							<img src="${o.img}"/>
						   </a>
						</div>
				`;
            }
            $("#banner").html(html);
			$("#banner>div:first-child").addClass("active");
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
});
