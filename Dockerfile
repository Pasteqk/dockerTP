# Angular
FROM node
RUN npm install -g @angular/cli

# WORKSPACE
RUN mkdir project
WORKDIR project

# Dependencies
COPY . .
RUN npm install

# Run
CMD ng serve --host 0.0.0.0
