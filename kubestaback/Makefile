
PHONY: cli
cli:
	docker run -it --rm -v $(shell pwd):/temp -w /temp -p 3000:3000 -p 4000:4000 node:8.11.3-alpine sh

PHONY: start
start:
	docker-compose up
