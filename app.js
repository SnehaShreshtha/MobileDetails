$(document).ready(function(){
	
	$.getJSON("phones.json",function(mobdata){
		
		$.each(mobdata,function(key,value){
          $('ul').append("<li class='details'data-type='"+value.name+"'>" 
          	              + "<a href='#' class='thumb-img'>"
          	              + "<img class='mob-image' src='"+value.imageUrl+"' alt='"+key+"'>"
          	              + "</a>"
          	              + "<a href='#' class='mob-name'>"
          	              + value.name
          	              + "</a>"
          	              + "<p class='mob-dec'>" +value.snippet+ "</p>"
                          + "</li>");
		});
  });

  $('.search').on('keyup','.form-input',function(){
    var current = $(this).val();
    alert(current);
    $("ul").find("[data-type='" + current + "']").toggleClass();
	});

});
