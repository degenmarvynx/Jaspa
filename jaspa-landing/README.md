This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Resources Guides Data Attributes

Attach new guide sets without changing logic by following this data structure:

- id: unique string for the guide topic
- title: display title
- description: short helper text
- steps: array of `{ step: number, text: string }`

See [guidesData.ts](file:///c:/Users/marve/Documents/trae_projects/Jasper/jaspa-landing/src/app/resources/guidesData.ts) for examples. To add a new set:

1. Append a new object to `GUIDES` with `id`, `title`, `description`, and `steps`.
2. Ensure the `id` is referenced by UI triggers via `selectedGuideId`.
3. Images are optional; the UI renders text-first and remains accessible.

Focus styling for tabs shares a single CSS utility `.tab-focused` defined in [globals.css](file:///c:/Users/marve/Documents/trae_projects/Jasper/jaspa-landing/src/app/globals.css). Use this class for any tab that needs the bold state.
