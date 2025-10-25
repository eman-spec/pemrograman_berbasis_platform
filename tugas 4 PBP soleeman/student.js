let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

let topStudent = studentsScore.reduce((best, s) => {
  return (best === null || s.score > best.score) ? s : best;
}, null);

console.log(`Siswa dengan nilai tertinggi: ${topStudent.name} (${topStudent.score})`);
