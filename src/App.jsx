import React from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Page3Section } from './components/Page3Section';
import { Page4Section } from './components/Page4Section';
import { Page5Section } from './components/Page5Section';
import { Page6Section } from './components/Page6Section';
import { Page7Section } from './components/Page7Section';
import { Page8Section } from './components/Page8Section';
import { Page9Section } from './components/Page9Section';
import { Page10Section } from './components/Page10Section';
import { Page11Section } from './components/Page11Section';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
    return (
        <main>
            <Hero />
            <AboutSection />
            <Page3Section />
            <Page4Section />
            <Page5Section />
            <Page6Section />
            <Page7Section />
            <Page8Section />
            <Page9Section />
            <Page10Section />
            <Page11Section />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}

export default App;

