import React, { useEffect, useState } from "react";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import components */
import Title from "./../Title";

/* import images */

/* import utils */

/* import icons */
import PlusIcon from "./../../assets/icons/plus";
import LessIcon from "./../../assets/icons/less";

/* import styles */
import { Container, Item, Header, HeaderTitle, Answer } from "./styles";
import { Accordion, AnswerContent } from "./styles";

const UsefulContacts = () => {
  const initialData = InitialDataContext;

  const [showing, setShowing] = useState(0);

  // const [questions, setQuestions] = useState(initialData.questions?.data ?? []);

  const [items, setItems] = useState([
    {
      title: "Central de Atendimento Generali - Assistência Funeral",
      answer: `<b>Regiões Metropolitanas: </b>3004 5858<br /><b>Demais Regiões: </b>0800 7070 2011`,
    },
  ]);

  useEffect(() => {
    // setQuestions(initialData.questions?.data ?? []);
  }, [InitialDataContext]);

  return (
    <>
      {items.length > 0 ? (
        <Container id="telefones-uteis">
          <Title title1="Telefones" title2="Úteis" styles={{ marginBottom: "40px" }} />
          {items.map((item, index) => (
            <Item key={index}>
              <Header onClick={() => setShowing(showing === index ? -1 : index)}>
                <HeaderTitle>{item.title}</HeaderTitle>

                {showing === index ? (
                  <>
                    <Accordion onClick={() => setShowing(-1)}>
                      <LessIcon width="11px" height="11px" fill="#FFF" />
                    </Accordion>
                  </>
                ) : (
                  <>
                    <Accordion onClick={() => setShowing(index)}>
                      <PlusIcon width="11px" height="11px" fill="#FFF" />
                    </Accordion>
                  </>
                )}
              </Header>
              <AnswerContent show={showing === index}>
                <Answer
                  dangerouslySetInnerHTML={{
                    __html: item.answer ?? "",
                  }}
                />
              </AnswerContent>
            </Item>
          ))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default UsefulContacts;
