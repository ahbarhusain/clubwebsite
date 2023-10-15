document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
  sendEmail(); // Call the sendEmail function
});

function sendEmail() {
  var name = $("#Name").val();
  var email = $("#Email").val();
  var msg = $("#Message").val();

  var body = "Name: " + name + "    " + "Email: " + email + "    " + "Message: " + msg;

  emailjs.send("service_ygycc19", "template_21ttgmp", {
      from_name: "ANARC Website",
      to_name: "ahbarhusain.ah@gmail.com", // Updated recipient email address
      message: body,
  }).then(function (response) {
      if (response.status === 200) {
          // Email sent successfully, show a confirmation message
          alert("Message Has Been Sent, We Will Contact You Soon.");
      } else {
          // Handle the case where the email was not sent successfully
          alert("An error occurred while sending the email. Please try again.");
      }
  });
}

function print(x) {
  console.log(x + " is prime");
}

function isprime(x) {
  for (var i = 2; i < x; i++) {
      if (x % i == 0) {
          return false;
      }
  }
  return print(x);
}
