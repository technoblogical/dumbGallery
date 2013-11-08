$('head').append('<link rel="stylesheet" type="text/css" href="dumbGallery/dumbGallery.css">');

//This is the function that builds the gallery when called.
function dumbGalleryFunction(){

	//need a string to hold the HTML of the gallery
	var dumbGallery ='';

	//Used to test if this is the first photo in the set.
	var galleryBigBoxBackground=false;
	$('p img').each(function(){

		//Gets the image URL
		var imageURL = $(this).attr('src');

		//Gets the Image title (If there is one!)
		if ($(this).attr('title')){
			var imageTitle = $(this).attr('title');
		} else {
			var imageTitle = '';
		};

		//If this is still the first image, galleryBigBoxBackground is still false
		//If it is, then this assigns it the value of the first image URL.
		// Used later to make the big box appear with the first image. Since it is now a string, it will evaluate as true next time. 
		if (!galleryBigBoxBackground) {
			galleryBigBoxBackground= $(this).attr('src');

			//Adds the big box to beginning of the string
			dumbGallery += '<div class="galleryBigBox" style="background-image:url(\''+galleryBigBoxBackground+'\')"></div>';
		};

		//This starts adding the little boxes. One for each image.
		//Makes the background image what it needs to be. Makes the title of the div what it needs to be.
		dumbGallery += '<div class="galleryLittleBox" style="background-image:url(\''+imageURL+'\')" title="'+imageTitle+'"></div>';
	});

	//These boxes are floating. We need to clear that float to preserve CSS that comes after this.
	dumbGallery +='<div style="clear:both;"></div>';

	//insert the gallery after the last image on the page.
	$('p img').last().parent().parent().after(dumbGallery);

	//hides all images in paragraphs.
	$('p img').hide();
};

//If there are more than 15 images in p tags on this page, this calls the function above.
if($('p img').length>=15) {
	dumbGalleryFunction();	
}

//This executes when you click on the little boxes
$('.galleryLittleBox').click(function(){

	//gets the background for the little box...
	var imageURL = $(this).css('background-image');

	//And changes the big box background to match.
	$('.galleryBigBox').css('background-image',imageURL);
});