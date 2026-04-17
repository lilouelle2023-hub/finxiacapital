export { default } from '../about';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
