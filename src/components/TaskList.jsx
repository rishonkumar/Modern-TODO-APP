import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
    </ul>
  );
}

export default TaskList;
