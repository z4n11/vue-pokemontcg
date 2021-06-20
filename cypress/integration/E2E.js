import 'cypress-wait-until'
describe('Test flow', {
  viewportHeight: 1080,
  viewportWidth: 1920
}, () => {
  it('Visit home page', () => {
    cy.visit('http://localhost:8080/home')
  })
  it('Wait for page loading', () => {
    cy.waitUntil(function () {
      return cy.get('.LoadingScreen_autowalk_1na7r', { timeout: 100000 }).should('not.be.visible', { timeout: 100000 })
    })
  })
  it('Search a pokemon', () => {
    cy.get('input').type('ampharos')
  })
  it('Click the first option', () => {
    cy.get('img:visible').first().click()
  })
  it('Select the first attack', () => {
    try {
      cy.waitUntil(function () {
        return cy.get('.LoadingScreen_autowalk_1na7r', { timeout: 100000 }).should('not.be.visible', { timeout: 100000 })
      })
      cy.get('.PokemonAttacks_attackContainer_ZDv16 > :nth-child(1)').first().click()
      cy.get('.Modal_modalBackground_3xWsc').first().click({ x: 50, y: 50 })
    } catch {
      console.log('no attacks for click test')
    }
  })
  it('Reveal related cards', () => {
    try {
      cy.get('.PokemonDetailsRelatedCards_cardFilter_1hLZg').first().click()
    } catch {
      console.log('cant find related cards')
    }
  })
  it('Test carousel', () => {
    try {
      cy.get('[title="Item 1"]').click()
    } catch {
      console.log('cant find pagination')
    }
  })
  it('Hide related cards', () => {
    cy.get('.feather').click()
  })
})

describe('Test flow Mobile', {
  viewportHeight: 812,
  viewportWidth: 375
}, () => {
  it('Visit home page', () => {
    cy.visit('http://localhost:8080/home')
  })
  it('Wait for page loading', () => {
    cy.waitUntil(function () {
      return cy.get('.LoadingScreen_autowalk_1na7r', { timeout: 100000 }).should('not.be.visible', { timeout: 100000 })
    })
  })
  it('Search a pokemon', () => {
    cy.get('input').type('ampharos')
  })
  it('Click the first option', () => {
    cy.get('img:visible').first().click()
  })
  it('Select the first attack', () => {
    try {
      cy.waitUntil(function () {
        return cy.get('.LoadingScreen_autowalk_1na7r', { timeout: 100000 }).should('not.be.visible', { timeout: 100000 })
      })
      cy.get('.PokemonAttacks_attackContainer_ZDv16 > :nth-child(1)').first().click()
      cy.get('.Modal_modalBackground_3xWsc').first().click({ x: 50, y: 50 })
    } catch {
      console.log('no attacks for click test')
    }
  })
  it('Reveal related cards', () => {
    try {
      cy.get('.PokemonDetailsRelatedCards_cardFilter_1hLZg').first().click()
    } catch {
      console.log('cant find related cards')
    }
  })
  it('Test carousel', () => {
    try {
      cy.get('[title="Item 1"]').click()
    } catch {
      console.log('cant find pagination')
    }
  })
  it('Hide related cards', () => {
    cy.get('.feather').click()
  })
})
