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
    id: "1", // ID angepasst wie gewünscht
    title: "YOU&ME – High-End Realtime Messenger",
    shortDescription: "Fullstack-Kommunikationsplattform mit KI-Integration, Realtime-Messaging und Social-Features.",
    fullDescription: "YOU&ME ist ein hochkomplexes Fullstack-Projekt, das die Grenzen einer klassischen Chat-App überschreitet. Kernstück ist die Echtzeit-Kommunikation via Pusher, ergänzt durch ein intelligentes KI-System. Nutzer können nicht nur in Echtzeit chatten, sondern Profile mit Musik (MP3) und Bildern personalisieren, die über Cloudinary gehostet werden. Das Projekt umfasst ein vollständiges Social-Ökosystem: Von der Freundschaftsanfrage über eine globale Suche bis hin zu einem Newsfeed, in dem Beiträge mit Bildern, Texten und YouTube-Links gepostet und kommentiert werden können. Ein mächtiges Admin-Dashboard liefert dem Betreiber volle Kontrolle über Nutzerzahlen und Medien-Assets, während technische Features wie Passwort-Hashing und ein geschütztes Admin-Panel für maximale Sicherheit sorgen.",
    image: "/YOU&ME.png", // Pfad auf deine lokale Datei angepasst
    year: "2026",
    projectType: "Fullstack Application",
    tech: [
      "Next.js", 
      "TypeScript", 
      "Tailwind CSS", 
      "Pusher (Realtime)", 
      "Prisma", 
      "MongoDB", 
      "Cloudinary", 
      "OpenAI API" 
    ],
    liveUrl: "https://you-and-me-chat.de",
    githubUrl: "https://github.com/dein-user/you-and-me"
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