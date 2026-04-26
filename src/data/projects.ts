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
    title: "Lotto Vision",
    shortDescription: "High-End Zufalls-Algorithmus mit personalisierter Logik und Vision-Design.",
    fullDescription: "Lotto Vision ist eine hochmoderne Web-Applikation, die mathematische Präzision mit immersivem UI-Design verbindet. Kernstück ist ein deterministischer 'Glücks-Algorithmus', der basierend auf Nutzer-Inputs (Name) personalisierte Zahlenfolgen generiert. Die Anwendung nutzt modernste Technologien wie React und Tailwind CSS v4 für ein ultraschnelles Interface. Besonderes Augenmerk wurde auf das 'Vision Purple' Design gelegt, das durch Glasmorphismus-Effekte, animierte Ambient-Glow-Hintergründe und flüssige Motion-Sequenzen via Framer Motion ein echtes Premium-Gefühl vermittelt. Ein persistenter Verlauf speichert Ziehungen inklusive präzisem Zeitstempel und bietet Management-Funktionen wie das selektive Leeren der Datenbank-Historie.",
    image: "/LottoVision.png",
    year: "2026",
    projectType: "Interactive Web App",
    tech: [
      "React", 
      "TypeScript", 
      "Tailwind CSS v4",  
      "Lucide Icons" 
    ],
    liveUrl: "https://lotto-vision.de", // Hier deine URL anpassen
    githubUrl: "https://github.com/dein-user/lotto-vision"
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