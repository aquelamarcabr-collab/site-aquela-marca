// Cliente Supabase compartilhado (backend do painel admin, produtos e pedidos)
// TODO: projeto ainda não provisionado — troque pela URL/chave reais assim que o
// backend for criado. Enquanto isso, o site funciona normalmente com o catálogo
// estático (js/products.js) como reserva.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = 'placeholder-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
