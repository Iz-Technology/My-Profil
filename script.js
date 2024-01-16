// menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

// efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
      $("nav .logo .hitam").show();
      $("nav .logo .putih").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav .logo .hitam").hide();
      $("nav .logo .putih").show();
    }
  });
});

function openModal(productCardId) {
  const productCard = document.getElementById(productCardId);
  const modalContent = document.getElementById("modalContent");
  const modalDeskripsi = document.getElementById("modalDeskripsi");
  const modal = document.getElementById("myModal");

  modalContent.innerHTML = productCard.innerHTML;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function openModal(productCardId) {
  const productCard = document.getElementById(productCardId);
  const modalContent = document.getElementById("modalContent");
  const modalDeskripsi = document.getElementById("modalDeskripsi");
  const modalDeskripsi3 = document.getElementById("modalDeskripsi3");
  const modal = document.getElementById("myModal");

  // Check if it's Product Card 2 and ask for password
  if (productCardId === "productCard3") {
    const password = prompt(
      "Masukkan password yang telah disediakan oleh IzTechnology:"
    );

    // Replace 'your_password_here' with the actual password
    if (password !== "300994iz") {
      alert("Wrong password. Try again.");
      return;
    }
  }

  // Copy the innerHTML of the product card to the modal content
  modalContent.innerHTML = productCard.innerHTML;

  // Update modalDeskripsi based on the specific product card clicked
  if (productCardId === "productCard3") {
    modalDeskripsi.innerHTML = modalDeskripsi3.innerHTML;
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Panggil fungsi saat halaman dimuat
getReviewsFromStorage();

function addReview() {
  var name = document.getElementById("customerName").value;
  var review = document.getElementById("customerReview").value;
  var rating = document.getElementById("customerRating").value;

  console.log("Adding review:", name, review, rating);

  var newReview = document.createElement("div");
  newReview.className = "review";
  newReview.innerHTML =
    "<h3>" +
    name +
    "</h3>" +
    "<p>Ulasan: " +
    review +
    "</p>" +
    "<p>Rating: " +
    rating +
    "/5</p>";

  document
    .getElementById("reviewContainer")
    .insertAdjacentElement("afterbegin", newReview);

  // Simpan ulasan ke localStorage
  saveReviewToStorage(newReview.outerHTML);

  document.getElementById("reviewForm").reset();
}

// Fungsi untuk mendapatkan ulasan dari localStorage
function getReviewsFromStorage() {
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  for (var i = 0; i < reviews.length; i++) {
    var storedReview = reviews[i];
    if (storedReview) {
      document.getElementById("reviewContainer").innerHTML += storedReview;
    }
  }
}

// Fungsi untuk menyimpan ulasan ke localStorage
function saveReviewToStorage(review) {
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.unshift(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
