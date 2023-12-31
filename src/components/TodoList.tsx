import React from "react";
import "./styles.css";
import { Todo } from "./models";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ 
  todos, 
  setTodos, 
  completedTodos, 
  setCompletedTodos,
}) => {
  return (
    //Setting drop place of todolist
    <div className="container flex w-[95%] mt-[10px] justify-between items-start">
      <Droppable droppableId="TodosList"> 
        {(provided, snapshot) => (
          <div 
          className={`todos ${snapshot.isDraggingOver? "dragactive" : ""}`}   
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-[30px] text-white">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div 
          className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          <span className="text-[30px] text-white">Completed Tasks</span>
          {completedTodos?.map((todo, index) => (
            <SingleTodo
              index={index}
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
            />
          ))}
          {provided.placeholder}  
        </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList