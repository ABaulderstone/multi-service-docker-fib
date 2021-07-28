#Build phase
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY .  .
RUN yarn build


#run phase

FROM nginx
#expose 3000 for routing nginx instance
EXPOSE 3000
#overwrite default conf with routing rules in container
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html