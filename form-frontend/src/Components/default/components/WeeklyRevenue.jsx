

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const WeeklyRevenue = () => {

  const initialElapsedTime = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
  const [startTime, setStartTime] = useState(Date.now() - initialElapsedTime);
  
  const [elapsedTime, setElapsedTime] = useState(initialElapsedTime);
  // console.log(elapsedTime)
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isTimeCompleted, setIsTimeCompleted] = useState(false);

  // Update elapsed time every second when the timer is running
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime - 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Handle visibility change (user switches tabs or closes the browser)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'hidden') {
        // Save elapsed time when the user switches tabs or closes the browser
        // localStorage.setItem('elapsedTime', elapsedTime.toString());
       try {
        // Replace 'your_backend_endpoint' with the actual endpoint
           
          const response = await axios.post('http://localhost:8080/timer', { email: "dd@df.co", remainingTime: elapsedTime, update: true});
          console.log("Post Request", elapsedTime, response);

        } catch (error) {
          console.error('Error sending timer data:', error);
        }
        setIsTimerRunning(false);
      } else {
        // Restore elapsed time and start the timer again when the user comes back
        try {
          // Replace 'your_backend_endpoint' with the actual endpoint
             
            const response = await axios.post('http://localhost:8080/timer', { email: "dd@df.co", remainingTime: elapsedTime, update:false });
            console.log("Post Request", elapsedTime, response.data.timer);
            setElapsedTime(response.data.timer);
            setIsTimerRunning(true);
            // setElapsedTime(parseInt(storedElapsedTime, 10));
          } catch (error) {
            console.error('Error sending timer data:', error);
          }

        // const storedElapsedTime = localStorage.getItem('elapsedTime');
        // if (storedElapsedTime) {
        //   setElapsedTime(parseInt(storedElapsedTime, 10));
        //   setStartTime(Date.now() - parseInt(storedElapsedTime, 10));
        //   setIsTimerRunning(true);
        // }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [elapsedTime]);



  // Set isTimeCompleted to true when the elapsed time reaches 0
  useEffect(() => {
    if (elapsedTime <= 0) {
      setElapsedTime(0);
      setIsTimerRunning(false);
      setIsTimeCompleted(true);
    }
  }, [elapsedTime]);

  return (
    <div>
    {isTimeCompleted ? (
      <p>Time Completed!</p>
    ) : (
      <section class="timeContainer">
<div class="wrapper">

<div class="hours">
  <h2 id="hours">{Math.floor(elapsedTime / (60 * 60 * 1000))} </h2>
  <span class="text">

  HOURS
  </span>
</div>

<div class="minutes">
  <h2 id="minutes">{Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000))}</h2>
  <span class="text">

  MINUTES
  </span>
</div>
<div class="seconds">
  <h2 id="seconds">{Math.floor((elapsedTime % (60 * 1000)) / 1000)}</h2>
  <span class="text">

  SECONDS
  </span>
</div>
</div>
</section>
    )}
  </div>
  );
};

export default WeeklyRevenue;
