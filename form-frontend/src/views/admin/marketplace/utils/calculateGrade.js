const calculateGrade = score => {
  if (score === null || score === undefined || typeof score !== 'number') {
    return null;
  }

  const percentage = parseInt(score);

  let grade = null;
  let remarks = null;

  if (percentage >= 50) {
    grade = 'Pass';
  } 
   else if (percentage < 50) {
    grade = 'Fail';
  }

  if (score >= 50) {
    remarks = "🎉 Congratulations! You've successfully passed the Point of Sales Person (POSP) exam 🏆";
  }  else if (score < 50) {
    remarks = "😔 Unfortunately, you did not pass the POSP exam this time. Keep going! 💪";
  }

  return {
    grade,
    remarks,
  };
};

export default calculateGrade;
