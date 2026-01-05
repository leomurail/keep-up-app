# app page

## Prerequisites
- Docker
- Docker Compose
- Make

## Environment variables
You can config the app settings in `./.env` file.

## Installation

### Install & start services
```bash
make up
```
Go to http://app.keep-up.local

### Uninstall & stop services
```bash
make down
```

## Services

### Start
```bash
make start
```
Go to http://app.keep-up.local

### Stop
```bash
make stop
```

## Clean
```bash
make clean
```