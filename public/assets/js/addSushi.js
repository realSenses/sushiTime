$(".add-sushi").on("submit", function(event) {
    event.preventDefault();

    var sushi = {
      name: $("#name").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/api/sushis", {
      type: "POST",
      data: sushi
    }).then(
      function() {
        console.log("added new sushi");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatSushi").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      eaten: 1
    };

    // Send the DELETE request.
    $.ajax("/api/sushis/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        //console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


 $(".deleteSushi").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/sushis/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted sushi", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });