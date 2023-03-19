
const AddTaskForm = () => {
  return (
    <form className="w-full p-2 flex justify-center items-center flex-wrap">
      <input
        placeholder="write your task name"
        type="text"
        className="placeholder:text-font/20 focus:placeholder:text-font/50 w-full h-10 p-1 px-2 rounded-lg bg-black/40 border-2 outline-none border-main100/20 focus:border-main100"
      />
    </form>
  );
}

export default AddTaskForm