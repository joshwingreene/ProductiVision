// "When using storage.sync, the stored data will automatically be synced to any Chrome browser that the user is logged into, provided the user has sync enabled."
var storage = chrome.storage.sync
// Saved bookmarks object (Used to refer to the previously saved bookmarks object)
var saved_bookmarks = {}
// Temp bookmarks object (Used to store the newest bookmarks) (refer to line 44)
var temp_bookmarks = {}
// See if storage includes the bookmarks object
storage.get('prod_bookmarks', function(items) {
//console.log(items);
	if (items.prod_bookmarks) { // If the bookmarks object exists, obtain the previously saved bookmarks object
		saved_bookmarks = items['prod_bookmarks'];
	}
	console.log(items['prod_bookmarks']) // For debugging
});

console.log(temp_bookmarks)
console.log(saved_bookmarks)


function hideshow(ele)
	{
	if (!document.getElementById)
	return
	if (ele.style.display == "block")
	ele.style.display="none"
	else
	ele.style.display="block"
	}

function buttonclick()
	{
	para = document.createElement("P")
	document.body.appendChild(para)
	bookmark = [document.getElementById("Name").value,'http://www.' + document.getElementById("URL").value] // Added http://www.
	var link = document.createElement("A")
	var linktext = document.createTextNode(bookmark[0])
	link.appendChild(linktext)
	link.title = bookmark[0]
	link.href = bookmark[1]
	document.body.appendChild(link)
	
	// Add the newest bookmark (for storage)
	temp_bookmarks[link.title] = link.href

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
	document.getElementById("Name").value = ""
	document.getElementById("URL").value = ""
	console.log(temp_bookmarks) // For debugging
	}
	function saveIfNeeded() {
	// Only compare if there are new bookmarks
		if (Object.keys(temp_bookmarks).length != 0) {
		// Compare the save bookmarks object with the temp one
			if (JSON.stringify(saved_bookmarks) != JSON.stringify(temp_bookmarks)) { // TODO: This isn't perfect. Even if the properties and values
			// are the same, it will still be false if the properties are in the wrong order.
				console.log("objects are not equal")
				var tempKeyArray = Object.keys(temp_bookmarks)
				console.log('tempKeyArray' + tempKeyArray)
				for (var i = 0; i < tempKeyArray.length; i++) {
				saved_bookmarks[tempKeyArray[i]] = temp_bookmarks[tempKeyArray[i]] // Add / Update property in the saved bookmarks object
				}
				console.log(saved_bookmarks) // For debugging
				// Update the bookmarks object
				chrome.storage.sync.set({'prod_bookmarks': saved_bookmarks}, function() {
				alert("Saved Changes")
				});
			} else {
			console.log("objects are equal") // For debugging
			}
			} else {
			console.log("no new bookmarks")
			}
	}
// Events
document.querySelector("#add_button").addEventListener("click", buttonclick)
document.querySelector("#test_button").addEventListener("click", saveIfNeeded); // used for easy testing (instead of having to leave the page)
//document.body.addEventListener("onbeforeunload", saveIfNeeded)