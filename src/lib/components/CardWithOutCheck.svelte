<script>
  export let cards = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 ">
  {#each cards as card}
    <div class="bg-gray-800 text-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
      <h3 class="text-subParaFont md:text-paraFont text-white font-bold mb-2">{card.title}</h3>
      <p class="text-subParaFont md:text-paraFont text-gray-400">{card.description}</p>
    </div>
  {/each}
</div>

