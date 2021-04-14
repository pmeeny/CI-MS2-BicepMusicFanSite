/*jslint browser: true*/
/*global $ */
/**
 * [sendEmail to send email using EmailJS
 * Credit: Code Institute material "Sending Emails Using EmailJS"]
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {
    emailjs.send("gmail", "bicep", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.email_address.value
    }).then(
        function (response) {
            window.console.log("Email sent", response);
        },
        function (error) {
            window.console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

$("#mailinglistform").on("submit", function () {
    $("#mailingListModal").modal("hide");
});