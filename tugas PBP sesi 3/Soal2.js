//SOAL 2

function adalahPrima(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function jumlahPrimaDalamRentang(awal, akhir) {
    let totalJumlah = 0
    
    let batasAwal = Math.max(1, awal)

    for (let i = batasAwal; i <= akhir; i++) {
        if (adalahPrima(i)) {
            totalJumlah += i;
        }
    }

    return totalJumlah;
}

let inputAwal = 5;
let inputAkhir = 15;
let outputJumlah = jumlahPrimaDalamRentang(inputAwal, inputAkhir);
console.log(`Rentang: ${inputAwal} hingga ${inputAkhir}, Jumlah Prima: ${outputJumlah}`); 