import { Container, MenuGroup, Item } from "./styles";



export function Menu() {
    return (
        <Container>
            <MenuGroup>
                <Item>Home</Item>
                <Item>About</Item>
                <Item>Contact</Item>
                <Item>Blog</Item>
                <Item>Careers</Item>
            </MenuGroup>
        </Container>

    );
}