document.addEventListener("DOMContentLoaded", () => {
    const loggedIn = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username") || "User";
  
    // Redirect to login if not logged in
    if (!loggedIn && !window.location.href.includes("login")) {
      window.location.href = "login.html";
    }
  
    const userIcon = document.getElementById("userIcon");
    const dropdown = document.getElementById("dropdownMenu");
    const dropdownUser = document.getElementById("dropdownUser");
  
    if (userIcon && dropdown) {
      const initials = username
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();
  
      userIcon.textContent = initials;
      if (dropdownUser) dropdownUser.textContent = username;
  
      userIcon.addEventListener("click", () => {
        dropdown.classList.toggle("show");
      });
  
      document.getElementById("logoutBtn")?.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.href = "login.html";
      });
  
      window.addEventListener("click", (e) => {
        if (!userIcon.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove("show");
        }
      });
    }
  });
  