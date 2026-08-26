// Cliente Supabase compartilhado (backend do painel admin, produtos e pedidos)
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ldxgrdquetzbbbonpjem.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkeGdyZHF1ZXR6YmJib25wamVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3MDA0MTgsImV4cCI6MjEwMzI3NjQxOH0.yxnlM0Z-wePnPVw3fxpdlHFqb9HOPeaUiL4EyRmhA0A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
