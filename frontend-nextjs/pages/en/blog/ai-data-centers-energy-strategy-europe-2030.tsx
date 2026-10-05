export { default } from '../../blog/data-centers-ia-energie-strategie-europe-2030';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
