import Features from "../components/Features"
import { Hero } from "../components/Hero"
import Priceing from "../components/Priceing"

const Home = () => {
    return (
        <div className="bg-page">
            <Hero />
            <Features />
            <Priceing />
        </div>
    )
}

export default Home