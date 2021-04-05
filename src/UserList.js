import React, {useEffect} from 'react';

const User = React.memo(function User({ user, onRemove,onToggle }) {
  /**
   * useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. 만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다.
     useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
   */
  useEffect(()=>{
    //console.log('컴포넌트가 화면에 나타남');
    console.log('user값이 설정됨');
    console.log(user);
    return ()=>{
      //console.log('컴포넌트가 화면에 사라짐');
      console.log('user가 바뀌기 전..');
      console.log(user);
    };
  },[user]);
  return (   
    <div>
      <b style={{
        cursor:'pointer',
        color:user.active? 'green' :'black'
      }}
        onClick={()=>onToggle(user.id)}
      >
        {user.username}
      </b> &nbsp;
      <span>({user.email}) {user.id}</span>
      <button onClick={()=>onRemove(user.id) }>삭제</button>
    </div>
  );
});

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
 {/** <User user={users[0]} />
      <User user={users[1]} />
       <User user={users[2]} />  */}

{/**리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함.
 *  key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 
 * 지금의 경우엔 id 가 고유 값 */}
      {users.map(user=> (
      <User 
        user={user} 
        key={user.id} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
      ))}


{/**만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 
 * map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다. 
      {users.map((user,index)=> (<User user={user} key={index}/>))}
    */}
    </div>
  );
}


export default UserList;