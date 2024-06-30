FROM testcafe/testcafe


USER root
WORKDIR /opt/tests
COPY package*.json ./
RUN npm ci
CMD ["testcafe"]
