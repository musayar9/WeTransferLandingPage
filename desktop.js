//Desktop
/*
 * - Kullanıcı tercihlerini yönetmek ve kaydetmek için iki işlev sağlar:
 * - `managePreference`: "Kaydet" butonunu gösterir, "Yönet" butonunu gizler ve tercihler ekranını aktif hale getirir.
 * - `savePreference`: "Kaydet" butonunu gizler, "Yönet" butonunu gösterir ve tercihler ekranını kapatır.
 *
 * - Provides two functions to manage and save user preferences:
 * - `managePreference`: Shows the "Save" button, hides the "Manage" button, and activates the preferences screen.
 * - `savePreference`: Hides the "Save" button, shows the "Manage" button, and deactivates the preferences screen.
 */

const managePreferences = document.querySelector("#manage-preference");
const textTwo = document.querySelector(".text-2");
const textThree = document.querySelector(".text-3");
const preferenceText = document.querySelector(".preference-text");
const saveBtn = document.querySelector(".save-btn");
const manageBtn = document.querySelector(".manage-btn");
saveBtn.style.display = "none";

function managePreference() {
  saveBtn.style.display = "block";
  manageBtn.style.display = "none";
  managePreferences.classList.add("active");
  textTwo.style.display = "none";
  textThree.style.display = "none";
  preferenceText.style.display = "block";
}

function savePreference() {
  saveBtn.style.display = "none";
  manageBtn.style.display = "block";
  managePreferences.classList.remove("active");
  textTwo.style.display = "block";
  textThree.style.display = "block";
  preferenceText.style.display = "none";
}

/*
 * - Menü öğeleri arasında geçiş yapmayı sağlar:
 * - Kullanıcı bir öğeye tıkladığında diğer öğelerin "active" durumu kaldırılır.
 * - Tıklanan öğe "active" olarak ayarlanır ve içerik alanları (Amaçlar, Özellikler, Satıcılar) buna göre gösterilir.
 *
 * - Enables switching between menu items:
 * - When a user clicks an item, the "active" state is removed from other items.
 * - The clicked item is set to "active," and content areas (Purposes, Features, Sellers) are displayed accordingly.
 */
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
        purposes.style.display = "flex";
        features.style.display = "none";
        sellers.style.display = "none";
      } else if (item.textContent === "Özellikler") {
        purposes.style.display = "none";
        features.style.display = "flex";
        sellers.style.display = "none";
      } else {
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

/*
 * - Kullanıcı "Amaçlar" menüsünde bir öğeye tıkladığında aktif durumu yönetir:
 * - Tıklanan öğeye "active" sınıfı ekler ve diğerlerinden kaldırır.
 * - Eğer öğe "İzin" ise, "Meşru Çıkar" alanını gizler ve tüm onay kutularının seçimini kaldırır.
 * - Aksi durumda, "Meşru Çıkar" alanını gösterir ve tüm onay kutularını işaretler.
 *
 * - Manages the active state when a user clicks an item in the "Purposes" menu:
 * - Adds the "active" class to the clicked item and removes it from others.
 * - If the item is "Consent," it hides the "Legitimate Interest" area and unchecks all checkboxes.
 * - Otherwise, it shows the "Legitimate Interest" area and checks all checkboxes.
 */

const purposesItem = document.querySelectorAll(".purposes-item");
const legitimateInterest = document.querySelector("#legitimate-interest");
const allCheckbox = document.querySelectorAll(".checkbox");
purposesItem.forEach((purpose) => {
  legitimateInterest.style.display = "none";

  purpose.addEventListener("click", () => {
    purposesRemoveActive();
    purpose.classList.add("active");
    if (purpose.classList.contains("active")) {
      if (purpose.textContent === "İzin") {
        legitimateInterest.style.display = "none";
        allCheckbox.forEach((check) => {
          check.removeAttribute("checked");
        });
      } else {
        legitimateInterest.style.display = "block";
        allCheckbox.forEach((check) => {
          check.setAttribute("checked", true);
        });
      }
    }
  });
});

function purposesRemoveActive() {
  purposesItem.forEach((purpose) => {
    purpose.classList.remove("active");
  });
}

/*
 * - Satıcılar menüsündeki öğeler arasında geçiş yapmayı sağlar:
 * - Tıklanan öğe "active" sınıfı alır, diğerlerinden bu sınıf kaldırılır.
 * - Eğer öğe "İzin" ise, "Satıcı İzinleri" alanını gösterir, "Meşru Çıkar" alanını gizler ve tüm onay kutularını temizler.
 * - Aksi durumda, "Satıcı İzinleri" alanını gizler, "Meşru Çıkar" alanını gösterir ve tüm onay kutularını işaretler.
 *
 * - Enables toggling between items in the Sellers menu:
 * - Adds the "active" class to the clicked item and removes it from others.
 * - If the item is "Consent," it displays the "Sellers Permission" area, hides the "Legitimate Interest" area, and unchecks all checkboxes.
 * - Otherwise, it hides the "Sellers Permission" area, shows the "Legitimate Interest" area, and checks all checkboxes.
 */

const sellersItem = document.querySelectorAll(".sellers-item");
const sellersPermission = document.querySelector("#sellers-permission");
const sellersLegitimateInterest = document.querySelector(
  "#sellers-legitimate-interest"
);
const allSellersCheckbox = document.querySelectorAll(".sellers-checkbox");
sellersItem.forEach((sellers) => {
  sellersLegitimateInterest.style.display = "none";
  sellers.addEventListener("click", () => {
    sellersRemoveActive();
    sellers.classList.add("active");

    if (sellers.classList.contains("active")) {
      if (sellers.textContent === "İzin") {
        sellersLegitimateInterest.style.display = "none";
        sellersPermission.style.display = "block";
        allSellersCheckbox.forEach((check) => {
          check.removeAttribute("checked");
        });
      } else {
        sellersPermission.style.display = "none";
        sellersLegitimateInterest.style.display = "block";
        allSellersCheckbox.forEach((check) => {
          check.setAttribute("checked", true);
        });
      }
    }
  });
});

function sellersRemoveActive() {
  sellersItem.forEach((sellers) => {
    sellers.classList.remove("active");
  });
}

/*
 * - Amaçlar ve Özellikler menüsündeki her bir öğenin genişletilip daraltılmasını sağlar:
 *   - Tıklanan öğeye "active" sınıfını ekleyerek açar, tekrar tıklandığında "active" sınıfını kaldırarak kapatır.
 *   - Tıklanan öğe hariç diğer tüm öğelerden "active" sınıfını kaldırır.
 *   - Eğer tıklanan öğe açıksa, simge olarak "fa-chevron-up" gösterilir, kapalıysa "fa-chevron-down" simgesi gösterilir.
 *   - Diğer öğelerde ise her zaman "fa-chevron-down" simgesi görünür.
 *
 * - Allows expanding and collapsing each item in the "Purposes" and "Features" menu:
 *   - Adds the "active" class to the clicked item to expand it, removes it to collapse when clicked again.
 *   - Removes the "active" class from all other items except the clicked one.
 *   - If the clicked item is expanded, it shows the "fa-chevron-up" icon; otherwise, it shows "fa-chevron-down."
 *   - For other items, the "fa-chevron-down" icon is always displayed.
 */

function togglePermission(index) {
  const purposesArea = document.querySelectorAll(".purposes-list-area");
  purposesArea.forEach((purpoArea) => {
    const purpoIndex = purpoArea.getAttribute("data-index");
    const icon = purpoArea.querySelector(".icon-2");

    if (purpoIndex === String(index)) {
      purpoArea.classList.toggle("active");

      if (purpoArea.classList.contains("active")) {
        icon.classList.add("fa-chevron-up");
        icon.classList.remove("fa-chevron-down");
      } else {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    } else {
      purpoArea.classList.remove("active");

      const otherIcon = purpoArea.querySelector(".icon-2");
      otherIcon.classList.remove("fa-chevron-up");
      otherIcon.classList.add("fa-chevron-down");
    }
  });
}
/*
 * - Satıcılar menüsündeki her bir öğenin genişletilip daraltılmasını sağlar:
 *   - Tıklanan öğeye "active" sınıfını ekleyerek açar, tekrar tıklandığında "active" sınıfını kaldırarak kapatır.
 *   - Tıklanan öğe hariç diğer tüm öğelerden "active" sınıfını kaldırır.
 *   - Eğer tıklanan öğe açıksa, simge olarak "fa-chevron-up" gösterilir, kapalıysa "fa-chevron-down" simgesi gösterilir.
 *   - Diğer öğelerde ise her zaman "fa-chevron-down" simgesi görünür.
 *
 * - Allows expanding and collapsing each item in the Sellers menu:
 *   - Adds the "active" class to the clicked item to expand it, removes it to collapse when clicked again.
 *   - Removes the "active" class from all other items except the clicked one.
 *   - If the clicked item is expanded, it shows the "fa-chevron-up" icon; otherwise, it shows "fa-chevron-down."
 *   - For other items, the "fa-chevron-down" icon is always displayed.
 */


function toggleSellers(index) {
  const sellersArea = document.querySelectorAll(".sellers-list-area");
  sellersArea.forEach((sellers) => {
    const sellersIndex = sellers.getAttribute("data-index");
    const icon = sellers.querySelector(".icon-2");
    if (sellersIndex === String(index)) {
      sellers.classList.toggle("active");
      if (sellers.classList.contains("active")) {
        icon.classList.add("fa-chevron-up");
        icon.classList.remove("fa-chevron-down");
      } else {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    } else {
      sellers.classList.remove("active");
      const otherIcon = sellers.querySelector(".icon-2");
      otherIcon.classList.remove("fa-chevron-up");
      otherIcon.classList.add("fa-chevron-down");
    }
  });
}
