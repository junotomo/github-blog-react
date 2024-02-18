import { BlurredSpot, HeaderContainer, LogoContainer } from "./styles";
import logo from '../../assets/logo.svg'
import effect from '../../assets/effect.svg'
import effect2 from '../../assets/effect2.svg'

export function Header() {
    return(
        <HeaderContainer>
            <BlurredSpot place="left"/>

            <img src={effect} alt="" />
            <LogoContainer>
                <img src={logo} alt="" />
                <div>
                    
                </div>
            </LogoContainer>
          

            <img src={effect2} alt="" />

            <BlurredSpot place="right"/>
        </HeaderContainer>
    )
}