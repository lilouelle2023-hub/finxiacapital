export { default } from '../../blog/neoclouds-vs-hyperscalers-europe';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
