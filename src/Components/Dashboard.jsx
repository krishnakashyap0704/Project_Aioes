import { MyCards } from "./MyCards";
import { MyCarousel } from "./MyCarousel";

export function Dashboard(){
    return(
        <>
        <MyCarousel></MyCarousel>
        <MyCards></MyCards>
        </>
    );
}