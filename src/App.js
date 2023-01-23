import './App.scss';
import HeaderSection from './components/HeaderSection';
import ServiceSection from "./components/ServiceSection";
import ExpertiseSection from './components/ExpertiseSection';
import PlansSection from "./components/PlansSection";
import PartnersSection from './components/PartnersSection';
import CasesSection from "./components/CasesSection";
import TeamsSection from "./components/TeamsSection";
import TasksSection from "./components/TasksSection";
import SupportSection from './components/SupportSection';
import SliderSection from "./components/SliderSection";
import FormSection from './components/FormSection';

function App() {
    return (
        <>
            <HeaderSection/>
            <ServiceSection/>
            <SupportSection/>
            <ExpertiseSection/>
            <PlansSection />
            <TasksSection />
            <TeamsSection />
            <CasesSection/>
            <SliderSection />
            <PartnersSection/>
            <FormSection/>
        </>
    );
}

export default App;