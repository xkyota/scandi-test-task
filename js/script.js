// ! Variables
const list = document.querySelector(".product-list");
const dvd = document.getElementById("dvd-form");
const furniture = document.getElementById("furniture-form");
const book = document.getElementById("book-form");
const productType = document.getElementById("productType");

// ! Check if the DOM get ready
document.addEventListener("DOMContentLoaded", function () {
	if (list) {
		// ! Fill
		for (let index = 0; index < 12; index++) {
			list.insertAdjacentHTML(
				"beforeend",
				`
			<li>
				<input type="checkbox" name="checkbox" class="delete-checkbox" />
				<div class="loader"></div>
				<span class="model">ID: ${index + 1}</span>
				<span class="type">ACME DISC</span>
				<span class="price">1.00$</span>
				<span class="addon">Size: 700MB</span>
			</li>
			`
			);
		}
	}

	// ! Delete Element
	if (list) {
		document.addEventListener("change", function (event) {
			const checkbox = document.querySelectorAll(".delete-checkbox");
			if (event.target.matches(".delete-checkbox")) {
				checkbox.forEach((element) => {
					element.style.display = "none";
				});

				const li = event.target.closest("li");
				if (li) {
					const loader = li.querySelector(".loader");
					if (loader) {
						loader.style.display = "flex";
					}

					setTimeout(() => {
						li.remove();
						checkbox.forEach((element) => {
							element.style.display = "flex";
						});
					}, 1000);
				}
			}
		});
	}

	// ! Add Product
	if (productType) {
		productType.addEventListener("change", function () {
			const selectedType = this.value;
			if (selectedType === "DVD") {
				furniture.style.display = "none";
				book.style.display = "none";
				dvd.style.display = "flex";
			} else if (selectedType === "Furniture") {
				book.style.display = "none";
				dvd.style.display = "none";
				furniture.style.display = "flex";
			} else if (selectedType === "Book") {
				furniture.style.display = "none";
				dvd.style.display = "none";
				book.style.display = "flex";
			}
		});
	}
});

function addProduct() {
	window.location.href = "/pages/addproduct.html";
}

function backButton() {
	window.location.href = "/index.html";
}

function deleteAll() {
	list.innerHTML = ``;
}
