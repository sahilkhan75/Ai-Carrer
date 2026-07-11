function Footer() {
    return (
        <footer className="border-t border-white/6 px-6 py-12 md:px-12  flex flex-col md:flex-row  items-center justify-between gap-4 
        text-white/25 text-xs">
            <span
                style={{ fontFamily: " 'syne', sans- serif" }}
                className="font-bold text-white/40 text-sm">
                CarrerAI
            </span>
            <span>©️{new Date().getFullYear()}CarrerAI. All rights reserved.</span>
            <div className="flex gap-5">
                {["Privacy", "Terms", "contact"].map((i) => (
                    <a key={i} href="#" className="hover:text-white/60 transition-colors">
                        {i}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;