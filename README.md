## Steps to reproduce

1. `npm install`
2. `npm test`

## Expected result

Test *Example 2* runs.

## Actual result

```
 Starting Selenium Server on port 4444...
 Selenium Server up and running on port 4444 with pid: #### (762ms).
   No tests defined! using source folder: ./tests
   - using skiptags filter: some-tag-name

  - using skiptags filter: some-tag-name
 Wrote log file to: [...]/bug-demo-nightwatch-skiptags-failure/selenium-server.log.
 Selenium Server process closed.
```

## Other notes

### Workarounds

This works as expected if the nightwatch command is run directly (rather than
via `npm test`) or if Nightwatch is downgraded to 0.9.21.

### My config

* npm version: v11.6.0
* OS version: Darwin 18.2.0 (macOS Mojave 10.14.2)
