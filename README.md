# Site do Grupo Nery

Site institucional da consultoria de gestão de obras do Grupo Nery. É **estático**: só HTML, CSS e um pouco de JavaScript.
- **Não tem build.**
- **Não precisa de variáveis de ambiente.**

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | Página única: início, dores, serviços, método, ferramentas, cases, sobre, perguntas frequentes e contato |
| `styles.css` | Visual: azul-marinho e verde, responsivo, modo escuro automático |
| `script.js` | Menu do celular, botões de WhatsApp e e-mail, formulário. **A configuração fica no topo** |
| `img/rdo-modelo.png` | Imagem do RDO padrão (gerada do vault GESTAO) |
| `favicon.svg` | Ícone provisório "GN" (trocar pela logo oficial) |

## Antes de publicar: preencher em `script.js`
```js
const CONFIG = {
  whatsapp: "5513999999999",   // DDI + DDD + número, só dígitos
  email: "contato@seudominio.com.br",
  bio: "João D. Souza · engenheiro civil, CREA-SP nº ..., X anos em obras de saneamento.",
};
```
Enquanto estiverem vazios:
- os botões levam para o formulário;
- o botão flutuante de WhatsApp fica escondido.

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
A estrutura de seções foi pensada a partir da análise do site da Barufi Consultoria. Os textos e a identidade visual são próprios. A análise está no vault GESTAO, em `06_Conteudo/Site_Grupo_Nery.md`.
