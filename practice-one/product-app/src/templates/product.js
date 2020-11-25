const renderProducts = products => {
  return products.map(product => {
    return `<li class="item item-icon-left item-button-right" style="display:flex; justify-content:space-around;">
      <p>${product.title}</p>
      <p>${product.price}</p>
      <button data-edit data-product-id="${product.id}" style="margin-right:50px;"
        class="button button-balanced">
        <i class="ion-edit"></i>
      </button>
      <button data-remove data-product-id="${product.id}"
        class="button button-assertive">
        <i class="ion-trash-a"></i>
      </button>
      </li>`;
  }).join("");
};
exports.render = products => {
  if (products && products.length) {
    return `<ul class="list">${renderProducts(products)}</ul>`;
  }
  return `<h4 class="text-center">The product list is empty</h4>`;
};