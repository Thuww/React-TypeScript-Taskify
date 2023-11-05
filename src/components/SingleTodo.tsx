import { type } from 'os';
import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone} from 'react-icons/md';
import './styles.css';
import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[]; //Todo list
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

//Seting operations of todo
const SingleTodo = ({ index, todo, todos, setTodos }:  Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo) 

  //Todo is done
  const handleDone = (id: number) => {
    setTodos (
      todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo )
    )
  };

  //Remove Todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
  };

  //Edit Todo
  const handleEdit = (e:React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodo} : todo ))
    );

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  //useEffect focus todo editing
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    //Setting drag place of todo
    <Draggable draggableId={todo.id.toString()} index={index}> 
      {(provided, snapshot) => (
        <form 
        className={`todos-single ${snapshot.isDragging ? "shadow-[0_0_20px_black]" : ""}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
        
          {edit ? (
            <input 
              ref={inputRef}
              value={editTodo} 
              onChange={(e) => setEditTodo(e.target.value)} 
              className="todo-single-text"
            />
          )  : todo.isDone ? (
            <s className="todo-single-text">{todo.todo}</s> 
          ) : (
            <span className="todo-single-text">{todo.todo}</span>
          )}

          <div className="flex"> 
          <span 
            className="icon" 
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
      
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    )}
    </Draggable>    
  );
};

export default SingleTodo