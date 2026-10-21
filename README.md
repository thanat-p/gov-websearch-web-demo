## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

- `NEXT_PUBLIC_API_URL` – base URL of the API used by the app (e.g. `http://localhost:3000/api`).
- `OPENWEBUI_API_KEY` – your Open WebUI API key. Keep it secret and never commit it.

## Run With Docker

```bash
docker compose up --build -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
