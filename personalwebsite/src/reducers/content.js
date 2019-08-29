//initial states
const initialState = {
    //initial value/bool values
    project: {
        personalweb: {
            headerText: "Portfolio",
            projectType: "Web application",
            desc:
                "Portfolio website to demonstrate my skill sets and let people get to discover more about me",
            linktoGithub: "https://github.com/LCLY/personalwebsite",
            tools: [
                "React",
                "Redux",
                "Semantic UI",
                "Typed.js",
                "Particle.js",
                "HTML",
                "SCSS",
                "CSS",
                "JS",
            ],
            challenges: [
                "Integrating external libraries and utilize them appropriately.",
                "Making the application web responsive",
            ],
            lessons: [
                "Read the document of the libraries thoroughly multiple times.",
                "Note down the problems that need to be solved.",
                "Make use of media queries to achieve mobile and web responsive.",
            ],
        },
        fliegen: {
            headerText: "Fliegen",
            projectType: "Web application/Hackathon",
            desc:
                "A mock web application designed for students and recruiters/professionals to connect more effectively",
            linktoGithub: "https://github.com/LCLY/boilermake2018",
            tools: [
                "Sqlite3",
                "Heroku",
                "Bootstrap",
                "jQuery",
                "Express",
                "HTML",
                "CSS",
                "JS",
            ],
            challenges: [
                "Work under pressure, deliver within 36 hours.",
                "Collaborate closely with the design team",
                "Work with team members that were new to web technologies",
            ],
            lessons: [
                "Allocate more time for more important tasks.",
                "Distribute tasks among team members",
                "Communicate with teammates from time to time.",
                "Guide teammates with what I know to increase efficiency.",
            ],
        },
        hololens: {
            headerText: "Research Assistant",
            projectType: "AR application",
            desc:
                "An application utilizing Microsoft Hololens Augmented reality to detect cracked walls",
            linktoGithub: "https://github.com/LCLY/ARMicrosoftHololens",
            tools: [
                "Unity",
                "C#",
                "Microsoft Azure",
                "Microsoft Hololens",
                "Vuforia",
                "Python",
                "Augmented Reality",
            ],
            challenges: [
                "Learn a totally different and new technology.",
                "Understand the nature of Augmented Reality.",
                "A lot of self-learning due to the technology involved.",
                "Work with civil engineering team",
            ],
            lessons: [
                "The importance of documentations for self reminders and future students reference.",
                "Do research is really important to prevent reinventing the wheel",
                "Weekly meetings are important to make sure that everything is on track.",
            ],
        },
        boileride: {
            headerText: "Boileride",
            projectType: "Web application",
            desc:
                "A ride sharing web application that allows users to list, search and reserve rides around Purdue University.",
            linktoGithub: "https://github.com/ryanteo96/Boileride",
            tools: [
                "Bootstrap",
                "jQuery",
                "Express",
                "Java",
                "MySQL",
                "Google Maps Platform",
                "Agile/Scrum",
            ],
            challenges: [
                "Write detail project documentations such as product backlog and software testing.",
                "Work with backend team to build the application",
                "Understand black box, incremental, high order and regression testing ",
            ],
            lessons: [
                "Plan discussion topics ahead before having a meeting.",
                "Communicate with team leader/team members on technical or other issues.",
            ],
        },
        dungeoncoder: {
            headerText: "Dungeon Coder",
            projectType: "Java application",
            desc:
                "A fun and interactive game to help students learn the fundamentals of programming with dashboards for teachers to track students' progress.",
            linktoGithub: "https://github.com/LCLY/dungeon-coder/",
            tools: [
                "Java",
                "libGDX",
                "MySQL",
                "AWS",
                "HTML",
                "JS",
                "CSS",
                "PHP",
            ],
            challenges: [
                "A lot of unpredicted bugs that are hard to catch.",
                "Learn how to do sprite animations",
                "Sending data back and forth from the game to the database",
                "Unfamiliar with GitHub and libGDX game development framework.",
            ],
            lessons: [
                "Learn from teammates and watch a lot of tutorials online.",
                "Write multiple test cases and debug messages at critical parts",
                "Free memory every time when something is not used to prevent memory leak",
            ],
        },
        vr: {
            headerText: "Dungeon Coder",
            projectType: "VR application",
            desc:
                "A fun and interactive game to help students learn the fundamentals of programming with dashboards for teachers to track students' progress.",
            linktoGithub: "https://github.com/LCLY/dungeon-coder/",
            tools: [
                "Java",
                "libGDX",
                "MySQL",
                "AWS",
                "HTML",
                "JS",
                "CSS",
                "PHP",
            ],
            challenges: [
                "A lot of unpredicted bugs that are hard to catch.",
                "Learn how to do sprite animations",
                "Sending data back and forth from the game to the database",
                "Unfamiliar with GitHub and libGDX game development framework.",
            ],
            lessons: [
                "Learn from teammates and watch a lot of tutorials online.",
                "Write multiple test cases and debug messages at critical parts",
                "Free memory every time when something is not used to prevent memory leak",
            ],
        },
    },
};
//reducer function
export default function(state = initialState, action) {
    //destructure the action
    const { type, payload } = action;

    //switch case
    switch (type) {
        default:
            return state;
    }
}
