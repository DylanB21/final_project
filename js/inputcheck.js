/*AUTHOR: Dylan
 *CREATED: 06/3/2015
 *ASSIGNMENT: Final Project
 */

"use strict";

function inputcheck() {
		var password = document.form["#password"].value;
		var retypepass = document.form["#retypepass"].value;
		if (password != retypepass) {
			alert("your passwords do not match");
			return false;
		}
}