let Kjb_b = 0
let Koji_je_broj_sada_1 = 0
let Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA = 0
let Broj_1_promena = 0
let Broj_2_promjena = 0
let _1_broj = 0
let _2_broj = 0
let _1_broj_i_2_broj = 0
input.onButtonPressed(Button.A, function () {
    if (Kjb_b == 1) {
        Koji_je_broj_sada_1 = Koji_je_broj_sada_1 - 1
        basic.showNumber(Koji_je_broj_sada_1)
    } else {
        Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA = Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA - 1
        basic.showNumber(Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA)
    }
})
input.onButtonPressed(Button.AB, function () {
    Broj_1_promena = Koji_je_broj_sada_1
    Broj_2_promjena = Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA
    _1_broj = Broj_1_promena
    _2_broj = Broj_2_promjena
    _1_broj_i_2_broj = _1_broj + _2_broj
    for (let INDEX_JE = 0; INDEX_JE <= _1_broj + _2_broj; INDEX_JE++) {
        basic.showNumber(INDEX_JE)
    }
    for (let Index_je_opet = 0; Index_je_opet <= _1_broj_i_2_broj / 2; Index_je_opet++) {
        basic.showNumber(Index_je_opet)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Kjb_b == 1) {
        Koji_je_broj_sada_1 = Koji_je_broj_sada_1 + 1
        basic.showNumber(Koji_je_broj_sada_1)
    } else {
        Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA = Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA + 1
        basic.showNumber(Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    Kjb_b = 1
    basic.showNumber(Koji_je_broj_sada_1)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(Koji_je_broj_sada_2_GLEDAJTE_U_BIOSKOPIMA)
})
