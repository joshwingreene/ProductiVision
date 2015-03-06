// Clock function

function startTime() {
	var today = new Date();
	var h1 = today.getHours();
	var h2 = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h1 = twelveClock(h1);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("time12").innerHTML = h1+":"+m+":"+s;
	document.getElementById("time24").innerHTML = h2+":"+m+":"+s;
	var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
	if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
}
// <!-- 12hr format -->
function twelveClock(i) {
	if (i>12) {i = i-12};
	  return i;
}
// function changeTime(){
//     var txt1 = document.getElementById("txt1");
//     var txt2 = document.getElementById("txt2");
//     txt.ondblclick = txtDblClick();
//     function txtDblClick () { 
//     }
// }



// Returns of the day of the week
function getDayOfWeek() {
		var daytoday = new Date();
		var day = daytoday.getDay();
		day = setDay(day);
		document.getElementById("day_of_week").innerHTML = "Today is " + day;
}
function setDay(i) {
	if (i==1) {
		i = "Monday";
		return i;
	}
	else if (i==2) {
		i = "Tuesday" + i;
		return i;
	}
	else if (i==3) {
		i = "Wednesday";
		return i;
	}
	else if (i==4) {
		i = "Thursday";
		return i;
	}
	else if (i==5) {
		i = "Friday";
		return i;
	}
	else if (i==6) {
		i = "Saturday";
		return i;
	}
	else if (i==0) {
		i = "Sunday";
		return i;
	}
}


// Returns Date
function getDate() {
	var today = new Date();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getFullYear();
	month = setMonth(month);
	document.getElementById("today_date").innerHTML = "The date is " + month + " " + date + ", " + year;
}
function setMonth(i) {
	if (i==0) {
		i = "January";
		return i;
	}
	else if (i==1) {
		i = "February";
		return i;
	}
	else if (i==2) {
		i = "March";
		return i;
	}
	else if (i==3) {
		i = "April";
		return i;
	}
	else if (i==4) {
		i = "May";
		return i;
	}
	else if (i==5) {
		i = "June";
		return i;
	}
	else if (i==6) {
		i = "July";
		return i;
	}
	else if (i==7) {
		i = "August";
		return i;
	}
	else if (i==8) {
		i = "September";
		return i;
	}
	else if (i==9) {
		i = "October";
		return i;
	}
	else if (i==10) {
		i = "November";
		return i;
	}
	else if (i==11) {
		i = "December";
		return i;
	}
}

// Call startTime() when elements with the background class load (the body tag)
document.querySelector(".background").addEventListener("onload", startTime());

// BOOKMARK V1.1
function hideshow(ele)
	{
	if (!document.getElementById)
	return
	if (ele.style.display == "block")
	ele.style.display="none"
	else
	ele.style.display="block"
	}
	
var add = document.createElement("BUTTON")
// var button_text = document.createTextNode("ADD")
add.appendChild(button_text)
document.body.appendChild(add)

add.onclick=function()
	{
	para = document.createElement("P")
	document.body.appendChild(para)
	bookmark = [document.getElementById("Name").value,document.getElementById("URL").value]
	var link = document.createElement("A")
	var linktext = document.createTextNode(bookmark[0])
	link.appendChild(linktext)
	link.title = bookmark[0]
	link.href = bookmark[1]
	document.body.appendChild(link) 
	
	var remove = document.createElement("BUTTON")
	var button_text = document.createTextNode("REMOVE")
	remove.appendChild(button_text)
	document.body.appendChild(remove)
	remove.style.visibility = "hidden"
	
	remove.onclick = function()
		{
		document.body.removeChild(link)
		document.body.removeChild(remove)
		}
	
	link.onmouseover = function()
		{
		remove.style.visibility = "visible"
		}
	link.onmouseout = function()
		{
		setTimeout(function(){remove.style.visibility = "hidden"},1000)
		}
	}


// Tasklist
function entertask(){
	task = document.getElementById("task").value
	taskNode = document.createTextNode(task)

	if (task == ""){
		return;
		}

	para = document.createElement("P")
	document.body.appendChild(para)

	var check = document.createElement("input")
	check.type = "checkbox"
	document.body.appendChild(check)
	document.body.appendChild(taskNode)






	document.getElementById("task").value = ""
}
