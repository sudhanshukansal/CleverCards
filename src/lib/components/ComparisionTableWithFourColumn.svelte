<script>
  export let data = []
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse text-left mt-4 min-w-[500px]">
    <thead class="bg-gray-700 text-white font-bold text-subParaFont md:text-paraFont">
      <tr>
        <th class="p-2">Differences</th>
        <th class="p-2">Debit Card</th>
        <th class="p-2">Credit Card</th>
        <th class="p-2">Prepaid Card</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row, idx}
        <tr class="text-subParaFont md:text-paraFont text-gray-400 {idx % 2 === 0 ? 'bg-[#6F01FE1A]' : ''}">
          <td class="py-3 sm:py-6 sm:px-4 px-2 font-bold sm:w-[25%] text-white">{row.difference}</td>
          <td class="py-3 sm:py-6 sm:px-4 px-2">{row.first}</td>
          <td class="py-3 sm:py-6 sm:px-4 px-2">{row?.second}</td>
          <td class="py-3 sm:py-6 sm:px-4 px-2">{row?.third}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
