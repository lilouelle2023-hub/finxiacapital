export { default } from '../podcast';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
