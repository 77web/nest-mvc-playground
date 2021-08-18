# Setup

```bash
$ npm ci
$ cp .env.dist .env
```

Write your DB connection setting to `.env` file.
Then you can do migration.

```bash
$ npx mikro-orm migration:up
```

# Usage

## run application

```bash
$ npm run start
```

Open http://127.0.0.1:3000 in your browser.

### in development mode

```bash
$ npm run start:dev
```

