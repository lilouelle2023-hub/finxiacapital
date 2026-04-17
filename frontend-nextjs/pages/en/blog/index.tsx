export { default } from '../../blog/index';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
