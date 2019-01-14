var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("eastBtn");
var hardBtn	= document.getElementById("hardBtn");






eastBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=colorPicker();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	heading.style.backgroundColor="#232323";
	resetButton.textContent="New Colors";
	for(var i =3;i<squares.length;i++){
		squares[i].style.display="none";
	}
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=colorPicker();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	heading.style.backgroundColor="#232323";
	resetButton.textContent="New Colors";
	for(var i =3;i<squares.length;i++){
		squares[i].style.display="block";
	}
	
})

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(numSquares);
	pickedColor=colorPicker();
	colorDisplay.textContent=pickedColor;
	for(var i =0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	heading.style.backgroundColor="#232323";
	resetButton.textContent="New Colors";
	messageDisplay.textContent = "";
})
colorDisplay.textContent = pickedColor;
for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
			heading.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again";
			scored++;
			score.textContent = scored;
		}else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again";
			scored--;
			score.textContent = scored;
		}
	
	});
	}

	function changeColor(color){
		for(var i=0;i<colors.length;i++)
		{
			squares[i].style.backgroundColor=color;
		}
	}

	

	function generateRandomColors(num){
		var arr = [];
		for(var i =0;i<num;i++){
			arr.push(randomColor())
		}
		return arr;
	}

	function randomColor(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);

		return "rgb("+r+", "+g+", "+b+")";
	}

	function colorPicker(){
		var random = Math.floor(Math.random()*colors.length);
		return colors[random];
	}
