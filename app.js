$(document).ready(function() {

$(".btn").on("click", function() {
    //Grabbing and storing the data-animal property value from the button
    console.log("You clicked a button");
    var soccer = $(this).attr("data-name");
    console.log(soccer);

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    encodeURI(soccer) + "&api_key=oT6KWeS25ASDFkYx6BUILVh5PhhKOIMG";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

            // After the data comes back from the API
            .then(function(response) {
                // Storing an array of results in the results variable
                var results = response.data;
      
                // Looping over every result item
                for (var i = 0; i < 10; i++)   {
      
                  // Only taking action if the photo has an appropriate rating
                  if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item'>");
      
                    // Storing the result item's rating
                    var rating = results[i].rating;
      
                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);
      
                    // Creating an image tag
                    var soccerImage = $("<img>");
      
                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    soccerImage.attr("src", results[i].images.fixed_height.url);
                    

                    //adding attributes for the still version of a gif and the animated version of the gif.
                    soccerImage.attr("data-still", results[i].images.fixed_height_still.url)
                    soccerImage.attr("data-animate", results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(soccerImage);
      
                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#soccerStuff").prepend(gifDiv);
                  }

                    $("img").on("click", function() {
                    var state = $(this).attr("data-state");
                    console.log("hello", this, i);
                    if (state === "still"){
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state","data-animate");
                
                      }
                      else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state","data-still");
                          
                      }
                    });
                };
            });
    });

var soccerNew = [];

    $("#addSoccer").on("click", function() {
        var soccerButton = $("#soccer-input").val();
        console.log("You clicked a button");
        //Taking the value inputted by the user to create a new button following the same formatting as the index file.
        var newSoccerButton = $("<button>").addClass("btn btn-info soccer").attr('data-name', soccerButton).html(soccerButton);

        $("#soccerButtons").append(newSoccerButton);

        //Grabbing and storing the data-animal property value from the button
        //console.log("You clicked a button");
        //var soccerNew = $(this).attr("data-name");
        //console.log(soccerNew);
    
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        encodeURI(soccerButton) + "&api_key=oT6KWeS25ASDFkYx6BUILVh5PhhKOIMG";
    
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
    
                // After the data comes back from the API
                .then(function(response) {
                    // Storing an array of results in the results variable
                    var results = response.data;
          
                    // Looping over every result item
                    for (var i = 0; i < 10; i++)   {
          
                      // Only taking action if the photo has an appropriate rating
                      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        // Creating a div with the class "item"
                        var gifDiv = $("<div class='item'>");
          
                        // Storing the result item's rating
                        var rating = results[i].rating;
          
                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Rating: " + rating);
          
                        // Creating an image tag
                        var soccerImage = $("<img>");
          
                        // Giving the image tag an src attribute of a proprty pulled off the
                        // result item
                        soccerImage.attr("src", results[i].images.fixed_height.url);
                        
    
                        //adding attributes for the still version of a gif and the animated version of the gif.
                        soccerImage.attr("data-still", results[i].images.fixed_height_still.url)
                        soccerImage.attr("data-animate", results[i].images.fixed_height.url)
                        .attr('data-state', 'still');
                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(soccerImage);
          
                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#soccerStuff").prepend(gifDiv);
                      }
    
                        $("img").on("click", function() {
                        var state = $(this).attr("data-state");
                        console.log(this);
                        if (state === "still"){
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state","data-animate");
                    
                          }
                          else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state","data-still");
                              
                          }
                        });
                    };
                });

                $("#soccer-input").val("");
                return false;
        });



});
