exports.render = (product) => {
  return `<form>
  <div class="list">
    <input type="text" data-id value="${product.id || ""}" style="visibility:hidden;">
    <label class="item item-input item-stacked-label">
      <span class="input-label">Title</span>
      <input type="text" data-title value="${product.title || ""}">
    </label>
    <label class="item item-input item-stacked-label">
      <span class="input-label">Price</span>
      <input type="number" data-price value="${product.price || 0}">
    </label>
  </div>
  <div class="padding">
    <button class="button button-positive button-block" data-product-id="${product.id || 0}">
    <i class="ion-compose"></i> Submit
    </button>
  </div>
</form>`;
};