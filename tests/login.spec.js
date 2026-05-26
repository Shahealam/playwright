const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const testData = require('../fixtures/testData.json');

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    testData.standardUser.username,
    testData.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});

test('Locked User Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    testData.lockedUser.username,
    testData.lockedUser.password
  );

  await expect(loginPage.errorMessage).toBeVisible();
});