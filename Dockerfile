FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN chown -R node /usr/src/app
USER node

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]