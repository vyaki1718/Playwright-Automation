### end to end testing 

- End to end testing is a type of testing that verifies the entire software application from start to finish,
including aystems, componets, and integration involve in the application's work flow.

- It ensure that the application functions correctly amd meets user requirments.
- End to end testing is usually done by testing automation tools.

### Playwright 

**installation**


``` npm init playwright@latest ```

**Running the test**
``` npx playwright test ```


``` npx playwright test --ui ``` 

**HTML test reports** 

``` npx playwright show-report```

**Writing test**  
  - Perform action 
  - Assert the state againts expection

### Actions

 - `Navigation` -> Most of the test will start with navigation page  to URL. After that, test will be able to 
                   interact with the page elements.

                   ex:
                   ``` await page.goto('https://playwright.dev/'); ```    

 - `Interaction`-> Performing action start with locating the elements. Playwright uses Locators API for 
                   that. Locators are the way to find elements on page.
                   
                   ex: 
                   ``` 
                   await page.getByRole('link' , {name: "Get started"}).click() 
                   ```
 - `Basic action` -> check, click, uncheck, hover, fill, focus

## Assertion 
 - Playwright includes test assertions in the form of ```expect``` function.
 - To make an assertion call ``` expect(value) ``` and choose matcher that reflects the expectation.
 - Playwright provides matchers for common assertions.  ``` toEqual, toContains, toBeTruthy```
       
       Ex:
       ``` expect(success).toBeTruthy()```
       ``` await expect(page),toHaveTitle(/Playwright/); ```

 - `common assertion` -> toBechecked(), toBeVisible(), toConatainText(), toHaveValue(), toHaveTitle()

## Test Hooks
   - Playwright provides hooks to customize the testing environment.

   - ```test.describe ``` - to declare a group of test
   - ```test.beforEach``` and ```test.afterEach``` which are excuted before/after each test
   - ```test.beforeAll``` and ```test.afterAll``` are executed once per worker before and after all tests.
