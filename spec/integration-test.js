//noinspection JSAnnotator

var selenium = require('selenium-webdriver');


describe('Selenium Tutorial', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
        withCapabilities(selenium.Capabilities.chrome()).
        build();

        this.driver.get('http://www.techinsight.io/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });


    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('As a user I should able to click the logo image', function(done) {
        this.driver.findElement(selenium.By.css('.logo-link')).click().then(done);
    });



    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('As a user I should able to click the logo image', function(done) {
        this.driver.findElement(selenium.By.css('.logo-link')).click().then(done);
    });

});