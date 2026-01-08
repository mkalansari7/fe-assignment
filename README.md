# Business Registration App

A simple React app for registering businesses via a multi-step form and viewing saved businesses. Data is stored locally in the browser.

## Tech Stack

- React + TypeScript
- Material UI (MUI v6)
- React Hook Form
- Zod
- React Router
- LocalStorage

## How to Run

```bash
npm install
npm run dev
```

Open: http://localhost:5173

## Notes & Assumptions

    •	Data is persisted using localStorage (no backend).
    •	Registration uses a multi-step form with step-level and final validation.
    •	Validation is schema-based using Zod (safeParse for UI-friendly errors).
    •	UI is fully responsive (Stepper on desktop, progress indicator on mobile).
    •	Country list is fetched from the REST Countries API and limited to Africa and the Americas.
    •	No pagination or authentication was added due to local-only data storage.
