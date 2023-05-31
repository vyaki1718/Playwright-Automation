const {test, expect} =require('@playwright/test');


test.only("user login", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');

    await page.locator("[type*=email]").fill("vivekpatil17@gmail.com")

    await page.locator("#userPassword").fill("Vivek@123")

    
    await page.locator("[type*=submit]").click();

    await page.waitForLoadState('networkidle')
    
    const cardTitle= await page.locator(".card-body b").allTextContents();

    console.log(cardTitle)

   

})