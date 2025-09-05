<script>
  import FAQ from "$lib/components/FAQ.svelte";
  import ComparisionTableWithFourColumn from "$lib/components/ComparisionTableWithFourColumn.svelte";
  import ComparisionTableWithThreeColumn from "$lib/components/ComparisionTableWithThreeColumn.svelte";
  import HeadingWithParagraph from "$lib/components/HeadingWithParagraph.svelte";
  import RightCheckBoxWithData from "$lib/components/RightCheckBoxWithData.svelte";
  import ThreeSideBorderColumn from "$lib/components/ThreeSideBorderColumn.svelte";
  import Slidingcard from "$lib/components/Slidingcard.svelte";
  import HeroSection from "$lib/components/HeroSection.svelte";
  let debitVcreditVprepaid = [
    {
      difference: "How does it work?",
      headingname: "Debit Card",
      first: "Deducts money directly from your bank account",
      second: "Let's you borrow from the bank to pay back later",
      third: "Prepaid cards are loaded in advance to be spent within a limit",
    },
    {
      difference: "Spending Limit",
      first: "Restricted to account balance",
      second: "Restricted by approved credit limit",
      third: "Restricted to the amount loaded on the cards",
    },
    {
      difference: "Account Link",
      first: "Linked to your bank account",
      second: "Linked to a separate credit account",
      third: "Not linked to any bank account",
    },
    {
      difference: "Credit Checks",
      first: "No credit checks required",
      second: "Credit checks are usually required",
      third: "No credit check required",
    },
    {
      difference: "Risks",
      first: "Risk of overdrawing the account exists",
      second: "Risk of exceeding spending limit exists",
      third: "No risks. Spending is capped at the loaded amount",
    },
  ];
  let digitalVphysical = [
    {
      difference: "How does it work?",

      first: "Deducts money directly from your bank account",
      second: "Let's you borrow from the bank to pay back later",
    },
    {
      difference: "Spending Limit",
      first: "Restricted to account balance",
      second: "Restricted by approved credit limit",
    },
    {
      difference: "Account Link",
      first: "Linked to your bank account",
      second: "Linked to a separate credit account",
    },
    {
      difference: "Credit Checks",
      first: "No credit checks required",
      second: "Credit checks are usually required",
    },
    {
      difference: "Risks",
      first: "Risk of overdrawing the account exists",
      second: "Risk of exceeding spending limit exists",
    },
  ];

  const features = [
    {
      title:
        "Digital prepaid cards can be issued and sent to employees instantly via email, all within seconds",
    },
    {
      title:
        "Prepaid cards are cost-efficient as they reduce admin costs and paperwork",
    },
    {
      title:
        "Employers can set limits, restrict categories, and manage their expenses better",
    },
    {
      title:
        "Prepaid cards are not linked to any bank account, which reduces fraud and risk",
    },
    {
      title:
        "Prepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title:
        "Prepaid cards can be used both for small businesses and large enterprises",
    },
  ];
  const benefits = [
    {
      title:
        "Digital prepaid cards can be issued and sent to employees instantly via email, all within seconds",
    },
    {
      title:
        "Prepaid cards are cost-efficient as they reduce admin costs and paperwork",
    },
    {
      title:
        "Employers can set limits, restrict categories, and manage their expenses better",
    },
    {
      title:
        "Prepaid cards are not linked to any bank account, which reduces fraud and risk",
    },
    {
      title:
        "Prepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title:
        "Prepaid cards can be used both for small businesses and large enterprises Prepaid ",
    },
  ];
  const howCardsWork = [
    {
      title: "Business Expense Management",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Business Travel Expense Management",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises Prepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Meal Allowance for Employees",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Employee Benefit Program",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
  ];
  const orderPrepaid = [
    {
      title: "Step 1",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Step 2",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises Prepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Step 3",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
    {
      title: "Step 4",
      para: " Prepaid cards can be used both for small businesses and large enterprisesPrepaid cards can be used both for small businesses and large enterprises",
    },
  ];
  let cards = [
    {
      title: "Employee <br> Benefits Cards",
      desc: "Gift tax-free* rewards with CleverCards digital cards. Simplify business gifting and give employees full control over their funds, with the flexibility to spend them anywhere, anytime.",
      color: "from-purple-600 to-purple-900"
    },
    {
      title: "Business <br> Expense Cards",
      desc: "Attain real-time control and transparency over your business spend. Free employees from end-of-month expense claims.",
      color: "from-gray-600 to-gray-900"
    },
    {
      title: "Subscription <br> Payment Cards",
      desc: "Earn unlimited cashback on all your subscriptions with no monthly fees instantly. Track, control, and optimise your payments all in one place.",
      color: "from-blue-600 to-blue-900"
    }
  ];
 
</script>

<section class="w-full px-4 sm:px-8 lg:px-2">
  <HeroSection />
  <div class="xl:w-[1091px] mx-auto flex flex-col gap-[5rem]">
    <HeadingWithParagraph
      title="What are Prepaid Card?"
      description="prepaid card are the card pre-loaded with money. This card primarily used by businesses for employee gifting , business ttravel or to manage the business expenses."
    />
    <div class="">
      <HeadingWithParagraph
        title="Debit Vs Credit Vs Prepaid Card"
        description="Debit, credit, and prepaid cards might look the same, but each works differently. Here is how they compare"
      />
      <ComparisionTableWithFourColumn data={debitVcreditVprepaid} />
    </div>

    <div class="">
      <HeadingWithParagraph
        title="Digital Vs Physical Prepaid Cards"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo odit libero aperiam sed quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo odit libero aperiam sed quasi?
"
      />
      <ComparisionTableWithThreeColumn data={digitalVphysical} />
    </div>
  </div>

  <div class="2xl:w-[1313px] mx-auto flex flex-col gap-[5rem] mt-[5rem]">
    <div>
      <HeadingWithParagraph
        title="Benefit of business cards, <br> For Business In Ireland & UK"
        description="The benfit of prepaid cards in Ireland and the UK go far beyond ease of use. <br> Here are some of the props of using a prepaid card for your business."
      />
      <RightCheckBoxWithData {features} gridCols={3} />
    </div>
    <div>
      <HeadingWithParagraph
        title="How do prepaid Cards Work?"
        description="The benfit of prepaid cards in Ireland and the UK go far beyond ease of use. <br> Here are some of the props of using a prepaid card for your business."
      />

      <ThreeSideBorderColumn features={howCardsWork} />
    </div>

    <div>
      <HeadingWithParagraph
        title="Choose CleverCards For Businesses In Ireland & UK."
        description="The benfit of prepaid cards in Ireland and the UK go far beyond ease of use.  Here are some of the props of using a prepaid card for your business."
      />
      <RightCheckBoxWithData features={benefits} gridCols={2} />
    </div>

    <div>
      <HeadingWithParagraph
        title="Order Prepaid Mastercards <br> For Your Employees with CleverCards"
        description="The benfit of prepaid cards in Ireland and the UK go far beyond ease of use. <br> Here are some of the props of using a prepaid card for your business."
      />

      <ThreeSideBorderColumn features={orderPrepaid} />
     

    </div>

    <div>
       <HeadingWithParagraph
        title="CleverCards' Prepaid Card Options"
      />

       <Slidingcard {cards}/>
    </div>
  
    

    <FAQ />
  </div>
</section>
