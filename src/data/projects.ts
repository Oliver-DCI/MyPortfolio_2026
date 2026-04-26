export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  year: string;          // Neu hinzugefügt
  projectType: string;   // Neu hinzugefügt
  tech: string[];
  liveUrl?: string;   
  githubUrl?: string; 
}

export const projects: Project[] = [
  {
    id: "1",
    title: "YOU&ME Live-Chat",
    shortDescription: "Fullstack Messenger mit Realtime-Features.",
    fullDescription: "Ein moderner Messenger mit Fokus auf Individualisierung. Features: Freundes-System, Online-Statusanzeige und Profil-Personalisierung durch Datei-Uploads (MP3/Bilder).",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1200&auto=format&fit=crop", // Messenger Theme
    year: "2026",
    projectType: "Frontend Application",
    tech: ["Next.js", "PostgreSQL", "Socket.io", "TypeScript"],
    liveUrl: "https://you-and-me-chat.de",
    githubUrl: "https://github.com/dein-user/live-chat"
  },
  {
    id: "2",
    title: "Streaming Cloud",
    shortDescription: "Cinema-Interface mit API-Anbindung & Dark Mode.",
    fullDescription: "Eine interaktive Movie-Plattform, die Echtzeit-Daten der OMDb API nutzt. Das Projekt besticht durch ein immersives Modal-System inklusive YouTube-Trailer-Integration, ein persistentes Favoriten-System via LocalStorage und einen nahtlosen Wechsel zwischen Dark- und Light-Mode.",
    image: "/StreamingCloud.png",
    year: "2025",
    projectType: "Frontend Application",
    tech: ["JavaScript", "OMDb API", "REST", "SCSS"],
    liveUrl: "https://deine-streaming-cloud.de", 
    githubUrl: "https://github.com/dein-user/streaming-cloud"
  },
  {
    id: "3",
    title: "QA-Automation Suite",
    shortDescription: "End-to-End Test Framework.",
    fullDescription: "Ein automatisiertes Test-Framework, das meine 12-jährige Erfahrung im Quality Engineering bündelt. Fokus auf Stabilität und Performance-Metriken.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop", // Code/Testing Theme
    year: "2026",
    projectType: "Frontend Application",
    tech: ["Playwright", "Node.js", "GitHub Actions"],
    liveUrl: "#", 
    githubUrl: "#"
  },
  {
    id: "4",
    title: "VisionDesign Assistant",
    shortDescription: "KI-Agent für Portfolio-Optimierung.",
    fullDescription: "Ein KI-gestütztes Tool zur Analyse von UI-Trends, das Entwicklern hilft, Design-Standards von 2026 einzuhalten.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop", // AI Theme
    year: "2026",
    projectType: "Frontend Application",
    tech: ["OpenAI", "React", "Framer Motion"],
    liveUrl: "#", 
    githubUrl: "#"
  },
];