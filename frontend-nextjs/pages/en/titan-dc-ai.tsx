export { default } from '../titan-dc-ai';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
