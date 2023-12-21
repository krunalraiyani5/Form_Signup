  import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pos_exam from "../../constants/Pos_questions.json";
import {
  Container,
  Segment,
  Item,
  Button,
  Message,
} from 'semantic-ui-react';
import Exam_vector from "../../../../../assets/Icon/exam_vector.png";


import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 90,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };
console.log(countdownTime&& true)
  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = async() => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://pos-registration.onrender.com/question`;

    try{
      const res = await fetch(`${API}`);
      const data = await res.json();
  
      // console.log(data.data)

      setProcessing(false);
      startQuiz(
        data.data,countdownTime.hours + countdownTime.minutes + countdownTime.seconds
      )
    }
    catch(e){
      if (!navigator.onLine) {
                    setOffline(true);
                  } else {
                    setProcessing(false);
                    setError(error);
                  }

    }
  };

  if (offline) return <Offline />;

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            {/* <Item.Image src={mindImg} /> */}
            <Item.Content>
              <Item.Header>
                <h1></h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              

              <Item.Extra>
              {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
<section class="">
  <div class="h-full">
    {/* <!-- Left column container with background--> */}
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src={Exam_vector}
          class="w-full"
          alt="Sample image" />
      </div>

      {/* <!-- Right column container --> */}
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
      <div className="exam-intro-container p-5 leading-10 text-[16px]">
      <h2 className='font-bold  '>Welcome to the Sales Proficiency Exam!</h2>
      <p className=''>
        This exam is designed to evaluate your knowledge and skills as a POSP.
        
        
      </p>
      <p className=''>
      It consists of multiple-choice questions covering various aspects of sales, including fundamentals, product knowledge, closing techniques, and sales ethics.
      </p>
      <p className='font-bold'>
        Instructions:
      </p>
      <ul>
        <li>Read each question carefully before selecting an answer.</li>
        <li>Choose the best answer for each question; there is only one correct answer.</li>
        <li>Click "Submit" when you have answered all the questions.</li>
        <li>Your results will be displayed at the end of the exam.</li>
      </ul>
      <p>
        Best of luck! Let's get started.
      </p>
      <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Start Now'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                  // style={{
                  //   position: "relative",
                  //   top: "80%",
                  //   left: "50%",
                  //   transform: "translate(-50%, -50%)"
                  // }}
                />
      
    </div>
     
      </div>
    </div>
  </div>
</section>
              
                
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
