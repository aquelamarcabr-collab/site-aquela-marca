// Aquela Marca — catálogo de produtos (fonte de dados do site)
// TODO: preços e descrições são exemplos iniciais — confirmar com o cliente antes do lançamento.
const PRODUCTS = [
  {
    slug: 'camiseta-amazonas',
    name: 'Amazonas',
    collection: 'Brasilidades',
    collectionSlug: 'brasilidades',
    theme: 'amazonas',
    price: 149.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Novo',
    shortDescription: 'Uma homenagem à maior floresta tropical do mundo.',
    description: 'A camiseta Amazonas nasce da imensidão verde que guarda a maior biodiversidade do planeta. Peça confeccionada em malha 100% algodão premium de 250g, com caimento estruturado e toque macio — feita para durar muito além da primeira lavagem.',
  },
  {
    slug: 'camiseta-rio-de-janeiro',
    name: 'Rio de Janeiro',
    collection: 'Brasilidades',
    collectionSlug: 'brasilidades',
    theme: 'rio',
    price: 149.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Novo',
    shortDescription: 'A energia da cidade maravilhosa em forma de camiseta.',
    description: 'A camiseta Rio de Janeiro traduz o encontro entre a montanha e o mar em uma peça atemporal. Malha 100% algodão premium de 250g, com caimento estruturado e acabamento que valoriza cada detalhe da confecção.',
  },
  {
    slug: 'camiseta-sao-paulo',
    name: 'São Paulo',
    collection: 'Brasilidades',
    collectionSlug: 'brasilidades',
    theme: 'sp',
    price: 149.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Novo',
    shortDescription: 'A força urbana e criativa da maior metrópole do Brasil.',
    description: 'A camiseta São Paulo é um retrato da energia concreta e criativa da cidade que nunca para. Malha 100% algodão premium de 250g, toque macio e qualidade perceptível já no primeiro uso.',
  }
];

const COLLECTIONS = [
  {
    slug: 'brasilidades',
    name: 'Brasilidades',
    theme: 'amazonas',
    tagline: 'Primeiro Drop',
    manifesto: 'Uma coleção inspirada na riqueza cultural e natural do Brasil — homenageando estados que carregam histórias, paisagens e identidades únicas. Cada camiseta é uma forma de vestir orgulho e pertencimento.'
  }
];

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

function getProductsByCollection(collectionSlug) {
  return PRODUCTS.filter((p) => p.collectionSlug === collectionSlug);
}

function getCollectionBySlug(slug) {
  return COLLECTIONS.find((c) => c.slug === slug);
}
