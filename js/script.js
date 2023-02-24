function salvar() {
	
	let name = document.querySelector('#name');
	let email = document.querySelector('#email');
	let city = document.querySelector('#city');

	let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

	listaUser.push({
		name: name.value,
		email: email.value,
		city: city.value
	});

	try {
		localStorage.setItem('listaUser', JSON.stringify(listaUser));
		console.log('Data saved successfully');

	} catch (error) {
		console.error('Error saving data:', error);
	}
}
