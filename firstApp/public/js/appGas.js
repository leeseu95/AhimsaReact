'use strict';

//JSX - JavaScript XML
var showImg = false;
var appRoot = document.getElementById('app');
var counter = 0;
var gasSation = {
  name: 'Shell',
  location: 'Las Aguilas',
  price: 16.49,
  comments: []
};

var showPrice = function showPrice() {
  if (!gasSation.price) {
    return "";
  } else {
    return React.createElement(
      'p',
      null,
      gasSation.price
    );
  }
};

function eliminateComment(index) {
  return function (ev) {
    gasSation.comments.splice(index, 1);
    render();
  };
}

function printComments() {
  var printComment = gasSation.comments.map(function (c, index) {
    return React.createElement(
      'li',
      { key: index },
      c,
      ' ',
      React.createElement(
        'button',
        { className: 'btn btn-danger pull-right', key: 'b' + index, onClick: eliminateComment(index) },
        'X'
      )
    );
  });
  return printComment;
}

var onFormSubit = function onFormSubit(e) {
  e.preventDefault();
  var comment = e.target.elements.comment.value;
  if (comment) {
    gasSation.comments.push(comment);
    e.target.elements.comment.value = '';
    render();
  } else {
    alert('Something went wrong saving the comment');
  }
};

var toggleImage = function toggleImage() {
  console.log(showImg);
  if (!showImg) {
    showImg = true;
  } else {
    showImg = false;
  }
  render();
};

var addOne = function addOne() {
  counter++;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'center-block' },
      React.createElement(
        'h3',
        null,
        gasSation.name
      ),
      React.createElement(
        'ul',
        null,
        gasSation.brand && gasSation.brand == "Shell" && React.createElement(
          'li',
          null,
          'Brand: ',
          gasSation.brand
        )
      ),
      React.createElement(
        'h4',
        { className: 'text-muted' },
        gasSation.location
      ),
      ' ',
      React.createElement(
        'a',
        { className: 'btn btn-info', onClick: toggleImage },
        'Ver imagen'
      ),
      React.createElement(
        'p',
        null,
        'Counter: ',
        counter
      ),
      React.createElement(
        'button',
        { id: '12', className: 'btn btn-primary', onClick: addOne },
        'Add One'
      ),
      showImg ? React.createElement('img', { className: 'img-fluid', src: 'http://www.tecnofanatico.com/wp-content/uploads/2016/08/Google-Portada-960x623.jpg' }) : '',
      React.createElement(
        'p',
        null,
        gasSation.comments.length > 0 ? 'Comentarios: ' : 'Sin Comentarios'
      ),
      ' ',
      React.createElement(
        'ul',
        null,
        printComments()
      ),
      showPrice(),
      React.createElement(
        'form',
        { onSubmit: onFormSubit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'comment' },
            'Comentarios:'
          ),
          React.createElement('input', { type: 'text', name: 'comment', className: 'form-control' })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-success' },
          'Agregar Commentario'
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
