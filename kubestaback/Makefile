
UID:=$(shell id -u)
PWD:=$(shell pwd)

PHONY: cli
cli:
	docker run -it --rm -v $(PWD):/temp -w /temp -p 3000:3000 node:8.11.3-alpine sh

PHONY: d-start
d-start:
	docker-compose up

PHONY: d-b-n-s
d-b-n-s:
	docker build -t kubestaback .
	docker run -it --rm -v $(PWD):/temp -w /temp -p 3003:3000 --env-file=.env kubestaback

PHONY: kube-ctx-mini
kube-ctx-mini:
	kubectl config use-context minikube

V:= latest
.PHONY: mini-build
mini-build: ##@setup reuse minikube docker env and build img there
	@eval $$(minikube docker-env) ;\
	docker build -t kubestaback:$(V) $(PWD)

PHONY: kube-deploy
kube-deploy:
	kubectl apply -f kubernetes/namespace.yaml \
	-f kubernetes/
