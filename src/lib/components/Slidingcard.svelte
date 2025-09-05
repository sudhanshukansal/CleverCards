<script>
  export  let cards =[]

</script>

<div class="grid md:grid-cols-3 gap-6 text-white max-w-6xl mx-auto ">
  {#each cards as card}
    <div class="relative bg-gray-700 rounded-2xl p-6 overflow-hidden group cursor-pointer h-96">
      <!-- Content -->
       <div class="flex justify-between">
        <h3 class="ttext-subParaFont md:text-paraFont lg:text-minSubHead font-semibold mb-2">{@html card.title}</h3>
          <span >  <i class="fa-solid fa-arrow-right bg-buttonColor p-1 border border-buttonColor rounded-full"></i>
</span>

       </div>
      
      <p class="text-subParaFont md:text-paraFont text-gray-400">{card.desc}</p>

      <!-- Credit Card -->
      <div class="absolute left-1/2 -translate-x-1/2 w-4/5 h-48
                  bg-gradient-to-r {card.color} rounded-xl flex items-start justify-between px-4
                  transition-all duration-500 ease-out
                  bottom-[-8rem] group-hover:bottom-4">
        <span class="font-bold">CleverCards</span>
        <span class="text-sm">Business</span>
      </div>
    </div>
  {/each}
</div>