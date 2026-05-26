class CartPage {

  constructor(page) {
    this.page = page;

    this.checkoutBtn = page.locator('#checkout');
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}

module.exports = CartPage;