function MyComp1({ children, color }) {
  return (
    <ul>
      <li>color: {color}</li>
      <li>children: {children}</li>
    </ul>
  );
}

function App11() {
  // 직접만든 컴포넌트 : 대문자로 시작

  // html 컴포넌트(built-in component, 브라우저 컴포넌트) : 소문자로 시작
  // 브라우저 컴포넌트의 props : html attribute 를 사용
  // but, class -> className, for ->htmlFor

  // style prop : style attribute 역할
  /*
  **style attribute**
  <div style="color: red; background-color: yellow; font-size: 24px;">
  </div>
   */
  /*
  **style prop**
  <div style={{color: "red", backgroundColor: "yellow", fontSize: "24px"}}>
  </div>
   */

  return (
    <>
      <MyComp1 color="red">작성된 컨텐츠</MyComp1>
      <h1>제목</h1>
      <p>문단</p>
      <div>div</div>
      <a href="https://www.daum.net">daum</a>
      <img
        src="data:image/webp;base64,UklGRhoWAABXRUJQVlA4IA4WAAAwmACdASo4ATgBPw18tFMsKDW0KtU66rAhiWVukdNopwni5mZFHomPbAshTZ/nv+V//u6F+h/9f9xyju9/Hp/mc/XWB42RyjGn//bBetWf/3qP++1XZk2ZNmTZk2ZNmTZk2ZNojWpfdSyuX76e+sWE3g8zEQjuzjJGfNMjI5szE7oiSt0dYj0m4q2yHT309eGWgh2VC9ZyhXIl+5eYcZ94zrWdRePO/BvDLoUXIIMK1H2Lb+70stDRq0PqzaKiXWgWalu7zvykUvFmwTy306cEsh5hu87LEeHohIxwYFGWs1+H/RE/ukOMVC5FZ9QdNZhsn5W9ktyY4dmtKfHUi8r5TqqjqM5mRWsJWmzZjGHmdU/90dDEZ623JLS8MpArjFDjIJyI9WemJ4qyeJuBqu2VyIXJpiBmfKMlCCianb94f11Bq2VtFjWz/at1FniL0ez7OzNk3nJ1bl2eeHr+xQSiHv7sqK/01f1KZ3AYPOvhGQzrn7y8b/pLZOWQXez4S2+i3LJ5GsrWqwX4plb4Qxyq8Yg9ruUcdiGcJ7fo9tEKZGVCS38IA+LmIno5+tpF0vhV5OuzKP1nDb66PnwdvOSLoL+GQNMLgVROEkwIqIJ9bqgJ6+4El//3p72yEXuAlj5rioqXT3/DL8QqX6ZFVKH+B7tK7iAGLClsYaCUcoTy4pigbUyW9Nj5X/XfafMKKAJeTdKxrMWNAc2j55uvEwyps++PhUQ/ACO1vT/GuIppclIaG8csC4ixZuBPKjEYTkihfwv2eKV2O/fYBxgY0koZcqlkxzffnxs/tGxbs3KdSO1OkmO4E8VIq2QUlQNCGCbgk4tV1RVCW5tuW/PYB8wmfFOZ5ciuTzrvjZwQ34QHCqF7aiVS247CpbmchmlqmE6SHJCa0zYJep+ZkLAy/qVVL2yzhVbJGl7+pJRIYAGkZxRF8u0UFc5m3Q1zvNskmx+j+DD533N9cQ5wwzAMtAotkTtBJXIj28J7Ugw6LSfcVjg3dQPXFa4Rvb8ukisAO3dUrss5lqvaN8ViMl+tviPc6a7D0aI9En2i+WoMd8kKnW2N5LPQ3IRIG0aqj19de8pasKma/lyXu/89hMNBe+fmxvjdS403mx3ckODqLrfsUIgHHa6f0IBWytsskrrwYLxBTeRVPRgioSuCLLWvMvkkNW3OhzJM5w1lzwkHVJwf7FWfRneo+6avkhO934xqxAGOVwtoPTNOwwa0Kb5wiIp4lleYBJvX/AN+ddzDtYMnm2tP/Nj2BQgPQGq6vJcDtXUgIvaVAJkydUKJLvJHBoxetEdkeom6XKX72Eo7/wq5zhfLJOz3vkA1e8r8JJ0OtDlyqIYEZOQ7NgO54+FZpoSqoeeZJykMnBPmhdkipuWIvjn6AFHoZay4QeXO0ilfM10MlUm7PtBO/CVxyzc8yOC4XAGNdNvOK51YnnXsdHfB8mSc2P7Z+xglPnxmk8mFRYtAx0e+14kvi3w7mKxZckM1dAFp6VU0qSrRNPExgdV7NZsd9EsiOLD5AepVRUIIlUdptYfxQvfUtSngUoS/dNiJGa/QDFAlYciUhmKgG/gtXdp00ecP2hIKmZSgZsdRoVWdhCvdB+Sjxf3O+b+T9A/BTIE+vvqDI7IRgAD+9fgxTHjIklcHtGJmh/1SScA6NZWIgZgAwiGFRB5pA3AfAIBDTrr2ufBHebkbGYeeVjUjvb1uQy0owe4Zh3wMAACCwAjgCOwNRLyswQbNvjUrgDoGHGZPQ4ZpgwuaR+0Nc2Wc0B/tsUAN7Z51xLw8gXKseO0ZAkxGLukhSmCqiTUHjzlfTrZiN8DpB6F4tBQVIzBer5ciBE/txZLGvoQFv7tIDMqitnbclDIwP/XMD16BsVJIcoI4GkgAX1Bc45fLqfH6pVpLmqcSxEVECGuIuaZV+aF2VBH6edTSBbacD/lgtSHLymicOZ1VToDzDZimZvhHmIY5SiHI0Zh6oC2QsBTMhXZEGEg697NYOBCOlt2pgJn5nTEtKAOlnBp57b29mQwciitq6kiQQrEcP+LVR0kyzgGt9okR6yTWrc00a5rqSglGecw2A1qsVJDTjxN4B0k/+479tXN3PDzyn03IkZVKjOpXTfSfQjwT7/uj3N930b4WtzKXCgU5pAADG7DuPtFHwAAAASyVcD5Nd5Ax6rYwGAsI7iZfWO4KbQHvEAJZJUTz2356QaweluKJA7gKUG5UJycifRvWShCjECx075cnYqyQNYxBEPIbjMQnG7j4dJ4ELatyIGeokuI8KtN2dSFcfu72D4iYmQvBV8/v5/cWxlIggtUpChtISOZIZTiiDeLm26peoZXwrHKYKNavRfGl3BLW+UZT9xAsv/uY+gqxz6PLOUkFRGbMTqF/KqaqMbkfFWb2dltMplff9I0S5dFNdsPeM3FZ/wvrUia170YcHvyMc66vQeOjdp9Ol47SfOJbTwyCZ2WihX0VXftDSMAuxjgV1CPROr5st19y8Srr1K/4Oo9bw5E0CEyMbS60Zg3cndzmTouCtZcpZJwaOuC0Mf4VYi1jSIUtoseggAYSU8u1zTDVyQuTsA4nw9PY+WAL1vuWwK8qlxAdml/cS4fSrxzQ/GPPM0xfU2P7crDjmN7WXTxqs+I0Uod7hSBVdzcEqtv8Xbo1PDbqyPm39InjWwjJZPcMqfqLV+hV6JKH6Sp+wVOBFyvNpL16CrKu2Ev6BzbUzNmyadfCGXpIMyJ+a19NhIoCK9HBV8/EnukS3L2DCI8jdstU4UCL36nA0yBtmFQ1BJUNSbg1fU2J1VqzEIcYG3aDMpVEwokCxI9ZCz+vv4632bAq7qUnubn/2m/uIlk6SOcA3cNSZ5Edou3pchYqFEdaSifJKC4Vx/wsVTrt/TMR00kOT6yWQ9dQqW0pjSAt4mkqzQ8wI9UP9+GiDU2tz4qz5o1tKLxJUYUs8WPq4e8yuffhSKjjLpv06OJG35V3mzYLaTeOLgkTK0bhbgXLzlKO0ribsL6X7fdZ6H0dWbcwOs4HrecnoIZ+9FTVRdnU0Y4BArwuvKh7O87e9fxrxkqF+FEuCLIGLpdfFr9x9azw8xoXH98CXRZnvWRbOf8K3klsIFzB63tiuPDEC7wbSwcYqwLzQxUd6/Qrla7PflWU4k9b+9+mxojjbvu/lkItQ4mT1eAFcxKwni4a/QfAvd2hYdIWRGXli2/RlyMMRCIpzInujeFNIMZ+9Xnm82DI2+bpjjehrplZhqZ8atQ7zUwH302A9YsvW8MFFjPFKMlN2wvvSJlBe2Ln97JMttaqPRW86NiSwDb/MWdZjAFU12z4e896ksqkRrTR8HpSUPT2UJzkuOX3KuG0rk1Oub6MK18iNCtL8J4aqF7+scd7q+FI9zzqBWXN7edoDAhLQefef0ZXFzL5wn0D8WGT7WHzgS+qHqX3GGoOVAK5keJDQrlIfbIVN+3QL7tEiInkMSSx1xap4emdkJ4/7GJrXQsNthQdZWOCK0Bai9nl6CageDnyOjrSFtRGa9dkD9PHhcgWtgsnNlWR7lpAnYymdrKUTxRshjJorPfQrjw3GE71YYZ1SPGXggu8pMQrD9X3TR40Mq+b3XJ5bR4/GzJB7A3WB0TE6UYX3RazyVnQ0mwfTHF07Ih1WGsVLoTUVPONcmK3JcYaAV03XVHvIZ+kOZlxcW6n2BNq+yuITmVQdFI4/TxCK39Q2yZnmTc1v+gWxx1Uk7+sIbbE9sC23tLs+NSmS0JXzgYGEoGtbXXwijgrAgP/Q5xWsG50UQE2QulJ/GoqJlRU2u6B1XcB9kBD4Qx21wFzy0szoUSput/CWh+K5R+VzuKZsuV9B9ZXY3ViNfRMXrIeCnba3gikuXaLG9rQIqJlfXUs2R+u06y8Fxi2e7pvXjdpke74+/hqWagPuOi2RF1eBrU2JoTFWss5simBJLwql+fjpWU9NOeOoo6rqQVLYK48goGc+/Tk1SqFiA14WAJPubOI9OwEvaqd/fB2tB/qMKkljdTHdKSWZSQP1KScYkVf8470GwQoDZKs2vwj3j9sVROImHcwaDMbhg0kcOqhm+zi9nC7X3ZpqUfOZnXm4Dfp/QfJ9p+W9kpA5OAp8ZOHFypeYTFMb1HimYBq9dntbHJ7HR0M13+J+xK9s59MzRR2PmezSOCyCk866x2TnpSGd0leCDH3XdEo4PXCJMeEmCa5U+bJgwd+ngAGyC/sBmBcIkviYhtniQKdbpbR24HRYSOJldUJ7lq8W7BEAHsJpYHYIgMGcPb1HGcQYED7Sr8mKqby5huvxTjebCFKYcBIdQMy1Ob9RygZGGrz6HNHy3ZXwJ4DZBvWpACwnyr1eOEf1u9k1nsx/K/3gU5AfcjA8UnilZ5i1YUY4WZf/Tb9+emd7d6BNEDzajpClyoI53ShJJkTypm7/hc6+u0lm6sWPGslgPfclxQlQzEwoh7owhFd1OHddzBFa4PHYzRVTcRyJmbgqlTXv20VZCm+vfIjFGv4rmaJWsE9N0ybl4L9pF+k060uCDWe4B9mJxoGLUnWwA5CG1MS+ijcDiKV7oEC3tvxSf5K6b1q3vkSp3+eL7V9AeXLiyXK+AbFYbalXH6gudOFSqWnSdhMgN7VMXqRsXzF9fEabdU4XYgHaZ6IpGe6p3aRSgetl2T+abj0FgFoxJL10jPmd4QVTE5+WUM5BkdNlcAOQ//vmS2r4KIPbchvUcz5p9HDMK1H0rzRbgwG/hj6lnQT+WJgHpYGotOYHTlCt1U83e9qBanT/VbRpiuM12O0SViky7wFehHQu7bN+yQzBFgrRd+jbs8cJbVfSn7y5HZPS9CIOLwQJTBZrAG2Idojd5Wo/an8L9/BFxUOo0X90fy3XaKTOkEQhj/YJNPv5c211SQRZqUKH4JPz+PrwhQx8zuCtnMYQ+/8MrHkVsRDfK8mizq9rOEcYp0fiNgrAuBnKgb6lqLKm5+01HK7ZIjVjK/Mz84IL0KdGQS+RLkCU93DtPc+bPTBf/kDGzFs6s1mF59qn1AeKhIPJfUG99l9l1wtUfOW8BhWY3fQ5g5/S9v8CuuIjd47mnyA1lxu7iYIrDpcCHKaC+/hD9oHMSbFJ/3mHY92/VtLI1MWQ7VLOPDa3VchJkdPprfxGQDTVseY6TLKx1CJTpvcUoDMzGxNjnnJTZ+CbHs/BgcwJ0+kac0+c4tk1Z8yoH1LJHxb9XJqvzi8ngEZwsFnS1ivcf5rZkwicEweVp6aq0vWdpks+b4u538mrAkkQ0ZKJlQAmhkQn/gGcjFF7arPHBhpSDKlIhjqGI/myQ0JN2cgmGNchi3Ke3dQfXHdIFDOSGwul00ZZ6RBkhBA8AFVWzBIe58oJuCcd3xJX7+DRnRkp6mAufZ1K4+pruemCi9aoVRfIzME9bftWRoh7ARTJfmPhE3XWfYMN2ARsL/geLNum+cesdHq23RnY9KoSUBU8J/IQ/wUrzYfy88c/PkPFBRP/vKEaDNjj3fN3JJUORdlsQ3E5XuzL4QB1ZG5osJ3uTK0AdiYNbqGenPEAdr+scA/CaxAAcw4QDr/jSGLZ4Nipha6W/7StLEi3GsF4Yw49DXqvY+e7YneLChAu/91e2MkWWHSnbHDfPRgPOMimnEga8O4S2VRPym6cX9u7907pSVoDZLwmaIYdnJ9zQhc5FkrYMeUuy5GXdU9JMmGBJ+LtHvF3Fp/CbkVAR2RZyAOFFqzAsXKUiMAvHJFrhL5DusRhQVy3+fT7AmjfTDvmZJ6zO/vzsvLX1qKiobJ51cSeaXdWooB4knunbdSn3bIt3VsNTT9N38uFAjdmwusooX10pn6HY648fFpVa34rYnC262D6nKtIyC0Tg1mzPhS4wlGAnZP8utF9jmpIUtZ4w87f36G/tubuttCvkoJhvz/GABRKqIDZO7SB6s4S+4oemPMqNQGMLGV+uO2SAO/0QBIj12M86CcMd3N9PJPawmx5TQVG8NnvH6PYTgPXaukNSt4AuJMjZ+2KO41xR8VUmaJ0+9YwTzRYI8weDb50vh2CLSAC/Z6t2t8FdDzPxiVvk1IR0ySKbrN5LHv0E1SCzHtobkpZjcNzgKuDqwxkpE3d++kBiLdNpEJhiWYK70QjxhOEr3Ngu46AaAYpJLPGzwUS4KFOm+LCAGirhYwHx/xxBbVygFgyVJ+26TRtB7EG7znp346pFGIAE6PQoHmLI7kRksttninNufQmAeSJE2LRQlUlFGRnksbt+r+raqs9HeZO9K5v+q/KNCl0t1BEi3EyqZGh60C21zmYzJ5lIxhnIW+VVJVgdSlbQBytcrmoTCmqr9G+gLLRr9pa1j+Ksp6r+SQTcFib7qb3GC32RBzS7HYla6ukm5Zf8MP59ZfMOZdE/8CXIazBVeUHw/DY+4Wd80r3oxeLzxox5205EQfD5kAdVmFRUrISJwj30xgl1bw/QcFtTSbuEGJGOfK6DMXKNQVjSKDIfy5ocrcHO9SwZ9eeISR+r9EAAkd2tjLsZi3KczGlbHYS6NdsuzkzLNjEyGCO7UWhw0cT36J5HYFdHG0nPExUmg0EfgQgQFnMiTkD6mXlsLf2uFnYBi6xd990GrFsQ2LsKf4qMuTz5L75ln783adbVAf50AIW33wjLlZtabSK0nRsIPSMCMzZ/SijCxv2GDj0CVC4qBwobSspQvU1ea1CUO0WPluTzKcuUZkUwedfPpGzmxCqwVxzzXFLujynVsevQRDbc4PRfMJUDtnEoPs1rQ+YVw6oLwy4yTJSbfYNcg4nqBozsB355oEO7EamStWGOpO2aN83w8mAK1R9vTA3pEe04tuPVBfbokagB/cjKcLYQK6DVi8QD3VdIR42HSupbs1LxY0KQOGp1r2/rcRL4+h9NKNHB3TSCZov0Bk21cPp+mjWJJzLPPHy65GTPmdA718HCjf4d/d263y4TjRxLMnCIem6VGmFdmmsRibaY1/e0KJ7R8Eh4g2upgqC3L5OtAizYbp5M96GQ9CddNUxaN60NInnOzI8E4NLM5juo1HEF0gH+/QWhVrkVjulaEz4B/S4TEib4xll5gbg3YoXJW4yeiByRM2GzFWYXcsI5il0rMBeIhx3O2g9o5rX3gGFfpzkUOf+aUhW8Xzz2uw1/VeHX7/dwMTjGZlp7RWq7LdX7VoGMlFmR/ChJjsS7xH4eikWD6bihKUu6Pu41rTz/JeFASQ7dxtphqlmBykX5w55XeQ3qhFFpQ+EVjw0O2MuB5zGIw8IEj+lp9fHJPrvVFy9wije2Xl6XGh6cAhZ+zjCAQrQEKHoH+L10sKhq5uHagNkkfmqaeWkUS7QfBmhCQtFZbvZ4m429b3Rws/zbXYCOiZMCz3iO8KgtQX8j2cZBouQV2JhrB1+wLmx59r+DUuILFXtn4mHwomgJMjIhMtJc4hHUc9inKrvLeChI4VqeTps5H/HlicMJ09Cm3rXyJkAKlD56JQbLe4EE0JTb4YQCTI1wm5TN0uXtnUwiS/yfJIL3QGhtdyr/YTu+wsLBjJ7fh3Q5I1oNxQoRZZAAA="
        alt="사자 그림"
        title="사자 사진"
      />
      <br />
      <label htmlFor="nameInput">이름</label>
      <input type="text" id="nameInput" />
      <hr />
      <div className="content">hello</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "24px" }}
      >
        스타일 props 사용
      </div>
      <hr />
      {/*  연습 style props 을 사용해서 자신만의 버튼 만들어 보기 */}
      <button
        style={{
          color: "skyblue",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "2em",
        }}
      >
        내가 만든 멋진 버튼
      </button>
    </>
  );
}

const myAddress = "jeju";

export { myAddress };

export default App11;
