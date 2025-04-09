document.addEventListener("DOMContentLoaded", () => {
  
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  

    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById("overlay");
  
    openModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal-target");
        const modal = document.querySelector(modalId);
        openModal(modal);
      });
    });
    
    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach(modal => {
        closeModal(modal);
      });
    });
    
    closeModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });
  
    function openModal(modal) {
      if(modal == null) return;
      modal.classList.add("active");
      overlay.style.display = "block";
      modal.style.display = "block";
    }
  
    function closeModal(modal) {
      if(modal == null) return;
      modal.classList.remove("active");
      overlay.style.display = "none";
      modal.style.display = "none";
    }
  

    const newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletterEmail");
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      newsletterForm.reset();
    });
  
    // Clock widget in footer
    const currentTimeEl = document.getElementById("currentTime");
    function updateTime() {
      const now = new Date();
      currentTimeEl.textContent = now.toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000);
  });
  