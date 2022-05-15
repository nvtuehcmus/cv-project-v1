const init = () => {
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY + 10 >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });
    const tabs = document.querySelectorAll(".header .menu a");

    tabs.forEach((tab) => {
      if (tab.getAttribute("href").split("#")[1] === currentId) {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        tab.className += " active";
      }
    });
  });

  document
    .getElementsByClassName("toggle")[0]
    .addEventListener("click", function () {
      this.classList.toggle("is-clicked");

      const dropdownDisplay =
        document.getElementsByClassName("mobile-menu")[0].style.display;
      if (dropdownDisplay === "block") {
        document.getElementsByClassName("mobile-menu")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("mobile-menu")[0].style.display =
          "block";
      }
    });
};
init();
