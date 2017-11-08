$(function(){
	$.ajax({
        type:"GET",
        url:"data/storePhone.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
					<div>
						<a href="detail.html" target="_blank">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd class="dd1">${o.title}</dd>
								<dd class="dd2">${o.price}</dd>			
							</dl>
						</a>
					</div>	
				`;
            }
			
            $("#store-phone").html(html);
			
			$("#store-phone>div:lt(3)").addClass("box1");
			$("#store-phone>div:eq(3)").addClass("box2");
			$("#store-phone>div:eq(4)").addClass("box3");
			$("#store-phone>div:eq(5)").addClass("box3");
			$("#store-phone>div:eq(6)").addClass("box3");
			$("#store-phone>div:eq(7)").addClass("box4");

        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
	$.ajax({
        type:"GET",
        url:"data/storeFittings.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
					<div>
						<a href="detail.html" target="_blank">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd class="dd1">${o.title}</dd>
								<dd class="dd2">${o.price}</dd>			
							</dl>
						</a>
					</div>	
				`;
            }
			
            $("#store-fittings").html(html);
			
			$("#store-fittings>div:lt(3)").addClass("box1");
			$("#store-fittings>div:eq(3)").addClass("box2");
			$("#store-fittings>div:eq(4)").addClass("box3");
			$("#store-fittings>div:eq(5)").addClass("box3");
			$("#store-fittings>div:eq(6)").addClass("box3");
			$("#store-fittings>div:eq(7)").addClass("box4");

        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
});