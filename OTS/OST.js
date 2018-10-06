//Lucía Garza A01361235
//Seung Hoon Lee A01021720

//HOMEWORK 1 Order Stadistic Tree

//Global variables
var rank = [];
var value = 8; //Size of Tree

//Node structure
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

//Creating Tree with root null
function BinarySearchTree() {
  this.root = null;
}

//Insert function
BinarySearchTree.prototype.insert = function(data) {
  var node = new Node(data);
  if(!this.root) {
    this.root = node; //Si no existe el root, seteamos este como el root
  } else {
    var current = this.root; //Si no, entonces metemos nuestro nodo con el data que le pasamos
    while(current) {
      if(node.data < current.data) { //Si es menor, lo mandamos a la izquierda
        if(!current.left) { //Si no hay izquierda, entonces seteamos este como la izquierda
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) { //Si es mayor, lo mandamos al a derecha 
        if(!current.right) { //Si no hay uno a la derecha, lo mandamos a la derecha
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};

//Function to delete node
BinarySearchTree.prototype.delete = function(data) {
  var that = this; //Temporal
  var deleteNode = function(node, data) { 
    if(!node) {
      return null; //Si no hay nodo, regresamos un null (validacion)
    }
    if(data === node.data) {
      if(!node.left && !node.right) { //Si no hay nodos en la derecha o en la izquierda, regresamos un nulo
        return null;
      }
      if(!node.left) { //Si no hay nodos en la izquierda, regresamos el nodo en la derecha
        return node.right;
      }
      if(!node.right) { //si hay en la izquierda, regresamos ese
        return node.left;
      }
      // 2 children
      var temp = that.getMin(node.right); //Empezamos con los hijos
      node.data = temp;
      node.right = deleteNode(node.right, temp); //Boramos los nodos de la derecha con la temporal
      return node;
    } else if(data < node.data) { //Si es menor, borramos el de la izquierda
      node.left = deleteNode(node.left, data);
      return node;
    } else { //Si es mayor, borramos el de la derecha
      node.right = deleteNode(node.right, data);
      return node;
    }
  };
  this.root = deleteNode(this.root, data);
};

//Funcion para imprimir inOrder
BinarySearchTree.prototype._inOrder = function(node, fn) {
  if(node) {
    this._inOrder(node.right, fn);
    value--; //Keep track of rank
    if(fn) {
      fn(node);
    }
    this._inOrder(node.left, fn);
    value--; //Keep track of rank
  }
  rank.push(value); //Empujamos nuestro valor al arreglo de rank
  
};

//Funcion que llama inOrder pero al revez
BinarySearchTree.prototype.RankTop10= function(fn, method) {
  var current = this.root;
  this['_' + method](current, fn);
  
};

//Function to print tree in order 
BinarySearchTree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|'); //significa el nivel que estaremos usando (skippear de nivel)
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' '; //Imprimir un space en cada uno
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) { //Si hay un izquierdo, imprimimos el izquierdo primero
      queue.push(node.left);
    }
    if(node.right) { //Si hay una derecha, imprimimos el derecho despues
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};

//getMin value from tree
BinarySearchTree.prototype.getMin = function(node) {
  if(!node) {
    node = this.root; //Si el nodo no existe, setteamos este como el root
  }
  while(node.left) { //Si hay un nodo a la izquierda, seguimos llendo a la izquierda hasta el ultimo (logica del getMax)
    node = node.left;
  }
  return node.data;
};

//Crear Arbol
var binarySearchTree = new BinarySearchTree();

//Prints
console.log('Order Stadistic Tree')
console.log('Inserting 5, 3, 7, 2, 4, 6, 8 into Tree')
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(4);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8

//Sacar los top 10 del arbol
console.log('--- Rank Top 10');
binarySearchTree.RankTop10(function(node) { console.log(node.data); }, 'inOrder'); // => 2 3 4 5 6 7 8

//Sacar el rank 7 del arbol
console.log('----Rank of 7');
console.log(rank[7]);



console.log('-------');
console.log('--- Removing 11');
binarySearchTree.delete(11); // delete non existing node
binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8
console.log('--- Removing 5');
binarySearchTree.delete(5); // delete 5, 6 goes up
binarySearchTree.print(); // => 6 | 3 7 | 2 4 8
console.log('--- Removing 7');
binarySearchTree.delete(7); // delete 7, 8 goes up
binarySearchTree.print(); // => 6 | 3 8 | 2 4
console.log('--- Removing 8');
binarySearchTree.delete(8); // delete 8, the tree becomes unbalanced
binarySearchTree.print(); // => 6 | 3 | 2 4
console.log('--- Removing 4, 2, 3, 6');
binarySearchTree.delete(4);
binarySearchTree.delete(2);
binarySearchTree.delete(3);
binarySearchTree.delete(6);
binarySearchTree.print(); // => 'No root node found'
