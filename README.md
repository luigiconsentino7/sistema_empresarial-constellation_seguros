# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Projeto Constellation Consultoria e Corretora de Seguros 

## Link para o projeto hospedado virtualmente:

 <a href="https://projeto-02-semestre.vercel.app/">Clique aqui!</a> <br>

## Integrantes:
- Cleiton Lima
- Guilherme Medeiros
- Lorena Benardo
- Luigi Consentino
- Matheus Santiago

## Professores Orientadores:
 <a href="https://www.linkedin.com/in/adriano-valente-534576135/">Adriano Felix Valente</a> <br>
 <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a> <br>

## Descrição

O projeto foi desenvolvido para Constellation Corretora de Seguros, uma empresa que atua no mercado securitário desde 2010 como pessoa jurídica, mas como pessoa física atua desde 2002, prestando serviço a diversas seguradoras. Oferece produtos de seguros em geral, como por exemplo: Seguros de vida, plano de saúde, seguro residencial, automóvel entre outros. O objetivo do site é captar novos clientes, trazer breves informações sobre os produtos de seguro e trazer visibilidade para empresa.

### Objetivos:

- Captar novos clientes
- Explicar brevemente sobre os produtos oferidos
- Demonstrar os beneficios da contratação do produto.
- Permitir que o cliente busque ajuda para assistencia 24 horas.
- Permitir que o cliente encontre links úteis para serviços relacionados a tabela FIPE, boletim de ocorrência e telefones de emergência.

### Resumo do Projeto:

O projeto foi desenvolvido utilizando react, visando a usabilidade e estrutura informativa, estilizado em Tailwind CSS e feito uma nova identidade visual para a empresa, como estilização de logo e seleção de fotos com a ajuda do adobe photoshop, canva pro e freepik.

## Desenvolvimento do site

### UX/UI Design

- Design responsivo e estilização dos componentes utilizando Tailwind CSS.
- Gerenciamento de rotas na aplicação com Next JS.
- Animações de scroll.
- Ícones personalizados
- Teste de usabilidade

### Front-end

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Tailwind CSS**: Para estilização e design responsivo.
- **Next JS**: Gerenciamento de rotas.

### Back-end

- **Node.js**: Ambiente de execução do JavaScript no servidor.

## Recursos

- Página principal com informações sobre a ONG e suas atividades.
- Seção para captação de doações e voluntários.
- Seções promocionais para destacar eventos e ações sociais.

## 🛠 Instalação

Para configurar e executar o projeto localmente, siga estas etapas:

### Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- NPM (incluído com o Node.js)

### Instalação

1. Clone o repositório do projeto:
   ```sh
   git clone https://github.com/LutoBeibe/Projeto-02-Semestre.git
   ```
2. Navegue até a pasta do projeto e instale as dependências:
   ```sh
   cd Projeto-02-Semestre-Main
   npm install
   ```
3. Inicie o terminal na pasta do projeto, e rode o comando:
   ```sh
   npm run dev
   ```
4. Abra o navegador e acesse `http://localhost:3000` para visualizar o site.

## 🛠 Estrutura de Pastas

A estrutura de pastas do projeto está organizada para separar claramente os componentes, páginas e estilos. Abaixo está a descrição detalhada dos diretórios e arquivos principais:
- `node_modules`: Contém todas as bibliotecas e dependências do projeto.
- `.next` : Contém a biblioteca do Next JS.
- `public`: Armazena os arquivos estáticos como imagens, ícones, e videos.
- `components`: Contém subdiretórios para cada componente reutilizável:
    - `banner`: Componente do Whatsapp.
    - `features`: Componentes nossos diferenciais.
    - `hero`: Componentes que compõem a introdução ou cabeçalho do site.
    - `modal-video`: Componentes do video.
    - `page-illustration`: Componentes do background.
    - `testimonials`: Componentes do depoimentos.
    - `zigzag`: Componentes do conteudo principal do site.
    - `ui`: Pasta com os componentes principais.
        - `footer`: Componentes que compõem o final do site.
        - `header`: Componentes da barra de navegação.
        - `mobile-menu`: Componentes da barra de navegação mobile.
  - `app`: Contém as principais informações do site:
    - `default`: Contém as paginas vitais.
        - `layout`: Página com alguns efeitos do site.
        - `page`: Página que junta todas as informações do site.
    - `api`: Contém a api de rotas
    - `css`: Contém algumas estilizações específicas do site. 
    - `layout`: Contém os metasdados do site.
- `package-lock.json`: Arquivo de bloqueio que lista as versões exatas das dependências instaladas.
- `.gitignore`: Arquivo que especifica arquivos não rastreados pelo Git.
- `package-lock.json`: Arquivo de bloqueio que lista as versões exatas das dependências instaladas.
- `package.json`: Arquivo de configuração que inclui scripts de construção e dependências do projeto.
- `README.md`: Arquivo Markdown com informações sobre o projeto, como instalação, uso e documentação.
- `tailwind.config`: Arquivo de configuração do tailwind.
- `next-env.d.ts`: Arquivo referências do Next JS.
- `next.config.js`: Arquivo dos módulos do Next JS.
- `postcss.config.js`: Arquivo dos módulos do Tailwind.
- `tsconfig.json`: Arquivo de configuração TypeScript.