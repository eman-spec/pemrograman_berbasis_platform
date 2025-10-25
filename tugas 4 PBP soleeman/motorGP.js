// Soal 2

let motoGP = [
  { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
  { circuit: 'Autodromo', location: 'Argentina', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
  { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
  { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

let grouped = motoGP.reduce((acc, race) => {
  let country = race.winner.country;
  let winnerFull = `${race.winner.firstName} ${race.winner.lastName}`;
  if (!acc[country]) {
    acc[country] = { winningCircuits: [], totalWins: 0 };
  }
  acc[country].winningCircuits.push({
    circuit: race.circuit,
    location: race.location,
    winner: winnerFull
  });
  acc[country].totalWins += 1;
  return acc;
}, {});

console.log(grouped);