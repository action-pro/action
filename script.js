<script>
	jQuery(document).ready(function(){
		jQuery.getJSON('https://ipapi.co/json/',function(data){ 
			console.log(JSON.stringify(data,null,2));
			var parsed = JSON.parse(JSON.stringify(data,null,2));
			if(parsed.region_code!='CT'){
				setTimeout(function(){ alert('1')},1000); 
			}
		});
	});
</script>
