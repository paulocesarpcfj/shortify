FROM yarnpkg/node-yarn

WORKDIR /frontend

COPY package.json /frontend/

RUN yarn install --ignore-engines

COPY . /frontend/

EXPOSE 3000

CMD ["npm", "start"]