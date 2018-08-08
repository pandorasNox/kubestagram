
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

.PHONY: mini-mount
mini-mount: ##@setup pwd as mount for minikube
	minikube mount $(PWD):/kubestaback

PHONY: kube-deploy
kube-deploy:
	kubectl apply -f kubernetes/namespace.yaml \
	-f kubernetes/

PHONY: kube-undeploy
kube-deploy:
	kubectl delete -f kubernetes/

PHONY: kube-deploy-dev
kube-deploy-dev:
	kubectl apply -f kubernetes/namespace.yaml \
	-f kubernetes/ing-n-svc.yaml \
	-f kubernetes/dev/

PHONY: kube-undeploy-dev
kube-deploy:
	kubectl delete -f kubernetes/ \
	-f kubernetes/dev/
