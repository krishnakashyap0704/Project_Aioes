import { MyCards } from "./MyCards";
import { MyCarousel } from "./MyCarousel";
import { WeDealsWith } from "./WeDealsWith";

export function Dashboard(){
    return(
        <>
        <MyCarousel></MyCarousel>
        <MyCards></MyCards>
        <WeDealsWith></WeDealsWith>
        </>
    );
}