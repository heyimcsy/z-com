"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import {useEffect} from "react";

export default function Login(){
    const router = useRouter();

    useEffect(() => {
        router.replace('/i/flow/login');
    }, []);

    return (
        <Main />
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