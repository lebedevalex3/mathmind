import { defineConfig } from "fumadocs-core/config";

export default defineConfig({
  name: "MathMind",
  description: "Образовательная платформа для школьников",
  theme: {
    accentColor: "hsl(var(--primary))",
  },
  root: "content",
});