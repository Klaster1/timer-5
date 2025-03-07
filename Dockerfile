FROM timbru31/node-chrome:22
COPY package*.json ./
RUN npm ci
ENTRYPOINT []
CMD []
