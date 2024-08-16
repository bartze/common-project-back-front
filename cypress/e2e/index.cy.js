describe('Client App', () => {
	it('Renders Dashboard Tab', () => {
		cy.visit('http://localhost:8081/dashboard');
		cy.url().should('include', 'dashboard');
	});

	it('Renders Modules Tab', () => {
		cy.visit('http://localhost:8081/modules');
		cy.url().should('include', 'modules');
	});

	it('Renders Add Module Tab', () => {
		cy.visit('http://localhost:8081/add');
		cy.url().should('include', 'add');
	});
	it('Renders Chat Tab', () => {
		cy.visit('http://localhost:8081/chat');
		cy.url().should('include', 'chat');
	});
});
