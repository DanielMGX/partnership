function calculate() {
	var name1 = document.getElementById("name1").value.trim();
	var name2 = document.getElementById("name2").value.trim();
  
	if (name1 == "" || name2 == "") {
	  alert("Please enter both names.");
	  return;
	}
  
	var loveScore = Math.floor(Math.random() * 101);
  
	var message = name1 + " and " + name2 + "'s love score is " + loveScore + "%.";
  
	if (loveScore < 10) {
	  message += " Frar kon koskhol!";
	} else if (loveScore === 100) {
	  message += " Koonesh bezar jakesho!";
	} else if (loveScore < 50) {
	  message += " Sorry, but if its low then go for his mommy's toe!";
	} else {
	  message += " Congrats, you're a perfect match!";
	}
  
	document.getElementById("result").innerHTML = message;
	document.getElementById("result").style.display = "block";
  }