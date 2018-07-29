
**Title:** basic service setup

**Status:** accepted

**Context:**
- doing some basic design decisions for this express service starter

**Decision:**
- REST / GraphQL only
- no express typical use of an frontend engine
- JSON only
- using cookies
- support for databases like: MongoDB, PostgresSQL, MySQL, ...

**Consequences:**
- for a fronend we have to take care somehow else (e.g. JAMStack)
- CORS with JSON forces a "options" request before the normal get/post request
- taking care of cookie vulnerabilities (e.q. using http only etc)
- if you choose a db it's not a staless service anymore
