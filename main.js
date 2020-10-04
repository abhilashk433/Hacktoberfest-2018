var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
		document.body.style.background="#faf0ca";
	else
		document.body.style.background="#c7f9cc";
	filled=!filled;
});

