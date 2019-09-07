const URL_LOGIN = `http://localhost:3001/login`;
const URL_COUNTRIES = 'http://localhost:3001/cntryexch';

const login = async () => {
	fetch(URL_LOGIN, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'Access-Control-Request-Method': '*'
		},
		body: JSON.stringify({
			username: 'asad',
			password: '111'
		})
	})
		.then(response => response.json())
		.then(function(myJson) {
			sessionStorage.setItem('jwtToken', 'Bearer  ' + myJson.token);
		})
		.catch(error => {
			console.error(error);
		});
};

const fetchCountryInfo = async () => {
	const response = await fetch(URL_COUNTRIES, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'Access-Control-Request-Method': '*',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFzYWQiLCJlbWFpbCI6ImFzYWRAZ21haWwuY29tIn0sImlhdCI6MTU2NzYwNDUyNH0.87fAcdv03OT-hn9zuVJUwdBTGP4HeJp5R-j9836y3Lg'
		}
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data.errors);
	}
	return data;
};

export { fetchCountryInfo, login };
