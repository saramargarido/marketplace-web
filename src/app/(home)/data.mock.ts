export const data = [
  {
    visitors: 100,
    date: '2021-09-01',
  },
  {
    visitors: 23,
    date: '2021-09-02',
  },
  {
    visitors: 143,
    date: '2021-09-03',
  },
  {
    visitors: 11,
    date: '2021-09-04',
  },
  {
    visitors: 23,
    date: '2021-09-05',
  },
]
for (let i = 6; i <= 30; i++) {
  data.push({
    visitors: Math.floor(Math.random() * 3350),
    date: `2021-09-${i.toString().padStart(2, '0')}`,
  })
}
