import Product from "../product.js";
import Template from "../templates/verify-signup.js";

class VerifySignup extends Product {
  constructor(body) {
    super();
    this.body = body;
  }

  render(email) {
    this.body.innerHTML = Template.render(email);
    this.body.querySelector("[data-code]").focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
  }

  formSubmit() {
    const form = this.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = e.target.querySelector("[data-code]");
      const email = e.target.querySelector("[data-email]");
      const opts = {
        method: "POST",
        url: `${this.URL}/verify`,
        json: true,
        body: {
          email: email.value,
          code: code.value
        }
      };
      this.request(opts, (err, resp, data) => {
        if (err || resp.status === 412) {
          this.emit("error", err);
        } else {
          this.emit("signup", email.value);
        }
      });
    });
  }
}

module.exports = VerifySignup;