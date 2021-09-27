import React,{useEffect,useState} from 'react';
import api from "../API/api";


const Users = () => {

	interface IUser{
		"address":string,
		"company_name": string,
		"email": string,
		"id": number,
		"is_corporate": number,
		"mobile_phone": string,
		"name" : string,
		"phone" : string,
		"surname": string,
		"tax_number" : string,
		"tax_office" : string
	}

	const [data,setData] = useState<IUser>(Object);

	useEffect(()  => {
		api.get("/users/me")
			.then((response) => {
				console.log(response.data)
				setData(response.data.data);
			})
			.catch(error => console.error(error));
	},[])

	return (
		<div> 
			<h1> aa {data.email}</h1>
		</div>
	);


}

export default Users;	