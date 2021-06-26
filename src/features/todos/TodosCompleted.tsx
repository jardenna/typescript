import { useAppSelector } from '../../app/hooks';
import { selectTodos } from './todoSlice';

const TodosCompleted = () => {
   const todos = useAppSelector(selectTodos);
   const completedTasks = todos.filter(complete => complete.completed);
   return (
      <h2>
         Completed todos {completedTasks.length}
      </h2>
   );
};

export default TodosCompleted;
