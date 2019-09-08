const URL_LOGIN = `http://localhost:8080/login`;
const URL_COUNTRIES = 'http://localhost:8080/cntryexch';

const login = async () => {
	const response = await fetch(URL_LOGIN, {
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
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data.errors);
	}
	sessionStorage.setItem('jwtToken', 'Bearer  ' + data.token);
	return data.token;
};

const fetchCountryInfo = async () => {
	//const jwtToken = sessionStorage.getItem('jwtToken');
	const response = await fetch(URL_COUNTRIES, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFzYWQiLCJlbWFpbCI6ImFzYWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMTEifSwiaWF0IjoxNTY3OTI2NTcyfQ.tvaUKJIcxCBclOUNtHGSBZ0OsPsQUrIm79FwCECwviY'
		}
	});
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data.errors);
	}
	return data;
};

export { fetchCountryInfo, login };
