<script>
  export let data = []
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse text-left mt-4 min-w-[500px]">
    <thead class="bg-gray-700 text-white font-bold text-subParaFont md:text-paraFont">
      <tr>
        <th class="p-2 w-1/3">Differences</th>
        <th class="p-2 w-1/3">Digital Prepaid Cards</th>
        <th class="p-2">Physical Prepaid Cards</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row, idx}
        <tr class="text-subParaFont md:text-paraFont text-gray-400 {idx % 2 === 0 ? 'bg-[#6F01FE1A]' : ''}">
          <td class="py-6 px-2 font-bold text-white">{row.difference}</td>
          <td class="py-6 px-2">{row.first}</td>
          <td class="py-6 px-2">{row.second}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
