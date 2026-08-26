// Busca produtos publicados no Supabase; usa o catálogo estático (js/products.js) como
// reserva caso o banco esteja indisponível, garantindo que a loja nunca fique vazia.
import { supabase } from './supabase-client.js';

function mapRow(row) {
  return {
    slug: row.slug,
    name: row.name,
    collection: row.collection,
    collectionSlug: row.collection_slug,
    theme: row.theme,
    price: Number(row.price),
    sizes: row.sizes || [],
    tag: row.tag,
    shortDescription: row.short_description,
    description: row.description
  };
}

export async function fetchProducts() {
  try {
    const result = await Promise.race([
      supabase.from('products').select('*').eq('published', true).order('created_at', { ascending: false }),
      new Promise((resolve) => setTimeout(() => resolve({ data: null, error: new Error('timeout') }), 3000))
    ]);
    if (result.error || !result.data || result.data.length === 0) throw result.error || new Error('empty');
    return result.data.map(mapRow);
  } catch (e) {
    console.warn('Catálogo dinâmico indisponível, usando dados estáticos:', e && e.message);
    return typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
  }
}
