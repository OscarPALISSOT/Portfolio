FROM node:latest

WORKDIR /app

COPY . .

ENV NEXT_PUBLIC_DIRECTUS_URL=https://portofolio-data-directus.oscarpalissot.fr
ENV NEXT_PUBLIC_ASSETS_URL=${NEXT_PUBLIC_DIRECTUS_URL}/assets/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
