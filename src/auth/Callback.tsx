import React, {useEffect} from 'react';
import axios from 'axios';
import qs from "qs";


const Callback = () => {
// http://b2b-rest-api.herokuapp.com/oauth/authorize?client_id=1841c34d-b8bc-4684-8ccb-fc3d2d638e8f&code_challenge=b8_02xCP1zyxuzUYQ81JtTZ-jxSgnDKX51ZC_7eUKHM&code_challenge_method=S256&redirect_uri=http%3A%2F%2Flocalhost%3A3000/callback&response_type=code&scope=&state=IIp9zyjMXJZeJin55t5ZFK0UqdMhVk3wGdZegdwL



	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);

	let code = urlParams.get("code");
	console.log(code);


	// Eger sure bittiyse git token al sure bittigi and
	// Eger 401 hatasi alirsak git kanka yeni token al.	


	useEffect(() =>{


	const data = qs.stringify({
		'grant_type': 'authorization_code',
		'client_id': '1841c34d-b8bc-4684-8ccb-fc3d2d638e8f',
		'redirect_uri': 'http://localhost:3000/callback',
		'code_verifier': '2479f4101a5a3f45b7684c700043f7374ede576799caddf82941dc97',
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
			localStorage.setItem("token",response.data.access_token)
			localStorage.setItem("expiresIn",response.data.expires_in)
			localStorage.setItem("refreshToken",response.data.refresh_token)
			console.log(response.data)
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

export default Callback;	