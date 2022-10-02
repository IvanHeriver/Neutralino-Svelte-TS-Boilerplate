import App from "./App.svelte";

const app = new App({
  target: document.body,
});

window.Neutralino.init();

Neutralino.init();
Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});

export default app;
