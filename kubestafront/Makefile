
.PHONY: cli
cli:
	docker run -it --rm -v $(shell pwd):/temp -w /temp -p 3000:3000 -p 4000:4000 node:8.11.3-alpine sh

.PHONY: start
start:
	docker run -it --rm \
	-v $(shell pwd):/temp \
	-w /temp \
	-p 3000:3000 \
	-p 4000:4000 \
	-e IMAGE_SERVICE_URL="http://localhost:22080" \
	node:8.11.3-alpine \
	sh -c 'yarn start'

V:=latest
.PHONY: mini-build
mini-build:
	# todo: if ENVFILE is set use, else write $(env) into new env file, use it and delete it again (implies we are in a container already)
	docker run -it --rm \
	-v $(shell pwd):/temp \
	-w /temp \
	-e IMAGE_SERVICE_URL="http://minikube/kubestaback" \
	-e SITE_ROOT="http://minikube" \
	-e BASE_PATH="kubestafront" \
	node:8.11.3-alpine \
	sh -c 'yarn build'
	@eval $$(minikube docker-env) ;\
	docker build -t kubestafront:$(V) $(PWD)
	docker run -it -v $(shell pwd):/temp -w /temp node:8.11.3-alpine sh -c 'rm -rf dist'

V:=latest
.PHONY: build
build:
	# todo: if ENVFILE is set use, else write $(env) into new env file, use it and delete it again (implies we are in a container already)
	docker run -it --rm \
	-v $(shell pwd):/temp \
	-w /temp \
	-e IMAGE_SERVICE_URL="http://localhost:22080" \
	node:8.11.3-alpine \
	sh -c 'yarn build'
	docker build -t kubestafront:$(V) $(PWD)
	docker run -it -v $(shell pwd):/temp -w /temp node:8.11.3-alpine sh -c 'rm -rf dist'

.PHONY: kube-deploy
kube-deploy:
	kubectl apply -f kubernetes/namespace.yaml \
	-f kubernetes/
