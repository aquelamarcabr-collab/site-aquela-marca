# Site — Aquela Marca

E-commerce estático (HTML/CSS/JS puro) para a Aquela Marca, pronto para deploy na **Netlify**, sem build.

## Estrutura

```
index.html               Home
loja.html                 Loja (catálogo completo)
colecao.html?c=slug        Página de coleção (ex: brasilidades)
produto.html?slug=slug     Página de produto
sobre.html                 Sobre a Marca (manifesto)
personalizados.html        Grade de camisetas personalizadas (Casal, Família, Pet, Projeto especial)
carrinho.html              Carrinho (localStorage)
checkout.html               Checkout (formulário + resumo do pedido)
obrigado-pedido.html         Confirmação pós-compra
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

Logo em formato de selo circular com monograma "AM" entrelaçado (`assets/logo-badge.svg`, versão branca e ícone), baseada na referência visual enviada pelo cliente. Totalmente editável em SVG.

## Produtos e preços (importante)

Como o cliente ainda não enviou fotos e preços definitivos, o site foi lançado com produtos de exemplo: 3 da coleção Brasilidades (Amazonas, Rio de Janeiro, São Paulo) e 4 da coleção Personalizados (Casal, Família, Pet, Projeto especial), com fotos placeholder (blocos tipográficos coloridos, sem fingir ser fotografia real) e preços de exemplo.

**A partir de agora, o catálogo é editado pelo painel admin** (`/admin/` → aba Produtos), não mais direto no código — é lá que se ajustam preços, tamanhos, descrições, especificações e se cadastram novos produtos. `js/products.js` continua no projeto apenas como reserva (usado automaticamente só se o banco estiver indisponível), então pode ficar desatualizado sem problema.

No editor de produtos do admin também dá pra:
- Preencher **especificações** (material, coleção, cuidados etc.) linha a linha no formato `Nome: valor` — aparecem na página do produto no lugar da lista padrão.
- Marcar um produto como **Personalizável**, o que faz a página do produto mostrar os campos "Para quem é" e "Conte a história" antes do botão de compra.

Fotos reais ainda não são suportadas via upload no painel (os produtos usam blocos de cor no lugar de foto). Quando o cliente tiver as fotos, me avise para adicionarmos upload de imagem.

## Carrinho e Checkout

O carrinho funciona 100% no navegador (localStorage), sem backend. O checkout **não tem gateway de pagamento integrado ainda** — o formulário coleta os dados do pedido (via Netlify Forms) e informa ao cliente final que o pagamento será combinado por WhatsApp/e-mail após a confirmação. Isso é intencional para o lançamento inicial; quando o cliente tiver conta em um gateway (Mercado Pago, Stripe, PagSeguro etc.), a integração pode ser adicionada depois.

## Seção Personalizados

Personalizados agora funciona como uma **grade de produtos compráveis** (Casal, Família, Pet, Projeto especial), no mesmo padrão visual da Loja — substituindo o antigo formulário de pedido em 5 etapas. O cliente escolhe o modelo, preenche "para quem é" e a história da estampa direto na página do produto, e finaliza a compra pelo checkout normal, como qualquer outro produto. Depois do pedido confirmado, ele envia as fotos de referência pelo WhatsApp para a equipe montar a arte (mensagem reforçada na página de agradecimento do pedido). Quando um item personalizado é comprado, o pedido salvo no admin mostra a personalização informada (para quem / história) junto com os dados do pedido.

## Painel Admin

Disponível em `/admin/login.html`. Login: `aquelamarca.br@gmail.com` — a senha foi enviada separadamente no chat (não fica salva neste repositório). Recomendo trocá-la após o primeiro acesso (Supabase → Authentication → Users → ⋮ → Reset password).

No painel dá pra:
- **Produtos**: criar, editar, publicar/despublicar e excluir produtos da loja (nome, preço, tamanhos, descrição, especificações, cor de exibição, se é personalizável). Assim que uma edição é publicada, ela aparece automaticamente no site.
- **Pedidos**: ver todos os pedidos feitos no checkout (itens, valor, endereço, contato, personalização informada quando houver) e atualizar o status (Novo / Pago / Enviado / Concluído / Cancelado).
- **Personalizados**: aba mantida no painel para o histórico de pedidos enviados pelo antigo formulário; novos pedidos personalizados agora chegam pela aba Pedidos, junto com os demais.

Backend: projeto Supabase próprio (`ldxgrdquetzbbbonpjem`), separado do site de eventos, com Row Level Security — o público só consegue enviar pedidos e ler produtos publicados; só quem está logado lê/edita tudo. A chave usada no front-end é pública (anon) por design do Supabase — a segurança real está nas políticas RLS, não na chave.

Se o Supabase ficar fora do ar por algum motivo, a loja (Home, Loja, Coleção, Produto) continua funcionando normalmente usando o catálogo estático de `js/products.js` como reserva automática.

## Formulários (Netlify Forms)

Um formulário já configurado com `data-netlify="true"`, sem precisar de backend:
- `pedido` (checkout.html) — pedidos de compra, incluindo os personalizados (já que agora eles passam pelo checkout normal).

Após o deploy, configure notificações por e-mail em Site settings → Forms → Form notifications.

## Deploy na Netlify

1. Conecte este repositório na Netlify.
2. Build command: (vazio).
3. Publish directory: `.`.
4. Configure domínio e SSL (grátis via Netlify).

## SEO

Meta tags, Open Graph, dados estruturados (`ClothingStore`), `sitemap.xml` e `robots.txt` configurados. Atualize o domínio real antes de publicar.
