# SEO Data Report: Graziella Fusari

Generated: 2026-06-11  
Site checked: https://graziellafusari.com/  
Purpose: discovery/data gathering only. No website code changes were made for this audit report.

## 1. Site Overview

| Item | Finding |
|---|---|
| Tech stack detected | Next.js App Router, React, TypeScript, Tailwind CSS, lucide-react icons |
| Framework/version | `next@15.5.18`, `react@19.0.0`, `tailwindcss@4.3.0` from `package.json` |
| Rendering/deployment mode | Static export via `output: "export"` in `next.config.ts:6`; `images.unoptimized: true` in `next.config.ts:8` |
| Hosting assumptions | Live headers and `.github/workflows/deploy.yml` indicate GitHub Pages. `CNAME` and `public/CNAME` both contain `graziellafusari.com`. README still mentions Vercel, likely stale documentation. |
| Main route files | `/` -> `app/page.tsx`; `/processo/` -> `app/processo/page.tsx`; `/servicos/` -> `app/servicos/page.tsx`; `/sobre/` -> `app/sobre/page.tsx`; `/contato/` -> `app/contato/page.tsx`; `/arquitetura-terapeutica/` -> `app/arquitetura-terapeutica/page.tsx`; `/perfumaria-terapeutica/` -> `app/perfumaria-terapeutica/page.tsx`; `/terapias-individuais/` -> `app/terapias-individuais/page.tsx` |
| Re-exported duplicate routes | `/servicos/arquitetura-terapeutica/`, `/servicos/perfumaria-terapeutica/`, `/servicos/atendimentos-terapeuticos-individuais/` re-export the root service pages from `app/servicos/*/page.tsx`. |
| Dynamic routes | None found. |
| Redirect/trailing slash behavior | `trailingSlash: true` in `next.config.ts:7`. Live check: `https://graziellafusari.com/processo` returns 301 to `/processo/`. |
| HTTPS/www behavior | `http://graziellafusari.com/`, `https://www.graziellafusari.com/`, and `http://www.graziellafusari.com/` 301 to `https://graziellafusari.com/`. |

## 2. URL Inventory

Live checks were performed against `https://graziellafusari.com` on 2026-06-11.

| URL path | Purpose | File location | Live status | Appears indexable | Canonical | Current title | Meta description | H1 | H2/H3 headings | Word count | Main CTA | Images |
|---|---|---|---:|---|---|---|---|---|---|---:|---|---|
| `/` | Homepage/brand overview and service entry points | `app/page.tsx` | 200 | Yes, no noindex detected | Missing | `Graziella Fusari \| Arquitetura Terapêutica e Ambientes Sensoriais` | Arquitetura terapêutica, harmonização de ambientes, terapias integrativas e perfumaria terapêutica para transformar sua casa em um espaço de equilíbrio e bem-estar. | Transforme sua casa em um espaço que cuida de você | H2: Há momentos em que a casa deixa de acompanhar quem você é; Como posso cuidar do seu espaço e da sua energia; Arquitetura Terapêutica é uma forma sensível e integrada de transformar ambientes; O trabalho de Graziella Fusari se organiza em três pilares complementares; Para quem sente que a casa precisa mudar; Como o processo pode começar. H3: Arquitetura Terapêutica; Perfumaria Terapêutica; Atendimentos Terapêuticos Individuais; repeated pillar cards. | ~628 | Agendar conversa pelo WhatsApp; Conhecer os serviços | `/hero-interior.png` |
| `/processo/` | Method/process page | `app/processo/page.tsx` | 200 | Yes | Missing | `Método \| Graziella Fusari` | Conheça o método de Arquitetura Terapêutica que integra leitura do ambiente, direção sensorial e plano de ação. | Um cuidado que começa no espaço e se expande para a vida | H2: Beleza, função e energia trabalhando juntas; Um método sensível, claro e aplicável; Conversa inicial; Leitura do ambiente; Direção sensorial; Plano de ação; Vamos olhar para a sua casa com mais intenção? | ~281 | Agendar conversa pelo WhatsApp | None |
| `/servicos/` | Service overview page | `app/servicos/page.tsx` | 200 | Yes | Missing | `Serviços \| Graziella Fusari` | Três caminhos de cuidado com Arquitetura Terapêutica, Perfumaria Terapêutica e Atendimentos Terapêuticos Individuais. | Três caminhos de cuidado para a casa e para a pessoa | H2: Escolha o caminho que mais conversa com o seu momento; Quer entender por onde começar? H3: Arquitetura Terapêutica; Perfumaria Terapêutica; Atendimentos Terapêuticos Individuais | ~295 | Quero entender qual serviço é ideal para mim | None |
| `/sobre/` | About/brand approach | `app/sobre/page.tsx` | 200 | Yes | Missing | `Sobre \| Graziella Fusari` | Conheça a abordagem autoral de Graziella Fusari, que integra arquitetura, harmonização de ambientes, terapias integrativas e perfumaria terapêutica. | Um olhar sensível para a casa, a pessoa e a experiência de viver | H2: A casa e a pessoa estão em relação constante; Casa, pessoa e sentidos em um mesmo cuidado; Arquitetura Terapêutica; Atendimentos Terapêuticos Individuais; Perfumaria Terapêutica; Vamos olhar para a sua casa com mais intenção? | ~377 | Conversar com Graziella | `/hero-interior.png` |
| `/contato/` | Contact page | `app/contato/page.tsx` | 200 | Yes | Missing | `Contato \| Graziella Fusari` | Entre em contato para conversar sobre consultoria de arquitetura terapêutica, projetos, atendimentos terapêuticos individuais ou perfumaria terapêutica. | Vamos olhar para a sua casa com mais intenção? | H2: WhatsApp; Orientação; Atendimento; Conte brevemente o que você está vivendo | ~173 | Chamar no WhatsApp; Enviar mensagem por email | None |
| `/arquitetura-terapeutica/` | Architecture service landing page | `app/arquitetura-terapeutica/page.tsx` | 200 | Yes, but duplicate of `/servicos/arquitetura-terapeutica/` | Missing | `Arquitetura Terapêutica \| Graziella Fusari` | Consultoria Essencial, Consultoria Completa e Projeto Integral para transformar ambientes com função, beleza, energia e bem-estar. | Sua casa pode sustentar melhor sua vida | H2: Transformar um ambiente exige compreender o que ele sustenta; Escolha o nível de transformação para o seu momento; Consultoria Essencial; Consultoria Completa; Projeto Integral; Um método sensível, claro e aplicável; Vamos olhar para a sua casa com mais intenção? H3: Conversa inicial; Leitura do ambiente; Direção sensorial; Plano de ação | ~624 | Quero começar pela Consultoria Essencial; Falar sobre meu espaço | None |
| `/perfumaria-terapeutica/` | Perfumery service landing page | `app/perfumaria-terapeutica/page.tsx` | 200 | Yes, but duplicate of `/servicos/perfumaria-terapeutica/` | Missing | `Perfumaria Terapêutica \| Graziella Fusari` | A arte de criar aromas com intenção, presença e escuta para harmonizar corpo, emoção e ambiente. | Perfumaria Terapêutica | H2: Um encontro entre planta, pessoa, casa e alma; Para harmonizar a relação entre corpo, emoção e ambiente; Autocuidado e amor próprio; Clareza e presença; Acolhimento emocional; Vitalidade e movimento; Limpeza e renovação energética; Criação de atmosfera; Quer levar a perfumaria terapêutica para o seu espaço? | ~436 | Falar sobre perfumaria terapêutica | None |
| `/terapias-individuais/` | Individual therapy service landing page | `app/terapias-individuais/page.tsx` | 200 | Yes, but duplicate of `/servicos/atendimentos-terapeuticos-individuais/` | Missing | `Atendimentos Terapêuticos Individuais \| Graziella Fusari` | Atendimentos terapêuticos individuais que complementam o cuidado com a casa e apoiam processos de reorganização, equilíbrio e transformação pessoal. | Quando o cuidado também precisa olhar para a pessoa | H2: Um olhar mais profundo para quem habita a casa; Atendimentos conduzidos de acordo com o momento da pessoa; Quer entender se este cuidado faz sentido para o seu momento? | ~261 | Agendar atendimento individual | None |
| `/servicos/arquitetura-terapeutica/` | Duplicate architecture service URL | `app/servicos/arquitetura-terapeutica/page.tsx` re-export | 200 | Yes, duplicate | Missing | Same as `/arquitetura-terapeutica/` | Same as `/arquitetura-terapeutica/` | Same as `/arquitetura-terapeutica/` | Same as `/arquitetura-terapeutica/` | ~624 | Same as `/arquitetura-terapeutica/` | None |
| `/servicos/perfumaria-terapeutica/` | Duplicate perfumery service URL | `app/servicos/perfumaria-terapeutica/page.tsx` re-export | 200 | Yes, duplicate | Missing | Same as `/perfumaria-terapeutica/` | Same as `/perfumaria-terapeutica/` | Same as `/perfumaria-terapeutica/` | Same as `/perfumaria-terapeutica/` | ~436 | Same as `/perfumaria-terapeutica/` | None |
| `/servicos/atendimentos-terapeuticos-individuais/` | Duplicate therapy service URL | `app/servicos/atendimentos-terapeuticos-individuais/page.tsx` re-export | 200 | Yes, duplicate | Missing | Same as `/terapias-individuais/` | Same as `/terapias-individuais/` | Same as `/terapias-individuais/` | Same as `/terapias-individuais/` | ~261 | Same as `/terapias-individuais/` | None |

## 3. Metadata Audit

### Global Metadata and Config

| File | Data found |
|---|---|
| `app/layout.tsx:4` | Global `metadata` object exists. |
| `app/layout.tsx:5` | `metadataBase: new URL("https://graziellafusari.com")`. |
| `app/layout.tsx:6` | Default title and template: `%s \| Graziella Fusari`. |
| `app/layout.tsx:10` | Global description for architecture, harmonization, integrative therapies, perfumery. |
| `app/layout.tsx:12` | Global Open Graph object with title, description, URL, siteName, locale `pt_BR`, type `website`. |
| `next.config.ts:6` | Static export enabled. |
| `next.config.ts:7` | `trailingSlash: true`. |
| `next.config.ts:8` | Images unoptimized. |

### Page-Level Metadata

| Page | Metadata source | Title | Description | OG title/description/image | Twitter | Canonical | Robots | Missing/notes |
|---|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx:12` | Graziella Fusari \| Arquitetura Terapêutica e Ambientes Sensoriais | Present | Global OG title/description inherited; no `og:image` detected | `summary`, inherited title/description generated by Next | Missing | No noindex | Missing canonical, OG image, page-specific OG data |
| `/processo/` | `app/processo/page.tsx:8` | Método \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Missing canonical, page-specific OG |
| `/servicos/` | `app/servicos/page.tsx:8` | Serviços \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Missing canonical, page-specific OG |
| `/sobre/` | `app/sobre/page.tsx:9` | Sobre \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Missing canonical, page-specific OG |
| `/contato/` | `app/contato/page.tsx:8` | Contato \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Missing canonical, page-specific OG |
| `/arquitetura-terapeutica/` and `/servicos/arquitetura-terapeutica/` | `app/arquitetura-terapeutica/page.tsx:10`; re-export in nested route | Arquitetura Terapêutica \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Duplicate URL pair has no canonical |
| `/perfumaria-terapeutica/` and `/servicos/perfumaria-terapeutica/` | `app/perfumaria-terapeutica/page.tsx:8`; re-export in nested route | Perfumaria Terapêutica \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Duplicate URL pair has no canonical |
| `/terapias-individuais/` and `/servicos/atendimentos-terapeuticos-individuais/` | `app/terapias-individuais/page.tsx:10`; re-export in nested route | Atendimentos Terapêuticos Individuais \| Graziella Fusari | Present | Global OG inherited; no `og:image` | `summary`, inherited | Missing | No noindex | Duplicate URL pair has no canonical |

### Site-Wide Metadata Availability

| Item | Status |
|---|---|
| Viewport | Present in rendered pages: `width=device-width, initial-scale=1`. |
| Theme color | Not detected. |
| Favicon | `/favicon.ico` live check returned 404. No favicon asset found in `public/`. |
| Apple touch icon | `/apple-touch-icon.png` live check returned 404. No apple icon asset found in `public/`. |
| Robots meta | Normal pages have no robots directives. 404 page has `noindex`. |
| Canonical tags | Not detected on live pages. |
| Open Graph image | Not detected. |
| Twitter image | Not detected. |
| Sitemap file | Not found; `/sitemap.xml` returned 404. |
| Robots file | Not found; `/robots.txt` returned 404. |

## 4. Content Extraction

### Global Navigation and Footer

Navigation labels from `lib/site-content.ts:20`: Início, Método, Serviços, Sobre, Contato.  
Service menu labels from `lib/site-content.ts:28`: Arquitetura Terapêutica, Perfumaria Terapêutica, Atendimentos Terapêuticos Individuais.  
Header CTA: Agendar.  
Footer text: Graziella Fusari. Arquitetura terapêutica, harmonização de ambientes, terapias integrativas e perfumaria terapêutica. © 2026 Graziella Fusari. Todos os direitos reservados.

### `/`

Hero eyebrow: Arquitetura terapêutica, harmonização de ambientes e recursos sensoriais  
Hero headline: Transforme sua casa em um espaço que cuida de você  
Hero subheadline: Arquitetura terapêutica, harmonização de ambientes e recursos sensoriais para alinhar sua casa ao momento que você está vivendo.  
CTA labels: Agendar conversa pelo WhatsApp; Conhecer os serviços; Entender qual serviço é ideal para mim; Conhecer Arquitetura Terapêutica; Conhecer Perfumaria Terapêutica; Conhecer Atendimentos; Conhecer a Consultoria Essencial; Agendar atendimento individual; Conhecer criações olfativas.

Section titles and main copy:
- A casa como ponto de partida / Há momentos em que a casa deixa de acompanhar quem você é.
- O espaço pode parecer pesado, desorganizado, sem vida ou simplesmente desconectado da fase que você está vivendo.
- Às vezes, não se trata apenas de mudar móveis ou decorar melhor. É preciso olhar para o ambiente como um todo: sua energia, seus fluxos, suas memórias, sua função e a forma como ele afeta quem mora ali.
- A Arquitetura Terapêutica olha para a casa como parte ativa da sua experiência de vida.
- Serviços / Como posso cuidar do seu espaço e da sua energia.
- O que é Arquitetura Terapêutica / Arquitetura Terapêutica é uma forma sensível e integrada de transformar ambientes.
- O objetivo não é apenas deixar o ambiente mais bonito. É criar um espaço mais coerente, acolhedor e alinhado com a vida de quem o habita.
- Uma abordagem integrada / O trabalho de Graziella Fusari se organiza em três pilares complementares.
- Para quem é / Para quem sente que a casa precisa mudar.
- Como o processo pode começar.

Service descriptions from `lib/site-content.ts:49`:
- Arquitetura Terapêutica: Para transformar ambientes em espaços de acolhimento, equilíbrio e presença. Um olhar profundo para a casa como extensão da vida...
- Perfumaria Terapêutica: Para criar aromas, rituais e experiências sensoriais conectadas ao espaço. A criação de aromas terapêuticos amplia a experiência do cuidado...
- Atendimentos Terapêuticos Individuais: Para processos pessoais de cuidado energético, escuta e reorganização interna. Sessões voltadas ao cuidado energético...

### `/processo/`

Hero eyebrow: Método  
Hero headline: Um cuidado que começa no espaço e se expande para a vida  
Hero subheadline: A leitura do ambiente organiza sinais, sensações e necessidades práticas para criar uma direção clara de transformação.  
Section titles: Beleza, função e energia trabalhando juntas; Um método sensível, claro e aplicável; Conversa inicial; Leitura do ambiente; Direção sensorial; Plano de ação; Vamos olhar para a sua casa com mais intenção?  
Main paragraphs:
- O método observa como a casa comunica, acolhe e influencia. A partir dessa leitura, cada decisão busca mais coerência entre o espaço, quem vive nele e a atmosfera sensorial desejada.
- Não se trata de impor uma estética pronta. O processo parte do que já existe, identifica excessos, bloqueios e possibilidades, e transforma percepção em escolhas aplicáveis.
- A casa passa a ser vista como reflexo, abrigo e apoio para quem você está se tornando.
CTA: Agendar conversa pelo WhatsApp.

### `/servicos/`

Hero eyebrow: Serviços  
Hero headline: Três caminhos de cuidado para a casa e para a pessoa  
Hero subheadline: A Arquitetura Terapêutica integra espaço, presença e sensorialidade para transformar a forma como você habita, sente e se relaciona com o ambiente.  
Section titles: Casa → Pessoa → Aroma; Escolha o caminho que mais conversa com o seu momento; Quer entender por onde começar?  
Service card titles/descriptions: same three service overview cards listed in `/`.  
CTA: Quero entender qual serviço é ideal para mim.

### `/sobre/`

Hero eyebrow: Sobre  
Hero headline: Um olhar sensível para a casa, a pessoa e a experiência de viver  
Hero subheadline: Graziella Fusari desenvolve um trabalho autoral que integra arquitetura, harmonização de ambientes, terapias integrativas e perfumaria terapêutica.  
Section titles: A casa e a pessoa estão em relação constante; Casa, pessoa e sentidos em um mesmo cuidado; Transformar a casa é também abrir espaço para uma nova forma de viver; Vamos olhar para a sua casa com mais intenção?  
Main paragraphs:
- O ambiente influencia a forma como descansamos, criamos, nos organizamos, nos percebemos e atravessamos as fases da vida. Ao mesmo tempo, a casa também reflete histórias, escolhas, padrões e momentos internos.
- Por isso, seu trabalho propõe uma transformação integrada: olhar para o espaço, compreender sua energia, reorganizar sua função, trazer beleza com sentido e, quando necessário, aprofundar o cuidado por meio de atendimentos terapêuticos individuais e recursos sensoriais.
- A marca Graziella Fusari não separa técnica e sensibilidade. Ela une olhar profissional, escuta, estética, energia e presença para criar ambientes mais coerentes com a vida de quem os habita.
CTA: Conversar com Graziella.

### `/contato/`

Hero eyebrow: Contato  
Hero headline: Vamos olhar para a sua casa com mais intenção?  
Hero subheadline: Se você sente que seu espaço precisa de mais equilíbrio, beleza, leveza ou sentido, o primeiro passo pode ser uma conversa.  
Contact cards: WhatsApp / Agendar conversa pelo WhatsApp; Orientação / Quero entender qual serviço é ideal para mim; Atendimento / Online e presencial sob consulta.  
Section title: Conte brevemente o que você está vivendo.  
Main paragraphs:
- Conte brevemente o que você está vivendo, o que sente em relação à sua casa e qual tipo de transformação procura.
- A partir disso, será possível indicar o caminho mais adequado: Consultoria Essencial, Consultoria Completa, Projeto Integral, Atendimentos Terapêuticos Individuais ou Perfumaria Terapêutica.
CTA labels: Chamar no WhatsApp; Enviar mensagem por email.

### `/arquitetura-terapeutica/` and `/servicos/arquitetura-terapeutica/`

Hero eyebrow: Arquitetura Terapêutica  
Hero headline: Sua casa pode sustentar melhor sua vida  
Hero subheadline: A Arquitetura Terapêutica transforma ambientes considerando função, beleza, energia, fluxo e bem-estar. Mais do que decorar, o trabalho busca reorganizar a relação entre a casa e quem vive nela.  
Section titles: Transformar um ambiente exige compreender o que ele sustenta; Escolha o nível de transformação para o seu momento; Consultoria Essencial; Consultoria Completa; Projeto Integral; Um método sensível, claro e aplicável; Vamos olhar para a sua casa com mais intenção?  
Main paragraphs:
- A casa guarda histórias, hábitos, excessos, bloqueios e possibilidades.
- Transformar um ambiente exige mais do que escolher objetos bonitos. É preciso compreender como aquele espaço funciona, o que ele comunica, onde ele pesa, onde ele bloqueia e como pode passar a apoiar melhor a rotina, o descanso e a vitalidade da pessoa.
- A Arquitetura Terapêutica une olhar técnico, sensibilidade estética e leitura energética para criar ambientes mais coerentes com a vida de seus moradores.
Service descriptions:
- Consultoria Essencial: A porta de entrada para quem deseja transformar a casa sem necessariamente reformar ou comprar novos móveis...
- Consultoria Completa: Inclui tudo o que está na Consultoria Essencial, com um aprofundamento em interiores...
- Projeto Integral: Indicado quando a transformação envolve reforma, mudanças estruturais ou um projeto mais completo...
CTA labels: Quero começar pela Consultoria Essencial; Quero uma transformação mais completa; Quero falar sobre um projeto; Falar sobre meu espaço.

### `/perfumaria-terapeutica/` and `/servicos/perfumaria-terapeutica/`

Hero eyebrow: Perfumaria Terapêutica  
Hero headline: Perfumaria Terapêutica  
Hero subheadline: A arte de criar aromas com intenção, presença e escuta.  
Section titles: Um encontro entre planta, pessoa, casa e alma; Para harmonizar a relação entre corpo, emoção e ambiente; Autocuidado e amor próprio; Clareza e presença; Acolhimento emocional; Vitalidade e movimento; Limpeza e renovação energética; Criação de atmosfera; Quer levar a perfumaria terapêutica para o seu espaço?  
Main paragraphs:
- A perfumaria terapêutica é a arte de criar aromas com intenção, presença e escuta. Ela vai além de um perfume bonito: é um encontro entre planta, pessoa, casa e alma.
- Cada aroma carrega uma linguagem sutil...
- O olfato é uma porta antiga...
- Na Arquitetura Terapêutica, a perfumaria entra como uma extensão sensorial do espaço...
CTA: Falar sobre perfumaria terapêutica.

### `/terapias-individuais/` and `/servicos/atendimentos-terapeuticos-individuais/`

Hero eyebrow: Atendimentos Terapêuticos Individuais  
Hero headline: Quando o cuidado também precisa olhar para a pessoa  
Hero subheadline: Alguns processos não estão apenas no ambiente. Eles também pedem escuta, reorganização interna e cuidado individual.  
Section titles: Um olhar mais profundo para quem habita a casa; Atendimentos conduzidos de acordo com o momento da pessoa; Quer entender se este cuidado faz sentido para o seu momento?  
Main paragraphs:
- Os Atendimentos Terapêuticos Individuais complementam o trabalho com a casa quando a transformação pede um olhar mais profundo para a pessoa.
- Elas podem apoiar momentos de transição, bloqueios, sobrecargas, padrões repetitivos ou fases em que a pessoa sente necessidade de clareza e reorganização.
- O foco é ampliar a percepção, favorecer equilíbrio e sustentar mudanças que muitas vezes começam no ambiente, mas também passam pela vida interna de quem o habita.
Resources: mesa radiônica; ferramentas de Access Consciousness®; radiestesia; outros recursos integrativos alinhados ao processo.  
CTA: Agendar atendimento individual.

## 5. Heading Structure

| Page | H1 | H2s | H3s | Issues |
|---|---|---|---|---|
| `/` | One H1 | 6 H2s | Service/pillar card H3s | No missing/duplicate H1. Structure is acceptable. |
| `/processo/` | One H1 | 7 H2s | None | Process step titles are H2s; could be deep for card-level content but not broken. |
| `/servicos/` | One H1 | 2 H2s | 3 service H3s | No duplicate H1. |
| `/sobre/` | One H1 | 6 H2s | None | Pillar card titles are H2s; could be H3 under the ecosystem section. |
| `/contato/` | One H1 | 4 H2s | None | Contact card titles are H2s; could be H3 under contact options. |
| `/arquitetura-terapeutica/` | One H1 | 7 H2s | 4 H3s | Service card titles are H2s under a services section. Acceptable but dense. |
| `/perfumaria-terapeutica/` | One H1 | 9 H2s | None | Support moment card titles are H2s; likely should be H3 under "Para harmonizar..." section. |
| `/terapias-individuais/` | One H1 | 3 H2s | None | No missing/duplicate H1. |
| Duplicate `/servicos/*` pages | Same as corresponding root pages | Same | Same | Duplicate route content with no canonical. |

## 6. Internal Linking

### Common Navigation/Footer Links

These appear on most pages via `components/SiteHeader.tsx` and `components/SiteFooter.tsx`.

| Source | Link text | Destination | Exists live? | Type | Notes |
|---|---|---|---|---|---|
| All pages | Graziella Fusari Arquitetura terapêutica | `/` | Yes | Navigation/logo | Good brand link |
| All pages | Início | `/` | Yes | Navigation/footer | Clear |
| All pages | Método | `/processo/` | Yes | Navigation/footer | Clear |
| All pages | Serviços | `/servicos/` | Yes | Navigation/footer | Clear |
| All pages | Sobre | `/sobre/` | Yes | Navigation/footer | Clear |
| All pages | Contato | `/contato/` | Yes | Navigation/footer | Clear |
| Header service menu | Arquitetura Terapêutica / Ambientes que cuidam | `/servicos/arquitetura-terapeutica/` | Yes | Navigation dropdown | Destination duplicates `/arquitetura-terapeutica/` |
| Header service menu | Perfumaria Terapêutica / Aromas e rituais sensoriais | `/servicos/perfumaria-terapeutica/` | Yes | Navigation dropdown | Destination duplicates `/perfumaria-terapeutica/` |
| Header service menu | Atendimentos Terapêuticos Individuais / Cuidado energético e pessoal | `/servicos/atendimentos-terapeuticos-individuais/` | Yes | Navigation dropdown | Destination duplicates `/terapias-individuais/` |
| Header | Agendar | `https://wa.me/5511976217579?...` | External | CTA | Clear but generic anchor compared with "WhatsApp" |

### Page-Specific Links

| Source page | Link text | Destination URL | Exists? | Type | Notes |
|---|---|---|---|---|---|
| `/` | Agendar conversa pelo WhatsApp | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA | Uses wa.me with prefilled message |
| `/` | Conhecer os serviços | `/servicos/` | Yes | CTA/body | Clear |
| `/` | Conhecer Arquitetura Terapêutica | `/servicos/arquitetura-terapeutica/` | Yes | Body/service card | Clear |
| `/` | Conhecer Perfumaria Terapêutica | `/servicos/perfumaria-terapeutica/` | Yes | Body/service card | Clear |
| `/` | Conhecer Atendimentos | `/servicos/atendimentos-terapeuticos-individuais/` | Yes | Body/service card | Clear |
| `/` | Entender qual serviço é ideal para mim | `/servicos/` | Yes | CTA | Clear |
| `/` | Conhecer a Consultoria Essencial | `/servicos/arquitetura-terapeutica/` | Yes | Body/pillar | Clear |
| `/` | Agendar atendimento individual | `/servicos/atendimentos-terapeuticos-individuais/` | Yes | Body/pillar | CTA text points to service page, not directly to WhatsApp |
| `/` | Conhecer criações olfativas | `/servicos/perfumaria-terapeutica/` | Yes | Body/pillar | Clear |
| `/processo/` | Agendar conversa pelo WhatsApp | `https://wa.me/5511976217579?...consultoria de arquitetura terapêutica` | External | CTA | Clear |
| `/servicos/` | Conhecer Arquitetura Terapêutica | `/servicos/arquitetura-terapeutica/` | Yes | Body/service card | Clear |
| `/servicos/` | Conhecer Perfumaria Terapêutica | `/servicos/perfumaria-terapeutica/` | Yes | Body/service card | Clear |
| `/servicos/` | Conhecer Atendimentos | `/servicos/atendimentos-terapeuticos-individuais/` | Yes | Body/service card | Clear |
| `/servicos/` | Quero entender qual serviço é ideal para mim | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA | Clear |
| `/sobre/` | Conversar com Graziella | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA | Clear |
| `/contato/` | Agendar conversa pelo WhatsApp | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA/contact | Clear |
| `/contato/` | Quero entender qual serviço é ideal para mim | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA/contact | Clear |
| `/contato/` | Chamar no WhatsApp | `https://wa.me/5511976217579?...arquitetura terapêutica` | External | CTA/contact | Clear |
| `/contato/` | Enviar mensagem por email | `mailto:contato@graziellafusari.com` | External | CTA/contact | Email link present |
| `/arquitetura-terapeutica/` | Quero começar pela Consultoria Essencial | `https://wa.me/5511976217579?...consultoria de arquitetura terapêutica` | External | CTA/service card | Clear |
| `/arquitetura-terapeutica/` | Quero uma transformação mais completa | `https://wa.me/5511976217579?...consultoria de arquitetura terapêutica` | External | CTA/service card | Clear |
| `/arquitetura-terapeutica/` | Quero falar sobre um projeto | `https://wa.me/5511976217579?...consultoria de arquitetura terapêutica` | External | CTA/service card | Clear |
| `/arquitetura-terapeutica/` | Falar sobre meu espaço | `https://wa.me/5511976217579?...consultoria de arquitetura terapêutica` | External | CTA | Clear |
| `/perfumaria-terapeutica/` | Falar sobre perfumaria terapêutica | `https://wa.me/5511976217579?...perfumaria terapêutica` | External | CTA | Clear |
| `/terapias-individuais/` | Agendar atendimento individual | `https://wa.me/5511976217579?...atendimentos individuais` | External | CTA | Clear |

Broken internal links found: none among rendered internal links checked live.  
Weak anchor text found: no obvious "saiba mais" anchors. "Agendar" in the header is short but works as a compact CTA.

## 7. Image SEO

### Public Assets

| File path | Format | Dimensions | File size | Where used | Alt text | LCP? | Notes |
|---|---|---:|---:|---|---|---|---|
| `public/hero-interior.png` | PNG | 1727 x 911 | 2,214,125 bytes (~2.1 MB) | Homepage hero `app/page.tsx:22`; About image `app/sobre/page.tsx:27` | Homepage: "Sala elegante com luz natural, plantas e texturas acolhedoras"; About: "Ambiente residencial com luz natural e materiais acolhedores" | Yes, homepage hero is likely LCP and has `priority` | Large PNG; filename is generic but relevant; could be compressed/converted later. |

Other files in `public/`: `.nojekyll`, `CNAME`. No favicon, apple icon, robots, or sitemap assets found.

### Rendered Images

| Page | Image source | Rendered alt | Notes |
|---|---|---|---|
| `/` | `/hero-interior.png` | Sala elegante com luz natural, plantas e texturas acolhedoras | Full-bleed hero, likely LCP. |
| `/sobre/` | `/hero-interior.png` | Ambiente residencial com luz natural e materiais acolhedores | Reuses same image; acceptable alt text. |

## 8. Technical SEO Checks

| Check | Result |
|---|---|
| `robots.txt` exists? | No. Live `/robots.txt` returned 404. |
| `sitemap.xml` exists? | No. Live `/sitemap.xml` returned 404. |
| Pages included in sitemap? | No sitemap found. |
| Canonical tags? | Not detected on any live page. |
| 404 page exists? | Yes, Next static 404 exists. Live unknown route returned 404 with `robots: noindex`. |
| Accidental noindex? | No noindex on normal pages. 404 has noindex as expected. |
| HTTPS behavior | HTTP redirects to HTTPS with 301. |
| www vs non-www | `www` redirects to non-www canonical host with 301. |
| Trailing slash consistency | Enabled in config; non-trailing route redirects to trailing slash. |
| Mobile viewport | Present. |
| Semantic HTML | Uses `header`, `nav`, `section`, `article`, `footer`, H1/H2/H3, anchors. |
| Accessibility affecting SEO | Images have alt text. Some icon-only visual elements are decorative SVGs. Header service dropdown has menu semantics, but mobile service trigger is a button without direct link to `/servicos` until opened. |
| Console/build errors | No build errors from `npm run build`. |
| Lighthouse/performance notes | Lighthouse was not run. Performance note from inspection: hero PNG is ~2.1 MB and is likely LCP. Static JS first-load shared bundle reported as ~103 kB by Next build. |
| TLS/certificate note | Browser/PowerShell live checks worked. Node HTTPS checks required `NODE_TLS_REJECT_UNAUTHORIZED=0` due local certificate-chain verification issue in this environment. |

## 9. Schema / Structured Data

No JSON-LD scripts were detected in rendered live HTML.

| Schema type | Present? |
|---|---|
| Person | No |
| LocalBusiness / ProfessionalService | No |
| WebSite | No |
| Organization | No |
| BreadcrumbList | No |
| Service | No |
| FAQ | No |

## 10. Local SEO Data Available

| Signal | Current data found |
|---|---|
| Business/brand name | Graziella Fusari |
| Professional name | Graziella Fusari |
| City/region | Not found in current site copy. |
| Phone/WhatsApp | `5511976217579`, in `lib/whatsapp.ts:1` and rendered wa.me links. |
| Email | `contato@graziellafusari.com`, in `lib/site-content.ts:18` and contact page mailto link. |
| Instagram/social links | No Instagram/social profile links found in rendered site or source. |
| Service area | Not explicitly stated. Copy mentions online and presencial sob consulta, but no city/region. |
| Address | Not found. |
| Contact page copy | See `/contato/` content extraction above. |
| Privacy-sensitive info exposed | Public WhatsApp number and email are exposed intentionally as conversion/contact channels. No address or personal private data found. |

## 11. Conversion / CTA Audit Data

### WhatsApp Link Helper

Source: `lib/whatsapp.ts`

| Message key | Generated URL |
|---|---|
| `homepage` | `https://wa.me/5511976217579?text=Ol%C3%A1%2C%20Graziella.%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20arquitetura%20terap%C3%AAutica.` |
| `architecture` | `https://wa.me/5511976217579?text=Ol%C3%A1%2C%20Graziella.%20Tenho%20interesse%20em%20uma%20consultoria%20de%20arquitetura%20terap%C3%AAutica%20para%20minha%20casa.` |
| `perfumery` | `https://wa.me/5511976217579?text=Ol%C3%A1%2C%20Graziella.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20perfumaria%20terap%C3%AAutica.` |
| `therapy` | `https://wa.me/5511976217579?text=Ol%C3%A1%2C%20Graziella.%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20individuais.` |

The helper uses `encodeURIComponent` in `lib/whatsapp.ts:16`.

### Conversion Actions

| Action | Pages containing it | Destination | Notes |
|---|---|---|---|
| Header "Agendar" WhatsApp CTA | All pages | `wa.me` homepage message | External target blank via `components/WhatsAppLink.tsx:46`. |
| Footer navigation | All pages | Internal routes | Navigation, not conversion. |
| Homepage hero WhatsApp | `/` | `wa.me` homepage message | Primary conversion CTA. |
| Homepage service CTAs | `/` | Internal service routes and WhatsApp final CTA | Discovery and conversion. |
| Contact page WhatsApp cards/buttons | `/contato/` | `wa.me` homepage message | Multiple WhatsApp paths. |
| Contact email | `/contato/` | `mailto:contato@graziellafusari.com` | Email conversion. |
| Architecture service cards | `/arquitetura-terapeutica/`, `/servicos/arquitetura-terapeutica/` | `wa.me` architecture message | Three service-card CTAs plus final CTA. |
| Perfumery final CTA | `/perfumaria-terapeutica/`, `/servicos/perfumaria-terapeutica/` | `wa.me` perfumery message | Service-specific message. |
| Therapy CTAs | `/terapias-individuais/`, `/servicos/atendimentos-terapeuticos-individuais/` | `wa.me` therapy message | Service-specific message. |
| Forms | None found | n/a | No forms detected. |
| Instagram links | None found | n/a | No social conversion link detected. |

WhatsApp formatting: all checked WhatsApp links use `wa.me`, Brazil country code `55`, no plus sign/spaces/dashes, and prefilled URL-encoded messages.

## 12. Build and Quality Checks

Commands run locally on 2026-06-11.

| Command | Result | Notes |
|---|---|---|
| `npm.cmd install` | Passed | Output: `removed 26 packages in 4s`; no tracked file changes observed afterward. |
| `npm.cmd run lint` | Passed | ESLint completed with no reported issues. |
| `npm.cmd run build` | Passed | Next.js 15.5.18 compiled successfully, type checks passed, static export completed. |

Build output summary:
- Static pages generated: 14.
- Routes exported include `/`, `/_not-found`, `/arquitetura-terapeutica`, `/contato`, `/perfumaria-terapeutica`, `/processo`, `/servicos`, `/servicos/arquitetura-terapeutica`, `/servicos/atendimentos-terapeuticos-individuais`, `/servicos/perfumaria-terapeutica`, `/sobre`, `/terapias-individuais`.
- Shared first-load JS: ~103 kB.
- No TypeScript, ESLint, or Next metadata warnings were printed.

## 13. SEO Opportunities Noticed, Without Implementing

1. `robots.txt` is missing: live `/robots.txt` returns 404.
2. `sitemap.xml` is missing: live `/sitemap.xml` returns 404, so search engines do not receive an explicit URL inventory.
3. Canonical tags are missing on all checked pages, especially important because root service pages duplicate nested `/servicos/*` routes.
4. Duplicate service URLs exist: `/arquitetura-terapeutica/` vs `/servicos/arquitetura-terapeutica/`, `/perfumaria-terapeutica/` vs `/servicos/perfumaria-terapeutica/`, `/terapias-individuais/` vs `/servicos/atendimentos-terapeuticos-individuais/`.
5. Structured data is absent: no Person, ProfessionalService, LocalBusiness, WebSite, Organization, BreadcrumbList, Service, or FAQ schema detected.
6. Favicon and apple-touch-icon are missing; `/favicon.ico` and `/apple-touch-icon.png` return 404.
7. Open Graph and Twitter image metadata are missing; sharing previews likely lack a branded image.
8. Local SEO signals are thin: no city/region, service area, address, social profile link, or explicit local market copy found.
9. Some pages are relatively thin: `/contato/` ~173 words, `/terapias-individuais/` ~261 words, `/processo/` ~281 words, `/servicos/` ~295 words.
10. The homepage hero image is a ~2.1 MB PNG and likely the LCP element; compression/conversion could improve performance.
11. Several card-level titles are rendered as H2s under section H2s, especially on `/perfumaria-terapeutica/`, `/contato/`, and `/sobre/`; hierarchy could be tightened later.
12. README deployment information appears stale: it says deploy is prepared for Vercel, while the actual workflow deploys GitHub Pages.
13. No FAQ content was detected; FAQ sections could support long-tail queries and FAQ schema later.
14. No blog/resource content found; current site is service-page only.
15. No Instagram/social links found despite likely brand social presence.
