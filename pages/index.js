import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Register from '../components/register';
import SignIn from '../components/signin';
import "primereact/resources/themes/nova-accent/theme.css"   
import "primereact/resources/primereact.min.css"

export default function Home({ allPostsData }) {
  return (
    <SignIn/>
    //<Register/>
    
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
