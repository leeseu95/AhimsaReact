
//JSX - JavaScript XML
let showImg = false;
var appRoot = document.getElementById('app');
let counter = 0;
let gasSation = {
  name: 'Shell',
  location: 'Las Aguilas',
  price: 16.49,
  comments: []
};

const showPrice = () => {
  if (!gasSation.price) {
    return "";
  }
  else {
    return <p>{gasSation.price}</p>;
  }

};

function eliminateComment(index){
  return ev => {
    gasSation.comments.splice(index, 1);
    render();
  };
}

function printComments() {
  let printComment = gasSation.comments.map((c, index) => {
    return (
      <li key={index}>
        {c} <button className="btn btn-danger pull-right" key={'b'+ index} onClick={eliminateComment(index)}>X</button>
      </li>
    );
  });
  return printComment;
}

const onFormSubit = (e) => {
  e.preventDefault();
  const comment = e.target.elements.comment.value;
  if (comment) {
    gasSation.comments.push(comment);
    e.target.elements.comment.value = '';
    render();
  } else {
    alert('Something went wrong saving the comment');
  }
};

const toggleImage = () => {
  console.log(showImg);
  if (!showImg) {
    showImg = true;
  } else {
    showImg = false;
  }
  render();
};


const addOne = () => {
  counter++;
  render();
};

const render = () => {
  const template = (
    <div className="container">
      <div className="center-block">
        <h3>{gasSation.name}</h3>
        <ul>
          {(gasSation.brand && gasSation.brand == "Shell") && <li>Brand: {gasSation.brand}</li>}
        </ul>
        <h4 className="text-muted">{gasSation.location}</h4> <a className="btn btn-info" onClick={toggleImage}>Ver imagen</a>
        <p>Counter: {counter}</p>
        <button id="12" className="btn btn-primary" onClick={addOne}>Add One</button>
        {showImg ? <img className="img-fluid" src="http://www.tecnofanatico.com/wp-content/uploads/2016/08/Google-Portada-960x623.jpg"/> : '' }
        <p>{gasSation.comments.length > 0 ? 'Comentarios: ' : 'Sin Comentarios'}</p> <ul>{printComments()}</ul>
        {showPrice()}
        <form onSubmit={onFormSubit}>
          <div className="form-group">
            <label className="comment">Comentarios:</label>
            <input type="text" name="comment" className="form-control"></input>
          </div>
          <button type="submit" className="btn btn-success">Agregar Commentario</button>
        </form>
      </div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
