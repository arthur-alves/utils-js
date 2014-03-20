//retorna as variáveis da url
function requestVars(){	
	var params = window.location.search
	if (params){
		var url_params = params.replace('?','').split('&');
		var requests = {};
		for(i in url_params){
			var chave = url_params[i].split('=');
			requests[chave[0]] =  chave[1];
		}
		return requests;	
	}else{
		return false;
	};
};