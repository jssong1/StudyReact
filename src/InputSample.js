import React,{useState, useRef} from 'react';

function InputSample() {
    //객체 형태로 두  input 태그의 name 속성의 초기값을 설정해준다
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput = useRef();

    //inputs 상태 값을 디스트럭쳐링 하여 두 name 속성값을 추출
    const {name, nickname} = inputs;// 비구조화 할당을 통해 값 추출
    
    const onChange = (e) => {
        //이벤트 타겟의 속성 value와 name을 추출
        const {value, name} =e.target;//우선 e.target에서 name과 value를 추출
        setInputs({
            ...inputs,//기존 input객체를 복사한뒤
            [name]:value // name키를 가진 값을 value로 설정
        })
    };

    const onReset = () =>{
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };


  return (
    <div>
      <input name="name" value={name} placeholder="이름" onChange={onChange} ref={nameInput}/>
      <input name="nickname" value={nickname} placeholder="닉네임" onChange={onChange} />
      <button onClick={onReset}>초기화ssss</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div> 
    </div>
  );
}

export default InputSample;