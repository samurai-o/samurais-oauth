describe("注册登陆", () => {
	it("注册", () => {
		cy.visit("/auth/register");
		cy.get("input[type='text']").type("lemonpaimc@126.com");
		cy.get("input[type='password']").type("123456");
		cy.get("button").click();
	});
	it("登陆流程", () => {
		cy.visit("/auth/login");
		cy.get("input[type='text']").type(this.username);
		cy.get("input[type=password]").type(this.password);
		cy.get("button[type=submit]").click();
		/** 验证登陆只有界面是否跳转到首页 */
		cy.url().should("contain", "/");
	});
});