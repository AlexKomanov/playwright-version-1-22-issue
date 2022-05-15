import { test, expect } from '@playwright/test';

test.only('test sauce', async ({ page }) => {

    await test.step('Whole Step', async () => {
        // Go to https://www.saucedemo.com/
        await page.goto('https://www.saucedemo.com/');
    })



    // Click [data-test="username"]
    await page.locator('[data-test="username"]').click();

    // Fill [data-test="username"]
    await page.locator('[data-test="username"]').fill('standard_user');

    // Click [data-test="password"]
    await page.locator('[data-test="password"]').click();

    // Fill [data-test="password"]
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click [data-test="login-button"]
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // // Select lohi  <-- This function works as well
    // await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

    //This one doesn't work
    await page.locator('[data-test="product_sort_container"]').click();
    await page.locator('option', {hasText: 'Price (low to high)'}).click();

    // Select hilo
    await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

    // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    // Click [data-test="add-to-cart-sauce-labs-backpack"]
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Click [data-test="add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)"]
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

});

