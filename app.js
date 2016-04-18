$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<p id='mob-name'>" +value.name+ "</p>");
          $('ul').append("<p id='mob-des'>" +value.snippet+ "</p>");
          $('ul').append("<img id='mob-image' src='"+value.imageUrl+"' alt='"+key+"'>");
		});
	
	});

});