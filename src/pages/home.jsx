import { PrimaryButton, ShadowButton, DangerButton, WarningButton } from '../components/buttons/styles'


const Home = () => {
    return (
        <div className="App">
            <PrimaryButton>Primary</PrimaryButton>
            <DangerButton>Danger</DangerButton>
            <WarningButton>Warning</WarningButton>
            <ShadowButton>Shadow</ShadowButton>
        </div>
    );
}

export default Home;