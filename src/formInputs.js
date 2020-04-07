const serviceFormInputs = [
	{
		name: "Service Name",
		type: "text",
		id: "serviceNameInput",
		placeholder: "",
		parameter: "servicename",
		labelText: "Service Name",
		errorMessage: "Please enter a unique service name",
		elementType: "input",
		formType: "serviceForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Password",
		type: "text",
		id: "passwordInput",
		placeholder: "",
		parameter: "password",
		labelText: "Password",
		errorMessage: "Please enter a password",
		elementType: "input",
		formType: "serviceForm",
		defaultValue: "",
		validation: ""
	},
	// {
	// 	name: "Token",
	// 	type: "text",
	// 	id: "tokenInput",
	// 	placeholder: "",
	// 	parameter: "token",
	// 	labelText: "Token",
	// 	errorMessage: "",
	// 	elementType: "input",
	// 	formType: "employeeForm",
	// 	defaultValue: "",
	// 	validation: ""
	// },
	{
		name: "Address",
		type: "text",
		id: "addressInput",
		placeholder: "Enter a web domain",
		parameter: "address",
		labelText: "Address",
		errorMessage: "Please enter a valid web address",
		elementType: "input",
		formType: "serviceForm",
		defaultValue: "",
		validation: ""
	}
];

module.exports = {
	serviceFormInputs,
}

// Add new service
// * Service unique name
// * Password
// * Token
// * IP address
/*
{
  "name": "dagpay",
  "address": "dagpayapi.azurewebsites.net",
  "token": ""
}
*/

/*
Employee form input template

name
id
type
placeholder
parameter
labelText
errorMessage
elementType

<input type="text" id="employeeId" class="formInput" name="employeeId" placeholder="Enter an integer value">

employeeId
firstName
lastName
department
experience

*/