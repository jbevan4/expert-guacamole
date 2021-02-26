format:
		deno fmt

test:
		deno test

lint:
		deno lint --unstable

pre-push:
		deno fmt
		deno lint --unstable
		deno test

.PHONY: format test lint
