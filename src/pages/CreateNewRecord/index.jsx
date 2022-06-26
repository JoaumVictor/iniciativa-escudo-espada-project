import React from "react";
import CreateAtributeBox from "../../components/CreateAtributeBox";
import CreateInputLabel from "../../components/CreateInputLabel";
import Header from "../../components/Header/index";
import S from "./style.module.scss";
import CreateAtributeLine from "../../components/CreateAtributeLine";
import CreateInputLine from "../../components/CreateInputLine/index";
import data from "../../data";

export default function CreateNewRecord() {
  const printInputValue = (e) => console.log(e.target.value);
  const printText = (text) => console.log(text);
  const { informacoes, atributos, passivas, pericias } = data;

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
          <h1 className={S.subTitle}>Informações</h1>
          {informacoes.map((each, i) => (
            <CreateInputLabel
              key={i}
              name={each.name}
              text={each.text}
              func={printInputValue}
              classe={S.inputLabel}
            />
          ))}
        </section>

        <section className={S.box2}>
          <h1 className={S.subTitle}>Atributos</h1>
          {atributos.map((each, i) => (
            <CreateAtributeBox
              key={i}
              classe={S.atributeBox}
              text={each}
              func={printInputValue}
            />
          ))}
          <h1 className={S.subTitle}>Passivas</h1>
          {passivas.map((each, i) => (
            <CreateInputLine
              key={i}
              classe={S.inputLine}
              text={each}
              funcInput={printInputValue}
              funcCheck={printText}
            />
          ))}
          <h1 className={S.subTitle}>Testes de Resistência</h1>
          {atributos.map((each, i) => (
            <CreateAtributeLine
              key={i}
              classe={S.atributeLine}
              text={each}
              funcInput={printInputValue}
              funcCheck={printText}
            />
          ))}
          <h1 className={S.subTitle}>Perícias</h1>
          {pericias.map((each, i) => (
            <CreateAtributeLine
              key={i}
              classe={S.atributeLine}
              text={each}
              funcInput={printInputValue}
              funcCheck={printText}
            />
          ))}
        </section>
      </div>
    </>
  );
}
