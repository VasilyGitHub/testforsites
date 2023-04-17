"use strict";

// let answers = [];
// answers [0] = prompt("Как вас зовут?", "");
// - Всплывающее окно с вводом текста - полученные данные строка
// answers [1] = prompt("Сколько вам лет?", "");

// answers [2] = confirm("Этот сайт делает хороший человек");
// - Всплывающее окно с подтверждением - получение true/false

// document.write(answers);

const userName = prompt("Как вас зовут?", "");
const isOk = confirm(`Здравствуйте, ${userName}, добро пожаловать!`);
if(!isOk){
	alert(`Ну и идите нахуй ${userName}`);
}