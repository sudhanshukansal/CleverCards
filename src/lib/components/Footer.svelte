<script>
  const footerList = [
    {
      Product: [
        { list: "Employee Gift Cards", link: "#" },
        { list: "Business Expenses Card", link: "#" },
        { list: "The Subscription Card", link: "#" },
        { list: "Employee Benefits", link: "#" },
        { list: "Employee Allowances", link: "#" },
        { list: "Travel Expense Cards", link: "#" },
      ],
    },
    {
      Resources: [
        { list: "Business Account Login", link: "#" },
        { list: "FAQs", link: "#" },
        { list: "Help center", link: "#" },
        { list: "Referral Programme", link: "#" },
        { list: "Apple Pay", link: "#" },
        { list: "News", link: "#" },
        { list: "Blog", link: "#" },
      ],
    },
    {
      Support: [
        { list: "Legal", link: "#" },
        { list: "Privacy Policy", link: "#" },
        { list: "Cookies Policy", link: "#" },
        { list: "Contact US", link: "#" },
        { list: "Cookies Settings", link: "#" },
      ],
    },
  ];

  const fotterSocialMedia = [
     {
      list: "Instagram",
      link: "https://www.instagram.com",
      icon: "fa-brands fa-instagram",
       color:"text-orange-600",
      altIcon: "insta-icon",
    },
    {
      list: "YouTube",
      link: "https://www.youtube.com",
      icon: "fa-brands fa-youtube",
      color:"text-red-600",
      altIcon: "youtube-icon",
    },
    {
      list: "Facebook",
      link: "https://www.facebook.com",
      icon: "fa-brands fa-facebook",
       color:"text-blue-600",
      altIcon: "facebook-icon",
    },
   
  ];
</script>

<section class="relative w-full border-t border-gray-800 bg-black">
  <div class="relative mx-auto flex w-full flex-col gap-4">
    <nav
      class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-[2rem] sm:gap-[1rem] pt-[4rem] px-2 lg:px-[2rem]"
    >
      <!-- Footer list (always first on desktop, before follow us on mobile/tablet) -->
      {#each footerList as section}
        {#each Object.entries(section) as [title, items]}
          <div>
            <h3 class="mb-4 font-bold text-white lg:text-paraFont">
              {title}
            </h3>
            <ul>
              {#each items as item}
                <a
                  href={item.link}
                  target={item.link.includes("http") ? "_blank" : "_self"}
                  class="mb-2 text-subParaFont md:text-paraFont text-gray-400 underline-offset-4 hover:underline flex gap-2 items-center"
                  >{#if item.icon}
                    <img
                      src={item.icon}
                      alt={item.altIcon}
                      class="h-[1.5rem]"
                    />
                  {/if}
                  {item.list}</a
                >
              {/each}
            </ul>
          </div>
        {/each}
      {/each}

      <!-- Follow us: below lists on <lg, first on lg+ -->
      <div class="flex flex-col gap-3 sm:gap-4 lg:order-first">
        <div class="flex gap-1">
          <i class="fa-regular fa-credit-card text-xl text-white"></i>
          <h2 class="text-xl font-bold text-white">CleaverCards</h2>
        </div>
        <div class="">
          <h2 class="text-white font-bold">CleaverCards</h2>
          <div>
            <p class="text-lightGray">Follow us on:</p>
            <div class="flex gap-4">
              {#each fotterSocialMedia as item}
                <a href={item.link}>
                  <i class="{item.icon}  text-white"></i>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Email section: spans 2 columns on lg+ -->
      <div
        class="flex flex-col gap-6 sm:col-span-2 order-last lg:col-span-3 xl:col-span-3"
      >
        <h2 class="font-bold text-white">Get started with CleaverCards</h2>
        <p class="text-subParaFont md:text-paraFont text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptate nostrum, dolorum aspernatur sunt commodi. Enim autem omnis
          reprehenderit libero.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            class="w-full sm:w-[80%] border rounded-3xl px-1 py-2 md:px-2 md:py-1  outline-none font-normal"
          />
          <button
            class="px-1 py-2 md:px-2 md:py-1 lg:py-0 border border-buttonColor rounded-3xl cursor-pointer bg-buttonColor text-white"
            >Get Notified</button
          >
        </div>
      </div>
    </nav>

    <div class="h-[1px] w-full bg-lightGray/50"></div>

    <div
      class="text-lightGray flex flex-col gap-2 py-4 justify-center px-[1rem] text-minParaFont lg:px-[4rem]"
    >
      <p>©2025 CleverCards All rights reserved DSA.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        necessitatibus amet impedit labore assumenda officia aliquid dolore
        possimus sed excepturi illo perferendis nesciunt obcaecati quas, ex
        dolorem maxime praesentium eum ut vero voluptatibus numquam quasi
        dolores. Ratione facere alias eaque.
      </p>
    </div>
  </div>
</section>
