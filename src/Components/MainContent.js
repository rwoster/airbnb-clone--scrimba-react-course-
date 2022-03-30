import Collage from "../Images/collage.png";

export default function MainContent() {
    return (
        <main>
            <img
                src={Collage}
                alt="Collage"
                className="main--collage"
            />
            <section className="main--info">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by
                    one-of-a-kind hosts--all without leaving home.
                </p>
            </section>
        </main>
    );
}
