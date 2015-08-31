//get parameters from url
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


// Preview of image-upload
// API FILE html5
function mostraImagem(files){
	//Select element
	div_img = document.getElementsByClassName('field-img_post');

	//Get the position of object
	var file = files[0];
	var img = document.createElement("img");
	img.setAttribute('style','margin:20px 0 0 180px; float:left;');
	img.setAttribute('width','270');
	img.setAttribute('width','160');
	img.setAttribute('id','preview-img')
	img.file = file;

	div_img[0].appendChild(img)
	// Mostra 
	console.dir(file)
	
	// create a reader for file
	var reader = new FileReader();
	reader.onload = (function(aImg) {return function(e) {aImg.src = e.target.result;};})(img);
	reader.readAsDataURL(file);
}
