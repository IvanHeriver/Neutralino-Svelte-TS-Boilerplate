<script lang="ts">
  export let count: number = 0;
</script>

<div>{count}</div>

<style>
  div {
    margin: 0;
    padding: 0.5rem 0;
    border: 1px solid var(--clr-fg);
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 1.5rem;
    /* max-width: 100px; */
  }
</style>
