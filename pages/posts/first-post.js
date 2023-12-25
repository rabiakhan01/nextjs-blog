import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout";
export default function FirstPost(){
return (
    <>
    <Head>
   <title>First post</title>
    </Head>
    <h1>Hello from the post.js</h1>
    <Link href="/">Back to home</Link>
    <Layout />
    </>
);
}