// 'ident' and 'secret' should ideally be passed server-side for security purposes.
// If secureTokenRetrieval is true then you should remove these two values.
//Username eduberrueta
//Correo eduestella@hotmail.com
//contraseña berrueta

// Insecure method
/**var xirsysConnect = {
	secureTokenRetrieval : false,
	data : {
		channel : 'www.xirsys.com',
		ident : 'LeeSylvester',
		secret : '84ddc270-c62a-11e6-9f07-2507c0291f3c'
	}
};**/

var xirsysConnect = {
	secureTokenRetrieval : false,
	data : {
		domain : 'berruetabeloso',
		application : 'practicadsm',
		room : 'practicawebrtc',
		ident : 'eduberrueta',
		secret : '5a6a4490-04a1-11e7-8586-1443c74ef2b0',
		secure : 0
	}
};

// Secure method
/*var xirsysConnect = {
	secureTokenRetrieval : true,
	server : '../getToken.php',
	data : {
		domain : 'berruetabeloso',
		application : 'practicadsm',
		room : 'practicawebrtc',
		secure : 1
	}
};*/

