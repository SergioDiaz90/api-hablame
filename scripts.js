const url = 'https://jsonplaceholder.typicode.com/comments';
const btnSearch = document.querySelector("#btn-search");


btnSearch.addEventListener('click', () => {
	let textSearch = document.querySelector('#search');
	fetch(url)
	.then( rta => rta.json())
	.then ( result => seeData(result, textSearch.value)) 
	.catch ( err => {
		console.log('err');
	});
	// seeData(textSearch.value);

});

function seeData(result, email) {
	result.forEach(element => {
		let emailFind = element.email; 
		if(emailFind.indexOf(email) >= 0) {
			const container = document.querySelector('#text');
			// const text = `
			// 	<h2>${element.name}</h2>
			// 	<p>${element.body}</p>
			// `
			const text2 = document.createElement('h2');
			const frase = document.createElement('p');
			text2.textContent = element.name;
			frase.textContent = element.body;
			container.append(text2);
			container.append(frase);
			// console.log('entre aqui');
		} 
	});
}