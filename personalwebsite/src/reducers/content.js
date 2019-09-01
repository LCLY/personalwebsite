import fliegenImg from "../../images/fliegen.PNG";
import personalWebImg from "../../images/personalwebsite.PNG";
import boilerideImg from "../../images/boileride.PNG";
import libGDX from "../../images/libgdx.png";
import hololens from "../../images/hololens.jpg";
import carnival from "../../images/carnival.png";
import escaperoom from "../../images/escaperoom.png";
//initial states
const initialState = {
    test: {
        imgUrl: [
            personalWebImg,
            boilerideImg,
            hololens,
            fliegenImg,
            libGDX,
            escaperoom,
            carnival,
        ],
        imgAlt: [
            "Personal Website",
            "Boileride",
            "Hololens",
            "Fliegen",
            "Dungeon Coder",
            "Escape room",
            "Carnival",
        ],
        headerText: [
            "Portfolio",
            "Boileride",
            "Research Assistant",
            "Fliegen",
            "Dungeon Coder",
            "Escape Room VR",
            "Carnival VR",
        ],
        projectType: [
            //portfolio
            "Web application",
            //boileride
            "Web application",
            //hololens
            "AR application",
            //fliegen
            "Web application/Hackathon",
            //dungeoncoder
            "Java application",
            //escaperoom
            "VR application",
            //carnival
            "VR application",
        ],
        desc: [
            //portfolio
            "Portfolio website to demonstrate my skill sets and let people get to discover more about me",
            ,
            //Boileride
            "Ride sharing web application that allows users to list, search and reserve rides around Purdue University.",
            ,
            //hololens
            "A mixed reality application utilizing Microsoft Hololens Augmented reality to detect cracked walls",
            ,
            //fliegen
            "A mock web application designed for students and recruiters/professionals to connect more effectively",
            ,
            //dungeoncoder
            "A fun and interactive game to help students learn the fundamentals of programming with dashboards for teachers to track students' progress.",
            ,
            //escaperoom
            "Virtual Reality scary theme escape room that requires player to solve puzzles, obtain key and escape the room",
            ,
            //carnival
            "Virtual reality carnival that consists of multiple mini games, allows player to gain points and exchange them for gifts.",
        ],
        linktoGithub: [
            //portfolio
            "https://github.com/LCLY/personalwebsite",
            //boileride
            "https://github.com/ryanteo96/Boileride",
            //hololens
            "https://github.com/LCLY/ARMicrosoftHololens",
            //fliegen
            "https://github.com/LCLY/boilermake2018",
            //dungeoncoder
            "https://github.com/LCLY/dungeon-coder/",
            //escaperoom
            "https://github.com/LCLY",
            //carnival
            "https://github.com/LCLY",
        ],
        pageUrl: [
            //portfolio
            "https://lcly.github.io/personalwebsite/",
            //boileride
            "https://github.com/ryanteo96/Boileride",
            //hololens
            "https://github.com/LCLY/ARMicrosoftHololens",
            //fliegen
            "http://fliegen.lcly1996.com/signIn",
            //dungeoncoder
            "https://github.com/LCLY/dungeon-coder/",
            //escaperoom
            "https://www.youtube.com/embed/c8QX4yS26Pc",
            //carnival
            "https://www.youtube.com/embed/kZ6j14Q1mc8",
        ],
        challenges: [
            // portfolio
            [
                "Integrating external libraries and utilize them appropriately.",
                "Making the application web responsive",
            ],
            // boileride
            [
                "Write detail project documentations such as product backlog and software testing.",
                "Work with backend team to build the application",
                "Understand black box, incremental, high order and regression testing ",
            ],
            //hololens
            [
                "Learn a totally different and new technology.",
                "Understand the nature of Augmented Reality.",
                "Heavily involves self-learning due to the technology involved.",
                "Work with different teams such as civil engineering team",
            ],
            //fliegen
            [
                "Work under pressure, deliver within 36 hours.",
                "Collaborate closely with the design team",
                "Work with team members that were new to web technologies",
            ],
            //dungeoncoder
            [
                "Numerous unpredicted and hard to catch bugs.",
                "Learn how to do sprite animations",
                "Sending data back and forth from the game to the database",
                "Unfamiliar with GitHub and libGDX game development framework.",
            ],
            //escaperoom
            [
                "Configuring SteamVR in the project and getting use to C# scripting .",
                "Usage of lightings and audios to create scary and creepy atmosphere.",
                "Figure out different types of physical interactions and sequential puzzles.",
            ],
            //carnival
            [
                "Transition from one game scene to another game scene and add a loading screen.",
                "Implement point based and time based game mechanics.",
                "Implement bow/arrow and basketball mechanics",
            ],
        ],
        lessons: [
            //portfolio
            [
                "Read the document of the libraries thoroughly multiple times.",
                "Note down the problems that need to be solved.",
                "Make use of media queries to achieve mobile and web responsive.",
                "Create dummy component that can be reused as much as possible",
            ],
            //boileride
            [
                "Plan discussion topics ahead before having a meeting.",
                "Communicate with team leader/team members on technical or other issues.",
            ],
            //hololens
            [
                "The importance of documentations for self reminders and future students reference.",
                "Do research is really important to prevent reinventing the wheel",
                "Weekly meetings are important to make sure that everything is on track.",
            ],
            //fliegen
            [
                "Allocate more time for more important tasks.",
                "Distribute tasks among team members",
                "Communicate with teammates from time to time.",
                "Guide teammates with what I know to increase efficiency.",
            ],

            //dungeoncoder
            [
                "Learn from teammates and watch a lot of tutorials online.",
                "Write multiple test cases and debug messages at critical parts",
                "Free memory every time when something is not used to prevent memory leak",
            ],
            //escaperoom
            [
                "Clear and concise instructions for better in-game experience.",
                "Triggering animations and revealing clues based on player's actions",
                "Accessing other scripts' components and variables.",
                "Creating sparkles using particle effects",
            ],
            //carnival
            [
                "Refrain from placing too many light sources on moving objects to avoid FPS performance issues.",
                "Use blender to create holes in 3D planes",
                "Customizing the gravity on objects to create gravity simulator",
            ],
        ],
        tools: [
            //portfolio
            [
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
            //boileride
            [
                "Bootstrap",
                "jQuery",
                "Express",
                "Java",
                "MySQL",
                "Google Maps Platform",
                "Agile/Scrum",
            ],
            //hololens
            [
                "Unity",
                "C#",
                "Microsoft Azure",
                "Microsoft Hololens",
                "Vuforia",
                "Python",
                "Augmented Reality",
            ],
            //fliegen
            [
                "Sqlite3",
                "Heroku",
                "Bootstrap",
                "jQuery",
                "Express",
                "HTML",
                "CSS",
                "JS",
            ],
            //dungeoncoder
            ["Java", "libGDX", "MySQL", "AWS", "HTML", "JS", "CSS", "PHP"],
            //escaperoom
            ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
            //carnival
            ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
        ],
    },
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
                "A mixed reality application utilizing Microsoft Hololens Augmented reality to detect cracked walls",
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
                "Heavily involves self-learning due to the technology involved.",
                "Work with different teams such as civil engineering team",
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
                "Ride sharing web application that allows users to list, search and reserve rides around Purdue University.",
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
        },
        escaperoom: {
            headerText: "Escape Room VR",
            projectType: "VR application",
            desc:
                "Virtual Reality scary theme escape room that requires player to solve puzzles, obtain key and escape the room",
            linktoGithub: "https://github.com/LCLY/dungeon-coder/",
            tools: ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
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
        },
        carnival: {
            headerText: "Carnival VR",
            projectType: "VR application",
            desc:
                "Virtual reality carnival that consists of multiple mini games, allows player to gain points and exchange them for gifts.",
            linktoGithub: "https://github.com/LCLY/dungeon-coder/",
            tools: ["Virtual Reality", "Unity", "C#", "SteamVR", "Oculus Rift"],
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
