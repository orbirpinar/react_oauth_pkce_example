import React, {useEffect} from "react";
import axios from 'axios';


const Logout = () => {




	
	useEffect(() => {
		axios.post("http://localhost:8100/logout",{
			headers : {
				"Authorization" : `Bearer ${localStorage.getItem('token')}`,

			}
		})
		.then(response => {
			console.log(response)
		})
	})

	return <div> logout</div>;
}


export default Logout