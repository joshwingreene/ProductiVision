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
<!-- 12hr format -->
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