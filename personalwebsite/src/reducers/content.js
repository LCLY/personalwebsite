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
                "Make use of media queries to achieve web responsive.",
            ],
        },
        fliegen: {
            headerText: "Fliegen",
            projectType: "Web application/Hackthon",
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
                "Guide teammates with what I know to save time.",
            ],
        },
        boileride: {
            tools: [
                "Bootstrap",
                "jQuery",
                "Express",
                "Java",
                "MySQL",
                "Google Maps Platform",
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
                "Guide teammates with what I know to save time.",
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
