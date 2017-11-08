/*session*/
var rs=sessionStorage.getItem("uname");
var id=sessionStorage.getItem("uid");
var loginSession1=document.getElementById("loginSession1");
var loginSession2=document.getElementById("loginSession2");
//console.log(rs);
//console.log(id);
if(rs){
	loginSession2.innerHTML=`<a href="myorder.html">${rs}:欢迎您!</a>`;
	loginSession1.innerHTML=`<a href="quit.html">  退出登录</a>`;
}
