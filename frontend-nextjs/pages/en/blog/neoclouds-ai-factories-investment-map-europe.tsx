export { default } from '../../blog/neoclouds-ai-factories-carte-investissements-europe';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
