# Usar uma imagem base com Node.js
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta em que o app vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
