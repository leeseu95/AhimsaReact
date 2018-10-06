//Tarea 2 
//Lucía Garza A01361235
//Seung Lee A01021720

// var matrix = [
// 	[0,0,0,0,0,0,0],
// 	[0,0,0,1,1,1,0],
// 	[0,1,0,0,0,1,0],
// 	[0,0,0,1,1,1,0],
// 	[0,1,0,0,1,1,0],
// 	[0,0,0,1,0,0,0],
// 	[0,0,0,0,0,0,0],
// ];

function matrix(m, n) { //Funcion para crear nuestra matriz inicializadas en 0
	return Array.from({ //Creamos un array dentro de un array (matriz de m x n)
	  length: m
	}, () => new Array(n).fill(0));
};

myMatrix = matrix(6, 6); //Creamos nuestra matriz de 6x6 (Para que los outer edges sean 0's siemrpe)

for(i = 0; i < 6; i++) { //Funcion para llenar nuestra matriz de 1's o 0's
	for(j = 0; j < 6; j++) {
		if (i == 0 || j == 0 || i == 5 || j == 5) //Mientras que nuestra matriz no tenga orillas, llenarla de numeros aleatorias entre 0 o 1
			continue;
		if (Math.random() >= .50)
			myMatrix[i][j] = 1
	}
}

console.log("Nuestra matriz:");
for(i = 0; i < 6; i++) { //Funcion para imprimir nuestra matriz
	console.log(myMatrix[i]); //Imprimir cada nivel de arreglo
}

// var myArea = 0;

// check(1, 1, myArea);

// console.log(myArea);

// console.log("Area Final: ", area);

function check(row, col, area){
	if(col == myMatrix.length - 1 && row == myMatrix[0].length - 1)
		console.log("Area:", area); //Si llegamos al caso base (que es el ultimo lugar de la matriz)
	if(col+1<=myMatrix[0].length-1){ //Nuestro if para verificar si Hay celdas alrededor de un 1
		if(myMatrix[row][col] == 1 && (myMatrix[row-1][col]==1 || 
			myMatrix[row+1][col]==1 ||
			myMatrix[row][col-1]==1 ||
			myMatrix[row][col+1]==1 ||
			myMatrix[row-1][col-1] == 1 ||
			myMatrix[row+1][col+1] == 1 ||
			myMatrix[row-1][col+1] == 1 ||
			myMatrix[row+1][col-1] == 1)){
				area += 1; //Si, si agregamos 1 al area
			}
			else
				area += 0;
		// console.log(myMatrix[row][col]);
		check(row,col+1, area); //Volvemos a iterar la funcion otra vez
	} else if (row+1<=myMatrix[1].length-1){
			if(myMatrix[row][col] == 1 && (myMatrix[row-1][col]==1 ||  //Otra vez el if 
			myMatrix[row+1][col]==1 ||
			myMatrix[row][col-1]==1 ||
			myMatrix[row][col+1]==1 ||
			myMatrix[row-1][col-1] == 1 ||
			myMatrix[row+1][col+1] == 1 ||
			myMatrix[row-1][col+1] == 1 ||
			myMatrix[row+1][col-1] == 1)){
				area += 1; //Misma cosa
			}
			else
				area += 0;
		// console.log(myMatrix[row][col]);
		check(row+1,1, area);
	} 
}


