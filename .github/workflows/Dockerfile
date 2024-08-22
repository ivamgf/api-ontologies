# Use a imagem base do Node.js
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do código da aplicação
COPY . .

# Expõe a porta 21041
EXPOSE 21041

# Comando para iniciar a aplicação
CMD ["npm", "start"]
