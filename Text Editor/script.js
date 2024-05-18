
// var text = document.getElementById("text");
// // var boldFlag = false

// var bold = document.getElementById("bold").addEventListener("click", function() {
//     // boldFlag = true
//     text.style.fontWeight = "bold";
// });

// var italic = document.querySelector("#italic").addEventListener("click", function(){
// text.style.fontStyle = "italic"
// })

// let underLine = document.querySelector("#underline").addEventListener("click", function(){
//     text.style.textDecoration = "underline"
// })

document.addEventListener('DOMContentLoaded', () => {
    var textElement = document.getElementById("text");
    var boldFlag = false;
    var italicFlag = false;
    var underlineFlag = false;

    var bold = document.getElementById("bold").addEventListener("click", function() {
        boldFlag = !boldFlag;
        textElement.style.fontWeight = boldFlag ? "bold" : "normal";
    });

    var italic = document.querySelector("#italic").addEventListener("click", function(){
        italicFlag = !italicFlag;
        textElement.style.fontStyle = italicFlag ? "italic" : "normal";
    });

    var underLine = document.querySelector("#underline").addEventListener("click", function(){
        underlineFlag = !underlineFlag;
        textElement.style.textDecoration = underlineFlag ? "underline" : "none";
    });

    var colorSelect = document.getElementById("colors");
    var fontSelect = document.getElementById("fonts");

    colorSelect.addEventListener("change", function() {
        var selectedColor = colorSelect.value;
        textElement.style.color = selectedColor;
    });

    fontSelect.addEventListener("change", function() {
        var selectedFont = fontSelect.value;
        textElement.style.fontFamily = selectedFont;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    var textElement = document.getElementById("text");
    var saveButton = document.getElementById("saveBtn");

    function saveTextAsFile() {
        var textToSave = textElement.value;
        var blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
        var fileName = prompt("Enter file name:", "myTextFile.txt");

        if (fileName != null) {
            saveAs(blob, fileName);
        }
    }

    saveButton.addEventListener("click", saveTextAsFile);
});
