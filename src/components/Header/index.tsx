import { Container, Logo } from "./styles";

import logo from '../../assets/images/logo.svg'
import { Menu } from "../Menu";
import { Button } from "../Button";

export function Header() {
    return (
        <Container>
            <Logo src={logo} />
            <Menu />
            <Button title="Request Invite" />
        </Container>
    )
}