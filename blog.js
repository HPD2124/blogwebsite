document.addEventListener("DOMContentLoaded", () => {
  // Back to Top Button
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display =
      window.scrollY > 300 ? "block" : "none";
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Modal functionality
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      if (modal) {
        modal.classList.add("active");
        overlay.style.display = "block";
        modal.style.display = "block";
      }
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.classList.remove("active");
        overlay.style.display = "none";
        modal.style.display = "none";
      }
    });
  });

  overlay.addEventListener("click", () => {
    document.querySelectorAll(".modal.active").forEach(modal => {
      modal.classList.remove("active");
      modal.style.display = "none";
    });
    overlay.style.display = "none";
  });

  // Clock in footer
  const currentTimeEl = document.getElementById("currentTime");
  function updateTime() {
    const now = new Date();
    currentTimeEl.textContent = now.toLocaleTimeString();
  }
  updateTime();
  setInterval(updateTime, 1000);
});
