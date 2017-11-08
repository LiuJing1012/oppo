//1:页面加载成功
$(function(){
    //2:发送AJAX请求
    $.ajax({
        type:"GET",
        url:"data/R.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
						<div class="set-img">
						<a href="#">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd style="text-align:center;margin-left:-10px;color:#393939;">
								${o.title}</dd>
								<dd>${o.introduce}</dd>
							</dl>
						</a>
					</div>
				`;
            }
            $("#R-series").html(html);
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
	$.ajax({
        type:"GET",
        url:"data/A.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
						<div class="set-img">
						<a href="#">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd style="text-align:center;margin-left:-10px;color:#393939;">
								${o.title}</dd>
								<dd>${o.introduce}</dd>
							</dl>
						</a>
					</div>
				`;
            }
            $("#A-series").html(html);
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
	$.ajax({
        type:"GET",
        url:"data/Find.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
						<div class="set-img">
						<a href="#">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd style="text-align:center;margin-left:-10px;color:#393939;">
								${o.title}</dd>
								<dd>${o.introduce}</dd>
							</dl>
						</a>
					</div>
				`;
            }
            $("#Find-series").html(html);
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });
	$.ajax({
        type:"GET",
        url:"data/N.php",
        success:function(data){ 
            var html = "";
            for(var o of data){
				html += `
						<div class="set-img">
						<a href="#">
							<dl>
								<dt>
									<img src="${o.img}" alt="">
								</dt>
								<dd style="text-align:center;margin-left:-10px;color:#393939;">
								${o.title}</dd>
								<dd>${o.introduce}</dd>
							</dl>
						</a>
					</div>
				`;
            }
            $("#N-series").html(html);
        },
        error:function(){
            alert("网络出现故障，请检查")
        }
    });

});
