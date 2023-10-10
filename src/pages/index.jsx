
import Layout from '../components/layout'
import Hero from "../components/hero";

export default function Page() {
  return (
    <>
      <Hero />
    </>
  );
}
Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}