function addHobbie() {
var input = document.createElement("input");
input.type = "text";
input.name = "hobby";
var hobbies = document.getElementById("hobbies");
hobbies.appendChild(input);

}

function submit() {
var hobbyCollection = document.getElementsByName("hobby")
var hobbyText = document.getElementById("hobbytext")
for (var i = 0; i < hobbyCollection.length; i++) {
if (hobbyCollection[i].value != "") {
hobbyText.innerHTML += hobbyCollection[i].value + "<br>";
}
}
}