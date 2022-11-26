import React from 'react';
import Link from 'next/link';
import Download from '../Components/ReactPdf/download';
import DownloadToBlob from '../Components/ReactPdf/download-to-blob'
import DownloadUsePdf from '../Components/ReactPdf/download-use-pdf'
import Sample from '../Components/ReactPdf/sample';

export default function ReactPdfSample() {
  // const Sample = dynamic(() => import("../Components/ReactPdf/sample"), {
  //   ssr: false,
  // })
  // const DownloadToBlob = dynamic(() => import('../Components/ReactPdf/download-to-blob'), {
  //   ssr: false,
  // })
  // const DownloadUsePdf = dynamic(() => import('../Components/ReactPdf/download-use-pdf'), {
  //   ssr: false,
  // })

  return <>
    <div>
      <Link href='/' style={{color: 'blue'}}>戻る</Link>

      <div>
        <Link href='https://react-pdf.org/' style={{color: 'blue'}}>React-pdfのリファレンス(v3を参照)</Link>
      </div>

      <h1>React PDF Sample</h1>

      <h3>PDFDownloadLinkを利用したファイルのダウンロード</h3>
      <Download />

      <h3>usePDFフックを利用したファイルのダウンロードとタブ表示</h3>
      <DownloadUsePdf />

      <h3>pdfオブジェクトを利用したファイルのダウンロードとタブ表示</h3>
      <DownloadToBlob />

      <h3>PDFプレビュー</h3>
      <Sample isPreview/>
    </div>
  </>
}
