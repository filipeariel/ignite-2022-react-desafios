import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react';

import styles from './TaskForm.module.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Task } from './Task';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function TaskForm() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [createdTasks, setCreatedTasks] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(0)

  useEffect(() => {
    setCreatedTasks(tasks.length)
  }, [tasks])

  const completedTasksCounter = tasks.reduce((totalCompleted, task) => {
    return totalCompleted + Number(task.isCompleted)
  }, 0)

  useEffect(() => {
    setCompletedTasks(completedTasksCounter)
    console.log(completedTasks)
  }, [tasks])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const createNewTask = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false
    }
    setTasks([...tasks, createNewTask])
    setNewTask('')
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
        return { ...task }
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <header className={styles.header}>
        <form onSubmit={handleCreateNewTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={(event) => setNewTask(event.target.value)} />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <Task
        tasks={tasks}
        createdTasks={createdTasks}
        completedTasks={completedTasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}