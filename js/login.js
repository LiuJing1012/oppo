//1:为登录按钮绑定点击事件
$("#bt-login").click(function(e){
    //2:阻止事件默认行为,原因:a默认行为
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val(); 
    //验证用户输入用户名或密码格式是否正确
    //正确格式->查询数据库
    //不正确格式->提示格式不正确-->不查数据库

    //用户名:字母或数字 3~8   
    var unameReg = /^[a-zA-Z0-9]{3,8}$/;
    //密码: 字母或数字 3~8
    var upwdReg = /^[a-zA-Z0-9]{3,8}$/;
    if(!unameReg.test(n) || !upwdReg.test(p)){
        $(".tip").css('display','block');
        return;
    }
    

    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success:function(data){
         if(data.code>0){
             //将用户名和用户编号保存sessionStorage
             sessionStorage.setItem("uname",n);
             sessionStorage.setItem("uid",data.uid);
             //登录成功跳转首页index.html
             location.href = "index.html";

         }else{
             $(".tip").css('display','block');//用户名或者密码不存在
         }
        },
        error:function(data){
            alert("您的网络出现故障，请检查");
        }
    });
    //data/login_do.php
    //5:接收服务器返回结果
});