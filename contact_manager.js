window.onload = myForm;
var myForm = [];
function mySubmit() {
	
	var myDetails = document.getElementById("contactManagerTable");
	var myNewRow = myDetails.insertRow(-1);
	
	var myFirstName = document.getElementById("fName").value;
	var firstNameText = "";
	var firstNameHere;
	var myNameCell = myNewRow.insertCell(0);
		for (firstNameHere in myFirstName) {
			firstNameText += myFirstName[firstNameHere] + "";
		myNameCell.innerHTML = firstNameText;
			}
}