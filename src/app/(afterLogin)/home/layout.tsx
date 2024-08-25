import {element} from "prop-types";

export default async function Layout({children}){
    return(
        <div>
            홈 레이아웃
            {children}
        </div>
    )
}