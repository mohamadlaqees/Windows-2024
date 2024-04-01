const input = document.getElementById("myInput");
const errorText = document.getElementById("errorText");

if (input.value.trim() === "") {
    errorText.textContent = "Input cannot be left blank.";
} else {
    errorText.textContent = "";
}