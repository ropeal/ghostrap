$(function(){
	console.log("addClass");
	$("img").addClass("img-responsive");
	$("div").scroll(function(){
		$('.collapse').collapse();
		console.log("collapse after scroll.");
	});
	//Get tags
    $.get(
    	ghost.url.api('tags', {
        	limit: 'all', 
      		include: 'count.posts', 
      		order: 'count.posts DESC'
    	})
  		).done(function(data){
  	  		var $result = $('#tag-list');
  			$.each(data.tags, function (i, tag) {
    			if(tag.count.posts>0){
    				$result.append(
      					'<span><a href="/tag/' + tag.slug + '/">' + '<span class=\"label label-default\">' + tag.name + '</span>' + '<span class=\"badge\">' + tag.count.posts + '</span>' + '</a> </span>'
    				);
    			}
 			 });
  		});
})
