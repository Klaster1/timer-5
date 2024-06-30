FROM timbru31/node-chrome:20
# FROM node:20.15
USER root
WORKDIR /opt/tests

# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update
# RUN apt-get install -y google-chrome-stable

# COPY package*.json ./
# RUN npm ci
ENTRYPOINT []
CMD []
