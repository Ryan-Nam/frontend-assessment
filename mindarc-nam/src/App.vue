<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />
    <h1>Welcome to the Frontend Assessment Project for Mindarc!</h1>
    <nav>
      <RouterLink to="/ResponsiveLayout">Go to Responsive Layout</RouterLink>
      <RouterLink to="/DataTabsAccordion">View Data Tabs & Accordion</RouterLink>
    </nav>
    <div class="contact-info">
      <p>Hyunwoo Nam (Ryan)</p>
      <a href="mailto:ryannam.dev@gmail.com">ryannam.dev@gmail.com</a>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  text-align: center;
  max-height: 100vh;
  padding: 2rem 0;
}

.logo {
  margin-bottom: 2rem;
}

nav {
  font-size: 1rem;
  margin-top: 2rem;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-mindarc);
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.contact-info {
  margin-top: 2rem;
  font-size: 0.9rem;
}

.contact-info a {
  color: var(--color-text);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  header {
    padding-right: 0; /* Centered content */
  }

  nav {
    text-align: center;
    margin-left: 0;
  }
}
</style>
