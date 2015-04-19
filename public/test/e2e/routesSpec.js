describe('E2E: Routes', function() {
	describe("When clicking on Users List", function(){
	    it('It should redirect to user listing page', function() {
	        browser.get("http://localhost:5000/#/home");

	        var userElm = element.all(by.css("a")).get(0)
	        	userText = userElm.getText();
	        expect(userText).toBe('Users List');

	        userElm.click();

	        browser.waitForAngular();

	        // var rows = element.all(by.repeater('user in users'));

	        // expect(rows.length).toBe(4);
	    });

	    it("Should update url to /users", function(){
	    	expect(browser.getCurrentUrl()).toMatch("users");
	    });
	});

});
