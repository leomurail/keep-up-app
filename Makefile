-include .env

#———————————————————————————————————————#
# VARS                             		#
#———————————————————————————————————————#
APP_ENV?=local
ENV_ARG=--env-file ./.env

COMPOSE_BIN=@docker compose
COMPOSE_ARG=-f ./docker-compose.yaml
ifeq ($(APP_ENV),local)
	COMPOSE_ARG += -f ./docker/docker-compose.local.yaml
endif

# COMPOSE CMD
COMPOSE_CMD=${COMPOSE_BIN} ${COMPOSE_ARG} ${ENV_ARG}

#———————————————————————————————————————#
# CORE	                              	#
#———————————————————————————————————————#

init:
	@$(MAKE) add-env
	@$(MAKE) up

finish:
	@$(MAKE) down
	@$(MAKE) rm-env

#———————————————————————————————————————#
# ACTIONS                             	#
#———————————————————————————————————————#

add-env:
	@cp ./docker/env/.env.${APP_ENV}.template ./.env

rm-env:
	@rm ./.env

up:
	@$(COMPOSE_CMD) up -d --build --renew-anon-volumes

down:
	@$(COMPOSE_CMD) down

start:
	@${COMPOSE_CMD} start

watch:
	@$(COMPOSE_CMD) watch

stop:
	@${COMPOSE_CMD} stop

clean:
	@${COMPOSE_CMD} down
	@docker system prune --all
