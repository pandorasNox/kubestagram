
PHONY: fix-rights
fix-rights:
	docker run -it --rm -v $(shell pwd):/temp -w /temp alpine sh -c 'chmod -R a+rw kubestaback/uploads kubestaback/docker/nginx/logs'
