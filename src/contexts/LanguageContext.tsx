import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.resume': 'Lebenslauf',
    'nav.references': 'Referenzen',
    'nav.downloads': 'Downloads',
    'nav.contact': 'Kontakt',
    
    // Home Page
    'home.greeting': 'Hallo, ich bin',
    'home.name': 'Zarasu Kahveci',
    'home.age': '15 Jahre',
    'home.goal': 'Zukünftiger Lehrling',
    'home.intro': 'Ich bin ein motivierter Schüler mit Leidenschaft für Technik und kreatives Problemlösen.',
    'home.overview.title': 'Über diese Website',
    'home.overview.text': 'Erfahre mehr über mich, meine Projekte und meine Motivation. Diese Portfolio-Website gibt dir einen umfassenden Einblick in meine Fähigkeiten und meinen Werdegang.',
    'home.cta.about': 'Mehr über mich',
    'home.cta.contact': 'Kontakt aufnehmen',
    
    // About Page
    'about.title': 'Über mich',
    'about.subtitle': 'Wer ich bin',
    'about.bio.title': 'Meine Geschichte',
    'about.bio.text': 'Ich besuche derzeit die 9. Klasse der Realschule Musterstadt und bin auf der Suche nach einer spannenden Lehrstelle. Meine Interessen liegen vor allem in technischen und kreativen Bereichen. Neben der Schule engagiere ich mich in verschiedenen Projekten und bin immer bereit, Neues zu lernen.',
    'about.languages.title': 'Sprachen',
    'about.languages.german': 'Deutsch (Muttersprache)',
    'about.languages.english': 'Englisch (B1)',
    'about.school.title': 'Ausbildung',
    'about.school.current': 'Realschule Musterstadt, 9. Klasse',
    'about.school.expected': 'Voraussichtlicher Abschluss: 2026',
    'about.strengths.title': 'Meine Stärken',
    'about.strength.1': 'Teamfähigkeit – Ich arbeite gerne mit anderen zusammen',
    'about.strength.2': 'Lernbereitschaft – Ich bin offen für neue Herausforderungen',
    'about.strength.3': 'Genauigkeit – Ich arbeite präzise und sorgfältig',
    'about.strength.4': 'Zuverlässigkeit – Auf mich kann man sich verlassen',
    'about.hobbies.title': 'Hobbys & Interessen',
    'about.hobby.1': 'Fußball spielen im Verein',
    'about.hobby.2': 'Programmieren und neue Technologien',
    'about.hobby.3': 'Fotografie und kreative Projekte',
    
    // Skills Page
    'skills.title': 'Meine Fähigkeiten',
    'skills.subtitle': 'Was ich kann',
    'skills.technical.title': 'Fachliche Fähigkeiten',
    'skills.technical.1': 'Grundkenntnisse HTML & CSS',
    'skills.technical.2': 'Adobe Photoshop',
    'skills.technical.3': 'Microsoft Office (Word, Excel, PowerPoint)',
    'skills.technical.4': 'Technisches Zeichnen',
    'skills.soft.title': 'Soft Skills',
    'skills.soft.1': 'Teamarbeit',
    'skills.soft.2': 'Zuverlässigkeit',
    'skills.soft.3': 'Kreativität',
    'skills.soft.4': 'Problemlösungsfähigkeit',
    'skills.soft.5': 'Zeitmanagement',
    'skills.soft.6': 'Kommunikationsfähigkeit',
    
    // Resume Page
    'resume.title': 'Lebenslauf',
    'resume.subtitle': 'Mein Werdegang',
    'resume.download.title': 'Lebenslauf herunterladen',
    'resume.download.text': 'Lade meinen vollständigen Lebenslauf als PDF herunter.',
    'resume.download.button': 'PDF herunterladen',
    'resume.contact.title': 'Kontaktinformationen',
    'resume.contact.email': 'zarasu.kahveci@example.com',
    'resume.contact.phone': '+49 123 456789',
    'resume.contact.location': 'Musterstadt, Deutschland',
    'resume.motivation.title': 'Meine Motivation',
    'resume.motivation.text': 'Ich suche eine Lehrstelle, in der ich meine technischen Fähigkeiten einbringen und weiterentwickeln kann. Besonders wichtig sind mir ein gutes Arbeitsklima, interessante Projekte und die Möglichkeit, von erfahrenen Fachkräften zu lernen. Ich bin hochmotiviert, zuverlässig und freue mich darauf, praktische Erfahrungen zu sammeln und einen wertvollen Beitrag zu Ihrem Team zu leisten.',
    'resume.timeline.title': 'Werdegang',
    'resume.timeline.2020': '2020 - 2026: Realschule Musterstadt',
    'resume.timeline.2016': '2016 - 2020: Grundschule Musterstadt',
    
    // References Page
    'references.title': 'Referenzen',
    'references.subtitle': 'Was andere über mich sagen',
    'references.intro': 'Hier finden Sie Referenzen und Empfehlungen von Lehrern und Betreuern.',
    'references.ref1.name': 'Herr Müller',
    'references.ref1.position': 'Klassenlehrer',
    'references.ref1.text': '"Zarasu ist ein sehr engagierter und zuverlässiger Schüler. Er zeigt großes Interesse an technischen Themen und arbeitet stets präzise. Ich kann ihn als Lehrling wärmstens empfehlen."',
    'references.ref2.name': 'Frau Schmidt',
    'references.ref2.position': 'Informatiklehrerin',
    'references.ref2.text': '"Zarasu hat in meinem Unterricht immer großes Interesse gezeigt und sich durch seine schnelle Auffassungsgabe ausgezeichnet. Er ist teamfähig und hilfsbereit."',
    
    // Downloads Page
    'downloads.title': 'Downloads',
    'downloads.subtitle': 'Dokumente & Zeugnisse',
    'downloads.intro': 'Hier können Sie wichtige Dokumente herunterladen:',
    'downloads.cv.title': 'Lebenslauf',
    'downloads.cv.desc': 'Vollständiger Lebenslauf als PDF',
    'downloads.cv.button': 'Lebenslauf herunterladen',
    'downloads.certificate.title': 'Schulzeugnis',
    'downloads.certificate.desc': 'Aktuelles Zeugnis (8. Klasse)',
    'downloads.certificate.button': 'Zeugnis herunterladen',
    'downloads.portfolio.title': 'Portfolio',
    'downloads.portfolio.desc': 'Sammlung meiner Projekte',
    'downloads.portfolio.button': 'Portfolio herunterladen',
    
    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Schreiben Sie mir',
    'contact.intro': 'Vielen Dank für Ihr Interesse! Ich freue mich auf Ihre Nachricht.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.form.success': 'Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden.',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.email': 'zarasu.kahveci@example.com',
    'contact.info.phone': '+49 123 456789',
    'contact.info.location': 'Musterstadt, Deutschland',
    'contact.outro': 'Vielen Dank für Ihre Zeit – ich freue mich auf Ihre Rückmeldung!',
    
    // Footer
    'footer.rights': '© 2025 Zarasu Kahveci. Alle Rechte vorbehalten.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.resume': 'Resume',
    'nav.references': 'References',
    'nav.downloads': 'Downloads',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.greeting': 'Hello, I am',
    'home.name': 'Zarasu Kahveci',
    'home.age': '15 years old',
    'home.goal': 'Future Apprentice',
    'home.intro': 'I am a motivated student with a passion for technology and creative problem-solving.',
    'home.overview.title': 'About This Website',
    'home.overview.text': 'Learn more about me, my projects, and my motivation. This portfolio website gives you a comprehensive insight into my skills and background.',
    'home.cta.about': 'More About Me',
    'home.cta.contact': 'Get in Touch',
    
    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Who I Am',
    'about.bio.title': 'My Story',
    'about.bio.text': 'I am currently in 9th grade at Realschule Musterstadt and am looking for an exciting apprenticeship. My interests lie primarily in technical and creative areas. Outside of school, I engage in various projects and am always ready to learn something new.',
    'about.languages.title': 'Languages',
    'about.languages.german': 'German (Native)',
    'about.languages.english': 'English (B1)',
    'about.school.title': 'Education',
    'about.school.current': 'Realschule Musterstadt, 9th Grade',
    'about.school.expected': 'Expected Graduation: 2026',
    'about.strengths.title': 'My Strengths',
    'about.strength.1': 'Teamwork – I enjoy working with others',
    'about.strength.2': 'Willingness to Learn – I am open to new challenges',
    'about.strength.3': 'Accuracy – I work precisely and carefully',
    'about.strength.4': 'Reliability – You can count on me',
    'about.hobbies.title': 'Hobbies & Interests',
    'about.hobby.1': 'Playing soccer in a club',
    'about.hobby.2': 'Programming and new technologies',
    'about.hobby.3': 'Photography and creative projects',
    
    // Skills Page
    'skills.title': 'My Skills',
    'skills.subtitle': 'What I Can Do',
    'skills.technical.title': 'Technical Skills',
    'skills.technical.1': 'Basic HTML & CSS knowledge',
    'skills.technical.2': 'Adobe Photoshop',
    'skills.technical.3': 'Microsoft Office (Word, Excel, PowerPoint)',
    'skills.technical.4': 'Technical Drawing',
    'skills.soft.title': 'Soft Skills',
    'skills.soft.1': 'Teamwork',
    'skills.soft.2': 'Reliability',
    'skills.soft.3': 'Creativity',
    'skills.soft.4': 'Problem-solving',
    'skills.soft.5': 'Time Management',
    'skills.soft.6': 'Communication Skills',
    
    // Resume Page
    'resume.title': 'Resume',
    'resume.subtitle': 'My Background',
    'resume.download.title': 'Download Resume',
    'resume.download.text': 'Download my complete resume as a PDF.',
    'resume.download.button': 'Download PDF',
    'resume.contact.title': 'Contact Information',
    'resume.contact.email': 'zarasu.kahveci@example.com',
    'resume.contact.phone': '+49 123 456789',
    'resume.contact.location': 'Musterstadt, Germany',
    'resume.motivation.title': 'My Motivation',
    'resume.motivation.text': 'I am looking for an apprenticeship where I can apply and develop my technical skills. A good work environment, interesting projects, and the opportunity to learn from experienced professionals are particularly important to me. I am highly motivated, reliable, and look forward to gaining practical experience and making a valuable contribution to your team.',
    'resume.timeline.title': 'Timeline',
    'resume.timeline.2020': '2020 - 2026: Realschule Musterstadt',
    'resume.timeline.2016': '2016 - 2020: Primary School Musterstadt',
    
    // References Page
    'references.title': 'References',
    'references.subtitle': 'What Others Say About Me',
    'references.intro': 'Here you will find references and recommendations from teachers and supervisors.',
    'references.ref1.name': 'Mr. Müller',
    'references.ref1.position': 'Class Teacher',
    'references.ref1.text': '"Zarasu is a very dedicated and reliable student. He shows great interest in technical topics and always works precisely. I can highly recommend him as an apprentice."',
    'references.ref2.name': 'Mrs. Schmidt',
    'references.ref2.position': 'Computer Science Teacher',
    'references.ref2.text': '"Zarasu has always shown great interest in my class and distinguished himself through his quick comprehension. He is a team player and helpful."',
    
    // Downloads Page
    'downloads.title': 'Downloads',
    'downloads.subtitle': 'Documents & Certificates',
    'downloads.intro': 'Here you can download important documents:',
    'downloads.cv.title': 'Resume',
    'downloads.cv.desc': 'Complete resume as PDF',
    'downloads.cv.button': 'Download Resume',
    'downloads.certificate.title': 'School Certificate',
    'downloads.certificate.desc': 'Current certificate (8th grade)',
    'downloads.certificate.button': 'Download Certificate',
    'downloads.portfolio.title': 'Portfolio',
    'downloads.portfolio.desc': 'Collection of my projects',
    'downloads.portfolio.button': 'Download Portfolio',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Write to Me',
    'contact.intro': 'Thank you for your interest! I look forward to your message.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Thank you for your message! I will get back to you as soon as possible.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'zarasu.kahveci@example.com',
    'contact.info.phone': '+49 123 456789',
    'contact.info.location': 'Musterstadt, Germany',
    'contact.outro': 'Thank you for your time – I look forward to hearing from you!',
    
    // Footer
    'footer.rights': '© 2025 Zarasu Kahveci. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
