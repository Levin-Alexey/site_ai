---
title: VK AI Agency
emoji: 🤖
colorFrom: blue
colorTo: indigo
sdk: docker
pinned: false
app_port: 7860
---

# VK AI Agency

Landing page for an AI agency focused on VKontakte automation, AI bots, and custom business workflows.

## Stack

- React 19
- Vite 6
- TypeScript
- Express static server for production container runtime

## Local Development

Requirements: Node.js 20+

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

The production server listens on `0.0.0.0:7860`, which matches the Hugging Face Docker Space configuration.

## Deployment

This Space uses the Docker SDK. The container build is defined in [Dockerfile](./Dockerfile) and serves the built Vite app through [server.js](./server.js).
