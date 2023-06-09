class FormScreen {
  get inputDigiteAlgo() {
    return $("~text-input")
  }

  get campoResultadoDoTextoDigitado() {
    return $("~input-text-result")
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

  async preencherFormulario() {
    await this.inputDigiteAlgo.addValue("Humberto Gouveia")
    expect(this.campoResultadoDoTextoDigitado).toHaveText("Humberto Gouveia")

    await this.botaoSwitch.toHaveAttribute("checked")

    await this.dropdown.waitForClickable({timeout:5000,timeoutMsg:'O elemento não ficou disponivel após 5 segundos'})
    await this.dropdown.click()
    await this.dropdownPrimeiraOpcao.waitForDisplayed({timeout:5000,timeoutMsg:'O elemento do dropdown não ficou visivel após 5 segundos'})
    await this.dropdownPrimeiraOpcao.click()
    expect("webdriver.io is awesome").toBeExisting({wait:5000})
    expect(this.botaoAtivo).toBeEnabled()
  }
}

module.exports = new FormScreen()
