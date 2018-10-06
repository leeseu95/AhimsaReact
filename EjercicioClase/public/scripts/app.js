"use strict";

console.log("It works!");
var display = false;
var image = {
    link: "https://images.alphacoders.com/436/436122.jpg"
};

var changeDisplay = function changeDisplay() {
    if (display == true) {
        display = false;
    } else {
        display = true;
    }
    // console.log(display);
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Visibility Toggle - Seung Hoon Lee A01021720"
        ),
        React.createElement(
            "button",
            { disabled: image.link.length == 0, onClick: changeDisplay },
            "Show Image"
        ),
        display == true && image.link && React.createElement("img", { src: image.link })
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
