<script lang="ts">
  import Count from "./comp/Counter.svelte";
  let count: number = 0;
</script>

<main>
  <h1>Testy!</h1>
  <Count bind:count />
  <div class="actions">
    <button on:click={() => count++}>+</button>
    <button on:click={() => count--}>-</button>
    <button on:click={() => window.Neutralino.app.exit()}>Quit</button>
  </div>
</main>

<style>
  main {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    margin: 0;
  }
</style>
