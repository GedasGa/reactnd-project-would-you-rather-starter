import React from 'react';

const Question = (props) => {
  const { question_id } = props.match.params

 return (
  <h1>
    Question with id: { question_id }
  </h1>
 );
};

export default Question;