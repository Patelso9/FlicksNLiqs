
// terrible attempt to get this to save :/


$(document).ready(() => {
    // Getting references save movie
    const saveMovie = $("input#movie-save");

    // When the button is click
    saveMovie.on("save-movie", event => {
      event.preventDefault();
      const userData = {
        movieTitle: titleInput.val().trim(),

        
      };
  
    // //   if (!userData.email || !userData.password) {
    // //     return;
    //   }
      
      saveUserMovie(userData.movieTitle);
      titleInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function saveUserMovie(name) {
      $.post("/api/user/profile", {
        name: name,
      })
        .then(data => {
          console.log("saveUserMovie", data);
          window.location.replace("/profile");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }

    // function handleLoginErr(err) {
    //   console.log("signup - handleLoginErr")
    //   $("#alert .msg").text(err.message);
    //   $("#alert").fadeIn(500, function() {
    //     location.reload();
    //   });
    // }
  });

