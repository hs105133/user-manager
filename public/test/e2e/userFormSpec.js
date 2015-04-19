describe('E2E: Users Form', function() {
	beforeEach(function(){
	        browser.get("http://localhost:5000/#/add-user");
	        button = element(by.buttonText("Add User"));
	});

	describe("When form is empty", function(){
	    it('It should disable Add User button', function() {
	        var css = button.getAttribute("disabled");
	        expect(css).toBeTruthy();
	    });
	});

	describe("When form is filled", function(){
	    it('It should eneable Add User button', function() {

	        element(by.model("user.firstName")).sendKeys("Mr X");
	        element(by.model("user.lastName")).sendKeys("KK");
	        element(by.model("user.email")).sendKeys("xx@gmail.com");

	        var css = button.getAttribute("disabled");
	        expect(css).toBeFalsy();
	    });
	});

	describe("When saving the form", function(){
	    it('It should one add new entry to users listing page', function() {

	        element(by.model("user.firstName")).sendKeys("Mr X");
	        element(by.model("user.lastName")).sendKeys("KK");
	        element(by.model("user.email")).sendKeys("xx@gmail.com");

	        button.click();
	        browser.waitForAngular();
	        var list = element.all(by.binding("firstName"));

	        expect(list.getText()).toMatch("Mr X");

	        var users = element.all(by.repeater("user in users"));
	        expect(users.count()).toBe(19);
	    });
	});

});
