import { Page, Text, Document, PDFViewer, StyleSheet, Font } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

Font.register({
  family: 'Nasu-Regular',
  src: "./fonts/Nasu-Regular.ttf",
})

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: '100vw',
    height: '100vh',
  },
  document: {
    fontFamily: 'Nasu-Regular'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: 'orange',
    backgroundColor: 'blue',
  },
  content: {
  },
  pageCounter: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'orange',
    backgroundColor: 'gray',
  },
});

const Header = ({ text }) => (
    <Text style={styles.header} fixed>{text ?? 'これはヘッダーです'}</Text>
)

const PageCounter = () => {
  const handleRender = ({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`
  return <Text style={styles.pageCounter} render={handleRender} fixed />
}

const CustomPage = (props) => {
  return <Page {...props}>
    <Header text={props.headerText} />
      {props.children}
    <PageCounter />
  </Page>
}

const Content = () => (
  <Document style={styles.document}
    title='サンプルタイトル'
  >
    {/* A4縦 */}
    <CustomPage
      headerText='A4縦'
    >
      <Text>A4縦</Text>
    </CustomPage>

    {/* A4横 */}
    <CustomPage
      headerText='A4横'
      orientation='landscape'
    >
      <Text>A4横</Text>
    </CustomPage>

    {/* 複数ページ */}
    <CustomPage
      headerText='複数ページ'
    >
      {[...Array(50)].map((_, i) => {
        return <Text key={i}>Text #{i + 1}</Text>
      })}
    </CustomPage>

    {/* 複数ページ(10行ごとに改行あり) */}
    <CustomPage
      headerText='複数ページ(10行ごとに改行あり)'
    >
      {[...Array(50)].map((_, i) => {
        return <Text key={i} break={i != 0 && i % 10 == 0}>Text #{i + 1}</Text>
      })}
    </CustomPage>
  </Document>
)

const Sample = ({ isPreview = false }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  if (!isClient) return <></>

  if (isPreview) return (
    <PDFViewer
      style={styles.viewer}
    >
      <Content />
    </PDFViewer>
  )

  return (
    <Content />
  )
}
export default Sample
