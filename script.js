jQuery(document).ready(function(){
	jQuery.getJSON('https://ipapi.co/json/',function(data){ 
		console.log(JSON.stringify(data,null,2));
		var parsed = JSON.parse(JSON.stringify(data,null,2));
		if(parsed.country!='US'){
			setTimeout(function(){window.location.replace(location.host);},1000); 
		}
	});
});
