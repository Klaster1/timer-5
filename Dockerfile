FROM testcafe/testcafe


USER root
WORKDIR /opt/tests
COPY package*.json ./
RUN npm ci

USER user

# ENV DEBUG=testcafe:test-run:*
CMD ["testcafe"]
