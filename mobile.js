/*
 * Mobil cihazlarda açılır menüyü açmak veya kapatmak için bir işlev oluşturur.
 * Menü aktif olduğunda "fa-xmark" simgesi gösterilir, aksi takdirde "fa-bars" simgesi gösterilir.
 *
 * Creates a function to open or close the dropdown menu on mobile devices.
 * Shows the "fa-xmark" icon when the menu is active; otherwise, it displays the "fa-bars" icon.
 */
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

/*
 *  Mobilde "Özellikler", "Örnekleri Kullanın" ve "Kaynaklar" için bir toggle kontrol yapısı oluşturur.
 * Verilen index'e göre ilgili menü öğesini açar veya kapatır. Diğer menü öğelerini kapalı tutar.
 *
 *  Creates a toggle control structure for "Features", "Use Examples", and "Resources" in the mobile menu.
 * Opens or closes the specified menu item based on the given index. Keeps other menu items closed.
 */
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
/*
 * To close the menu that opens in the mobile area, click anywhere on the screen and the menu  that opens will close.
 * Mobil alanda açılan menüyü kapatmak için ekranın herhangi bir yerine tıklamanız yeterli olacaktır,açılan menü kapanacaktır.
 */
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
