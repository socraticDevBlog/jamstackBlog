const slugify = function(text) {
  var filteredText = text.toString().toLowerCase(); 

  // removes diactrics and accents from string
  // useful for my french blog ;)
  //
  var accentLessText = filteredText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  return accentLessText
     .replace(/\s+/g, '-') 		// Replace spaces with -
     .replace(/[^\w-]+/g, '') 	// Remove all non-word chars
     .replace(/--+/g, '-') 		// Replace multiple - with single -
     .replace(/^-+/, '') 		   // Trim - from start of text
     .replace(/-+$/, '') 		   // Trim - from end of text
 }

 module.exports = { slugify }
