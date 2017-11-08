$("#bt-register").click(function (e) {
    e.preventDefault();
    var m=$("#uname").val();
    var n=$("#upwd").val();
	var n2=$("#upwd1").val();
	if(!n||!m||!n2){
		alert("密码或用户名不能为空");
	}
	else if(n!==n2){
		alert("两次输入的密码不一样");
	}
	else{
		 $.ajax({
			type:"GET",
			url:"data/register.php",
			data:{uname:m,upwd:n},
			success:function(data){
				if(data.code>0){
					alert(data.msg);
					location.href = "index.html";
				}else if(data.code<0)
					alert(data.msg);
			},
			error:function(data){
				alert("您的网络出现故障，请检查");
			}
		});
	}
});