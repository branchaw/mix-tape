
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
	
  /*  $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit').attr('disabled', 'disabled'); 
        } else {
            $('#submit').removeAttr('disabled'); 
        }
    }); */
  
  // Bootstrap tooltips
   $('label span.glyphicon').tooltip();
  
	//alert tied to submit button click.
  $('#submit').on('click', function() {
     $('#success').show();
       });

	
});
