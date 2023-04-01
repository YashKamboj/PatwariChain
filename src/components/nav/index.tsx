import {
  Container,
  Nav,
  NavItem,
  NavItems,
  NavMain,
} from "./navbar.style";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import LOGO from "../../image.png";

const Navbar = () => {
  return (
    <Container>
      <img style={{width: "4rem"}} src={LOGO} />
      <NavMain>
        <Nav>
        <NavItems>
              <a href="/">
                <NavItem style={{color: "#ffffff"}}>Home</NavItem>
              </a>
            </NavItems>
            <NavItems>
              <a href="/Mint">
                <NavItem style={{color: "#ffffff"}}>Mint NFT</NavItem>
              </a>
            </NavItems>
            <NavItems>
              <a href="/Campaigns">
                <NavItem style={{color: "#ffffff"}}>My Properties</NavItem>
              </a>
            </NavItems>
            <NavItems>
              <a href="/">
                <NavItem style={{color: "#ffffff"}}>About Us</NavItem>
              </a>
            </NavItems>
          <NavItems>
            <NavItem>
              <div className="flex justify-center">
                <ConnectButton
                  showBalance={false}
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                  }}
                />
              </div>
            </NavItem>
          </NavItems>
        </Nav>
      </NavMain>
    </Container>
  );
};

export default Navbar;
