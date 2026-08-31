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
    customizable: false,
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
    customizable: false,
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
    customizable: false,
    shortDescription: 'A força urbana e criativa da maior metrópole do Brasil.',
    description: 'A camiseta São Paulo é um retrato da energia concreta e criativa da cidade que nunca para. Malha 100% algodão premium de 250g, toque macio e qualidade perceptível já no primeiro uso.',
  },
  {
    slug: 'personalizada-casal',
    name: 'Personalizada Casal',
    collection: 'Personalizados',
    collectionSlug: 'personalizados',
    theme: 'casal',
    price: 179.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Personalize',
    customizable: true,
    shortDescription: 'Monte a estampa com a foto e a história de vocês dois.',
    description: 'Uma camiseta pensada para casais: envie uma foto e conte a história de vocês, e transformamos isso em uma estampa exclusiva. Malha 100% algodão premium de 250g. Após a compra, nossa equipe entra em contato para combinar a arte.',
  },
  {
    slug: 'personalizada-familia',
    name: 'Personalizada Família',
    collection: 'Personalizados',
    collectionSlug: 'personalizados',
    theme: 'familia',
    price: 179.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Personalize',
    customizable: true,
    shortDescription: 'Uma estampa exclusiva com quem você mais ama.',
    description: 'Camiseta personalizada para celebrar a família: mães, pais, filhos — cada peça é montada a partir das fotos e da história que você quiser eternizar. Malha 100% algodão premium de 250g.',
  },
  {
    slug: 'personalizada-pet',
    name: 'Personalizada Pet',
    collection: 'Personalizados',
    collectionSlug: 'personalizados',
    theme: 'pet',
    price: 179.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Personalize',
    customizable: true,
    shortDescription: 'Vista a estampa do seu melhor amigo de quatro patas.',
    description: 'Camiseta personalizada com a foto do seu pet. Perfeita para quem quer levar aquele companheiro em qualquer lugar. Malha 100% algodão premium de 250g.',
  },
  {
    slug: 'personalizada-projeto-especial',
    name: 'Personalizada Projeto Especial',
    collection: 'Personalizados',
    collectionSlug: 'personalizados',
    theme: 'amigos',
    price: 179.90,
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Personalize',
    customizable: true,
    shortDescription: 'Sua ideia, seu evento, sua turma — em uma camiseta única.',
    description: 'Para formaturas, aniversários, viagens em grupo ou qualquer projeto especial: conte sua ideia e criamos uma estampa exclusiva para a ocasião. Malha 100% algodão premium de 250g.',
  }
];

const COLLECTIONS = [
  {
    slug: 'brasilidades',
    name: 'Brasilidades',
    theme: 'amazonas',
    tagline: 'Primeiro Drop',
    manifesto: 'Uma coleção inspirada na riqueza cultural e natural do Brasil — homenageando estados que carregam histórias, paisagens e identidades únicas. Cada camiseta é uma forma de vestir orgulho e pertencimento.'
  },
  {
    slug: 'personalizados',
    name: 'Personalizados',
    theme: 'casal',
    tagline: 'Toda história merece ser vestida',
    manifesto: 'Camisetas personalizadas para casais, famílias, pets e projetos especiais — a partir de fotos e memórias. Escolha o modelo, faça o pedido e envie as fotos: nós montamos a estampa pra você.'
  }
];

function formatInstallment(price, times) {
  times = times || 3;
  return 'ou em até ' + times + 'x de ' + formatPrice(price / times);
}

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
