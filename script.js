const list = document.querySelector(".product-list");

for (let index = 0; index < 12; index++) {
	list.insertAdjacentHTML(
		"beforeend",
		`
        <li>
				<input type="checkbox" name="checkbox" class="delete-checkbox" />
				<span class="model">JVSC12312321</span>
				<span class="name">ACME DISC</span>
				<span class="price">1.00$</span>
				<span class="size">Size: 700MB</span>
		</li>
        `
	);
}
