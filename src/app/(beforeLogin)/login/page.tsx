"use client";

import {useRouter} from "next/navigation";
import styles from "@/app/page.module.css";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";

export default function Login(){
    const router = useRouter();
    router.replace('/i/flow/login');

    return (
        <>
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
        </>
    )
}

//redirect 기능은 서버쪽에서 넘겨주는 것이어서 인터셉트를 해줄 수 없다
/// client 쪽 라우팅 기능을 사용해주어야 한다.
//router.push
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 누를 시 login 으로 간다.

//router.replace
//localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로가기 누를 시 localhost:3000으로 간다.