//We can nest conditionals!
const input_password = document.querySelector('input')
const password_validator = (e) => {
	let password = e.target.value;
	console.log(password)
	if (password.length >= 6) {
		if (password.indexOf(' ') === -1) {
			console.log('Valid Password!');
		}
		else {
			console.log('Password is long enough, but cannot contain spaces');
		}
	}
	else {

		console.log('Password must be longer!');
	}
}

input_password.addEventListener('keyup', password_validator)

