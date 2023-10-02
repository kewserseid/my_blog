import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, fellow code enthusiasts!
          I'm thrilled to welcome you to my corner of the internet, where I embark on a thrilling adventure through the world of Python programming. My name is [Your Name], and I'm a passionate junior programmer eager to share my experiences, insights, and discoveries with you.
        </p>
        <p>
          Here is what have done so far
          check Projects and Researches I participated in <Link href="posts/first-post"> here</Link>
        </p>
      </section>
    </Layout>
  );
}