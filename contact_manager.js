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
			
	var myDateOfBirth = document.getElementById("DoB").value;
	var DoBText = "";
	var DoBHere;
	var myDoBCell = myNewRow.insertCell(2);
		for (DoBHere in myDateOfBirth) {
			DoBText += myDateOfBirth[DoBHere] + "";
		myDoBCell.innerHTML = DoBText;
			}
			
	var myNumber = document.getElementById("number").value;
	var numberText = "";
	var numberHere;
	var myNumberCell = myNewRow.insertCell(3);
		for (numberHere in myNumber) {
			numberText += myNumber[numberHere] + "";
		myNumberCell.innerHTML = numberText;
			}
			
	var myEmail = document.getElementById("email").value;
	var emailText = "";
	var emailHere;
	var myEmailCell = myNewRow.insertCell(4);
		for (emailHere in myEmail) {
			emailText += myEmail[emailHere] + "";
		myEmailCell.innerHTML = emailText;
			}
	
	/*var myRowDeleteButton = document.createElement('button');
	var myDeleteRow = ""
	var deleteHere;
	var addDeleteCell = myNewRow.insertCell(5);
	button.innerHTML = "Delete";
	button.onClick = function() {
		for (deleteHere in myRowDeleteButton) {
			myDeleteRow += myRowDeleteButton[deleteHere] + "";
			addDeleteCell.innerHTML = myDeleteRow
			}
	document.body.appendChild(button);
	}*/
}