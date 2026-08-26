# Site — Aquela Marca

E-commerce estático (HTML/CSS/JS puro) para a Aquela Marca, pronto para deploy na **Netlify**, sem build.

## Estrutura

```
index.html               Home
loja.html                 Loja (catálogo completo)
colecao.html?c=slug        Página de coleção (ex: brasilidades)
produto.html?slug=slug     Página de produto
sobre.html                 Sobre a Marca (manifesto)
personalizados.html        Pedido de camiseta personalizada
carrinho.html              Carrinho (localStorage)
checkout.html               Checkout (formulário + resumo do pedido)
obrigado-pedido.html         Confirmação pós-compra
obrigado-personalizado.html  Confirmação pós-pedido personalizado
404.html
css/style.css              Design system (editorial, premium, brasileiro)
js/products.js              Catálogo de produtos (fonte de dados)
js/cart.js                  Carrinho de compras (localStorage)
js/main.js                  Menu mobile, animações, filtros
assets/                    Logo (SVG) + favicon
robots.txt, sitemap.xml, netlify.toml
```

## ⚠️ Antes de publicar — dados a confirmar com o cliente

O briefing não trouxe telefone, e-mail, Instagram, domínio nem preços reais. Foram usados **placeholders** que precisam ser substituídos:

| Placeholder | Onde aparece | Trocar por |
|---|---|---|
| `5511900000000` (WhatsApp) | Botão flutuante, header, footer, checkout | Número real do WhatsApp |
| `contato@aquelamarca.com.br` | Footer | E-mail comercial real |
| `@aquelamarca` / `instagram.com/aquelamarca` | Footer | Perfil real do Instagram |
| `aquelamarca.com.br` | Meta tags, sitemap, robots.txt | Domínio definitivo |
| `R$ 149,90` (`js/products.js`) | Preço dos 3 produtos de exemplo | Preço real de cada peça |

Busca e troca rápida:
```bash
grep -rl "5511900000000" . | xargs sed -i 's/5511900000000/55SEUNUMERO/g'
```

## Logo

Marca criada do zero em SVG (`assets/logo-wordmark.svg`, versão branca e ícone/monograma "AM"), com tipografia serifada itálica remetendo a moda editorial, nas cores propostas (tinta escura + terracota). Totalmente editável e substituível pela logo oficial, se houver.

## Produtos e preços (importante)

Como o cliente ainda não enviou fotos, preços definitivos nem catálogo completo, o site foi lançado com **3 produtos de exemplo** da coleção Brasilidades (Amazonas, Rio de Janeiro, São Paulo), com fotos placeholder (blocos tipográficos coloridos, sem fingir ser fotografia real) e preço de exemplo (R$ 149,90). Edite `js/products.js` para:
- Trocar `theme` por uma imagem real (ajuste o CSS `.ph-*` em `css/style.css`, ou substitua os blocos `.product-photo` por `<img>`).
- Ajustar preços, tamanhos disponíveis e descrições.
- Adicionar novos produtos/coleções (edite também `COLLECTIONS`).

## Carrinho e Checkout

O carrinho funciona 100% no navegador (localStorage), sem backend. O checkout **não tem gateway de pagamento integrado ainda** — o formulário coleta os dados do pedido (via Netlify Forms) e informa ao cliente final que o pagamento será combinado por WhatsApp/e-mail após a confirmação. Isso é intencional para o lançamento inicial; quando o cliente tiver conta em um gateway (Mercado Pago, Stripe, PagSeguro etc.), a integração pode ser adicionada depois.

## Seção Personalizados

Fluxo com 5 etapas: para quem é a peça, escolha de arte, posicionamento, história/foto de referência e dados de contato. As etapas **"Escolha a arte"** e **"Posicionamento"** foram deixadas na estrutura (conforme pedido) mas estão marcadas como **"Em breve"** e não são interativas ainda — é a área que o cliente pediu para já deixar reservada, sem ativar no primeiro momento. O formulário aceita upload de foto de referência (via Netlify Forms, que suporta anexos).

## Painel Admin (pendente)

Nos próximos passos, o mesmo padrão do site de eventos (login com Supabase + painel para gerenciar pedidos, personalizados e produtos) pode ser adicionado aqui. Isso ainda não foi implementado nesta primeira entrega — avise quando quiser que eu monte o painel.

## Formulários (Netlify Forms)

Dois formulários já configurados com `data-netlify="true"`, sem precisar de backend:
- `pedido` (checkout.html) — pedidos de compra.
- `personalizados` (personalizados.html) — pedidos personalizados, com upload de foto.

Após o deploy, configure notificações por e-mail em Site settings → Forms → Form notifications.

## Deploy na Netlify

1. Conecte este repositório na Netlify.
2. Build command: (vazio).
3. Publish directory: `.`.
4. Configure domínio e SSL (grátis via Netlify).

## SEO

Meta tags, Open Graph, dados estruturados (`ClothingStore`), `sitemap.xml` e `robots.txt` configurados. Atualize o domínio real antes de publicar.
