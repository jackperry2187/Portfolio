export type project = {
    name: string,
    URL: string,
    description: string,
    skills: string[]
}

export const projectStorage: project[] = [
    {
        name: 'Assignment Portal',
        URL: 'https://lifeskills.software/',
        description: 'An extension of the Life Skills Suite which allows teachers and students to create and take assignments. Constructed across two semesters during CS423 and CS424: Senior Design I and II.',
        skills: ['REACT', 'Redux', 'React Router', 'TypeScript', 'Express', 'MongoDB', 'Mongoose', 'MaterialUI v4', 'Node', 'JavaScript', 'HTML5', 'CSS']
    },
    {
        name: 'DAWN',
        URL: 'https://www.mentalhealth-dawn.org/',
        description: 'The Depression Anxiety Wellness Network (DAWN) was created to help students and adults who suffer from mental illnesses. Since then, it has grown to be a helpful resource available to everybody. With many different features, DAWN is a place where anybody can go to help themselves cope, breathe, or smile when life gets stressful.',
        skills: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap 5', 'JQuery', 'Node', 'Handlebars', 'Express', 'BCrypt', 'Firebase', 'Redis', 'Google Analytics']
    },
    {
        name: 'BoardHub',
        URL: 'https://github.com/roccopolimen/board-hub',
        description: 'Final group project website for CS-546: Web Programming I.',
        skills: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap 5', 'JQuery', 'Node', 'Handlebars', 'Express', 'BCrypt', 'MongoDB', 'XSS', 'Google Calendar']
    },
    {
        name: '1D-Chess',
        URL: 'https://jackperry2187.github.io/1D-Chess/',
        description: 'A REACT website to visualize one dimensional chess with the use of useEffect and useState.',
        skills: ['Node', 'REACT', 'Bootstrap 5', 'HTML5', 'CSS', 'JavaScript', 'GitHub Pages']
    },
    {
        name: 'Trip Planner',
        URL: 'https://github.com/jackperry2187/Trip_Planner',
        description: 'Final project website for CS-545: Human Computer Interaction.',
        skills: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap 5', 'Node', 'MongoDB', 'Handlebars', 'Express', 'BCrypt']
    },
    {
        name: 'VR Barnegat Bay Simulation',
        URL: 'https://bluehawk.monmouth.edu/~barnegatbay/finalwebsite.html',
        description: '2018 Monmouth University Summer Research Project.',
        skills: ['C#', 'Unity', 'Virtual Reality']
    },
    {
        name: 'Portfolio',
        URL: 'https://github.com/jackperry2187/Portfolio',
        description: 'A website showcasing my resume, projects, experience, and classes.',
        skills: ['REACT', 'React Router', 'TypeScript', 'Node', 'Firebase', 'Google Analytics', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap 5']
    },
    {
        name: 'BinaryVisualizer',
        URL: 'https://github.com/jackperry2187/BinaryVisualizer',
        description: 'A website to visualize binary and decimal conversions.',
        skills: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap 5', 'JQuery', 'Node', 'Handlebars', 'Express']
    }
]