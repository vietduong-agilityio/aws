import Signin from './components/signin.js';
import Signup from './components/signup.js';
import Products from "./components/product.js";
import User from './components/user.js';
import Menu from './components/footer.js';
import VerifySignup from './components/verify-signup.js';
import ProductForm from './components/productForm.js';

class App {
  constructor(body, footer) {
    this.signin = new Signin(body);
    this.signup = new Signup(body);
    this.products = new Products(body);
    this.user = new User(body);
    this.menu = new Menu(footer);
    this.verifySignup = new VerifySignup(body);
    this.productForm = new ProductForm(body);
  }

  init() {
    this.signin.render();
    this.addEventListener();
  }

  addEventListener() {
    this.signinEvents();
    this.signupEvents();
    this.productsEvents();
    this.verifySignupEvents();
    this.userEvents();
    this.menuEvents();
    this.productFormEvents();
  }

  productsEvents() {
    this.products.on("error", () => alert("Product list error"));
    this.products.on("remove-error", () => alert("Product delete error"));
    this.products.on("update-error", () => alert("Product update error"));
    this.products.on("remove", () => this.products.render());
    this.products.on("update", (data) => this.productForm.render(data));
  }

  productFormEvents() {
    this.productForm.on("error", () => alert("Product register error"));
    this.productForm.on("submit", () => {
      this.menu.render("products");
      this.products.render();
    });
  }

  signinEvents() {
    this.signin.on('error', () => alert('Authentication error'));
    this.signin.on('signin', (token) => {
      localStorage.setItem('token', token);
      this.menu.render("products");
      this.products.render();
    });
    this.signin.on('signup', () => this.signup.render());
  }

  signupEvents() {
    this.signup.on('error', () => alert('Register error'));
    this.signup.on('verify-user', (user) => {
      alert(`${user.name} you were registered! Please verify your account.`);
      this.verifySignup.render(user.email);
    });
  }

  verifySignupEvents() {
    this.verifySignup.on('error', () => alert('Verify error'));
    this.verifySignup.on('signup', (email) => {
      alert(`${email} was verified!`);
      this.signin.render();
    });
  }

  userEvents() {
    this.user.on('error', () => alert('User load error'));
    this.user.on('remove-error', () => alert('Cancel account error'));
    this.user.on('remove-account', () => {
      alert('So sad! You are leaving us :(');
      localStorage.clear();
      this.menu.clear();
      this.signin.render();
    });
  }

  menuEvents() {
    this.menu.on('click', (path) => {
      this.menu.render(path);
      this[path].render();
    });
    this.menu.on('logout', () => {
      localStorage.clear();
      this.menu.clear();
      this.signin.render();
    })
  }
}

module.exports = App;