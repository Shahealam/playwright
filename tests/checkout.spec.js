const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const testData = require('../fixtures/testData.json');

test('Complete Checkout Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    testData.standardUser.username,
    testData.standardUser.password
  );

  await inventoryPage.addProductToCart();

  await inventoryPage.openCart();

  await cartPage.clickCheckout();

  await checkoutPage.enterCheckoutInfo(
    'Shahe',
    'Alam',
    '110001'
  );

  await checkoutPage.finishOrder();

  await expect(checkoutPage.successMsg).toContainText('Thank you');
});