
<script>
  import { getFooterData } from '$lib/utils/contentLoader.js';
  
  const footerData = getFooterData();
  const brand = footerData.brand;
  const sections = footerData.sections;
  const socialMedia = footerData.socialMedia;
  const newsletter = footerData.newsletter;
  const copyright = footerData.copyright;
</script>

<section class="relative w-full border-t border-gray-800 bg-black">
  <div class="relative mx-auto flex w-full flex-col gap-4">
    <nav
      class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-[2rem] sm:gap-[1rem] pt-[4rem] px-2 lg:px-[2rem]"
    >
      <!-- Footer list (always first on desktop, before follow us on mobile/tablet) -->
      {#each sections as section}
        <div>
          <h3 class="mb-4 font-bold text-white lg:text-paraFont">
            {section.title}
          </h3>
          <ul>
            {#each section.links as link}
              <a
                href={link.href}
                target={link.href.includes("http") ? "_blank" : "_self"}
                class="mb-2 text-subParaFont md:text-paraFont text-gray-400 underline-offset-4 hover:underline flex gap-2 items-center"
              >
                {link.label}
              </a>
            {/each}
          </ul>
        </div>
      {/each}

      <!-- Follow us: below lists on <lg, first on lg+ -->
      <div class="flex flex-col gap-3 sm:gap-4 lg:order-first">
        <div class="flex gap-1">
          <i class="{brand.icon} text-xl text-white"></i>
          <h2 class="text-xl font-bold text-white">{brand.name}</h2>
        </div>
        <div class="">
          <h2 class="text-white font-bold">{brand.tagline}</h2>
          <div>
            <p class="text-lightGray">Follow us on:</p>
            <div class="flex gap-4">
              {#each socialMedia as social}
                <a href={social.href} aria-label={social.name}>
                  <i class="{social.icon} text-white"></i>
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
        <h2 class="font-bold text-white">{newsletter.title}</h2>
        <p class="text-subParaFont md:text-paraFont text-gray-400">
          {newsletter.description}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder={newsletter.placeholder}
            class="w-full sm:w-[80%] border rounded-3xl px-1 py-2 md:px-2 md:py-1  outline-none font-normal"
          />
          <button
            class="px-1 py-2 md:px-2 md:py-1 lg:py-0 border border-buttonColor rounded-3xl cursor-pointer bg-buttonColor text-white"
          >
            {newsletter.buttonText}
          </button>
        </div>
      </div>
    </nav>

    <div class="h-[1px] w-full bg-lightGray/50"></div>

    <div
      class="text-lightGray flex flex-col gap-2 py-4 justify-center px-[1rem] text-minParaFont lg:px-[4rem]"
    >
      <p>{copyright.text}</p>
      <p>
        {copyright.description}
      </p>
    </div>
  </div>
</section>