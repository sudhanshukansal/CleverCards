<script>
  import FAQ from "$lib/components/FAQ.svelte";
  import ComparisionTableWithFourColumn from "$lib/components/ComparisionTableWithFourColumn.svelte";
  import ComparisionTableWithThreeColumn from "$lib/components/ComparisionTableWithThreeColumn.svelte";
  import HeadingWithParagraph from "$lib/components/HeadingWithParagraph.svelte";
  import RightCheckBoxWithData from "$lib/components/RightCheckBoxWithData.svelte";
  import ThreeSideBorderColumn from "$lib/components/ThreeSideBorderColumn.svelte";
  import Slidingcard from "$lib/components/Slidingcard.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  
  // Import content utilities
  import {
    getSectionContent,
    getDebitVsCreditVsPrepaidData,
    getDigitalVsPhysicalData,
    getFeatures,
    getBenefits,
    getHowCardsWork,
    getOrderSteps,
    getCardTypes
  } from '$lib/utils/contentLoader.js';
  // Load content from JSON
  const debitVcreditVprepaid = getDebitVsCreditVsPrepaidData();
  const digitalVphysical = getDigitalVsPhysicalData();

  // Load content from JSON
  const features = getFeatures();
  const benefits = getBenefits();
  const howCardsWork = getHowCardsWork();
  const orderPrepaid = getOrderSteps();
  const cards = getCardTypes();
  
  // Load section content
  const whatArePrepaidCards = getSectionContent('whatArePrepaidCards');
  const debitVsCreditVsPrepaid = getSectionContent('debitVsCreditVsPrepaid');
  const digitalVsPhysical = getSectionContent('digitalVsPhysical');
  const benefitsSection = getSectionContent('benefits');
  const howCardsWorkSection = getSectionContent('howCardsWork');
  const chooseCleverCards = getSectionContent('chooseCleverCards');
  const orderPrepaidSection = getSectionContent('orderPrepaid');
  const cardOptionsSection = getSectionContent('cardOptions');
</script>

<section class="w-full px-4 sm:px-8 lg:px-2">
  <HeroSection />
  <div class="xl:w-[1091px] mx-auto flex flex-col gap-[5rem]">
    <HeadingWithParagraph
      title={whatArePrepaidCards?.title || ''}
      description={whatArePrepaidCards?.description || ''}
    />
    <div class="">
      <HeadingWithParagraph
        title={debitVsCreditVsPrepaid?.title || ''}
        description={debitVsCreditVsPrepaid?.description || ''}
      />
      <ComparisionTableWithFourColumn data={debitVcreditVprepaid} />
    </div>

    <div class="">
              <HeadingWithParagraph
          title={digitalVsPhysical?.title || ''}
          description={digitalVsPhysical?.description || ''}
        />
      <ComparisionTableWithThreeColumn data={digitalVphysical} />
    </div>
  </div>

  <div class="2xl:w-[1313px] mx-auto flex flex-col gap-[5rem] mt-[5rem]">
    <div>
      <HeadingWithParagraph
        title={benefitsSection?.title || ''}
        description={benefitsSection?.description || ''}
      />
      <RightCheckBoxWithData {features} gridCols={3} />
    </div>
    <div>
      <HeadingWithParagraph
        title={howCardsWorkSection?.title || ''}
        description={howCardsWorkSection?.description || ''}
      />

      <ThreeSideBorderColumn features={howCardsWork} />
    </div>

    <div>
      <HeadingWithParagraph
        title={chooseCleverCards?.title || ''}
        description={chooseCleverCards?.description || ''}
      />
      <RightCheckBoxWithData features={benefits} gridCols={2} />
    </div>

    <div>
      <HeadingWithParagraph
        title={orderPrepaidSection?.title || ''}
        description={orderPrepaidSection?.description || ''}
      />

      <ThreeSideBorderColumn features={orderPrepaid} />
     

    </div>

    <div>
       <HeadingWithParagraph
        title={cardOptionsSection?.title || ''}
      />

       <Slidingcard {cards}/>
    </div>

  




  
    

    <FAQ />
  </div>
</section>