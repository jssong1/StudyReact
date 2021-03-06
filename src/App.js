import React, { useRef,useState, useMemo, useCallback }  from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });
  const {username, email} =inputs;
  const onChange = useCallback(
    e =>{
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
    }, [inputs]
  );


  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);


  const nextId = useRef(4);
  const onCreate= useCallback(
    () =>{ // 새 배열 추가
      const user={
        id: nextId.current,
        username,
        email
      };
      //setUsers([...users, user]); //spread 연산자
      setUsers(users.concat(user)); //concat 함수 : 기존배열수정없이 새로운 원소가 추가된 새로운 배열 만들어줌

      setInputs({
        username:'',
        email:''
      });
      nextId.current +=1;
    },[users,username,email]
  );
  

  const onRemove = useCallback( 
    id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );  
  const onToggle = useCallback(
    id =>{
      setUsers(
        users.map(user=>
          user.id === id? {...user, active: !user.active} :user 
        )
      );
    },
    [users]
  );

/*useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 
두번째 파라미터에는 deps 배열을 넣어주면 되는데, 
이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 
만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.  */
 const count = useMemo(()=>countActiveUsers(users), [users]);

  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper>
    <InputSample />
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;