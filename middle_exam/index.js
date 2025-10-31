const { kelolaLahan } = require('./modules/lahan');
const { cekSkak } = require('./modules/catur');

const lahan = [
    ["subur", "subur", "kering", "subur"],
    ["subur", "kering", "kering", "kering"],
    ["subur", "subur", "subur", "kering"],
    ["kering", "kering", "kering", "kering"]
];

const cuaca = { suhu: 25, kelembapan: 70, angin: 10 };
const hasil = kelolaLahan(lahan, cuaca);

console.log("=== HASIL LAHAN ===");
console.log("Total petak subur:", hasil.totalSubur);
console.log("Total petak yang ditanami:", hasil.totalTanam);
if (!hasil.cuacaCocok) console.log("Cuaca tidak cocok untuk bercocok tanam");

const papan = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "K", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

console.log("\n=== CEK CATUR ===");
console.log(cekSkak(papan));
