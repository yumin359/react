import { FaCircleCheck } from "react-icons/fa6";
import { FaAngellist, FaApple } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { LuCat, LuDog } from "react-icons/lu";
import { HiBookmark as Bookmark1 } from "react-icons/hi";
import { HiBookmark as Bookmark2 } from "react-icons/hi2";

function App17() {
  return (
    <div>
      <FaCircleCheck />
      {/* 연습 : 아이콘 사용해보기 */}
      <FaAngellist color={"green"} />
      <FcLikePlaceholder />
      <FaApple color={"gray"} />
      <LuDog />
      <LuCat />
      {/* 이름 같으면 별칭 써서 */}
      <Bookmark1 />
      <Bookmark2 />
    </div>
  );
}
export default App17;
