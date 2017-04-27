$( document ).ready(function() {

  //lines 22-24 picks and shows the details by using parent and child element.
  $(".view-details").click(function(event){ //selects the view details click throughouth the page and then sets a function that happens when the view details buttons are clicked.
  var targetElement = event.target;
  var childDetails = $(targetElement).parent().parent().children(".details");// created variable childDetails to simplify next code.  This variable defines each individual details elements with the parent parent children command.
    if ( $(childDetails).is(":visible") === true){
       $(childDetails).hide();
  $(targetElement).text("View details"+ "	\xBB");//Commands to hide the details if they are already shown. Also adds the >> sign back in using the \xBB code.
    }
    else { $(childDetails).show();
  $(targetElement).text("Hide details"+ " \xBB");//Commands to show the details if they are hidden. Also adds the >> sign back in using the \xBB code.
    }

});
});
