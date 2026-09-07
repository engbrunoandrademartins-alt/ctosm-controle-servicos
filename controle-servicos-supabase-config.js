// Configuração do Supabase — Controle de Serviços de Manutenção (CTOSM)
// Usa o MESMO projeto Supabase do sistema de estoque (ctosm-estoque), mas
// com tabelas próprias (prefixo cs_: cs_registros, cs_fotos, cs_documentos)
// e um bucket de arquivos próprio ("servicos-manutencao").
//
// A "anon key" abaixo é uma chave pública (segura no código do front-end).
// O controle de acesso é feito pelas políticas de RLS do banco (liberado
// para leitura/escrita, já que este é um sistema interno sem login).
window.SUPABASE_URL = "https://cqopgqmsjwfczhbiishj.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxb3BncW1zandmY3poYmlpc2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2NDM5MzAsImV4cCI6MjEwNDIxOTkzMH0.O3HuqHax9u2ZEdW4gpodbfPxWU05Sujg94L2SicfmbI";
window.SUPABASE_BUCKET = "servicos-manutencao";
