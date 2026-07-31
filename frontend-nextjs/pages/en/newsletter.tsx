export { default } from '../newsletter';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
