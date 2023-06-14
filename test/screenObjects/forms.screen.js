class FormScreen {
  get inputDigiteAlgo() {
    return $("~text-input")
  }

  get campoResultadoDoTextoDigitado() {
    return $("~input-text-result").getText()
  }

  get botaoSwitch() {
    return $('//android.widget.Switch[@content-desc="switch"]')
  }

  get textoBotaoSwitch() {
    return $('//android.widget.TextView[@content-desc="switch-text"]')
  }

  get dropdown() {
    return $(
      '//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    )
  }

  get dropdownPrimeiraOpcao() {
    return driver.$("android:id/text1")
  }

  get botaoAtivo() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup'
    )
  }

  get botaoInativo() {
    return $("~button-Inactive")
  }

  async preencherFormulario(textoAleatorio) {
    await this.inputDigiteAlgo.addValue(textoAleatorio)
    await this.botaoSwitch.click()
    await this.dropdown.click()
    await this.dropdownPrimeiraOpcao.click()

  }
  async validarFormulario(textoDigitado) {
    expect(await this.campoResultadoDoTextoDigitado).toHaveText(textoDigitado)
    expect(await this.textoBotaoSwitch).toHaveText("Click to Turn the switch ON")
    expect(await this.dropdown).toHaveText('webdriver.io is awesome')
    expect(this.botaoAtivo).toBeEnabled()
  }
}

module.exports = new FormScreen()
