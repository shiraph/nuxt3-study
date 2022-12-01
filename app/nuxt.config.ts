// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    server: {
      watch: { usePolling: true },
    },
  },
  typescript: {
    strict: true,
  },
  ssr: false,
});
