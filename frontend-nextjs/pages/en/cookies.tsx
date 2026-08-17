export { default } from '../cookies';

export async function getStaticProps() {
  return {
    props: {
      initialLanguage: 'en'
    }
  };
}
