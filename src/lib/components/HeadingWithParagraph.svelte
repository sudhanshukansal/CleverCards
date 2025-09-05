<script>
  export let title;
  export let description = "";
</script>

<div class="text-center my-8 px-2 sm:px-4 space-y-6 pb-4 lg:pb-6">
  <h1
    class="text-minSubHead md:text-miniHeadFont lg:text-subHeadFont font-bold mb-2 text-white"
  >
    {@html title}
  </h1>
  {#if description}
    <p class="text-subParaFont md:text-paraFont text-gray-400">
      {@html description}
    </p>
  {/if}
</div>
