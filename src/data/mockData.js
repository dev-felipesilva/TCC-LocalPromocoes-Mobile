export const MARKETS = [
  { 
    id: 'm1', 
    name: 'Supermercado BigCompra', 
    address: 'Av. Orestes Quércia, 155', 
    latitude: -20.330118951777823, 
    longitude: -47.791544510657545,
  },
  { 
    id: 'm2', 
    name: 'São José Supermercados', 
    address: 'Rua Gabriel Teodoro de Oliveira, 104', 
    latitude: -20.327479671130423,
    longitude: -47.788056105235995,
  },
  { 
    id: 'm3', 
    name: 'Paulista Supermercados', 
    address: 'Av. Dr. Paulo Borges de Oliveira, 564/580', 
    latitude: -20.338530418312757,
    longitude: -47.7962594670069,
  },
];

export const PRODUCTS = [
  { id: 'p1', name: 'Arroz 5kg' },
  { id: 'p2', name: 'Leite 1L' },
  { id: 'p3', name: 'Óleo de Soja 900ml' },
  { id: 'p4', name: 'Café 500g' },
  { id: 'p5', name: 'Feijão 1kg' },
  { id: 'p6', name: 'Leite Condensado' },
  { id: 'p7', name: 'Ovos Brancos c/12 unidades' },
];

// O "banco de dados" dos preços. 
export const PRICES = {
  'p1': { 'm1': 19.98, 'm2': 21.00, 'm3': 23.90 }, // Arroz
  'p2': { 'm1': 4.99,  'm2': 4.99,  'm3': 5.29 },  // Leite
  'p3': { 'm1': 6.98,  'm2': 6.99,  'm3': 9.59 },  // Óleo
  'p4': { 'm1': 26.98, 'm2': 26.99, 'm3': 28.79 }, // Café
  'p5': { 'm1': 4.99,  'm2': 4.99,  'm3': 6.99 },  // Feijão
  'p6': { 'm1': 4.99,  'm2': 5.99,  'm3': 7.79 },  // Leite Condensado
  'p7': { 'm1': 8.98,  'm2': 8.99,  'm3': 10.99 },  // Ovos
};