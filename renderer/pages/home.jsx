import React from "react";
import Head from "next/head";
import Link from "next/link";
import Logo from "../components/logo";
import UploadFile from "../components/uploadFile";
import YoutubeUrl from "../components/youtubeUrl";
import DragToUpload from "../components/dragToUpload";
import Queue from "../components/queue";

function Home() {
  return (
    <>
      <body className="grid w-full h-screen grid-cols-1 align-middle ">
        <Head>
          <title>DemucsUI</title>
        </Head>
        <body className=""></body>
        <Logo />
        <DragToUpload />
        <Queue />
        <div className="flex flex-wrap justify-center w-full mt-1"></div>
      </body>
    </>
  );
}

export default Home;
