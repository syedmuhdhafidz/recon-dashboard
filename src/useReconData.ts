import { useState, useEffect } from 'react';

// Word lists to generate realistic-looking data
const SUBDOMAINS = ['api', 'dev', 'staging', 'auth', 'admin', 'internal', 'vpn', 'jenkins', 'git', 'db', 'mail', 'cdn'];
const TARGETS = ['corp-target.io', 'mega-corp.com', 'internal-net.org', 'secure-bank.net'];
const VULNS = [
    { type: 'CRITICAL', msg: 'SQL Injection detected', detail: 'Payload: \' OR 1=1 --' },
    { type: 'WARNING', msg: 'XSS Payload reflected', detail: 'Source: <script>alert(1)</script>' },
    { type: 'INFO', msg: 'Port 22 (SSH) open', detail: 'Banner: OpenSSH 8.2p1' },
    { type: 'SCAN', msg: 'Directory fuzzing', detail: 'Threads: 200' },
    { type: 'CRITICAL', msg: 'Exposed AWS Keys', detail: 'Path: /.env' },
    { type: 'WARNING', msg: 'CORS Misconfiguration', detail: 'Origin: *' }
];

export function useReconData() {
    // Initial State with some dummy data so it's not empty on load
    const [subdomains, setSubdomains] = useState([
        { id: 1, url: 'api.corp-target.io', ip: '192.168.1.42', status: '200 OK', latency: '24ms', color: 'text-primary' },
        { id: 2, url: 'admin.corp-target.io', ip: '10.0.4.15', status: '403 FORBIDDEN', latency: 'SECURE', color: 'text-alert' },
    ]);

    const [logs, setLogs] = useState([
        { id: 1, time: '10:42:05', type: 'CRITICAL', msg: 'SQL Injection detected', detail: 'Payload: \' OR 1=1 --' }
    ]);

    const [metrics, setMetrics] = useState({
        scanProgress: 78,
        cpuLoad: 12,
        netTraffic: 450
    });

    // THE HEARTBEAT: Runs every 1 second to update data
    useEffect(() => {
        const interval = setInterval(() => {

            // 1. Update Metrics (Fluctuate random numbers)
            setMetrics(prev => ({
                scanProgress: prev.scanProgress < 100 ? prev.scanProgress + 1 : 0, // Loop progress
                cpuLoad: Math.floor(Math.random() * 30) + 10, // Random CPU 10-40%
                netTraffic: Math.floor(Math.random() * 200) + 300 // Random Net 300-500Mb
            }));

            // 2. Randomly add a new Subdomain (30% chance)
            if (Math.random() > 0.7) {
                const sub = SUBDOMAINS[Math.floor(Math.random() * SUBDOMAINS.length)];
                const target = TARGETS[Math.floor(Math.random() * TARGETS.length)];
                const isSecure = Math.random() > 0.5;

                const newSub = {
                    id: Date.now(),
                    url: `${sub}.${target}`,
                    ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
                    status: isSecure ? '200 OK' : '403 FORBIDDEN',
                    latency: `${Math.floor(Math.random() * 100)}ms`,
                    color: isSecure ? 'text-primary' : 'text-alert'
                };

                setSubdomains(prev => [newSub, ...prev].slice(0, 10)); // Keep only last 10
            }

            // 3. Randomly add a new Vulnerability Log (40% chance)
            if (Math.random() > 0.6) {
                const vuln = VULNS[Math.floor(Math.random() * VULNS.length)];
                const now = new Date();
                const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

                const newLog = {
                    id: Date.now(),
                    time: timeString,
                    ...vuln
                };

                setLogs(prev => [newLog, ...prev].slice(0, 8)); // Keep only last 8
            }

        }, 1000); // Updates every 1000ms (1 second)

        return () => clearInterval(interval);
    }, []);

    return { subdomains, logs, metrics };
}