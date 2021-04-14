/**
 * [sendEmail to send email using EmailJS
 * Credit: Code Institute material "Sending Emails Using EmailJS"]
 * @param  contactForm [The contact form object]
 */
function sendMail(contactForm) {
    emailjs.send("gmail", "bicep", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.email_address.value
    })
    .then(
        function(response) {
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

$('#mailinglistform').on('submit', function(e){
    $('#formSubmitted').modal('show');
    $('#mailingListModal').hide();
  });