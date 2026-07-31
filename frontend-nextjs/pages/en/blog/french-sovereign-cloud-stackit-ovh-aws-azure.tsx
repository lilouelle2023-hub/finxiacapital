export { default } from '../../blog/cloud-souverain-france-stackit-ovh-aws-azure';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
