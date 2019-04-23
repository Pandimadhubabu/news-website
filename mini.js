$(document).ready(function() {
	/*Call on load*/
	//Top stories
	makeAjaxRequest("Topstories","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");

	//NATION
	makeAjaxRequest("NATION","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//BUSINESS
	makeAjaxRequest("BUSINESS","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//POLITICS
	makeAjaxRequest("POLITICS","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//WORLD
	makeAjaxRequest("WORLD","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//TECHNOLOGY
	makeAjaxRequest("TECHNOLOGY","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//SPORTS
	makeAjaxRequest("SPORTS","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	//ENTERTAINMENT
	makeAjaxRequest("sources","https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=531913653fe54835b9f2f638cde0deca");
	
	/*AJAX Request*/
	function makeAjaxRequest(type, url, data){
	   $.ajax({
	      method: "GET",
	      url: url,
	      data: data,
	      dataType:'json',
	      success: function( response ) { 
	       if(type == "Top stories")
	       		processTopstories(response);
	       	else if(type == "NATION")
	       		processNATION(response);
	       	else if(type == "BUSINESS")
	       		processBUSINESS(response);
	       	else if(type == "POLITICS")
	       		processPOLITICS(response);
	       	else if(type == "WORLD")
	       		processWORLD(response);
	       	else if(type == "TECHNOLOGY")
	       		processTECHNOLOGY(response);
	       	else if(type == "SPORTS")
	       		processSPORTS(response);
	      },  
	      fail: function() {
	        alert('fail');
	      }   
	    });
	}

	/*Output processers*/
	function processTopstories(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.owl-carousel').append(item);

        setupCarousel();
	}

	function processNATION(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.NATION-container').append(item);
        }

        setupCarousel();
	}

	function processBUSINESS(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.BUSINESS-container').append(item);
        }

        setupCarousel();
	}

	function processPOLITICS(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.POLITICS-container').append(item);

        setupCarousel();
	}

	function processWORLD(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.WORLD-container').append(item);

        setupCarousel();
	}

	function processTECHNOLOGY(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.TECHNOLOGY-container').append(item);
        }

        setupCarousel();
	}

	function processSPORTS(response){
		 var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = " <div class='item'><div class='card z-depth-0'><img class='card-img-top' src='"+imgUrl+"'/><div class='card-body'><h4 class='card-title black-text'><a>"+response.items[i].title+"</a></h4><p class='card-text'>"+response.items[i].description+"</p><a href='"+response.items[i].url+"' class='btn btn-primary'>Read More</a></div></div</div"
        	$('.SPORTS-container').append(item);
        }

        setupCarousel();
	}


	function processENTERTAINMENT(response){
		var item = "";
        for(var i = 0; i < response.items.length; i++){
        	var imgUrl = (response.items[i].image == null) ? "https://image.shutterstock.com/image-vector/breaking-news-background-tv-channel-260nw-731436349.jpg" : response.items[i].image;
        	item = "<div class='media mb-2'><img class='d-flex mr-3 ENTERTAINMENT-news' src='"+imgUrl+"' alt='Generic placeholder image'/><div class='media-body'><h5 class='my-0 font-weight-bold'>"+response.items[i].title+"</h5><span>"+response.items[i].description+"</span><a href='"+response.items[i].url+"' target=''> Read More...</a></div></div>";
        	$('.ENTERTAINMENT-container').append(item);
     
        }
        setupCarousel();
	}


	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
});