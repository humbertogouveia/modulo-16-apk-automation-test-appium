class HomeScreen {
    get linkTextForms() {
        return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView')
    }

    async acessarTelaDeFormulario() {
        this.linkTextForms.click()
    }
}

