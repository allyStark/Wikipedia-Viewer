$("#searchButton").on("click", function(){
  
  var getString = document.getElementById('textInput').value;
  
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&rvprop=content&list=search&srsearch=" + getString +"&callback=?", function(data){

     var id = data.query.search;

     var toHTML = ""; 

     var linkString = ""; 

      for (var i = 0; i < id.length; i++){

        linkString = id[i].title.replace(/ /g,"_");

        toHTML += "<a href='https://en.wikipedia.org/wiki/" + linkString + "'>" + "<div class='animated flipInX results'><div class='title text-center animated flipInX'>" + id[i].title + "</div></br> " + id[i].snippet + "..." + "</br></br>" + "</div></a>";  

      }

    $("#myDiv").html(toHTML);  

    });
    
});