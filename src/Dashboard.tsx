import { useReconData } from './useReconData';
import CyberGlobe from './CyberGlobe';

export default function Dashboard() {
    const { subdomains, logs, metrics } = useReconData();
    return (
        <div className="bg-background-dark text-white font-display overflow-hidden h-screen flex flex-col selection:bg-primary selection:text-black">
            {/* Top Navigation Bar */}
            <header className="h-16 shrink-0 glass-panel border-b border-glass-border flex items-center justify-between px-6 z-50 relative mx-4 mt-4 rounded-xl">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 text-primary drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]">
                        <span className="material-symbols-outlined text-3xl">radar</span>
                        <h2 className="text-xl font-bold tracking-widest">GOD MODE :// RECON</h2>
                    </div>
                    {/* Search Bar */}
                    <div className="relative group hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input
                            className="block w-64 bg-black/40 border border-glass-border rounded-lg py-1.5 pl-10 pr-3 text-sm font-mono placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                            placeholder="SEARCH TARGET SYSTEM..."
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors relative">
                            <span className="material-symbols-outlined text-xl">terminal</span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">wifi_tethering</span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">settings</span>
                        </button>
                    </div>
                    <div className="h-6 w-px bg-glass-border mx-2"></div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-mono text-gray-400">SOC L1</p>
                            <p className="text-sm font-bold text-primary">SYED_B105</p>
                        </div>
                        <div className="size-9 rounded-full bg-gradient-to-tr from-green-900 to-black border border-primary p-0.5" data-alt="User Avatar Profile">
                            <img
                                alt="User Avatar"
                                className="rounded-full h-full w-full bg-black object-cover"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            />
                        </div>
                    </div>
                </div>
            </header>
            {/* Main Content Grid */}
            <main className="flex-1 grid grid-cols-12 gap-6 p-6 overflow-hidden relative">
                {/* Background Grid Effect */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
                    }}
                ></div>
                {/* Left Panel: Discovered Subdomains */}
                <aside className="col-span-3 flex flex-col glass-panel rounded-xl overflow-hidden z-10 h-full relative group">
                    <div className="p-4 border-b border-glass-border flex justify-between items-center bg-black/20">
                        <h3 className="font-bold text-sm tracking-widest text-gray-300">DISCOVERED SUBDOMAINS</h3>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">LIVE: 42</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2 scrolling-text">
                        {subdomains.map((item) => (
                            <div key={item.id} className="p-3 rounded bg-white/5 hover:bg-white/10 border border-transparent hover:border-primary/30 transition-all cursor-pointer group/item animate-pulse-once">
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`font-mono text-sm font-bold ${item.color === 'text-primary' ? 'text-white group-hover/item:text-primary' : 'text-gray-300 group-hover/item:text-alert'} truncate`}>
                                        {item.url}
                                    </span>
                                    <span className={`text-[10px] font-mono ${item.color} bg-white/5 px-1.5 py-0.5 rounded border border-white/10`}>
                                        {item.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                                    <span>{item.ip}</span>
                                    <span className="flex items-center gap-1">
                                        {item.latency}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Decorative bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background-dark/80 to-transparent pointer-events-none"></div>
                </aside>
                {/* Center Stage: 3D Globe Placeholder & HUD */}
                <section className="col-span-6 flex flex-col relative">
                    {/* Map Visualization Placeholder */}
                    <div className="flex-1 flex items-center justify-center relative">
                        {/* Rotating Rings Effect */}
                        <div className="absolute size-[500px] rounded-full border border-primary/20 animate-spin-slow"></div>
                        <div className="absolute size-[350px] rounded-full border border-dashed border-primary/10 animate-[spin_20s_linear_infinite_reverse]"></div>
                        <div className="absolute size-[600px] rounded-full border border-white/5"></div>
                        {/* The "Globe" Container */}
                        <CyberGlobe />
                        {/* Floating Data Points around globe */}
                        <div className="absolute top-10 right-20 glass-panel px-3 py-1 rounded text-[10px] font-mono text-primary border-l-2 border-primary">
                            TARGET LOCKED: 34.22.101.55
                        </div>
                        <div className="absolute bottom-20 left-10 glass-panel px-3 py-1 rounded text-[10px] font-mono text-alert border-l-2 border-alert">
                            VULNERABILITY DETECTED
                        </div>
                    </div>
                    {/* Bottom HUD - Dynamic Gauges */}
                    <div className="h-32 glass-panel rounded-xl mt-4 border border-glass-border flex items-center justify-around px-8 relative overflow-hidden">

                        {/* Scanning Line Effect */}
                        <div className="absolute top-0 bottom-0 w-1 bg-primary/20 blur-sm animate-[translateX_1000%_4s_linear_infinite] left-0"></div>

                        {/* Gauge 1: Scan Progress */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="relative size-20">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    {/* Background Circle */}
                                    <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    {/* Dynamic Progress Circle */}
                                    <path
                                        className="text-primary drop-shadow-[0_0_3px_rgba(0,255,65,0.8)] transition-all duration-1000 ease-out"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray={`${metrics.scanProgress}, 100`}
                                        strokeWidth="3">
                                    </path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    <span className="text-lg font-bold font-mono text-white">{metrics.scanProgress}%</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 tracking-wider">SCAN PROGRESS</span>
                        </div>

                        <div className="h-12 w-px bg-white/10"></div>

                        {/* Gauge 2: CPU Load */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="relative size-20">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path
                                        className="text-primary drop-shadow-[0_0_3px_rgba(0,255,65,0.8)] transition-all duration-500 ease-out"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray={`${metrics.cpuLoad}, 100`}
                                        strokeWidth="3">
                                    </path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-lg font-bold font-mono text-white">{metrics.cpuLoad}%</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 tracking-wider">CPU LOAD</span>
                        </div>

                        <div className="h-12 w-px bg-white/10"></div>

                        {/* Gauge 3: Network Traffic (Scaled / 10) */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="relative size-20">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    <path
                                        className="text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.8)] transition-all duration-300 ease-out"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray={`${metrics.netTraffic / 10}, 100`}
                                        strokeWidth="3">
                                    </path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    <span className="text-sm font-bold font-mono text-white">{metrics.netTraffic}</span>
                                    <span className="text-[8px] font-mono text-gray-500">Mb/s</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 tracking-wider">NET TRAFFIC</span>
                        </div>

                    </div>
                </section>
                {/* Right Panel: Live Vulnerability Feed */}
                <aside className="col-span-3 flex flex-col glass-panel rounded-xl overflow-hidden z-10 h-full relative">
                    <div className="p-4 border-b border-glass-border flex justify-between items-center bg-black/20">
                        <h3 className="font-bold text-sm tracking-widest text-gray-300 uppercase">Live Vulnerability Feed</h3>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-alert"></span>
                        </span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-4 bg-black/40">
                        {logs.map((log) => (
                            <div key={log.id} className={`flex flex-col gap-1 border-l-2 pl-3 ${log.type === 'CRITICAL' ? 'border-alert' : 'border-primary'}`}>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">[{log.time}]</span>
                                    <span className={`font-bold bg-white/5 px-1 rounded ${log.type === 'CRITICAL' ? 'text-alert' : 'text-primary'}`}>
                                        {log.type}
                                    </span>
                                </div>
                                <p className="text-gray-300">{log.msg}</p>
                                <p className="text-gray-600 truncate">{log.detail}</p>
                            </div>
                        ))}
                    </div>
                    {/* Terminal Input Fake */}
                    <div className="p-2 bg-black/60 border-t border-glass-border flex items-center gap-2">
                        <span className="text-primary font-mono font-bold">&gt;</span>
                        <div className="h-4 w-2 bg-primary animate-pulse"></div>
                    </div>
                </aside>
                <div className="scanlines"></div>
            </main>
        </div>
    );
}
