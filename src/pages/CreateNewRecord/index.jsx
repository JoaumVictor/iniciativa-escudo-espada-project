import React from "react";
import CreateAtributeBox from "../../components/CreateAtributeBox";
import CreateInputLabel from "../../components/CreateInputLabel";
import Header from "../../components/Header/index";
import S from "./style.module.scss";

export default function CreateNewRecord() {
  const printInputValue = (e) => console.log(e.target.value);

  return (
    <>
      <Header />
      <div className={S.container}>
        <img
          src="https://www.enworld.org/attachments/dungeons-dragons-clipart-5-png.111398/"
          alt="logotipo d-d"
        />

        <h1 className={S.title}>Criação de Personagem</h1>

        <section className={S.box1}>
          <CreateInputLabel
            name="NomeDoPersonagem"
            text="Nome Do Personagem:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="ClasseENivel"
            text="Classe e Nível:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="Antecedente"
            text="Antecedente:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="NomeDoJogador"
            text="Nome Do Jogador:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="Raca"
            text="Raça:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="Tendencia"
            text="Tendência:"
            func={printInputValue}
            classe={S.inputLabel}
          />

          <CreateInputLabel
            name="Experiencia"
            text="Experiência:"
            func={printInputValue}
            classe={S.inputLabel}
          />
        </section>

        <section className={S.box2}>
          <CreateAtributeBox
            classe={S.atributeBox}
            text="Força"
            func={printInputValue}
          />

          <CreateAtributeBox
            classe={S.atributeBox}
            text="Destreza"
            func={printInputValue}
          />

          <CreateAtributeBox
            classe={S.atributeBox}
            text="Constituição"
            func={printInputValue}
          />

          <CreateAtributeBox
            classe={S.atributeBox}
            text="Inteligência"
            func={printInputValue}
          />

          <CreateAtributeBox
            classe={S.atributeBox}
            text="Sabedoria"
            func={printInputValue}
          />

          <CreateAtributeBox
            classe={S.atributeBox}
            text="Carisma"
            func={printInputValue}
          />
        </section>
      </div>
    </>
  );
}
