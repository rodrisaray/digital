/* 1. Root Variables: Light, Shine, Ability Colors and Spacing */
:root {
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --color-bg: #f9faff;             /* light, open room */
  --color-text-primary: #222222;   /* clear ability */
  --color-text-secondary: #555555; /* softer text */
  --color-primary: #1a73e8;        /* digital blue, shining light */
  --color-secondary: #fbbc04;      /* bright ray, giving energy */
  --color-accent: #34a853;         /* growth green - build and grow */
  --color-border: #e0e0e0;         /* light border for structure */
  --border-radius: 8px;
  --spacing: 1.5rem;
  --max-width: 1200px;
  --transition-speed: 0.3s;
}

/* 2. Reset and Box Sizing */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 3. Base Styles: Open Room for Content */
body {
  font-family: var(--font-family);
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* 4. Headings: Shine and Ray of Attention */
h1, h2, h3 {
  color: var(--color-primary);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 0 6px rgba(26, 115, 232, 0.3); /* subtle shine */
}

h1 { font-size: 2.75rem; }
h2 { font-size: 2.25rem; }
h3 { font-size: 1.75rem; }

/* 5. Paragraphs: Giving Clear Ability to Read */
p {
  color: var(--color-text-secondary);
  margin-bottom: 1.25rem;
  font-size: 1rem;
  max-width: 800px;
  letter-spacing: 0.02em;
}

/* 6. Links: Open and Social Interaction */
a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color var(--transition-speed);
}

a:hover,
a:focus {
  color: var(--color-secondary);
  text-decoration: underline;
}

/* 7. Container: Room to Grow */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
}

/* 8. Grid: Digital & Social Storefront Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing);
}

/* 9. Card: Shine & Give Ability */
.card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--spacing);
  box-shadow: 0 4px 8px rgba(26, 115, 232, 0.1); /* light ray */
  transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.card:hover,
.card:focus-within {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(26, 115, 232, 0.3);
}

/* 10. Buttons: Build, Fix, Grow with Color Energy */
.button {
  background-color: var(--color-accent);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  transition: background-color var(--transition-speed);
  text-align: center;
  display: inline-block;
}

.button:hover,
.button:focus {
  background-color: var(--color-secondary);
  box-shadow: 0 0 12px var(--color-secondary);
}

/* 11. Forms: Address & Give Information Clearly */
form {
  max-width: 420px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  resize: vertical;
  transition: border-color var(--transition-speed);
}

input:focus,
textarea:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 8px var(--color-primary);
}

/* 12. Footer: Final Light & Room to Shine */
footer {
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  padding: 1.5rem var(--spacing);
  font-size: 0.9rem;
  border-top: 4px solid var(--color-secondary);
}

/* 13. Responsive: Build Accessibility on All Screens */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }

  .grid {
    grid-template-columns: 1fr;
  }

  .button {
    width: 100%;
  }

  .container {
    padding: 1rem;
  }
}


