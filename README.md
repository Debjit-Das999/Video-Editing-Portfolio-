# potato bear — Portfolio

A fast, minimal portfolio site for a talking-head video editor. Built with
**Next.js + TypeScript + Tailwind CSS**. YouTube videos load only when clicked,
so the page stays quick.

## Edit your content (the only file you need)

Everything you'll want to change lives in **[`data/content.ts`](data/content.ts)**:

- Your **name, tagline, email, bio, and highlights**
- Your **showreel** video
- Your **portfolio projects** (title, category, video, description)
- The **category filter** tabs
- **Testimonials**

To swap a video, grab the ID from its YouTube URL — it's the part after `v=`:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                ^^^^^^^^^^^   <- this is the youtubeId
```

Lines marked `// TODO` are sample placeholders to replace with your real info.

### Add social links

In `data/content.ts`, fill in the `socials` array under `profile`:

```ts
socials: [
  { label: "YouTube", href: "https://youtube.com/@you" },
  { label: "Instagram", href: "https://instagram.com/you" },
],
```

They'll appear automatically in the footer (leave it empty to hide).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy (free)

- **Vercel** (easiest): push this folder to GitHub, import it at
  [vercel.com/new](https://vercel.com/new), and it deploys automatically.
- **Netlify**: same idea — connect the repo; build command `npm run build`.

## Contact form

The contact form opens the visitor's email app pre-filled to your address — no
backend needed. To collect submissions on a server instead, see the commented
Formspree example inside [`components/Contact.tsx`](components/Contact.tsx).

## Where things live

| Thing | File |
| --- | --- |
| All editable content | `data/content.ts` |
| Colors, fonts, theme | `app/globals.css` (the `@theme` block) |
| Page section order | `app/page.tsx` |
| Individual sections | `components/*.tsx` |
