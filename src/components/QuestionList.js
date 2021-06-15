import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [questionData, setQuestionData] = useState([])

  useEffect(()=>{
    console.log("useeffect")
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=> setQuestionData(data))
  })
  const questionList = questionData.map(q=> {
    return <QuestionItem key = {q.id} question = {q}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
