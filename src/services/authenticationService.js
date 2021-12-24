import Axios from "axios";
import store from './../store';
import router from './../router';


const url="http://localhost:8080/backoffice/api/public/authenticate";

export default class AuthencationService {

	constructor() {
		
	}

	async authenticate(login, pwd, bus) {
		let credentials = {
			username: login,
			password: pwd
		}

		try {
           return  (await Axios.post(url, credentials));
		} catch(err) {
			bus.$emit("authencation-error", err);
			localStorage.removeItem('token');
			delete  Axios.defaults.headers.common['Authorization'];
			throw err ;
		}		
	}
	
	logout () {
		localStorage.removeItem('token');
		delete  Axios.defaults.headers.common['Authorization'];
		store.commit("setCurrentUserInformation", null);
		router.push({name:'HacConsole'})
	}
}