import React from 'react';
import Sample from './sample'
import dynamic from 'next/dynamic';

export default function Download() {

  const PDFDownloadLink = dynamic(() => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink), {
    ssr: false,
  })

  return <>
    <div>
      <PDFDownloadLink
        document={<Sample />}
        fileName='sample.pdf'
      >
        {({ blob, url, loading, error }) => {

          if(error) return <div>Something went wrong: {error}</div>
          if(loading) return <div>Loading...</div>

          return <div>ダウンロードリンク</div>
        }}
      </PDFDownloadLink>
    </div>
  </>
}
