export const experience: experienceData[] = [
  {
    position: 'Frontend-Entwickler',
    company: 'Deutsche Gesellschaft für Cybersicherheit',
    startDate: 'April 2021',
    endDate: 'Heute',
    technologies: [
      { name: 'Vue.js', imageLink: 'icons/Vue.svg' },
      { name: 'TypeScript', imageLink: 'icons/Vue.svg' }
    ],
    link: 'https://dgc.org/',
    description:
      'Ich war maßgeblich für das Frontend einer aufregenden Webapplikation zuständig. Mein Verantwortungsbereich umfasste das Erstellen von ansprechenden UX/UI-Inhalten in Figma sowie deren Implementierung im Frontend. Zusätzlich habe ich beeindruckende 3D-Renderings und Modelle entwickelt, um die Außendarstellung der DGC zu verbessern.'
  }
]

export type experienceData = {
  position: string
  company: string
  startDate: string
  endDate: string
  technologies: technology[]
  link: string
  description: string
}

export type technology = {
  name: string
  imageLink: string
}
