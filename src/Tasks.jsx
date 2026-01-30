import React, { useRef } from 'react'
import { useState } from 'react'
export default function Tasks() {
  const [tasks, settasks] = useState([])
  const [donetasks, setdonetasks] = useState([])
  const [txt, settxt] = useState("")

  const id = useRef(1)

  const addtask = (e) => {
    e.preventDefault();
    if (!txt) return alert("Enter a tasks to add to list")
    settasks(tasks => [...tasks, { id: id.current++, text: txt, done: false }]);
    settxt("")
  }

  const mark_as_done = (id, flag) => {
    if (flag) {
      const tasktomove = tasks.find(t => t.id === id)
      if (!tasktomove) return prevtasks;
      setdonetasks(prevDone => [...prevDone, { ...tasktomove, done: true }]);
      settasks(prevtasks => prevtasks.filter(t => t.id !== id));
    } else {
      const tasktomove = donetasks.find(t => t.id === id);
      if (!tasktomove) return taskDone;
      settasks(prevtasks => [...prevtasks, { ...tasktomove, done: false }]);
      setdonetasks(taskDone => taskDone.filter(t => t.id !== id));
    }
  }


  const delete_task = (id, where) => {
    if (where === 1) {
      return settasks(removetask => removetask.filter(t => t.id != id));
    } else {
      return setdonetasks(removetask => (removetask.filter(t => t.id != id)));
    }
  }

  return (
    <>
      <div className='tasksbox'>
        <div className='listoftasks'>
          <div className='tasks'>
            <p id="header">Habits</p>
            {tasks.map((t) => (
              <div key={t.id} className='singletask'>
                {t.text}
                <input type="checkbox"
                  checked={t.done}
                  onChange={() => mark_as_done(t.id, true)} />
                <button onClick={() => delete_task(t.id, 1)}>remove</button>
              </div>
            ))}
          </div>
          <div>
            <p>Done</p>
            {donetasks.map((t) => (
              <div key={t.id} id={t.done ? "dash" : ""}>
                {t.text}
                <input type="checkbox"
                  checked={t.done}
                  onChange={() => mark_as_done(t.id, false)} />
                <button onClick={() => delete_task(t.id, 0)}>remove</button>
              </div>
            ))}
          </div>
          <div className='inputbox'>
            <form onSubmit={(e) => addtask(e)}>
              <input type="text" name="" id="" value={txt} onChange={(e) => settxt(e.target.value)} />
              <button type="submit">Add task</button></form>
          </div>
        </div>
      </div>
    </>
  )
}
