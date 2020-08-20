const chai = require('chai')
expect = chai.expect

const verificar = require('../routines/letras')

describe('verificação de vogal', () => {
    it('deveria retonar true letra A', () => {
        expect(verificar.verificarLetras('a')).to.equal(true)
    })
    it('deveria retonar false letra B', () => {
        expect(verificar.verificarLetras('b')).to.equal(false)
    })
    it('deveria retonar false true letra E', () => {
        expect(verificar.verificarLetras('e')).to.equal(true)
    })
    it('deveria retonar false letra Z', () => {
        expect(verificar.verificarLetras('z')).to.equal(false)
    })
})

describe('verificação de consoante', () => {
    it('deveria retonar true letra B', () => {
        expect(verificar.consoante('b')).to.equal(true)
    })
    it('deveria retonar false letra A', () => {
        expect(verificar.consoante('a')).to.equal(false)
    })

})

