document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-icon");
    const navLinks = document.querySelector("nav ul");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    } else {
      console.error("Could not find .hamburger-icon or nav ul elements.");
    }
  });

  
//whatsapp booking form
  
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;

  const message = `Hello, I would like to book a consultation.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}
Additional Notes: ${notes || "N/A"}
  `;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "254790342156"; // Kenya format: remove leading 0, add country code

  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
});