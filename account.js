login = function() {
	localStorage.setItem("loggedin", true);
}

logout = function() {
	localStorage.setItem("loggedin", false);
}

isLoggedIn = function() {
	return localStorage.getItem("loggedin") || false;
}

window.addEventListener("load", function() {
	const loginItem = document.getElementById("login-item");
	const profile = document.getElementById("profile-item");
	const loginButton = document.getElementById("login-button");
	const logoutButton = document.getElementById("logout-button");

	if (isLoggedIn()) {
		loginItem.style.display = "none";
	} else {
		profile.style.display = "none";
	}

	loginButton.addEventListener("click", function() {
		login();
		loginItem.style.display = "none";
		profile.style.display = "inline-block";
	});
	logoutButton.addEventListener("click", function() {
		logout();
		loginItem.style.display = "inline-block";
		profile.style.display = "none";
	});
});