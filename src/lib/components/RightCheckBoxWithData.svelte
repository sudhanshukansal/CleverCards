<script>
  export let features = [];
  export let gridCols = 3;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{gridCols} gap-6 text-gray-300">
  {#each features as feature}
    <div class="bg-gray-800 rounded-lg px-3 py-4 flex items-center gap-3">
      <span>
        <i class="fa-solid fa-check bg-buttonColor p-1 border border-buttonColor rounded-full"></i>
      </span>
      <p class="text-subParaFont md:text-paraFont text-gray-400 mb-0">
        {feature.title}
      </p>
    </div>
  {/each}
</div>

