 const currentPage = window.location.pathname.split("/").pop();

   const navLinks = document.querySelectorAll(".nav_list a");

     navLinks.forEach(link => {
    // If the href matches the current page
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });