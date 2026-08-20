export { default } from '../../blog/coliving-europe-modele-operationnel-institutionnel';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
