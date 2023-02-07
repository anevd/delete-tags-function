const button = document.querySelector(".button");
const stringArea = document.querySelector("#string");
const resultArea = document.querySelector(".result-area");
const input = document.querySelector(".form-input");

function deleteTags() {
	let stringWithTags = stringArea.value;
	let result = stringWithTags.replace(/<(.|\n)*?>/g, "");
	resultArea.innerHTML = result;
	input.reset();
}

button.addEventListener("click", deleteTags);
