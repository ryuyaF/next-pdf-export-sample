import React from 'react';
import { pdf } from '@react-pdf/renderer';
import Sample from './sample'


export default function DownloadToBlob() {
  const pdfObj = pdf((<Sample />))

  const download = () => {
    pdfObj.toBlob().then(blob => {
      const url = URL.createObjectURL(blob)
      const a =document.createElement('a')
      document.body.appendChild(a)
      a.download = 'sample-pdf-obj.pdf'
      a.href = url
      a.click()
      a.remove()
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 3000)
    })
  }

  const showOtherTab = () => {
    pdfObj.toBlob().then(blob => {
      const url = URL.createObjectURL(blob)
      window.open(url)
    })
    window.open(url)
  }

  return <>
    <div>
      <div>
        <a onClick={download}>
          ダウンロードリンク
        </a>
      </div>
      <div>
        <button
          onClick={showOtherTab}
        >
          別タブに表示
        </button>
      </div>
    </div>
  </>
}
