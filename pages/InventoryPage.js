class InventoryPage {

  constructor(page) {
    this.page = page;

    this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.addToCartBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }
}

module.exports = InventoryPage;