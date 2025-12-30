---
title: "UI components that are usually done with JavaScript that can be replaced with just plain HTML and CSS"
description: "A deep dive into common UI components often built with JavaScript—and how many of them can be implemented using only semantic HTML and modern CSS in Astro.js for faster, more accessible sites."
image: "erfjdshkjf"
keywords:
  - astrojs
  - html
  - css
  - javascript
  - web performance
  - accessibility
  - ui components
pubDate: 2025-12-30
---

## Introduction

Modern frontend development often defaults to JavaScript-heavy solutions—even for UI interactions that browsers have supported natively for years. Frameworks, state management, and event handlers are powerful, but they also come with costs: larger bundles, slower startup, hydration complexity, and accessibility pitfalls.

Astro.js encourages a different mindset: **ship less JavaScript by default**. Astro’s partial hydration and island architecture make it an ideal platform to revisit how much UI behavior can be achieved with **plain HTML and CSS**.

In this article, we’ll explore **UI components that are commonly implemented with JavaScript but can be replaced entirely with HTML and CSS**, along with when you _should_ still reach for JavaScript.

## Why Avoid JavaScript for Simple UI?

Before diving into components, it’s important to understand _why_ this matters—especially in Astro projects.

### Benefits

- **Zero JavaScript cost**: No parsing, no execution, no hydration
- **Better performance**: Faster First Contentful Paint (FCP) and Time to Interactive (TTI)
- **Built-in accessibility**: Native HTML elements already support keyboard and screen readers
- **Less complexity**: Fewer edge cases, less state management
- **Resilient by default**: Works even if JavaScript fails

### When JavaScript Is Still Needed

- Complex application state
- Client-side data fetching
- Drag-and-drop interactions
- Canvas, WebGL, or advanced animations

Astro allows you to selectively add JavaScript _only where needed_.

## 1. Accordion / Disclosure Panels

### Common JavaScript Approach

Accordions are often implemented with click listeners, state variables, and class toggling.

### HTML-Only Solution: `<details>` and `<summary>`

```html
<details>
  <summary>What is Astro?</summary>
  <p>Astro is a modern static site builder focused on performance.</p>
</details>
```

### Why This Works

- Native open/close behavior
- Keyboard accessible (Enter / Space)
- Screen-reader friendly
- No JavaScript required

### Styling with CSS

```css
details summary {
  cursor: pointer;
  font-weight: 600;
}

details[open] summary {
  margin-bottom: 0.5rem;
}
```

### When to Use JavaScript Instead

- Multiple open panels with synchronization
- Animations beyond simple transitions

## 2. Tabs

### Typical JavaScript Tabs

Tabs are often built using state and conditional rendering.

### CSS-Only Tabs Using Radio Buttons

```html
<div class="tabs">
  <input type="radio" name="tab" id="tab1" checked />
  <input type="radio" name="tab" id="tab2" />

  <div class="labels">
    <label for="tab1">Tab One</label>
    <label for="tab2">Tab Two</label>
  </div>

  <div class="content">
    <section class="tab1">Content for Tab One</section>
    <section class="tab2">Content for Tab Two</section>
  </div>
</div>
```

```css
#tab1:checked ~ .content .tab1 {
  display: block;
}
#tab2:checked ~ .content .tab2 {
  display: block;
}

.content section {
  display: none;
}
```

### Benefits

- No runtime JavaScript
- Maintains state via form controls
- Works well with Astro static pages

### Limitations

- URL-based tabs require JavaScript
- More complex keyboard navigation may need enhancements

## 3. Modal / Dialog

### JavaScript Modal (Typical)

Usually involves:

- Event listeners
- Focus trapping
- ESC key handling

### HTML Solution: `<dialog>` Element

```html
<dialog id="modal">
  <p>This is a native dialog.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<button onclick="modal.showModal()">Open</button>
```

> ⚠️ Note: Opening the dialog requires **one line of JavaScript**, but everything else (focus management, ESC handling) is native.

### Why It’s Still a Win

- Near-zero JS
- Built-in accessibility
- Clean semantics

In Astro, this tiny script can live in an island or inline script.

## 4. Dropdown Menus

### JavaScript Dropdowns

Often implemented with click handlers and outside-click detection.

### CSS-Only Dropdown Using `:hover` and `:focus-within`

```html
<nav class="menu">
  <button>Menu</button>
  <ul>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</nav>
```

```css
.menu ul {
  display: none;
}

.menu:focus-within ul,
.menu:hover ul {
  display: block;
}
```

### Accessibility Tips

- Use `<button>` instead of `<div>`
- Ensure keyboard focus order

## 5. Toggle Switches

### JavaScript Toggles

Often tied to state variables.

### HTML + CSS Checkbox Toggle

```html
<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
```

```css
.switch input:checked + .slider {
  background-color: #4ade80;
}
```

### Why This Is Better

- State lives in the DOM
- Form-compatible
- Can be progressively enhanced later

## 6. Tooltips

### JavaScript Tooltips

Often created with mouse events and positioning logic.

### Pure HTML Tooltips

```html
<button aria-describedby="tip">Hover me</button>
<span role="tooltip" id="tip">Tooltip text</span>
```

```css
[role="tooltip"] {
  display: none;
}

button:hover + [role="tooltip"] {
  display: block;
}
```

### Advantages

- No JS
- Screen-reader friendly
- Simple positioning

## 7. Image Carousels (Simple)

### CSS Scroll Snap

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel img {
  scroll-snap-align: center;
}
```

### When This Works Well

- No autoplay
- No complex navigation
- Touch-friendly by default

## How This Fits Perfectly with Astro

Astro’s philosophy aligns perfectly with these techniques:

- Use **HTML-first components**
- Add CSS for interactivity
- Hydrate with JavaScript only when required

```astro
---
import FancyCarousel from '../components/FancyCarousel.jsx';
---

<!-- Static HTML component -->
<Accordion />

<!-- Hydrated only when needed -->
<FancyCarousel client:visible />
```

## Decision Checklist: Do You Really Need JavaScript?

Before writing JS for a UI component, ask:

- Does HTML already support this behavior?
- Can CSS handle the interaction?
- Is the state local and simple?
- Does it need persistence or data fetching?

If the answer is _no_ to most of these—skip JavaScript.

## Conclusion

JavaScript is powerful—but not every UI problem requires it. By leveraging semantic HTML and modern CSS, you can build fast, accessible, and maintainable interfaces that align perfectly with Astro’s performance-first philosophy.

Astro doesn’t remove JavaScript from your toolbox—it simply helps you **use it intentionally**.

If you build fewer islands, you ship faster sites.

Happy shipping 🚀
