export const products = [
  {
    id: '1',
    title: 'Sofá',
    description:
      'Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.',
    priceInCents: 1232,
    ownerId: 34,
    status: 'available',
    categoryId: 'xxx',
    views: {
      data: {
        id: 1,
        viewerId: 33,
        createdAt: new Date(),
      },
    },
    attachments: {
      create: {
        id: 'file1',
        path: 'https://placehold.co/600x400.png',
      },
    },
  },
]

for (let i = 2; i <= 10; i++) {
  products.push({
    id: (Math.random() * 3350).toString(),
    title: 'Sofá',
    description:
      'Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.',
    priceInCents: Math.floor(Math.random() * 3350),
    ownerId: 34,
    status: 'available',
    categoryId: 'xxx',
    views: {
      data: {
        id: Math.random() * 3350,
        viewerId: 33,
        createdAt: new Date(),
      },
    },
    attachments: {
      create: {
        id: 'file1',
        path: 'https://placehold.co/600x400.png',
      },
    },
  })
}
