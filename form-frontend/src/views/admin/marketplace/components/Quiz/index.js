import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Icon,
  Message,
  Menu,
  Header,
} from 'semantic-ui-react';
import he from 'he';

import Countdown from '../Countdown';
import { getLetter } from '../../utils';
import axios from 'axios';

const Quiz = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [userSlectedAnsBg, setUserSlectedAnsBg] = useState(null);

  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);
  const [user_answers, setUserAnswer] = useState([]);


  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionIndex]);

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
    console.log(userSlectedAns);
  };

  const handleNext = async () => {

    const qna = questionsAndAnswers;

    user_answers.push(userSlectedAns)
    console.log(userSlectedAns);
    console.log(user_answers);


    qna.push({
      question: 5,
      user_answer: 5,
      correct_answer: 5,
      point: 5,
    });

    if (questionIndex === data.length - 1) {
      const all_answers = {
        user_answers
      }

      const API = `https://pos-exam-backend.onrender.com/answer`;

      const headers = {
        'Content-Type': 'application/json',
      };

      try {
        // const res = await fetch(`${API}`);
        const response = await fetch(API, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(all_answers),
        });
        const res = await response.json();
        console.log(res);

        return endQuiz({
          totalQuestions: data.length,
          correctAnswers: res.points,
          timeTaken,
          questionsAndAnswers: qna,
        });

        // console.log(data.data)


      }
      catch (e) {
        console.log(e)

      }


    }


    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);

  };

  const timeOver = async (timeTaken) => {

    const all_answers = {
      user_answers
    }

    const API = `https://pos-exam-backend.onrender.com/answer`;

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      // const res = await fetch(`${API}`);
      const response = await fetch(API, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(all_answers),
        
      });
      const res = await response.json();
      console.log(res);

      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: res.points,
        timeTaken,
        questionsAndAnswers
      });

     
      // console.log(data.data)


    }
    catch (e) {
      console.log(e)
    }



    
  };

  return (
    <Item.Header>
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra>
                  <Header as="h1" block floated="left">
                    <Icon name="info circle" />
                    <Header.Content>
                      {`Question No.${questionIndex + 1} of ${data.length}`}
                    </Header.Content>
                  </Header>
                  <Countdown
                    countdownTime={countdownTime}
                    timeOver={timeOver}
                    setTimeTaken={setTimeTaken}
                  />
                </Item.Extra>
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`Q. ${he.decode(data[questionIndex].Question)}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>Please choose one of the following answers:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical fluid size="massive">

                    <Menu.Item
                      key={data[questionIndex].Options["a"]}
                      name={"a"}
                      active={userSlectedAns === "a"}
                      onClick={handleItemClick}
                    // style={userSlectedAns === data[questionIndex].Options["a"] ? {backgroundColor: "#9dbef5"}: {}}

                    >
                      <b>A.</b>
                      &nbsp; {data[questionIndex].Options["a"]}
                    </Menu.Item>

                    <Menu.Item
                      key={data[questionIndex].Options["b"]}
                      name={"b"}
                      active={userSlectedAns === "b"}
                      onClick={handleItemClick}
                    >
                      <b>B.</b>
                      &nbsp; {data[questionIndex].Options["b"]}
                    </Menu.Item>

                    <Menu.Item
                      key={data[questionIndex].Options["c"]}
                      name={"c"}
                      active={userSlectedAns === "c"}
                      onClick={handleItemClick}
                    >
                      <b>C.</b>
                      &nbsp; {data[questionIndex].Options["c"]}
                    </Menu.Item>
                    <Menu.Item
                      key={data[questionIndex].Options["d"]}
                      name={"d"}
                      active={userSlectedAns === "d"}
                      onClick={handleItemClick}
                    >
                      <b>D.</b>
                      &nbsp; {data[questionIndex].Options["d"]}
                    </Menu.Item>

                    {/* {data[questionIndex].Options.map((option, i) => {
                      const letter = getLetter(i);
                      const decodedOption = he.decode(option);

                      return (
                        <Menu.Item
                          key={decodedOption}
                          name={decodedOption}
                          active={userSlectedAns === decodedOption}
                          onClick={handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>{letter}</b>
                          {decodedOption}
                        </Menu.Item>
                      );
                    })} */}
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    primary
                    content="Next"
                    onClick={handleNext}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                    disabled={!userSlectedAns}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    </Item.Header>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;
