const formsScreen = require('../screenObjects/forms.screen')
const homeScreen = require('../screenObjects/home.screen')

const textoAleatorio = 'Humberto Gouveia'

describe('Desafio Ebac Módulo 16', () => {
    it('Preencher Formulário', async () => {
        homeScreen.acessarTelaDeFormulario()
        formsScreen.preencherFormulario(textoAleatorio)   
        formsScreen.validarFormulario(textoAleatorio)
    })
})


