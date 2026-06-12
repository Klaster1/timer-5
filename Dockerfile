FROM mcr.microsoft.com/playwright:v1.60.0-noble
COPY package*.json ./
RUN npm ci
ENTRYPOINT []
CMD []
