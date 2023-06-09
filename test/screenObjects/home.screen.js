const formsScreen = require("./forms.screen")

class HomeScreen {
    get linkTextForms() {
        return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView')
    }

    async acessarTelaDeFormulario() {
        (await this.linkTextForms).waitForDisplayed()
        this.linkTextForms.click()

        await formsScreen.inputDigiteAlgo.waitForExist()
        await expect(formsScreen.inputDigiteAlgo).toBeDisplayed()


    }

}

module.exports = new HomeScreen()

