FROM mcr.microsoft.com/playwright:v1.59.1-noble
COPY package*.json ./
RUN npm ci
ENTRYPOINT []
CMD []
