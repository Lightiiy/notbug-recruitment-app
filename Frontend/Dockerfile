## build the angular app container with node 

# FROM node:alpine AS build

# WORKDIR /app

# COPY ./notbug-ticket-system .

# RUN npm install && npm run build

# # CMD ["ng", "serve", "--host", "0.0.0.0" "--port", "4201"]

# ## use Nginx for serving the files. Could just use Node, but trying out nginx

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*/

COPY ./notbug-ticket-system/dist/notbug-ticket-system/browser /usr/share/nginx/html

COPY nginx.conf etc/nginx/conf.d/default.conf

EXPOSE 80