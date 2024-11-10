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

function managePreference() {
  const managePreferen = document.querySelector("#manage-preference");
  const textTwo = document.querySelector(".text-2");
  const textThree = document.querySelector(".text-3");
  const test = document.querySelector("#manage-preference p");

  managePreferen.classList.add("active");
  textTwo.style.display = "none";
  textThree.style.display = "none";
  test.style.display = "block";
}
const itemOptions = document.querySelectorAll(".item-option");
const purposes = document.querySelector("#purposes");
const features = document.querySelector("#feature");
const sellers = document.querySelector("#sellers");

itemOptions.forEach((item) => {
      purposes.style.display = "flex";
      features.style.display = "none";
      sellers.style.display = "none";
  item.addEventListener("click", () => {
    removeItemOptions();
    item.classList.add("active");

    if (item.classList.contains("active")) {
      if (item.textContent === "Amaçlar") {
      purposes.style.display="flex"
      features.style.display="none"
      sellers.style.display = "none";
        // purposes.classList.add("content-options-active");
        // purposes.classList.remove("content-options-inactive");
        // sellers.classList.add("content-options-inactive");
        // sellers.classList.remove("content-options-active");
        // features.classList.remove("content-options-active");
        // features.classList.add("content-options-inactive");
      } else if (item.textContent === "Özellikler") {
        // purposes.classList.remove("content-options-active");
        // purposes.classList.add("content-options-inactive");
        // features.classList.add("content-options-active");
        // features.classList.remove("content-options-inactive");
        // sellers.classList.add("content-options-inactive");
        // sellers.classList.remove("content-options-active");
           purposes.style.display = "none";
           features.style.display = "flex";
           sellers.style.display = "none";
      } else {
        // purposes.classList.remove("content-options-active");
        // purposes.classList.add("content-options-inactive");
        // features.classList.remove("content-options-active");
        // features.classList.add("content-options-inactive");
        // sellers.classList.remove("content-options-inactive");
        // sellers.classList.add("content-options-active");
            purposes.style.display = "none";
            features.style.display = "none";
            sellers.style.display = "flex";
      }
    }
  });
});


function removeItemOptions() {
  itemOptions.forEach((item) => {
    item.classList.remove("active");
  });
}
