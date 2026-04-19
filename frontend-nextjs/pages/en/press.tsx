export { default } from '../press';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
