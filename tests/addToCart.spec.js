const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

const testData = require('../fixtures/testData.json');

test('Add Product To Cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    testData.standardUser.username,
    testData.standardUser.password
  );

  await inventoryPage.addProductToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');
});