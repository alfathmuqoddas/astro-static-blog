# Astro Static Blog

Statically generated blog made with Astrojs. 1000 blog pages, each contains 1000 lines of lorem ipsum placeholder. Just plain html and css.

## Why

I'm curious about the performance of Astrojs when generating thousand of blog pages, where the the content of the blog is thousand lines of Lorem Ipsum placeholder.

## How

I'm creating a function called generatePages that accept params of numbers blog articles, and number of lines of lorem ipsum placeholder that want to be generated.
The image placeholder from picsum.photos seed.
Styling using tailwindcss.
No js added.

## Result

The whole generated static assets is about 70mb, including css (tailwind).

## Tech Stack

1. Astro
2. Tailwind

## How to run

`pnpm run dev`
`pnpm run build`

## Screenshot

![Screenshot1](./src/assets/sc1.png)
![Screenshot2](./src/assets/sc2.png)
