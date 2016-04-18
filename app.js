$(document).ready(function(){
	$.getJson("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li>"+value.name+"</li>");
		});
	
	});

});