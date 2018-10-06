console.log("It works!");
var display = false;
var image = {
    link: "https://images.alphacoders.com/436/436122.jpg"
};

const changeDisplay = () => {
    if (display == true) {
        display = false;
    } else {
        display =true;
    }
    // console.log(display);
    render();
}

const render = () => {
    const template = (
        <div>
            <h3>Visibility Toggle - Seung Hoon Lee A01021720</h3>
            <button disabled={image.link.length == 0} onClick={changeDisplay}>Show Image</button>
            {/* <img src={image.link}></img> */}
            {(display == true && image.link) &&
                <img src={image.link}></img>
            }
        </div>
    );
    ReactDOM.render(template,appRoot);
};


const appRoot = document.getElementById('app');

render();