

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Timer_Context } from '../../../../Context/Timer_context';
import { Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceData from '../../tables/jsonData/InvoiceData';
import PdfDocument from '../../tables/Components/generateInvoice/Invoice';
import timerCompleted from "../assests/Timer_Completed.png"


const WeeklyRevenue = () => {

  const initialElapsedTime = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
  const tim = localStorage.getItem('time')
  console.log(tim, "timer get")
  const [startTime, setStartTime] = useState(Date.now() - initialElapsedTime);
  const { Set_Exam } = useContext(Timer_Context);
  const navigate = useNavigate()
  const [elapsedTime, Set_Elapsed] = useState(tim);

  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isTimeCompleted, setIsTimeCompleted] = useState(false);

  const email_user = localStorage.getItem('email');
  console.log(email_user, "email user local")

  const exam = JSON.parse(localStorage.getItem('exam'));
  const points = JSON.parse(localStorage.getItem('points'));
  const training_completed = JSON.parse(localStorage.getItem('training_completed'));
  const fileName = "POSP_Certificate.pdf";

 
  useEffect(() => {
    let interval;
    // changed this value
    if (isTimerRunning) {
      interval = setInterval(() => {
        Set_Elapsed((prevElapsedTime) => prevElapsedTime - 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);


  useEffect(() => {
    const handleBeforeUnload = async (event) => {

      localStorage.setItem('time', elapsedTime);
      try {
      

        const response = await axios.post('https://pos-registration.onrender.com/timer', { email: email_user, remainingTime: elapsedTime, update: true });
        console.log("Post Request", elapsedTime, response);

      } catch (error) {
        console.error('Error sending timer data:', error);
      }
      setIsTimerRunning(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

 
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'hidden') {
      
        localStorage.setItem('time', elapsedTime);
        try {
          const response = await axios.post('https://pos-registration.onrender.com/timer', { email: email_user, remainingTime: elapsedTime, update: true });
          console.log("Post Request", elapsedTime, response);

        } catch (error) {
          console.error('Error sending timer data:', error);
        }
        setIsTimerRunning(false);
      } else {
       

        const storedElapsedTime = localStorage.getItem('time');
        if (storedElapsedTime) {
          Set_Elapsed(storedElapsedTime)

          setIsTimerRunning(true);
        }

      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [elapsedTime]);






  useEffect(() => {
    if (elapsedTime <= 0) {
      Set_Elapsed(0);
      localStorage.setItem('training_completed', true);

      const timeCompleted = async () => {
        try {

          const response = await axios.post('https://pos-registration.onrender.com/timer', { email: email_user, remainingTime: elapsedTime, update: true });
          console.log("Post Request", elapsedTime, response);

        } catch (error) {
          console.error('Error sending timer data:', error);
        }


      };

      timeCompleted();
      setIsTimerRunning(false);
      setIsTimeCompleted(true);
      Set_Exam();
    }
  }, [elapsedTime]);

  return (
    <div >
      {isTimeCompleted ? (


        <>
          {
            training_completed && exam && points ? <>

            <div className='text-[#14AE5C]'>
            <PDFDownloadLink
                document={<PdfDocument invoicedata={InvoiceData} />}
                fileName={fileName}

              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading..." : "Download POSP Certificate"
                }
                {/* <Image style={styles.download} src={download} /> */}

              </PDFDownloadLink>
            </div>

            </> :
              
              <>
              <div>
              <p className='m-5 text-[#14AE5C] text-[22px] font-bold'>Time Completed!</p>

              <div className='flex justify-center border-b border-solid border-white items-center'>
                <img src={timerCompleted} alt="Time completed" className='w-[70%]' />
              </div>


              <div className='text-[#525252] mt-[25px] leading-normal p-[11px]'>
                <p className='text-[18px] font-bold'>Rules & Regulations</p>

                <p className='mt-[22px] text-[#525252] text-[14px] font-200 text-justify'>
                Candidate has to undergo mandatory 15 hours of Brokers’ Training before enrolling for the examination. Candidate has to pay separately for registration of examination by paying stipulated fees.
                </p>

                <p className='mt-[5px] text-[#525252] text-[14px] font-200 text-justify'>
                As per IRDAI (Insurance Brokers) Regulations 2018 “candidate should take exam within one year from the end of the period of Training”.
                </p>
              </div>
                
              </div>
              
              </>
          }


        </>

      ) : (

        <>

<div>
              {/* <p className='m-5 text-[#14AE5C] text-[22px] font-bold'>Time Completed!</p> */}
          <div className='border-b border-solid '>
          <div className='flex justify-center border-b border-solid border-gray-500 items-center'>
                <img src={timerCompleted} alt="Time completed" className='w-[70%]' />
           
              </div>
              <section class="timeContainer mt-[15px]">


<div class="wrapper">

  <div class="hours">
    <h2 id="hours">{Math.floor(elapsedTime / (60 * 60 * 1000))}  </h2>
    <span  class="text hours_text">

      HOURS
    </span>
  </div>

  <div class=""><h2 id="">:  </h2><span class="text hours_text"></span></div>

  <div class="minutes">
    <h2 id="minutes">{Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000))}</h2>
    <span class="text hours_text">

      MINUTES
    </span>
  </div>
  <div class=""><h2 id="">:  </h2><span class="text hours_text"></span></div>
  <div class="seconds">
    <h2 id="seconds">{Math.floor((elapsedTime % (60 * 1000)) / 1000)}</h2>
    <span  class="text hours_text">

      SECONDS
    </span>
  </div>
</div>

</section>
          </div>
            


              <div className='text-[#525252] mt-[25px] leading-normal p-[11px]'>
                <p className='text-[18px] font-bold'>Rules & Regulations</p>

                <p className='mt-[22px] text-[#525252] text-[14px] font-200 text-justify'>
                Candidate has to undergo mandatory 15 hours of Brokers’ Training before enrolling for the examination. Candidate has to pay separately for registration of examination by paying stipulated fees.
                </p>

                <p className='mt-[5px] text-[#525252] text-[14px] font-200 text-justify'>
                As per IRDAI (Insurance Brokers) Regulations 2018 “candidate should take exam within one year from the end of the period of Training”.
                </p>
              </div>
                
              </div>
        



      
        
        </>



        
      )}
    </div>
  );
};

export default WeeklyRevenue;
