import React, {  useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Sample from './sample'

export default function Download() {

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
