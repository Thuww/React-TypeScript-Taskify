import React, { useRef } from "react";
import "./styles.css";

//Props of todo
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; 
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    //Setting input task feature
    <form   
      className="input flex w-[95%] relative items-center" 
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input 
        type="text" 
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task" 
        className="w-full rounded-[50px] py-[20px] px-[30px] text-[25px] border-none transition-[0,2s] shadow-[inset_0_0_5px_black] focus:shadow-custom focus:outline-none"  
      />
      
      <button className="absolute w-[50px] h-[50px] m-[12px] rounded-[50px] right-[0px] boder-none text-[15px] bg-[#2f74c0] text-white transition-all duration-200 shadow-[0_0_10px_black] hover:bg-[#388ae2] active:scale-[0.8] active:shadow-[0_0_5px_black]" type="submit"> 
        Go
      </button>
    </form>
  )
};

export default InputFeild;
