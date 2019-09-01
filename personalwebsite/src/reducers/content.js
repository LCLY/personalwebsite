import fliegenImg from "../images/fliegen.PNG";
import personalWebImg from "../images/personalwebsite.PNG";
import boilerideImg from "../images/boileride.PNG";
import libGDX from "../images/libgdx.png";
import hololens from "../images/hololens.jpg";
import carnival from "../images/carnival.png";
import escaperoom from "../images/escaperoom.png";
//initial states

const initialState = {
    project: [
        //personal web
        {
            imgUrl: personalWebImg,
            imgAlt: "Personal Website",
            headerText: "Portfolio",
            projectType: "Web application",
            desc:
                "Portfolio website to demonstrate my skill sets and let people get to discover more about me",
            githubLink: "https://github.com/LCLY/personalwebsite",
            pageUrl: "https://lcly.github.io/personalwebsite/",
            challenges: [
                "Integrating external libraries and utilize them appropriately.",
                "Making the application web responsive",
            ],
            lessons: [
                "Read the document of the libraries thoroughly multiple times.",
                "Note down the problems that need to be solved.",
                "Make use of media queries to achieve mobile and web responsive.",
                "Create dummy component that can be reused as much as possible",
            ],
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
        },
        //boileride
        {
            imgUrl: boilerideImg,
            imgAlt: "Boileride",
            headerText: "Boileride",
            projectType: "Web application",
            desc:
                "Ride sharing web application that allows users to list, search and reserve rides around Purdue University.",
            githubLink: "https://github.com/ryanteo96/Boileride",
            pageUrl: "https://github.com/ryanteo96/Boileride",
            challenges: [
                "Write detail project documentations such as product backlog and software testing.",
                "Work with backend team to build the application",
                "Understand black box, incremental, high order and regression testing ",
            ],
            lessons: [
                "Plan discussion topics ahead before having a meeting.",
                "Communicate with team leader/team members on technical or other issues.",
            ],
            tools: [
                "Bootstrap",
                "jQuery",
                "Express",
                "Java",
                "MySQL",
                "Google Maps Platform",
                "Agile/Scrum",
            ],
        },
        //hololens
        {
            imgUrl: hololens,
            imgAlt: "Hololens",
            headerText: "Research Assistant",
            projectType: "MR application",
            desc:
                "A mixed reality application utilizing Microsoft Hololens Augmented reality to detect cracked walls.",
            githubLink: "https://github.com/LCLY/ARMicrosoftHololens",
            pageUrl: "https://github.com/LCLY/ARMicrosoftHololens",
            challenges: [
                "Learn a totally different and new technology.",
                "Understand the nature of Augmented Reality.",
                "Heavily involves self-learning due to the technology involved.",
                "Work with different teams such as civil engineering team",
            ],
            lessons: [
                "The importance of documentations for self reminders and future students reference.",
                "Do research is really important to prevent reinventing the wheel",
                "Weekly meetings are important to make sure that everything is on track.",
            ],
            tools: [
                "Unity",
                "C#",
                "Microsoft Azure",
                "Microsoft Hololens",
                "Vuforia",
                "Python",
                "Augmented Reality",
            ],
        },
        //fliegen
        {
            imgUrl: fliegenImg,
            imgAlt: "Fliegen",
            headerText: "Fliegen",
            projectType: "Web application",
            desc:
                "A mock web application designed for students and recruiters/professionals to connect more effectively.",
            githubLink: "https://github.com/LCLY/boilermake2018",
            pageUrl: "http://fliegen.lcly1996.com/signIn",
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
        },
        //dungeon coder
        {
            imgUrl: libGDX,
            imgAlt: "Dungeon Coder",
            headerText: "Dungeon coder",
            projectType: "Java application",
            desc:
                "A fun and interactive game to help students learn the fundamentals of programming with dashboards for teachers to track students' progress.",
            githubLink: "https://github.com/LCLY/dungeon-coder/",
            pageUrl: "https://github.com/LCLY/dungeon-coder/",
            challenges: [
                "Numerous unpredicted and hard to catch bugs.",
                "Learn how to do sprite animations",
                "Sending data back and forth from the game to the database",
                "Unfamiliar with GitHub and libGDX game development framework.",
            ],
            lessons: [
                "Learn from teammates and watch a lot of tutorials online.",
                "Write multiple test cases and debug messages at critical parts",
                "Free memory every time when something is not used to prevent memory leak",
            ],
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
        },
        //escape room
        {
            imgUrl: escaperoom,
            imgAlt: "Escape room",
            headerText: "Escape Room VR",
            projectType: "VR application",
            desc:
                "Virtual Reality scary theme escape room that requires player to solve puzzles, obtain key and escape the room",
            githubLink: "https://github.com/LCLY",
            pageUrl: "https://github.com/LCLY",
            challenges: [
                "Configuring SteamVR in the project and getting use to C# scripting .",
                "Usage of lightings and audios to create scary and creepy atmosphere.",
                "Figure out different types of physical interactions and sequential puzzles.",
            ],
            lessons: [
                "Clear and concise instructions for better in-game experience.",
                "Triggering animations and revealing clues based on player's actions",
                "Accessing other scripts' components and variables.",
                "Creating sparkles using particle effects",
            ],
            tools: ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
        },
        //carnival
        {
            imgUrl: carnival,
            imgAlt: "Carnival",
            headerText: "Carnival VR",
            projectType: "VR application",
            desc:
                "Virtual reality carnival that consists of multiple mini games, allows player to gain points and exchange them for gifts.",
            githubLink: "https://github.com/LCLY",
            pageUrl: "https://github.com/LCLY",
            challenges: [
                "Transition from one game scene to another game scene and add a loading screen.",
                "Implement point based and time based game mechanics.",
                "Implement bow/arrow and basketball mechanics",
            ],
            lessons: [
                "Refrain from placing too many light sources on moving objects to avoid FPS performance issues.",
                "Use blender to create holes in 3D planes",
                "Customizing the gravity on objects to create gravity simulator",
            ],
            tools: ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
        },
    ],
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
