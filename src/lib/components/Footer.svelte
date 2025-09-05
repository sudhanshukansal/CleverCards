<script>
  const footerList = [
    {
      Product: [
        { list: "Stay Safe Online", link: "" },
        { list: "Refer & Get Rewarded!", link: "" },
        { list: "Financial Help & Support", link: "" },
        { list: "Share Your Feedback", link: "" },
        { list: "Knowledge", link: "" },
      ],
    },
    {
      Resources: [
        { list: "Who We Are", link: "" },
        { list: "Get In Touch With Us", link: "" },
        { list: "Careers & Opportunities", link: "" },
        { list: "Get Expert Insight", link: "" },
      ],
    },
    {
      Support: [
        { list: "Essential Documents", link: "" },
        { list: "Cookies & Preferences", link: "" },
        { list: "Privacy & Security", link: "" },
        { list: "Terms of Service", link: "" },
        { list: "Credits & Attributions", link: "" },
      ],
    },
  ];

  const fotterSocialMedia = [
    {
      list: "YouTube",
      link: "https://www.youtube.com",
      icon: "fa-brands fa-youtube",
      altIcon: "youtube-icon",
    },
    {
      list: "Facebook",
      link: "https://www.facebook.com",
      icon: "fa-brands fa-facebook",
      altIcon: "facebook-icon",
    },
    {
      list: "Instagram",
      link: "https://www.instagram.com",
      icon: "fa-brands fa-instagram",
      altIcon: "insta-icon",
    },
  ];
</script>

<section class="relative w-full border-t border-gray-800 bg-black">
  <div class="relative mx-auto flex w-full flex-col gap-4">
    <nav
      class="grid grid-cols-1 gap-[2rem] pt-[4rem] px-2 sm:grid-cols-2 lg:grid-cols-7 lg:px-[2rem]"
    >
      <div class="">
        <img src="" alt="" />
        <h2 class="text-white font-bold">CleaverCards</h2>
        <div>
          <p class="text-lightGray">Follow us on:</p>
          <div class="flex gap-4">
            {#each fotterSocialMedia as item}
              <a href={item.link}>
                <i class="{item.icon} text-white"></i>
              </a>
            {/each}
          </div>
        </div>
      </div>
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
                  class=" mb-2 text-subParaFont md:text-paraFont text-gray-400 underline-offset-4 hover:underline flex gap-2 items-center"
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
      <div class="flex flex-col gap-6 md:col-span-3">
        <h2 class="font-bold text-white">Get started with CleaverCards</h2>
        <p class="text-subParaFont md:text-paraFont text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptate nostrum, dolorum aspernatur sunt commodi. Enim autem omnis
          reprehenderit libero.
        </p>
        <div class="flex gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            class="md:w-[80%] border rounded-3xl p-2 outline-none font-medium"
          />
          <button
            class="px-1 md:p-2 border border-buttonColor rounded-3xl cursor-pointer bg-buttonColor text-white"
            >Get Notified</button
          >
        </div>
      </div>
    </nav>

    <div class="h-[1px] w-full bg-lightGray/50"></div>

    <div
      class="text-lightGray flex flex-col gap-2 py-4 justify-center px-[1rem]  text-minParaFont lg:px-[4rem]"
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
