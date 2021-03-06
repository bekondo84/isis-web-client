import Axios from 'axios';
import { eventBus } from './../main';

const url = "http://localhost:8080/ext-backoffice/core";
const boextension = "ext-backoffice";
	
export default class IsisCoreService {
	
	
	constructor() {
        
	}

	async getUserByUsername(username) {
		let predicats = [
			{field:'code', value:username, 'operator':'=='}
		];
		return (await Axios.get(url+'/employee', {'headers':{restrictions:JSON.stringify(predicats)}})).data;
	}

	async getSystemInformations(search, paginationData) {
		let url ="http://localhost:8080/"+boextension+"/configurations/system";
		return await this.getRequest(url, search, paginationData);
	}

	async getEnvironmentProperties(search, paginationData) {
        let url ="http://localhost:8080/"+boextension+"/configurations/environment";
		return await this.getRequest(url, search, paginationData);
	}

	async getCronJob(search, paginationData) {
		let url ="http://localhost:8080/"+boextension+"/cronjob";
		return await this.getRequest(url, search, paginationData);
	}
   
	async getMetaTypeForPk(primaryKey) {
		let url = "http://localhost:8080/"+boextension+"/core/meta/analyze/"+primaryKey;
		return await this.getRequest(url, null, null);
	}

	async getExtensionData(extname) {
		let url = "http://localhost:8080/"+boextension+"/module/load/"+extname;
		return await this.getRequest(url, null, null)
	}
	
	async executeScript(scriptData) {
	   //scriptData.script = scriptData.script.replace(/[\n\r]+/g, '').replace(/\s{2, 10}/g, ' ');
	   let url = "http://localhost:8080/"+boextension+"/script";
	   console.log('script Data : '+JSON.stringify(scriptData));
	   return await this.postRequest(url, scriptData);
	}


	async getMetaData(extname, typeCode, scope, lang, template) {
      let url = "http://localhost:8080/"+extname+"/core/meta/"+scope+"/"+typeCode;

	  let query = "" ;
	  if (lang != null && lang != '') {
		  query = query+"?lang="+lang;
	  }
	  if (template != null && template != '') {
            if (query == '') {
				query+= "?template="+template;
			} else {
				query+="&template="+template
			} 
	  }
	  return await this.getRequest(url+query, null, null);
	}

	async getDatas(path, search, pagination) {
		let url ="http://localhost:8080/"+path ;
		return await this.getRequest(url, search, pagination);
	}

	async postRequest(url, request) {    
		eventBus.$emit('loading-activate', true);
		let data = (await Axios.post(url, request)).data
		eventBus.$emit('loading-activate', false);
		return data ;
	}

	async getRequest(url, search, paginationData) {
        eventBus.$emit('loading-activate', true);
        let predicats = new Array();
		let headers= {};
		
		if (search != null) {
			predicats.push({field: 'key', value:search, operator:'=='});
			headers.restrictions = JSON.stringify(predicats);
		} 

		if ( paginationData != null ) {
			let max = paginationData.pageSize ;
			let start = paginationData.pageSize > 0 ? (paginationData.page - 1) * paginationData.pageSize : 0;
			
			let data = (await Axios.get(url+"?max="+max+"&start="+start, {'headers':headers})).data;
			paginationData.itemsCount = data.itemsCount;
			eventBus.$emit('update-pagination', paginationData);
			eventBus.$emit('loading-activate', false);
			//eventBus.$emit('loading-activate', false);
			return data ;
		}
		let data = (await Axios.get(url, {'headers':headers})).data;
		eventBus.$emit('loading-activate', false);
		return data ;
	}

   getToken() {
		   let token = localStorage.getItem('token');

          if (token == null) {
			  return null;
		  }
          return token ;
	   }
}