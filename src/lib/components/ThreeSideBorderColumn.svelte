<script>
  export let features = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6 text-gray-300">
  {#each features as feature}
    <div class=" rounded-2xl items-center px-3 py-4 border-b border-x cursor-pointer transition-transform duration-300 
            hover:scale-105">
      <div class="flex flex-col justify-start items-start gap-6 px-2 ">
        <h2 class="text-subParaFont md:text-paraFont font-bold text-white">{feature.title}</h2>
        <p class="text-subParaFont md:text-paraFont text-gray-400 col-span-6 font-normal">{feature.para}</p>
      </div>
    </div>
  {/each}
</div>
