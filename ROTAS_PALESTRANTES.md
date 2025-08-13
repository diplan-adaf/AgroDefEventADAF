# Rotas de Palestrantes - AgroDefesa

## Nova Funcionalidade Implementada

Foi criada uma nova rota dedicada para exibir os palestrantes do evento de forma organizada por dia e horário.

## Rotas Disponíveis

### 1. Página Principal
- **URL**: `/`
- **Componente**: `AgroAmazonasSite`
- **Descrição**: Página principal do evento com todas as seções, incluindo uma prévia dos palestrantes

### 2. Página de Palestrantes
- **URL**: `/palestrantes`
- **Componente**: `PalestrantesPage`
- **Descrição**: Página dedicada exclusivamente aos palestrantes com programação completa organizada por dia e horário

## Como Acessar

### Pelo Menu de Navegação
- No header do site, clique em "Palestrantes" para ir diretamente para a página dedicada

### Pela Seção de Palestrantes
- Na página principal, role até a seção "Palestrantes"
- Clique no botão "Ver Programação Completa dos Palestrantes"

### Navegação Direta
- Digite `/palestrantes` na URL do navegador

## Funcionalidades da Página de Palestrantes

### Organização por Dia
- **02/09 - Primeiro Dia**: Palestrantes do primeiro dia do evento
- **03/09 - Segundo Dia**: Palestrantes do segundo dia do evento

### Organização por Horário
- Cada sessão mostra o horário específico
- Palestrantes organizados cronologicamente

### Informações dos Palestrantes
- Foto do palestrante
- Nome completo
- Formação acadêmica
- Tema da palestra
- **Sala onde será realizada** (exibida como badge estilizado)

## Estrutura dos Dados

Os palestrantes estão organizados em uma estrutura hierárquica:
```
palestrantes = {
  "02-09": [  // Data
    {
      horario: "08:00 - 09:00",  // Horário da sessão
      palestrantes: [  // Lista de palestrantes
        {
          nome: "Nome do Palestrante",
          foto: "caminho_da_foto",
          formacao: "Formação acadêmica",
          tema: "Tema da palestra",
          sala: "Sala onde será realizada"
        }
      ]
    }
  ]
}
```

## Tecnologias Utilizadas

- **React Router DOM**: Para gerenciamento de rotas
- **React Hooks**: useState para gerenciar estado dos tabs
- **CSS Modular**: Estilos específicos para a página de palestrantes
- **Componentes Reutilizáveis**: Layout, Header, etc.

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   npm start
   ```

3. Acesse no navegador:
   - Página principal: `http://localhost:3000/`
   - Página de palestrantes: `http://localhost:3000/palestrantes`

## Estrutura de Arquivos

```
src/
├── pages/
│   ├── AgroAmazonasSite.js      # Página principal
│   ├── AgroAmazonasSite.css     # Estilos da página principal
│   ├── PalestrantesPage.js      # Nova página de palestrantes
│   └── PalestrantesPage.css     # Estilos da página de palestrantes
├── components/
│   ├── header/
│   │   └── Header.js            # Header com navegação
│   └── palestrantes/
│       └── palestrantes.js      # Componente de palestrantes original
└── App.js                       # Configuração de rotas
```

## Benefícios da Nova Implementação

1. **Melhor Organização**: Palestrantes organizados por dia e horário
2. **Navegação Intuitiva**: Rotas claras e fáceis de usar
3. **Experiência do Usuário**: Página dedicada para consulta da programação
4. **Design Aprimorado**: Sala exibida como badge estilizado com gradiente e efeitos hover
5. **Responsividade Mobile-First**: Design adaptável com abordagem mobile-first
6. **Header Responsivo**: Menu mobile em dispositivos pequenos, links diretos em desktop
7. **Manutenibilidade**: Código organizado e fácil de manter

## Design do Badge da Sala

O badge da sala foi implementado com:
- **Gradiente verde**: Cores que combinam com o tema do evento
- **Formato arredondado**: Design moderno e elegante
- **Posicionamento**: Localizado no canto superior direito do card do palestrante
- **Efeitos hover**: Animação sutil ao passar o mouse
- **Tipografia**: Texto em maiúsculas com espaçamento otimizado
- **Sombras**: Profundidade visual com sombras suaves

## Responsividade Mobile-First

### Header Responsivo
- **Mobile (< 768px)**: Menu hambúrguer com navegação em overlay
- **Desktop (≥ 768px)**: Links de navegação exibidos diretamente no header
- **Transições suaves**: Animações fluidas entre estados mobile e desktop

### Breakpoints
- **Mobile**: < 768px - Menu hambúrguer ativo
- **Tablet/Desktop**: ≥ 768px - Navegação horizontal direta

### Características
- **Abordagem Mobile-First**: Estilos base para mobile, melhorias para desktop
- **Performance otimizada**: Transições CSS para melhor experiência do usuário
- **Acessibilidade**: Navegação clara em todos os tamanhos de tela 