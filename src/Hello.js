import React from 'react'; //리액트 불러주기 



//컴포넌트에게 전달되는 props 는 파라미터를 통하여 조회 할 수 있습니다. props 는 객체 형태로 전달되며, 만약 name 값을 조회하고 싶다면 props.name 을 조회하면 됩니다.
function Hello({ color, name, isSpecial}) {
    return (
    <div style={{ color }}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요 {name}</div>
    
    )}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello; //Hello라는 컴포넌트를 내보내겠다