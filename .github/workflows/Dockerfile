# Use a imagem oficial do Node.js
FROM node:20.9.0

# Cria e define o diretório de trabalho na imagem
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta em que a aplicação estará rodando
EXPOSE 21041

# Comando para iniciar a aplicação
CMD ["npm", "start"]
