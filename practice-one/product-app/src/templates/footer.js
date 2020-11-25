exports.render = path => {
  let isProducts = path === "products" ? "active" : "";
  let isProductForm = path === "productForm" ? "active" : "";
  let isUser = path === "user" ? "active" : "";
  return `
   <div class="tabs-striped tabs-color-calm">
    <div class="tabs">
      <a data-path="products" class="tab-item ${isProducts}">
        <i class="icon ion-home"></i>
      </a>
      <a data-path="productForm" class="tab-item ${isProductForm}">
        <i class="icon ion-compose"></i>
      </a>
      <a data-path="user" class="tab-item ${isUser}">
        <i class="icon ion-person"></i>
      </a>
      <a data-logout class="tab-item">
        <i class="icon ion-android-exit"></i>
      </a>
    </div>
   </div>`;
};