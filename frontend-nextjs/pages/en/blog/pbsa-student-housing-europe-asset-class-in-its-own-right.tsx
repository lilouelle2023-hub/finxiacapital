export { default } from '../../blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
