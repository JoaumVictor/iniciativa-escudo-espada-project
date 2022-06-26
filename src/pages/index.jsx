import Header from '../components/Header/index';
import BoxFichas from '../components/BoxFichas';
import S from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={S.page}>
        <BoxFichas />
        <BoxFichas />
      </div>
    </>
  )
}
