// 'ident' and 'secret' should ideally be passed server-side for security purposes.
// If secureTokenRetrieval is true then you should remove these two values.

// Insecure method
var xirsysConnect = {
	secureTokenRetrieval : false,
	data : {
		channel : 'berruetabeloso',
		ident : 'eduberru',
		secret : 'ead5c1b2-04a6-11e7-85ea-c94e017895ee'
	}
};

/*var xirsysConnect = {
	secureTokenRetrieval : false,
	data : {
		domain : 'berruetabeloso',
		application : 'practicadsm',
		room : 'practicawebrtc',
		ident : 'eduberru',
		secret : 'ead5c1b2-04a6-11e7-85ea-c94e017895ee',
		secure : 0
	}
};*/

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

