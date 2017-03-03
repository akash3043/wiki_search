$(function() {

  var wikiSearch;
  
  $("#wikiInput").keyup(function(event){
    
    if(event.which==13){
      
      $("#submitButton").click();
    }
  });
  
  
  /*$("#form").submit(function() {
    search($("#wikiInput").get(0));
    return false;
});*/
  
 

  
  $("#submitButton").click(clickButton);

  function clickButton() {

    if ((".list").length) {

      $(".list").remove();

    }

    var inputResult = $("#wikiInput").val();

    if (inputResult != null || inputResult != "") {
      var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + inputResult + "&callback=?";

      console.log(wikiURL);

      $.getJSON(wikiURL, function(data) {

        //console.log(data);

        wikiSearch = data.query.search;
        //console.log(wikiSearch.length);
        createDiv();
      });

    }

  }

  function createDiv() {
    console.log("hi");

    for (var i = 0; i < wikiSearch.length; i++) {

      $('<div />').addClass("container list").attr("id", "wikiDiv" + i).appendTo("#main");
      $('<a />').attr(

        {

          id: "wikiA" + i,

          href: "https://en.wikipedia.org/wiki/" + wikiSearch[i].title,
          target: "_blank"

        }

      ).appendTo("#wikiDiv" + i);

      $('<h3 />').html(wikiSearch[i].title).appendTo("#wikiA" + i);

      $('<p />').html(wikiSearch[i].snippet).appendTo("#wikiA" + i);

    }

  }

})