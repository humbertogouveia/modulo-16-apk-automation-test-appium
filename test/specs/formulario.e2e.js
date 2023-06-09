const formsScreen = require('../screenObjects/forms.screen')
const homeScreen = require('../screenObjects/home.screen')

describe('Desafio Ebac Módulo 16', () => {
    it('Preencher Formulário', async () => {
        homeScreen.acessarTelaDeFormulario()
        formsScreen.preencherFormulario()   
        await browser.pause(5000); // Pausa de 5 segundos enquanto vejo o estado da tela durante a automação     
    })
})


