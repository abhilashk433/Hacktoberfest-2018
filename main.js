var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
		document.body.style.background="white";
	else
		document.body.style.background="grey";
	filled=!filled;
});
