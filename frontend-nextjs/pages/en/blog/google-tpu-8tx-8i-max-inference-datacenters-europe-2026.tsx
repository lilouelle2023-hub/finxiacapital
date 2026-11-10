export { default } from '../../blog/google-tpu-8tx-inference-datacenter-europe-2026';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
