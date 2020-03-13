FROM node:8

WORKDIR /

# install deps
COPY package.json /
RUN npm install

# Setup workdir
COPY . /

# run
EXPOSE 3000
CMD ["npm", "start"]
