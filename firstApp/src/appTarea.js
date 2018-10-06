//Seung Hoon Lee - A01021720
//Ejercicio de clase

var display = false;
const changeDisplay = () => {
    if (display == true) {
        display = false;
    } else {
        display =true;
    }
    // console.log(display);
    ReactDOM.render(<MyApp/>, document.getElementById('app'));
}

const alertButtonAdd = () => {
    alert("Alerta de agregar comentario");
}

const alertButtonDelete = () => {
    alert("Alerta de borrar opcion");
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if(comment){
        alert(comment + " comment agregado al arreglo");
    }
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.info.title}</h1>
                <h2>{this.props.info.subtitle}</h2>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        // console.log(this.props.opts);
        return(
            <div>
                <Option opts={this.props.opts}/>
            </div>
        )
    }
}

var counter = 0 //Counter para comenzar las opcionse que tienes
class Option extends React.Component {
    render() {
        console.log(this.props.opts);
        return(
            <div>
                <ol>
                {
                        this.props.opts.map((comment) => {
                        return (<li key={counter++}>{comment} <button onClick={alertButtonDelete}>Borrar</button> </li>);
                    })   
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="comment"></input>
                    <button id="buttonSubmit">Agregar Comentario</button>
                </form>
            </div>
        );
    }
}



class Action extends React.Component {
    render() {
        // console.log(this.props.opts);
        return (
            <div>
                <button onClick={changeDisplay}>Mostrar Comentarios</button>
                {(display == true) &&
                <Options opts={this.props.opts}/>
                }
            </div>   
        );
    }
}

class MyApp extends React.Component {
    render() {
        // console.log(this.props);
        const info = {
            title: "Ejercicio en Clase de MyApp",
            subtitle: "Mostrar las Opciones"
        };
        const opts = ["Option1", "Option2", "Option3", "Option4"]
        return (
            <div>
                <Header info={info}/>
                <Action opts={opts}/>
            </div>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('app'));