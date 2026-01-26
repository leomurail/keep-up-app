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
	@if [ "$(APP_ENV)" = "local" ]; then $(MAKE) setup-hosts; fi
	@if [ "$(APP_ENV)" = "local" ]; then $(MAKE) add-host; fi
	@$(MAKE) up

finish:
	@$(MAKE) down
	@if [ "$(APP_ENV)" = "local" ]; then $(MAKE) rm-host; fi
	@$(MAKE) rm-env

#———————————————————————————————————————#
# ACTIONS                             	#
#———————————————————————————————————————#

add-env:
	@if [ "$(APP_ENV)" = "local" ] && [ ! -f ./docker/env/.env.local ]; then cp ./docker/env/.env.local.example ./docker/env/.env.local; fi
	@cp ./docker/env/.env.${APP_ENV} ./.env

rm-env:
	@if [ "$(APP_ENV)" = "local" ]; then rm ./docker/env/.env.local; fi
	@rm ./.env

add-host:
	@echo "127.0.0.1 ${APP_DOMAIN}" | sudo tee -a $(HOSTS_FILE)

rm-host:
	@sudo $(SED) "/${APP_DOMAIN}/d" $(HOSTS_FILE)

up:
	@$(COMPOSE_CMD) up -d --build --renew-anon-volumes

down:
	@$(COMPOSE_CMD) down

start:
	@${COMPOSE_CMD} start

stop:
	@${COMPOSE_CMD} stop

clean:
	@${COMPOSE_CMD} down
	@docker system prune --all

setup-hosts:
	@if [ "$(APP_ENV)" = "local" ]; then \
		echo "Sélectionnez votre système d'exploitation :"; \
		echo "1) Windows"; \
		echo "2) Mac"; \
		echo "3) Linux"; \
		read -p "Choix [1-3] : " choice; \
		case $$choice in \
			1) HOSTS_FILE="C:/Windows/System32/drivers/etc/hosts"; SED_CMD="sed -i" ;; \
			2) HOSTS_FILE="/etc/hosts"; SED_CMD="sed -i ''" ;; \
			3) HOSTS_FILE="/etc/hosts"; SED_CMD="sed -i" ;; \
			*) echo "Choix invalide"; exit 1 ;; \
		esac; \
		echo "\n\n# Hosts file" | sudo tee -a .env; \
		echo "HOSTS_FILE=$$HOSTS_FILE" | sudo tee -a .env; \
		echo "SED=$$SED_CMD" | sudo tee -a .env; \
	fi