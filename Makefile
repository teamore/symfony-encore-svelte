pop:
	./c fos:elastica:populate

ci:
	composer install

cc:
	./c cache:clear

dr:
	./c debug:routes

yew:
	yarn encore dev --watch

up:
	git pull
	composer update && composer install
	yarn build && yarn install
	./c fos:elastica:populate
	yarn encore prod
	./c messenger:consume async -vv

cl:
	./c list

tapil:
	tail -f var/log/dev.api.log

papil:
	tail -f var/log/prod.api.log

pl:
	tail -f var/log/prod.log

cron:
	crontab crontab.txt
	service cron restart

tl:
	tail -f var/log/dev.log

db.update:
	./c doctrine:mongodb:schema:update
	./c doctrine:schema:update

punit:
	php ./vendor/bin/phpunit

test:
	./c doctrine:fixtures:load --env=test --no-interaction
	php ./vendor/bin/phpunit --debug

test-initdb:
	- ./c --env=test doctrine:database:drop --force
	./c --env=test doctrine:database:create
	./c --env=test doctrine:schema:create