const togglePasswordVisibility = () => {
  const input = document.querySelector(
    "[data-behavior='toggle-password-visibility'] input"
  );
  const icon = document.querySelector(
    "[data-behavior='toggle-password-visibility'] i"
  );

  const passwordInput = document.querySelector(
    "[data-behavior='toggle-password-visibility'] a"
  );

  if (passwordInput) {
    passwordInput.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        icon.classList.add("fa-eye-slash");
        icon.classList.remove("fa-eye");
      } else if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      }
    });
  }
};

export { togglePasswordVisibility };
