export { default } from '../../blog/anthropic-mistral-ia-francaise-datacenters-europe';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
