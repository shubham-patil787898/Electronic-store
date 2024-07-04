import react, { useState } from 'react';
const TodoList = () => {

const [num, setNum] = useState(0)

const incNum = () => {
    setNum(num+1);
};

const decNum = () => {
    if(num > 0){
    setNum(num-1);

}else{
    alert('0 limit is reached');
        setNum(0);
}
};

return(
<>
<div className='main_div'>
    <div className='center_div'>
        <h1>{num}</h1>
        <div className='btn_div' >
            <button onClick={incNum}>increment</button>
            <button onClick={decNum}>decrement</button>
        </div>
    </div>
</div>
</>

);
}
export default TodoList;