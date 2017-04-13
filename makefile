.PHONY: test convert bootstrap

test:
	@npm test

convert:
	@node ./index.js

bootstrap:
	@yarn
