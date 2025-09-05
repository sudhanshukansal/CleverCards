
<script>
  import { getFAQData } from '$lib/utils/contentLoader.js';
  
  const faqData = getFAQData();
  let faqs = faqData.faqs;

  function toggleFAQ(index) {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false, // only one open at a time
    }));
  }
</script>

<div class="w-full flex md:flex-row flex-col mx-auto  text-white pb-4 md:pb-10">
  <h2 class=" md:w-1/2 font-bold mb-4 text-minSubHead md:text-miniHeadFont lg:text-subHeadFont pt-6">
    {faqData.title}
  </h2>
  <div class="md:w-1/2">
    {#each faqs as faq, i}
      <div
        class="border-b border-gray-700 py-6 cursor-pointer transition-colors "
        on:click={() => toggleFAQ(i)}
      >
        <div class="flex justify-between items-center">
          <span class="text-subParaFont md:text-paraFont font-bold">{faq.question}</span>
          <span
            class={faq.open
              ? "rotate-180 transition-transform"
              : "transition-transform"}
          >
            ↑
          </span>
        </div>

        {#if faq.open}
          <p class="mt-2 text-subParaFont md:text-paraFont text-gray-400">{faq.answer}</p>
        {/if}
      </div>
    {/each}
  </div>
 
</div>