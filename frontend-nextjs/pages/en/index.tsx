export { default } from '../index';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
