describe('Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('İlgili Github butonu çalışıyor mu?', () => {
        cy.contains('Github').click();
    })

    it('İlgili LinkedIn butonu çalışıyor mu?', () => {
        cy.contains('LinkedIn').click();
    })

    it('Twitter simgesi çalışıyor mu?', () => {
        cy.get('[data-cy=twitter]').click();
    })

    it('LinkedIn simgesi çalışıyor mu?', () => {
        cy.get('[data-cy=linkedin]').click();
    })

    it('Ad ve soyad bilgileri görünüyor mu?', () => {
        cy.get('[data-cy=header-name-surname]').contains('kagan berberoglu');
    })
})
