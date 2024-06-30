FROM timbru31/node-chrome:20
COPY package*.json ./
RUN npm ci
ENTRYPOINT []
CMD []
