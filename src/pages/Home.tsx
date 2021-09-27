import React, {useEffect,useState} from 'react';
import axios from 'axios';
import qs from "qs";



// http://b2b-rest-api.herokuapp.com/oauth/authorize?client_id=1841c34d-b8bc-4684-8ccb-fc3d2d638e8f&redirect_uri=http%3A%2F%2Flocalhost%3A3000/callback&response_type=code&scope=&state=IIp9zyjMXJZeJin55t5ZFK0UqdMhVk3wGdZegdwL&code_challenge=ZhMI81e42qV5vD-lOmboPX4hAoAtLFiDmexC7t9sggg&code_challenge_method=S256

const Home = () => {


	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);

	let code = urlParams.get("code");
	console.log(code);
	
	useEffect(() =>{
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const code = urlParams.get("code");
	console.log(code);

	const data = qs.stringify({
		'grant_type': 'authorization_code',
		'client_id': '1841c34d-b8bc-4684-8ccb-fc3d2d638e8f',
		'redirect_uri': 'http://localhost:3000/callback',
		'code_verifier': '029caed215cae1979f5fe79835fef435716c90c8169213527a23386c',
		'code': code
	});
		axios({
			method: 'post',
			url: 'http://localhost:8100/oauth/token',
			headers: { 
			'Content-Type': 'application/x-www-form-urlencoded'
			},
			data : data
		})
		.then(function (response) {
			console.log("hey")
		console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log("errorrrrs")
			console.log(code);
		console.log(error);
		});
	},[])


	return (
		<div> 

		</div>
	);
}

export default Home;	