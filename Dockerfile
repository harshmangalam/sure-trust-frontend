FROM node:20-alpine
# install pnpm
RUN npm i -g pnpm
# initialize working directory
WORKDIR /app
# copy all packages to the working directory
COPY package*.json .
# install all packages
RUN pnpm install
# copy all files to the working directory from root directory
COPY . .

EXPOSE 5173

# RUN npm run dev
CMD ["pnpm", "run","dev"]

