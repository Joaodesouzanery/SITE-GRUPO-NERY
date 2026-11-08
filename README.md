# Site do Grupo Nery

Site institucional da consultoria de gestão de obras do Grupo Nery. É **estático**: só HTML, CSS e um pouco de JavaScript.
- **Não tem build.**
- **Não precisa de variáveis de ambiente.**

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | Página única no layout de consultoria de engenharia: carrossel, soluções por perfil de cliente (abas), realizações com modal, conteúdo, sobre nós, números, missão/visão/valores, chamada final, contato |
| `styles.css` | Visual: branco, cinza-grafite e verde Nery; responsivo |
| `script.js` | **Configuração no topo** (WhatsApp, e-mail, redes) + textos das Realizações (modal), carrossel, abas, formulário |
| `img/` | Fotos provisórias do Unsplash (créditos em `img/CREDITOS.md`): trocar por fotos das obras |
| `favicon.svg` | Ícone provisório "GN" (trocar pela logo oficial) |

## Antes de publicar: preencher em `script.js`
```js
const CONFIG = {
  whatsapp: "5513999999999",   // DDI + DDD + número, só dígitos
  email: "contato@seudominio.com.br",
  redes: { linkedin: "https://...", facebook: "", instagram: "https://..." },
};
```
Enquanto estiverem vazios:
- os botões levam para o formulário;
- o botão flutuante de WhatsApp e os ícones de redes vazios ficam escondidos.

Para trocar fotos: substitua o arquivo em `img/` mantendo o nome.
Para editar Realizações: lista `OBRAS` no `script.js`.
Para os números grandes: seção `numeros` do `index.html` (use só números comprovados).

## Publicar na Vercel
1. vercel.com → **Add New → Project** → importar `Joaodesouzanery/SITE-GRUPO-NERY`.
2. Framework Preset: **Other** · Build Command: vazio · Output Directory: vazio (raiz).
3. **Deploy**. Domínio próprio em *Settings → Domains*.

Alternativa sem custo: GitHub Pages (*Settings → Pages → Deploy from branch*, pasta raiz).

## Regras de conteúdo
- Cases sempre **anonimizados**, salvo autorização escrita do cliente.
- Números de resultado só quando medidos contra a linha de base. Estimativa é chamada de estimativa.
- Nada de dado pessoal (CPF, telefones de terceiros) no site.

## Referência
O layout segue o padrão do site da Barufi Consultoria (referência pedida pelo João). Nome, logo e textos são do Grupo Nery. A análise está no vault GESTAO, em `06_Conteudo/Site_Grupo_Nery.md`.
