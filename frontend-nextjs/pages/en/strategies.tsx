export { default } from '../strategies';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
