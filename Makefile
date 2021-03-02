fmt:
		deno fmt

test:
		deno test --allow-all

lint:
		deno lint --unstable

all: fmt lint test

.PHONY: fmt test lint all
