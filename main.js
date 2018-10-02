function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	// if(filled)
	// 	document.body.style.background="blue";
	// else
	// 	document.body.style.background="green";
	// filled=!filled;

	document.body.style.background = getRandomColor();

	// Shorter way to set a random color
	// document.body.style.background = "#"+((1<<24)*Math.random()|0).toString(16);
});

