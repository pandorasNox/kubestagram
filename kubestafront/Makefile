
PHONY: cli
cli:
	docker run -it --rm -v $(shell pwd):/temp -w /temp -p 3000:3000 -p 4000:4000 node:8.11.3-alpine sh

PHONY: start
start:
	docker run -it --rm \
	-v $(shell pwd):/temp \
	-w /temp \
	-p 3000:3000 \
	-p 4000:4000 \
	-e IMAGE_SERVICE_URL="http://localhost:22080" \
	node:8.11.3-alpine \
	sh -c 'yarn start'
