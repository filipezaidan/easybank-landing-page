import { Button } from "../Button";
import { Container, Description, Image, ImagesSection, InfoSection, Title } from "./styles";

import imgMockups from '../../assets/images/image-mockups.png'
import bgMockups from '../../assets/images/bg-intro-desktop.svg'

export function Section() {
    return (
        <Container>
            <InfoSection>
                <Title>Next generation digital banking</Title>
                <Description>
                    Take your financial life online.
                    Your Easybank account will be a one-stop-shop for spendigin,
                    saving, budgeting investing and much more
                </Description>
                <Button title='Request Invite' />
            </InfoSection>
            <ImagesSection>
                <Image src={imgMockups} />
            </ImagesSection>

        </Container>
    )
}
