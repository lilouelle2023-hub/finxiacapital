export { default } from '../contact';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
