import Image from 'next/image'
import Link from "next/link"
import styles from './page.module.css'
//tailwind -> 호불호 너무 심하다
//Styled component -> Server component SSR과의 문제가 있다.
//sass
//css module
//vanilla extract -> Windows 와 문제

import zLogo from '../../public/zlogo.png'

export default function Home() {
  return (
<div className={styles.container}>
  <div className={styles.left}>
    <Image src={zLogo} alt="logo"/>
  </div>

  <div className={styles.right}>
    <h1>지금 일어나고 있는 일</h1>
    <h2>지금 가입하세요.</h2>
    <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
    <h3>이미 트위터에 가입하셨나요?</h3>
    <Link href='/login' className={styles.login}>로그인</Link>
  </div>
</div>
  )
}
