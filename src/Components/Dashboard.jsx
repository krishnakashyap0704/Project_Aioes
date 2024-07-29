import { MyCards } from "./MyCards";
import { MyCarousel } from "./MyCarousel";
import { WeDealsWith } from "./WeDealsWith";
import { OurSatisfiedClient } from "./OurSatisfiedClient";

export function Dashboard(){
    return(
        <>
        <MyCarousel></MyCarousel>
        <MyCards></MyCards>
        <WeDealsWith></WeDealsWith>
        <OurSatisfiedClient></OurSatisfiedClient>
        </>
    );
}