const {test , expect} =require('@playwright/test');



test("Register user test ", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');

    await page.locator(".text-reset").click();

    await page.locator("#firstName").fill("Vivek");

    await page.locator('#lastName').fill("Patil");

    await page.locator("#userEmail").fill("vivekpatil17@gmail.com");

    await page.locator("#userMobile").fill("1234567890");

    await page.locator("#userPassword").fill("Vivek@123");

    await page.locator("#confirmPassword").fill("Vivek@123")

    await page.locator("[type*=checkbox]").check();

    await page.locator("#login").click();

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("[type*=email]").fill("vivekpatil17@gmail.com")

    await page.locator("#userPassword").fill("Vivek@123")

    
    await page.locator("[type*=submit]").click();

    


   const cardTitle= await page.locator(".card-body b").nth(0).textContent();

   expect(cardTitle).toContain("zara coat 3");


})