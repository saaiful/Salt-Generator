function makeHash(set,length){
    var text = "";
    var charSet = [];
    charSet[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    charSet[1] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~@#$%^&*()_+=-,.>/?';:[{]}|`";
    charSet[2] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSet[3] = "abcdefghijklmnopqrstuvwxyz";
    charSet[4] = "0123456789";
    set = charSet[set];
    for( var i=0; i < length; i++ ){
        text += set.charAt(Math.floor(Math.random() * set.length));
    }
    return text;   
}

function HashGenerator(){
	jQuery("#hash").html("");
	for (var i = 0; i < document.quantity; i++) {
		jQuery( "#hash" ).append( "<pre>" + makeHash(document.set ,document.length) + "</pre>" );
	}
}

document.set = 0;
document.length = 32;
document.quantity = 5;

jQuery(".set").on('click',function(){
	document.set = jQuery(this).index();
	HashGenerator();
});

jQuery(".size").on('click',function(){
	document.length = parseInt(jQuery(this).text());
	HashGenerator();
});

jQuery(".quantity").on('click',function(){
	document.quantity = parseInt(jQuery(this).text());
	HashGenerator();
});

HashGenerator();
