Setting up a Symfony/Svelte skeleton (template) application

# Prerequisite
It is recommended to use a docker container as a virtual runtime environment, as available here:
https://github.com/teamore/docker-apache-php-symfony-react

# Installation
once you have the runtime environment up and running, initialize the project by executing 
```
# build
./build-project.sh
```
This will install all required dependencies via yarn/npm

# Composer Dependencies
The previous script ```./build-project.sh``` will also update and install dependencies maintained by composer. However, 
you can also perform these steps explicitly by calling
```
# use composer to update and install dependencies
./composer update && ./composer install
```

# Build and run
In order to build the javascript and css files necessary to view the application in your browser, execute this command:

```
# build all javascript and css files
yarn encore dev --watch
```

# symfony-encore-react
This repository has been inspired by the work of these great developers:

https://dev.to/rogeliosamuel621/svelte-with-webpack-5-and-babel-1b03
https://www.garthmortensen.com/setting-up-symfony-and-svelte/