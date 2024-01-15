check-version:
    @node tools/checkversion
install: check-version
    yarn install
develop: check-version
    gatsby develop
build: check-version
    gatsby build
serve:
    gatsby serve
run-prod: build serve
fmt: check-version
    yarn run format
    yarn run sort-imports
test: check-version
    yarn test