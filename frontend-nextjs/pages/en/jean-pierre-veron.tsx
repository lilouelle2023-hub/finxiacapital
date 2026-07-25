export { default } from '../jean-pierre-veron';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
