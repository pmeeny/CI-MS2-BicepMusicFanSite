/**
 * [sendEmail to send email using EmailJS
 * Credit: Code Institute material "Sending Emails Using EmailJS"]
 * @param contactForm [The contact form object]
 */
function sendMail(contactForm) {

    emailjs.init("user_wxBAvg07l9uKgfV3nW0x3");
    emailjs.send("gmail", "bicep", {
        "from_name": contactForm.full_name.value,
        "from_email": contactForm.email_address.value
    }).then(
        function (response) {
            console.log("Email sent", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

$("#mailinglistform").on("submit", function () {
    $("#mailingListModal").modal("hide");
});