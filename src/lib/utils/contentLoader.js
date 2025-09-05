import contentData from '../data/content.json';
import faqData from '../data/faq.json';
import navigationData from '../data/navigation.json';
import footerData from '../data/footer.json';

export function getContent() {
  return contentData;
}

export function getFAQData() {
  return faqData;
}

export function getNavigationData() {
  return navigationData;
}

export function getFooterData() {
  return footerData;
}
export function getMoneyDetails(){
    return contentData.addMoney
}

export function getSectionContent(sectionKey) {
  return contentData.sections?.[sectionKey] || null;
}

export function getComparisonTable(tableKey) {
  return contentData.comparisonTables?.[tableKey] || null;
}

export function getDebitVsCreditVsPrepaidData() {
  const data = getComparisonTable('debitVsCreditVsPrepaid');
  return data?.map(item => ({
    difference: item.difference,
    first: item.debitCard,
    second: item.creditCard,
    third: item.prepaidCard
  })) || [];
}

export function getDigitalVsPhysicalData() {
  const data = getComparisonTable('digitalVsPhysical');
  return data?.map(item => ({
    difference: item.difference,
    first: item.digital,
    second: item.physical
  })) || [];
}

export function getFeatures() {
  return contentData.features || [];
}

export function getBenefits() {
  return contentData.benefits || [];
}

export function getHowCardsWork() {
  return contentData.howCardsWork?.map(item => ({
    title: item.title,
    para: item.description
  })) || [];
}

export function getOrderSteps() {
  return contentData.orderSteps?.map(item => ({
    title: item.title,
    para: item.description
  })) || [];
}

export function getCardTypes() {
  return contentData.cardTypes?.map(item => ({
    title: item.title,
    desc: item.description,
    color: item.color
  })) || [];
}