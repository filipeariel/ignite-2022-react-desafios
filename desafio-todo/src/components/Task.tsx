import { ClipboardText, Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface Tasks {
  id: string,
  title: string
  isCompleted: boolean
}

interface TaskProps {
  tasks: Tasks[]
  createdTasks: number;
  completedTasks: number;
  onCompleteTask: (task: string) => void;
  onDeleteTask: (task: string) => void;
}

export function Task({ tasks, createdTasks, completedTasks, onCompleteTask, onDeleteTask }: TaskProps) {
  return (
    <>
      <div className={styles.tasksTrack}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>{createdTasks}</span>
        </div>
        <div className={styles.tasksFinished}>
          <p>Concluídas</p>
          <span>{completedTasks} de {tasks.length}</span>
        </div>
      </div>
      {tasks.length === 0
        ?
        <div className={styles.emptyTaskList}>
          <ClipboardText size={56} />
          <p>Você ainda não tem tarefas cadastradas</p>
          Crie tarefas e organize seus itens a fazer
        </div>
        :
        <div className={styles.taskBox}>
          {tasks.map(task => {
            return (
              <div className={`${styles.taskWrapper} ${task.isCompleted ? styles.taskCompleted : ""}  `} >
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={task.isCompleted}
                  onChange={() => onCompleteTask(task.id)}
                />
                <p>{task.title}</p>
                <Trash size={24} onClick={() => onDeleteTask(task.id)} />
              </div>
            )
          })}
        </div>
      }
    </>
  )
}