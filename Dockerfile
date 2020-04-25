# STAGE1: LINT, TEST & BUILD
# ----------------------------------------------------------------
FROM node:carbon AS base

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY .npmrc .npmrc  
COPY package*.json ./

RUN npm install

# Run tests and bundle app source
COPY . .
RUN npm run build

# STAGE1: RELEASE
#-------------------------------------------------------------------
FROM node:8.9-alpine AS release

WORKDIR /app

COPY --from=base /app/build ./build
#COPY --from=base /app/dist ./dist
# TODO: copy only production dependencies
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package*.json ./
#COPY --from=base /app/__integration_tests__ ./__integration_tests__
#COPY --from=base /app/src/server/static ./dist


EXPOSE 8080

# start app
CMD ["npm", "start"]
#CMD [ "node", "build/static/js/main.3e04441a.chunk.js"]
#CMD [ "npm", "run", "start"]