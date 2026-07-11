import { ArrowRight, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { useAppData } from "../context/AppContext"

export function Hero() {
    const { isAuth } = useAppData()
    return (
        <section className="relative pt-36 pb-28 px-6 flex flex-col items-center text-center overflow-hidden">
            <div className="orb w-150 h-150 bg-indigo-600 -top-40 left-1/2 -translate-x-1/2" style={{ opacity: 0.12 }} />
            <div className="orb w-80 h-80 bg-emerald-500 bottom-0 right-10" style={{ opacity: 0.1 }} />

            <div className="inline-flex items-center gap-2 feature-pill mb-6 animate-fade-in">
                <Zap size={11} className=" bg-emerald-400" />
                <span>AI-Powered Career Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08]
            tracking-tight nax-w-4xl mb-6 animate-slide-up" style={{ fontFamily: " 'syne',sans-serif" }}>
                Land Your Dream Job
                <br />
                <span className="text-gradient ">  Faster with AI</span>
            </h1>
            <p className="text-white/45 text-lg md:text-xl max-w-xl leading-relaxed 
            mb-10 animate-slide-up " style={{ animationDelay: "0.1s" }}>
                Analyse your resume , get an ATS score , discover the right jobs,
                build a stunning resume,and ace every interveiw -all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                <Link to={isAuth ? "/jobmatcher" : "/login"} className="btn-primary px-7 py-3.5 rounded-xl text-base font-semibold">
                    {isAuth ? (
                        <p className="flex items-center gap-2">
                            Find Best Job <ArrowRight size={16} />
                        </p>
                    ) : <p className="flex items-center gap-2">
                        Starts For Free <ArrowRight size={16} /> </p>}

                </Link>
            </div>
        </section >
    )
}

