var gasStation = {
    name: "Gas Interlomas",
    brand: "Shell",
    price: 19.00,
    comments: []
};

let counter = 0;

var showPrice = () => {
    if(!gasStation.price)
        return undefined
    else 
        return <p>Price: {gasStation.price}</p>;
};

const addOne = () => {
    counter++;
    render();
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if(comment){
        gasStation.comments.push(comment);
        num++;
        e.target.elements.comment.value = '';
        render();
    }
};

const deleteComment = () => {
    gasStation.comments.pop();
    //var x = document.getElementsByName("delete");
    //var id = x[0].getAttribute('id');
    //console.log(id);
    render();
};

/*const randomComment = () => {
    const randomNum = Math.floor(Math.random() * gasStation.comments.length);
    const option = gasStation.comments[randomNum];
    alert(option);
}*/

let num = 0;
const render = () => {
    const template = (
        <div>
            <h1>{gasStation.name}</h1>
            <ul>
                {(gasStation.brand && gasStation.brand == "Shell" && <li>Brand: {gasStation.brand}</li>)}
            </ul>
            {showPrice()}
            <p>Counter: {counter}</p>
            <button id="button1" className="myClass" onClick={addOne}>Add one</button>
            <h3>{gasStation.comments.length > 0 ? 'Comentarios: ' : 'Sin comentarios'}</h3>
            {(gasStation.comments && gasStation.comments.length > 0) && <ol>
                    {
                        gasStation.comments.map((comment) => {
                        return <li key={counter++}>{comment}
                        <button name="delete" id="button3" onClick={deleteComment}>x</button></li>    
                    })        
                }   
            </ol>
            }
            <form onSubmit={onFormSubmit}>
                <p>Comentario:</p>
                <input type="text" name="comment"></input>
                <button id="button2">Agregar comentario</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


const appRoot = document.getElementById('app');

render();