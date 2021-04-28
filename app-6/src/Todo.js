import React from 'react';

export default function Todo(props) {

  const {tasks} = props;
  const taskList = tasks.map(task => {
    return <h2>{task}</h2>
  })
  
  return (
    <div className="tasks">
    {taskList}
    </div>
  )
}