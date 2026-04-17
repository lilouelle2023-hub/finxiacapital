export { default } from '../investors';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
