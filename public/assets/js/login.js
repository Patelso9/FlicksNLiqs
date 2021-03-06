$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      console.log("loginUser");
      $.post("/api/user/login", {
        email: email,
        password: password
      })
        .then(data => {
          console.log("loginUser", data);
          window.location.replace("/home");
          // If there's an error, log the error
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      console.log(err);
      $("#alert .msg").text(err.status + " - " + err.responseText);
      $("#alert").fadeIn(2000, function() {
        location.reload();
      });
    }
  });
  