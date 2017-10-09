const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

describe('Employee System', function() {
  it('should return employee information for the provided employee id', function(done) {
    const EMPLOYEE_SYSTEM_URL = process.env.EMPLOYEE_SYSTEM_URL || 'http://localhost:5000';
    const id = 1;
    driver.get(EMPLOYEE_SYSTEM_URL + '?id='+id);
    driver.findElement(By.id('content')).then((ele) => {
      ele.getText().then((text) => {
        expectedText = [
          "Employee details for id: 1",
          "Employee Name:Bob",
          "Work Location: Bangalore",
          "Payroll: 1000000"
        ].join("\n");
        assert.equal(text, expectedText);
        done();
        driver.quit();
      });
    });
  });
});
