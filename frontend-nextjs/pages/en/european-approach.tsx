export { default } from '../european-approach';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
