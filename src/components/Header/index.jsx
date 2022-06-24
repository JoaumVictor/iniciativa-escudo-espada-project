import Link from 'next/link'
import React from 'react'
import S from './style.module.scss'
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { CgDetailsMore } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { MdCreate } from 'react-icons/md';
import { RiFilePaper2Fill } from 'react-icons/ri';

export default function Header() {
  const [showOptions, setShowOptions] = React.useState(false);
  
  return (
    <header className={S.header}>
      <Link href="/">
        <img src="https://img.icons8.com/color/480/dungeons-and-dragons.png" alt="icone" />
      </Link>

      <h1>Iniciativa Escudo e Espada</h1>

      <button onClick={() => setShowOptions(!showOptions)} type='button' className={S.showOptions}>
        <CgDetailsMore />
      </button>

      <div className={showOptions ? S.moreOptions : S.displayOff}>
        <a onClick={() => setShowOptions(!showOptions)} className={S.closeOptions}>
            <IoMdClose />
        </a>
        <a href="">
          <span>
            <GiPlagueDoctorProfile />
          </span>
          Meu perfil
        </a>
        <a href="">
          <span>
            <MdCreate />
          </span>
          Criar ficha
        </a>
        <a href="">
          <span>
            <RiFilePaper2Fill />
          </span>
          Visualizar Fichas
          </a>
      </div>
    </header>
  )
}
