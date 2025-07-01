function App9() {
  const val1 = "son"; // son
  const val2 = 88; // 88
  const val3 = ["java", "react"]; // javareact
  const val4 = { city: "seoul", country: "USA" }; // 얜 오류라 나눠 써야 함
  const val5 = true; // 오류는 아닌데 출력이 안 됨
  const val6 = false; // 오류는 아닌데 출력이 안 됨
  const val7 = null; // 오류는 아닌데 출력이 안 됨
  const val8 = undefined; // 오류는 아닌데 출력이 안 됨

  return (
    <>
      <ul>
        <li>값1 : {val1}</li>
        <li>값2 : {val2}</li>
        <li>값3 : {val3}</li>
        {/*<li>값4 : {val4}</li> 이건 안 됨 */}
        <li>값4 : {val4.city}</li>
        <li>값4 : {val4.country}</li>
        <li>값5 : {val5}</li>
        <li>값6 : {val6}</li>
        <li>값7 : {val7}</li>
        <li>값8 : {val8}</li>
      </ul>
    </>
  );
}

export default App9;
