function MyComp1(param) {
  console.log(param);
  console.log(param.color);
  const color = param.color;
  console.log("컬러변수", color);
  return null;
}

function MyComp2(param) {
  // const address = param.address; // 둘이 같은 코드
  const { address } = param;
  console.log("주소", address);
  return null;
}

// {address: "뉴욕"}를 분해할당
// 이게 젤 많이 사용된대여
// 분해할당하는 코드
function MyComp3({ address }) {
  console.log("주소3", address);
  return null;
}

function MyComp4({ city }) {
  console.log(city);
  return null;
}

function App6() {
  return (
    <>
      {/* MyComp1({color: "yellow"}) */}
      <MyComp1 color="yellow" />
      <MyComp1 color="red" />
      {/* MyComp2({address: "seoul"}) */}
      <MyComp2 address="seoul" />
      <MyComp2 address="jeju" />
      <MyComp3 address="뉴욕" />
      <MyComp3 address="시카고" />
      <MyComp4 city="서울" />
      <MyComp4 city="워싱턴" />
      {/* MyComp4 함수 작성/ 분해 할당으로 props 받기 */}
    </>
  );
}

export default App6;
