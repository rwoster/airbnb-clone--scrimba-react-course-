import "./Styles/App.css";

import Header from "./Components/Header";
import MainPage from "./Components/MainContent";
import ExperienceCard from "./Components/Experiences";

import { Data } from "./Data.js";

function App() {
    const cards = Data.map((card) => {
        return <ExperienceCard key={card.id} {...card} />;
    });

    return (
        <div className="container">
            <Header />
            <MainPage />
            <div className="experience-container">{cards}</div>
        </div>
    );
}

export default App;
