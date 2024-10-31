import { Container, Tabs, Transition } from "@mantine/core";
import PortfolioPage  from "../portfolio/portfolio-page";
import AboutPage from "../about/about-page";
import ContactPage from "../contact/contact-page";

interface HomePageContentProps {
    activeTab: string;
    transitionDuration: number;
    children: React.ReactNode;
}


export const PageContent = (props: HomePageContentProps) => {
    return(
        <Container size={'xl'}>
            <Tabs.Panel value="home">
                <Transition mounted={props.activeTab === 'home'} transition="fade-up" duration={props.transitionDuration} timingFunction="ease">
                    {(styles) => (
                        <div style={styles}>
                            {props.children}
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="portfolio">
                <Transition mounted={props.activeTab === 'portfolio'} transition="fade-up" duration={props.transitionDuration} timingFunction="ease">
                    {(styles) => (
                        <div style={styles}>
                            <PortfolioPage />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="about-us">
                <Transition mounted={props.activeTab === 'about-us'} transition="fade-up" duration={props.transitionDuration} timingFunction="ease">
                    {(styles) => (
                        <div style={styles}>
                            <AboutPage />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
            <Tabs.Panel value="contact">
                <Transition mounted={props.activeTab === 'contact'} transition="fade-up" duration={props.transitionDuration} timingFunction="ease">
                    {(styles) => (
                        <div style={styles}>
                            <ContactPage />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
        </Container>);
};