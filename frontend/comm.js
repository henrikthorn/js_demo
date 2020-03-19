$(document).ready(function(){
  $("#cleverButton").click(function(){
    $.get( "http://localhost:4000/newEndpoint", function( data ) {
      $( "#cleverID" ).text( data.sample );
    });
  });
});


$.get( "http://localhost:4000", function( data ) {
  $( "#cleverID" ).text( data.sample );
  alert( "Load was performed." );
});

