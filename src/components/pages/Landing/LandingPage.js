import HeaderLanding from '../../modules/HeaderLanding/HeaderLanding';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import TechSection from '../../components/TechSection/TechSection';
import StudentSection from '../../components/StudentSection/StudentSection';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';

function LandingPage() {
    return (
        <main className='landing-page'>
            <HeaderLanding />
            <HeroSection />
            <AboutSection />
            <TechSection />
            <StudentSection />
            <Footer />
        </main>
    );
}

export default LandingPage;