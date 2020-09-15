function test () {
	var x = document.queryselector("#name").value;
	if(x === "Student"){
		x = "Welcome" + x + "!";
		document.queryselector("h1").textContent = x;
	}
	x = "Hello" + x +"!";
	document.queryselector("#Content").textContent = x;
}
document.queryselector("input").addEventListener("blur",test);
document.queryselector("button").addEventListener("click",test);
