var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
		document.body.style.opacity="1";
	else
	document.body.style.opacity="0.5";
	filled=!filled;
});
