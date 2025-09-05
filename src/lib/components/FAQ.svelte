<script>
  let faqs = [
    {
      question: "Are prepaid cards safe in Ireland?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: true,
    },
    {
      question:
        "Can I use CleverCards for tax-free employee gifting in Ireland?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
    {
      question:
        "Can prepaid cards be used for employee rewards under the Small Benefit Exemption Scheme?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
    {
      question: "Are there spending or top-up limits on Prepaid Cards?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
    {
      question:
        "Can Irish companies use prepaid cards for freelancers and contractors?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
    {
      question:
        "Do prepaid business cards in Ireland require a prepaid business check?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
    {
      question: "Can I buy a prepaid card online in Ireland?",
      answer:
        "Yes, prepaid cards issued by CleverCards are safe and regulated in Ireland. Since these cards are not linked to your bank account, there is no risk of fraud or unauthorized access.",
      open: false,
    },
  ];

  function toggleFAQ(index) {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false, // only one open at a time
    }));
  }
</script>

<div class="w-full flex md:flex-row flex-col mx-auto  text-white pb-10">
  <h2 class=" md:w-1/2 font-bold mb-4 text-minSubHead md:text-miniHeadFont lg:text-subHeadFont pt-6">
    Frequently Asked Questions (FAQs)
  </h2>
  <div class="md:w-1/2">
    {#each faqs as faq, i}
      <div
        class="border-b border-gray-700 py-6 cursor-pointer transition-colors "
        on:click={() => toggleFAQ(i)}
      >
        <div class="flex justify-between items-center">
          <span class="text-lg">{faq.question}</span>
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
