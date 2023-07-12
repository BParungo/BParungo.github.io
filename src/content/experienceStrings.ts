import type { technology } from '@/content/skillsDescription'
import { skillPool } from '@/content/skillsDescription'
export const experience: experienceData[] = [
  {
    position: 'Frontend-Entwickler',
    company: 'Deutsche Gesellschaft für Cybersicherheit',
    startDate: 'Apr. 2021',
    endDate: 'Heute',
    technologies: [
      skillPool.vue,
      skillPool.typescript,
      skillPool.sass,
      skillPool.figma,
      skillPool.javascript,
      skillPool.blender,
      skillPool.d3
    ],
    link: 'https://dgc.org/',
    description:
      'Ich war maßgeblich für das Frontend einer Vulnerability-Monitoring-Webapplikation zuständig. Mein Verantwortungsbereich umfasste das Erstellen von ansprechenden UX/UI-Inhalten in Figma sowie deren Implementierung im Frontend. Zusätzlich habe ich beeindruckende 3D-Renderings und Modelle entwickelt, um die Außendarstellung der DGC zu verbessern.'
  },
  {
    position: 'Specialist Reporting',
    company: 'myneva daarwin',
    startDate: 'Jul. 2020',
    endDate: 'Mär. 2021',
    technologies: [skillPool.activeReports, skillPool.csharp],
    link: 'https://www.myneva.eu/de-de/daarwin',
    description: ''
  },
  {
    position: 'Bachelor of Science - Medieninformatik',
    company: 'Hochschule Flensburg',
    link: 'https://hs-flensburg.de/',
    startDate: 'Sep. 2016',
    endDate: 'Jan. 2022',
    technologies: [
      skillPool.adobeIllustrator,
      skillPool.adobePhotoshop,
      skillPool.blender,
      skillPool.css,
      skillPool.csharp,
      skillPool.java,
      skillPool.html,
      skillPool.unity,
      skillPool.nodeJs
    ]
  },
  {
    position: 'Fachhochschulreife',
    company: 'Abendgymnasium Flensburg',
    link: 'https://www.abendgymnasium-flensburg.org/',
    startDate: 'Sep. 2014',
    endDate: '09. 2016'
  },
  {
    position: 'Werkstudent Verkauf',
    company: 'Möbel ROLLER Flensburg',
    link: 'https://www.roller.de/',
    startDate: '05. 2015',
    endDate: '09. 2019'
  },
  {
    position: 'Verkäufer',
    company: 'J. A. Woll-Handels GmbH ',
    link: 'https://www.jawoll.de/',
    startDate: '06. 2012',
    endDate: '08. 2014'
  },
  {
    position: 'Ausbildung zum Kaufmann im Einzelhandel',
    company: 'OBI Group Holding GmbH in Hamburg',
    link: 'https://www.obi.de/',
    startDate: '08. 2010',
    endDate: '08. 2011'
  }
]

export type experienceData = {
  position: string
  company: string
  startDate: string
  endDate: string
  technologies?: technology[]
  link?: string
  description?: string
}
