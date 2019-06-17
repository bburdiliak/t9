
const appUrl = 'http://localhost:3001'

describe('T9 application', function() {
  it('renders a keyboard', function() {
    cy.visit(appUrl);
    cy.contains('1');
    cy.contains('2');
    cy.contains('3');
    cy.contains('4');
    cy.contains('5');
    cy.contains('6');
    cy.contains('7');
    cy.contains('8');
    cy.contains('9');
    cy.contains('DEL');
  });

  it('retrieves words from server', function() {
    cy.visit(appUrl);
    cy.contains('2').click();
    cy.contains('2').click();
    cy.contains('8').click();
    cy.get('.MuiChip-label').contains('act');
  });

  it('delete button removes the last number', function() {
    cy.visit(appUrl);
    cy.contains('2').click();
    cy.contains('2').click();
    cy.contains('8').click();
    cy.contains('9').click();
    cy.contains('DEL').click();
    cy.get('.MuiChip-label').contains('act');
  });


});

