import Main from "@/app/(beforeLogin)/_component/Main";
//tailwind -> 호불호 너무 심하다
//Styled component -> Server component SSR과의 문제가 있다.
//sass
//css module
//vanilla extract -> Windows 와 문제
//a 태그가 아닌  link태그 사용 새로고침을 하면서 넘어가지 않는다.

export default function Home() {
  return (
<Main />
  )
}
