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

const Questions = () => {
  const initialData = InitialDataContext;

  const [showing, setShowing] = useState(0);

  // const [questions, setQuestions] = useState(initialData.questions?.data ?? []);

  const [questions, setQuestions] = useState([
    {
      title: "O Vida Cartão Fidelidade é um plano de saúde?",
      answer: `Não. O Vida Cartão fidelidade é um clube de benefícios onde você cuida da sua saúde e de quem mais ama, com ótimos descontos e sem filas. Pagando
  apenas uma mensalidade, você e seus dependentes tem acesso a consultas, vacinas e exames que fazem parte do complexo Vida, além do plano odontológico,
  seguro de vida e assistência funeral para o titular.`,
    },
    {
      title: "A primeira mensalidade ja vai vir na mesma cobrança da adesão?",
      answer: `Sim!`,
    },
  ]);

  useEffect(() => {
    // setQuestions(initialData.questions?.data ?? []);
  }, [InitialDataContext]);

  return (
    <>
      {questions.length > 0 ? (
        <Container id="duvidas-frequentes">
          <Title title1="Dúvidas" title2="Frequentes" invert styles={{ marginBottom: "80px" }} />
          {questions.map((item, index) => (
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

export default Questions;
