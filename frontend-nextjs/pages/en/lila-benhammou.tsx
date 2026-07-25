export { default } from '../lila-benhammou';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
