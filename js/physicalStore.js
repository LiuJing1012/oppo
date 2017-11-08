$(function(){
	$.ajax({
		type:"GET",
		url:"data/experience.php",
		success:function(data){
			var html="";
			for( o of data){
			html+=`
					<li>
						<div class="d1">
							<p>
								<span>${o.ename}</span>
							</p>
							<p>
								<a href="#">查看详情</a>
							</p>
						</div>
						<div class="d1">
							<p>${o.type}</p>
						</div>
						<div class="d3">
							<p>${o.address}</p>
						</div>
						<div class="d4"><p>${o.phone}</p></div>
					</li>
				`;
			}
			//console.log(1);
			$("#physical-store").html(html);
			$("#physical-store>li:even").addClass("bg");
		},
		error:function(){
            alert("网络出现故障，请检查");
        }


	});
});