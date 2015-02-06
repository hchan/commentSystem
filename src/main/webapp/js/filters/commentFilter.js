commentapp.filter('readMore',  function() {
		  return function(comment) {
			  var retval = comment.text;
			  if (retval.length > 20 && !comment.readMore) {
				  retval = retval.substring(0, 20) + '...'  + '<a href="#" ng-click="readMore(comment)">Read More</a>';
			  }
			  return retval;
		  }
});