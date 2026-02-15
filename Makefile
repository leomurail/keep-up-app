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

install:
	@$(MAKE) add-env
	@$(MAKE) up

destroy:
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
	@docker system prune --all --volumes

help:	
	@echo ""
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@echo "  install    Setup environment and start containers"
	@echo "  destroy    Stop containers and remove environment"
	@echo "  up         Build and start containers"
	@echo "  down       Stop and remove containers"
	@echo "  start      Start containers"
	@echo "  stop       Stop containers"
	@echo "  watch      Watch for changes"
	@echo "  clean      Stop containers and prune docker system"
	@echo ""