export { default } from '../publications';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
