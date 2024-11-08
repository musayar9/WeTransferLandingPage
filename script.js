function dropdownMenu() {
  const dropdownMobile = document.querySelector(".dropdown-mobile");
  const iconThree = document.querySelector(".icon-3");
  dropdownMobile.classList.toggle("mobile-active");
  if (dropdownMobile.classList.contains("mobile-active")) {
    iconThree.classList.add("fa-xmark");
    iconThree.classList.remove("fa-bars");
  } else {
    iconThree.classList.remove("fa-xmark");
    iconThree.classList.add("fa-bars");
  }
}

function toggleMenu(index, event) {
  event.stopPropagation();

  const menuAreas = document.querySelectorAll(".mobile-nav-menu-area");

  menuAreas.forEach((menuArea) => {
    const areaIndex = menuArea.getAttribute("data-index");
    const icon = menuArea.querySelector(".icon-2");

    if (areaIndex === String(index)) {
      menuArea.classList.toggle("active");

      if (menuArea.classList.contains("active")) {
        icon.classList.add("fa-chevron-up");
        icon.classList.remove("fa-chevron-down");
      } else {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    } else {
      menuArea.classList.remove("active");

      const otherIcon = menuArea.querySelector(".icon-2");
      otherIcon.classList.remove("fa-chevron-up");
      otherIcon.classList.add("fa-chevron-down");
    }
  });
}

document.addEventListener("click", (event) => {
  const dropdownMobile = document.querySelector(".dropdown-mobile");
  const iconThree = document.querySelector(".icon-3");
  if (
    dropdownMobile.classList.contains("mobile-active") &&
    !dropdownMobile.contains(event.target)
  ) {
    dropdownMobile.classList.remove("mobile-active");
    iconThree.classList.remove("fa-xmark");
    iconThree.classList.add("fa-bars");
  }
});
