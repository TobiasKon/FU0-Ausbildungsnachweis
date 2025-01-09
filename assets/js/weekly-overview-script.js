function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}

function toggleDisplayUsername() {
	let show = false;
	let message = document.getElementById("message");
	message.innerText = `Username: ${getCookie("username")}`;
	message.style.display = message.style.display === "none" ? "inherit" : "none";
	if (show) {
	}
}
