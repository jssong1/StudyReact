import React ,{useReducer} from 'react';

/**useReducer */
function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state +1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}


function Counter() {
    
    /*
    useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 
    이 함수를 호출해주면 배열이 반환되는데요, 
    여기서 첫번째 원소는 현재 상태, 
    두번째 원소는 Setter 함수입니다.
    */    
    // const [number, setNumber] = useState(0);

    // const onIncrease = () => {
    //     setNumber(number +1);
    // }
    // const onDecrease = () => {
    //     setNumber(number -1);
    // }

/**userReducer사용 */
  const [number, dispatch] = useReducer(reducer,0);
    const onIncrease = () => {
        dispatch({type:'INCREMENT'});
    }
    const onDecrease = () => {
        dispatch({type:'DECREMENT'});
    }

    return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;