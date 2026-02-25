document.documentElement.classList.add("js");

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll("[data-reveal]");
if (revealNodes.length > 0) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }
}

const contactForm = document.getElementById("contact-form");
const feedbackNode = document.getElementById("form-feedback");

if (contactForm && feedbackNode) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    feedbackNode.textContent = `Merci ${name}, votre demande a bien ete envoyee. Nadia vous recontacte rapidement.`;
    contactForm.reset();
  });
}
