import Product from '../product.js';
import Template from '../templates/productForm.js';

class ProductForm extends Product {

  constructor(body) {
    super();
    this.body = body;
    this.isEdit = false;
  }

  render(product = {}) {
    if (product.id) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }

    this.body.innerHTML = Template.render(product);
    this.body.querySelector('[data-title]').focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
  }

  formSubmit() {
    const form = this.body.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = e.target.querySelector('[data-title]');
      const price = e.target.querySelector('[data-price]');
      const id = e.target.querySelector('[data-id]').value;

      let opts = {
        method: 'POST',
        url: `${this.URL}/products`,
        headers: {
          authorization: localStorage.getItem('token'),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title.value,
          price: price.value
        })
      };

      if (this.isEdit) {
        const id = e.target.querySelector('[data-id]').value;

        opts.method = 'PUT';
        opts.url = `${this.URL}/products/${id}`;
        opts.headers = {
          authorization: localStorage.getItem('token'),
          "Content-Type": "application/json"
        };
      } else {
        // opts.json = true;
      }

      // const opts = {
      //   method: 'POST',
      //   url: `${this.URL}/products`,
      //   json: true,
      //   headers: {
      //     authorization: localStorage.getItem('token')
      //   },
      //   body: {
      //     title: title.value,
      //     price: price.value
      //   }
      // };
      this.request(opts, (err, resp, data) => {
        if (err || resp.status === 412) {
          console.log('err', err);
          console.log('resp', resp.status);
          this.emit('error');
        } else {
          this.emit('submit');
        }
      });
    });
  }
}

module.exports = ProductForm;