# NoteNest (DevNotes)

A full-stack notes application with a React frontend and an Express + Prisma backend.

Users can:
- Create notes
- View all notes
- Edit existing notes
- Delete notes (with confirmation)

## Project Structure

- `devnotes-ui/` - Frontend (React + Vite + Tailwind CSS)
- `src/` - Backend source code (Express routes/controllers/services)
- `prisma/` - Prisma schema
- `app.js` - Backend server entry point

## Tech Stack

### Frontend
- React `19.2.5`
- React DOM `19.2.5`
- Vite `8.0.10`
- Tailwind CSS `4.2.4`
- Axios `1.15.2`

### Backend
- Node.js (recommended `20.x` or newer)
- Express `5.2.1`
- Prisma `7.8.0`
- `@prisma/client` `7.8.0`
- PostgreSQL driver (`pg`) `8.20.0`
- Prisma Postgres adapter (`@prisma/adapter-pg`) `7.8.0`
- CORS `2.8.6`

## Prerequisites

Install these before setup:
- Node.js `20+`
- npm `10+` (comes with modern Node versions)
- PostgreSQL (local or cloud database)

## Environment Variables (Backend)

Create a `.env` file in the project root (`devnotes-node/.env`) with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"
```

## Setup and Run

### 1) Backend Setup

From project root (`devnotes-node`):

```bash
npm install
npx prisma generate
```

If your DB schema is not yet synced:

```bash
npx prisma db push
```

Start backend:

```bash
node app.js
```

Backend runs at:
- `http://localhost:3000`

Health route:
- `GET /`

### 2) Frontend Setup

Open a second terminal and run:

```bash
cd devnotes-ui
npm install
npm run dev
```

Frontend runs at:
- `http://localhost:5173` (default Vite port)

## Available Commands

### Backend (`devnotes-node`)

- Install deps: `npm install`
- Generate Prisma client: `npx prisma generate`
- Sync schema to DB: `npx prisma db push`
- Run server: `node app.js`

### Frontend (`devnotes-ui`)

- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`
- Run linter: `npm run lint`

## API Endpoints

Base URL:
- `http://localhost:3000/api`

Routes:
- `GET /notes` - List all notes
- `GET /notes/:id` - Get note by ID
- `POST /notes` - Create note
- `PUT /notes/:id` - Update note
- `DELETE /notes/:id` - Delete note

Request body for create/update:

```json
{
  "content": "Your note text"
}
```

## Notes

- If you get `Cannot find module '.prisma/client/default'`, run:
  - `npx prisma generate`
- After schema changes in `prisma/schema.prisma`, regenerate Prisma client.
- Frontend API points to `http://localhost:3000/api` in `devnotes-ui/src/api/notes.js`.
