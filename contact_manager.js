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
			
	var myLastName = document.getElementById("surname").value;
	var lastNameText = "";
	var lastNameHere;
	var mySurnameCell = myNewRow.insertCell(1);
		for (lastNameHere in myLastName) {
			lastNameText += myLastName[lastNameHere] + "";
		mySurnameCell.innerHTML = lastNameText;
			}
}