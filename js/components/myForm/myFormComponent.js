'use strict';
angular.module("myForm").component("myForm", {
	templateUrl: "js/components/myForm/myFormTemplate.html",
	controller: function myFormController() {

	//this.firstname = "name"
	//this.lastname = "name"
	//this.email = "name"
	this.mytable = [];
	
	this.add = () => {

		let newrow = { firstname: this.firstname, lastname: this.lastname, email: this.email};

		this.mytable.push(newrow);
	};

}
});



