var newStatusInput = document.getElementById('novi-status');
var newStatusBtn = document.getElementById('novi-status-btn');
var statusiDiv;
var firstStatus;
var newStatus;
var newP;
var newDiv;

newStatusBtn.onclick = function(e){
	e.preventDefault();
	statusiDiv = document.getElementById('statusi');
	firstStatus = document.getElementsByClassName('status') [0];
	newStatus = document.createTextNode (newStatusInput.value);
	newDiv = document.createElement ('div');
	newDiv.classList.add ('status');
	newP = document.createElement('p');
	newP.appendChild (newStatus);
	newDiv.appendChild(newP);
	statusiDiv.insertBefore(newDiv, firstStatus);

}