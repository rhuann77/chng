/* scripts.js */
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('size-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const size = document.getElementById('size-filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productSize = product.getAttribute('data-size');

        const matchesCategory = category === "" || category === productCategory;
        const matchesSize = size === "" || size === productSize;

        product.style.display = matchesCategory && matchesSize ? "block" : "none";
    });
}
