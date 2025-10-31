function cekCuaca(cuaca) {
    const { suhu, kelembapan, angin } = cuaca;
    return suhu >= 20 && suhu <= 30 && kelembapan > 50 && angin < 15;
}

function kelolaLahan(lahan, cuaca) {
    let totalSubur = 0;
    for (let i = 0; i < lahan.length; i++) {
        const baris = lahan[i];
        const jumlahSubur = baris.filter(petak => petak === "subur").length;
        if (jumlahSubur < baris.length / 2) {
            lahan[i] = baris.map(() => "kering");
        } else {
            totalSubur += jumlahSubur;
        }
    }
    const cuacaCocok = cekCuaca(cuaca);
    return { totalSubur, totalTanam: cuacaCocok ? totalSubur : 0, cuacaCocok };
}

module.exports = { kelolaLahan };
