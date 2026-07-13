import { Star } from "lucide-react";
import { Features as features } from "../utils"
import { Icon } from "lucide-react";


function Features() {
    return <section id="#features" className="py-26 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 " >
            <span className="feature-pill inline-flex mb-4" >
                <Star size={11} className="text-indigo-400" /> Everything you need
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: "'syne',sans-serif" }}>
                Four Tools. One <span className="text-gradient">Career leap.</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto ">
                From your resume to the offer letter we've got every step covered
            </p>
        </div>

        <div className="grid grid-cols-2 gap-6">{features.map(({ icon: Icon, color, glow, title, desc, bullets }) => (
            <div key={title} className="glass-card p-8 flex flex-col gap-5  group hover:border-white/15 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center shadow-xl ${glow}`}>
                    <Icon size={20} className="text-white" />
                </div>

                <div></div>

            </div>
        ))}</div>


    </section>
}

export default Features;