export { default } from '../governance';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
