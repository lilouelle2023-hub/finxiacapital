export { default } from '../../blog/secondaires-infrastructure-ia-decote-fenetre-entree';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
