import React, { useEffect, useState } from 'react';
import { usePDF } from '@react-pdf/renderer';
import Sample from './sample'

const UsePdf = () => {
  const [instance, updateInstance] = usePDF({ document: (<Sample />) })

  if(instance.error) return <div>Something went wrong: {instance.error}</div>
  if(instance.loading) return <div>Loading...</div>

  const handleClick = () => {
    const url = URL.createObjectURL(instance.blob)
    window.open(url)
  }

  return <>
    <div>
      <div>
        <a href={instance.url} download='sample-use-pdf.pdf'>
          ダウンロードリンク
        </a>
      </div>
      <div>
        <button
          onClick={handleClick}
        >
          別タブに表示
        </button>
      </div>
    </div>
  </>
}

export default function DownloadUsePdf() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  if(!isClient) return <></>

  return <UsePdf />
}
