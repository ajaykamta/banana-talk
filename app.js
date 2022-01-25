// button click
var translateButton = document.querySelector("#translate-button");

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector("#translate-output");

// var url = "https://api.funtranslations.com/translate/minion.json"
var url = "https://api.funtranslations.com/translate/pig-latin.json";

translateButton.addEventListener("click", function buttonClickHandler() {
    var input = translateInput.value;
    var finalURL = constructURL(input);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerHTML = json.contents.translated;
        })
        .catch(errorHandler)

})

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

function errorHandler(error) {
    console.log("unexpected error :", error);
}