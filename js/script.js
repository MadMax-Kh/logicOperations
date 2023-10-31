let message = prompt("Кто там?", '');
if (message === null || message === '') {
	alert("Отменено");
} else if (message == "Админ") {
	let password = prompt("Пароль?")
	if (password === null || password === '') {
		alert("Отменено");
	}
	else if (password == "Главный") {
		alert("Здравствуйте!");
	} else {
		alert("Неверный пароль");
	}
} else {
	alert("Я вас не знаю");
}






// let message = prompt("Кто там?", '');
// if (message === null || '') {
// 	alert("Отменено");
// } else if (message == "Админ") {
// 	prompt("Пароль?");
// } else {
// 	alert("Я вас не знаю");
// }





// message = prompt("Пароль?", '');
// if (message === null || '') {
// 	alert("Отменено");
// } else if (message == "Я Главный") {
// 	alert("Здравствуйте!");
// } else {
// 	alert("Неверный пароль");
// }


