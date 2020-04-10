const serviceFormInputs = [
	{
		name: "Service Name",
		type: "text",
		id: "serviceNameInput",
		placeholder: "",
		parameter: "name",
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

const configurationFormInputs = [
	{
		name: "Requesting Service Name",
		type: "text",
		id: "reqServiceNameInput",
		placeholder: "",
		parameter: "reqServiceName",
		labelText: "Requesting Service Name",
		errorMessage: "Please enter a requesting service name",
		elementType: "select",
		formType: "configForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Responding Service Name",
		type: "text",
		id: "resServiceNameInput",
		placeholder: "",
		parameter: "resServiceName",
		labelText: "Responding Service Name",
		errorMessage: "Please enter a responding service name",
		elementType: "select",
		formType: "configForm",
		defaultValue: "",
		validation: ""
	},
	{
		name: "Custom Configuration",
		type: "text",
		id: "customConfig",
		placeholder: "",
		parameter: "configuration",
		labelText: "Custom Configuration",
		errorMessage: "Please a valid configuration",
		elementType: "textArea",
		formType: "configForm",
		defaultValue: "",
		validation: ""
	},
];

module.exports = {
	serviceFormInputs,
	configurationFormInputs,
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