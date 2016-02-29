
//ready handler
$(document).ready(function() {
  
// Validation object
  $('#subscribe').validate({
  
// Event handler tied to the submit button.
   submitHandler: function(form){
      form.submit(); 
    },   
    rules: {
      "your-name": {
        required: true,
        lettersonly: true,
        maxlength: 128,
        minlength: 2
      },
      "your-email": {
        required: true
      },      
      messages: {
        "your-name": "Please specify your name in letters only.",
        "your-email": "Enter a valid email address."
         }
      }
    });
  
  //limits name fields to letters only.	
	 $.validator.addMethod( "lettersonly", function( value, element ) {
		return this.optional( element ) || /^[a-z]+$/i.test( value );
	 });
  
  // Bootstrap tooltips
   $('label span.glyphicon').tooltip();
  
  
  
});
