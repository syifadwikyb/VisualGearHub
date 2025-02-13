import NavMain from "./NavMain";
import FooterMain from "./FooterMain";

export default function Container({children}) {
    return(
        <div>
            <NavMain/>

            {children}
            
            <FooterMain/>
        </div>
    )
}