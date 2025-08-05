# AgroDefEventADAF

Site para apresentação do evento Agroamazonas & Defesa Agropecuária.

## Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/diplan-adaf/AgroDefEventADAF.git
   cd AgroDefEventADAF
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Como buildar para produção

1. **Gere os arquivos otimizados:**
   ```bash
   npm run build
   ```
   Os arquivos finais estarão na pasta `build`.

## Como publicar no GitHub Pages

1. **Configure o campo `homepage` no arquivo `package.json`:**
   ```json
   "homepage": "https://diplan-adaf.github.io/AgroDefEventADAF"
   ```

2. **Faça o deploy usando o comando:**
   ```bash
   npm run deploy
   ```
   Isso irá publicar o conteúdo da pasta `build` no GitHub Pages.

3. **Acesse o site publicado:**
   [https://diplan-adaf.github.io/AgroDefEventADAF](https://diplan-adaf.github.io/AgroDefEventADAF)

---

