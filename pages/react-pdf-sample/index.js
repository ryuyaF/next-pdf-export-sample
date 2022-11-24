import React, { Component, useState } from 'react';
import dynamic from "next/dynamic";
import { pdf, usePDF } from '@react-pdf/renderer';
import Link from 'next/link';

export default function ReactPdfSample() {
  const Sample = dynamic(() => import("../Components/ReactPdf/sample"), {
    ssr: false,
  });
  const BlobProvider = dynamic(() => import('@react-pdf/renderer'), {
    ssr: false,
  });

  const Doc = (<Sample/>)

  if (process.browser) {
    // const [instance, setInstance] = usePDF({ document: Doc })
    // console.log(instance)
  }


  const handleClick = () => {
    // const blob = pdf(Doc)
    console.log('ok')
  }

  return <>
    <div>
      <Link href='/' style={{color: 'blue'}}>戻る</Link>
      <h1>React PDF Sample</h1>
      <Link href='https://react-pdf.org/' style={{color: 'blue'}}>React-pdfのリファレンス(v3を参照)</Link>
      <Sample isPreview/>
    </div>
  </>
}
