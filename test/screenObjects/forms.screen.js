class FormScreen {
    get inputDigiteAlgo() {
        return $('~text-input')
    }

    get campoResultadoDoTextoDigitado() {
        return $('~input-text-result')
    }

    get botaoSwitch() {
        return $('~switch')
    }

    get textoBotaoSwitch() {
        return $('~switch-text')
    }

    get dropdown() {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')
    }

    get botaoAtivo() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')
    }

    get botaoInativo() {
        return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup')
    }

    





}