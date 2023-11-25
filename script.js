function createTable() {
    //Write your code here
	let table = document.getElementById('myTable');
		let rows = parseInt(prompt('Input number of rows'));
	let column = parseInt(prompt('input number of columns'));
	for(let i = 0; i < rows; i++){
		let tr = document.createElement('tr');
		for(let j = 0; j < column; j++){
			let td = document.createElement('td');
			td.innerText = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
  
}
