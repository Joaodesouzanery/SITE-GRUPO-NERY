# Site do Grupo Nery

Site institucional da consultoria de gestão de obras do Grupo Nery. É **estático**: só HTML, CSS e um pouco de JavaScript.
- **Não tem build.**
- **Não precisa de variáveis de ambiente.**

Publicado em: **https://consultoriagruponery.vercel.app** (Vercel, deploy automático a cada push).

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | Página única: carrossel, Soluções (seletor por perfil + trilha de 3 etapas), realizações com modal, conteúdo, sobre nós e equipe, números, missão/visão/valores, chamada final, contato |
| `styles.css` | Identidade Grupo Nery: tinta #14171C, petróleo #0B4F6C, água #1BA6B5, areia #F3F0EA, âmbar #F2A33A. Space Grotesk + Inter. Cortes diagonais do N |
| `script.js` | **Configuração no topo** (WhatsApp, e-mail, redes) + textos das Realizações (modal), carrossel, seletor de perfis, formulário |
| `img/logo-*.png`, `img/simbolo-*.png` | Logo oficial (escura e branca) e símbolo N (também favicon) |
| `img/*.jpg` | Fotos provisórias do Unsplash (créditos em `img/CREDITOS.md`): trocar por fotos das obras |

## Configuração em `script.js`
```js
const CONFIG = {
  whatsapp: "5513999999999",   // DDI + DDD + número, só dígitos
  email: "neryadministrativo@gmail.com",
  redes: { linkedin: "https://...", facebook: "", instagram: "https://..." },
};
```
Enquanto o WhatsApp e as redes estiverem vazios, os botões de WhatsApp e os ícones dessas redes ficam escondidos.

Também:
- **Trocar fotos:** substitua o arquivo em `img/`, mantendo o nome.
- **Editar Realizações:** lista `OBRAS` no `script.js`.
- **Números grandes:** seção `numeros` do `index.html`. Hoje mostram a experiência da equipe técnica, tirada do currículo do engenheiro responsável; use só números comprovados.

## Regras de conteúdo
- Clientes só com nome quando autorizado (WCR Saneamento: empresa do grupo; Compizzo: autorizada).
- Números de resultado só quando medidos contra a linha de base. Estimativa é chamada de estimativa.
- Nada de dado pessoal (CPF, telefones pessoais) no site.

## Referência
A estrutura de seções teve como referência o site da Barufi Consultoria. A identidade visual (cores, tipografia, Soluções em trilha, cortes diagonais) é própria do Grupo Nery. Guia no vault GESTAO: `06_Conteudo/Identidade_Visual_Grupo_Nery.md`.
