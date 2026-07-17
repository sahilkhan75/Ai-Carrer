import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import type { plans } from "../utils";
import { Shield } from "lucide-react";


function StatusBadge() {
    const { isAuth, user } = useAppData();
    if (!isAuth) return null;

    const isPro = user?.subscription && new Date() < new Date(user.subscription);
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${isPro
            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 "
            : "bg-white/5 border-white/10  text-white/50"
            }  `}>
            <span className={`w-2 h-2 rounded-full ${isPro ? "bg-emerald-400" : "bg-white/30"}`} />
            {isPro ? `Pro active • expires ${new Date(user!.subscription!).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
            })}` : "you're on the free plan • 3  requested included"}

        </div>
    );
}

function PlanCTA({
    plan, highlight
}: {
    plan: (typeof plans)[0];
    highlight: boolean;
}) {
    const { isAuth, user, setUser } = useAppData();
    const isPro = isAuth && user?.subscription && new Date < new Date(user.subscription)

    if (isAuth) {
        if (plan.name === "Free") {
            return <p className="mt-auto text-center text-sm text-white/30 py-3 ">
                {isPro ? "your previous plan" : "✔️ Currently active"}
            </p>
        }
    }
    if (isPro) {
        return (
            <p className="mt-auto text-center text-sm text-white/30 py-3 ">
                ✔️ Allready subscribed
            </p>
        )
    }

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleSubscribe = async () => { };

    <button className={`mt-auto text-center text-sm font-semibold py-3 rounded-xl 
        transition-all duration-200 ${highlight ? "btn-primary " : "bg-white/6 hover:bg-white/10 border border-white/10 text-white "}`}
        onClick={() => handleSubscribe}
        disabled={loading}
    >
        {loading ? "please wait..." : plan.cta}
    </ button>
}


const Priceing = () => {
    return (
        <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className=" feature-pill inline-flex mb-4">
                    <Shield size={11} className="text-emerald-400" /> Simple pricing
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight"
                    style={{ fontFamily: "'Syne',sans-serif" }}>
                    Start free. Upgrade <span className="text-gradient"> When ready.</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-md mx-auto">
                    Your first 3 request are completely free - no card needed.
                </p>

                <div className="flex justify-center mt-6">
                    <StatusBadge />
                </div>
            </div>
        </section>
    )
}

export default Priceing