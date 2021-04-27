import React, { useEffect, useState } from "react";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import components */
import Title from "./../Title";

/* import images */

/* import utils */

/* import icons */
import PlusIcon from "./../../assets/icons/plus";

/* import styles */
import { Container, Item, Header, HeaderTitle } from "./styles";
import { Accordion } from "./styles";

const Links = () => {
  const initialData = InitialDataContext;

  const [showing, setShowing] = useState(0);

  // const [questions, setQuestions] = useState(initialData.questions?.data ?? []);

  const [questions, setQuestions] = useState([
    {
      title: "Assistência Medicamento – BSF",
      link: `/static/files/Resumo_DDP_BSF_270520.pdf`,
    },
    {
      title: "Condições geral - Assistência Funeral",
      link: `/static/files/CG_094-2020_Generali_Assistencia_Funeral_Individual.pdf`,
    },
  ]);

  useEffect(() => {
    // setQuestions(initialData.questions?.data ?? []);
  }, [InitialDataContext]);

  return (
    <>
      {questions.length > 0 ? (
        <Container id="link-uteis">
          <Title title1="Documentos" title2="Importantes" invert styles={{ marginBottom: "40px" }} />
          {questions.map((item, index) => (
            <Item key={index}>
              <Header href={item.link} target="_blank">
                <HeaderTitle>{item.title}</HeaderTitle>

                <Accordion onClick={() => setShowing(index)}>
                  <PlusIcon width="11px" height="11px" fill="#FFF" />
                </Accordion>
              </Header>
            </Item>
          ))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Links;
