//Soleeman Firdaus Ode

function cekSkak(papan) {
    let posisiRaja, posisiBenteng;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (papan[i][j] === "K") posisiRaja = [i, j];
            if (papan[i][j] === "R") posisiBenteng = [i, j];
        }
    }
    const [rR, kR] = posisiRaja;
    const [rB, kB] = posisiBenteng;
    if (rR === rB) return "SKAK!";
    if (kR === kB) return "SKAK!";
    return "Aman";
}

module.exports = { cekSkak };
