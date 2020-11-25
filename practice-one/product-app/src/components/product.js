import Product from "../product.js";
import Template from "../templates/product.js";

class Products extends Product {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.renderProductList();
  }

  addEventListener() {
    this.productUpdateClick();
    this.productRemoveClick();
  }

  renderProductList() {
    const opts = {
      method: "GET",
      url: `${this.URL}/products`,
      json: true,
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    this.request(opts, (err, resp, data) => {
      if (err) {
        this.emit("error", err);
      } else {
        this.body.innerHTML = Template.render(data);
        this.addEventListener();
      }
    });
  }

  productUpdateClick() {
    const removes = this.body.querySelectorAll("[data-edit]");
    for (let i = 0, max = removes.length; i < max; i++) {
      removes[i].addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-product-id");

        const opts = {
          method: "GET",
          url: `${this.URL}/products/${id}`,
          json: true,
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
        this.request(opts, (err, resp, data) => {
          if (err || resp.status === 412) {
            this.emit("update-error", err);
          } else {
            this.emit("update", data);
          }
        });
      });
    }
  }

  productRemoveClick() {
    const removes = this.body.querySelectorAll("[data-remove]");
    for (let i = 0, max = removes.length; i < max; i++) {
      removes[i].addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Do you really wanna delete this product?")) {
          const id = e.target.getAttribute("data-product-id");
          const opts = {
            method: "DELETE",
            url: `${this.URL}/products/${id}`,
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
          this.request(opts, (err, resp, data) => {
            if (err || resp.status === 412) {
              this.emit("remove-error", err);
            } else {
              this.emit("remove");
            }
          });
        }
      });
    }
  }
}

module.exports = Products;