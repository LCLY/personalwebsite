import fliegenImg from "../images/fliegen.PNG";
import personalWebImg from "../images/personalwebsite.PNG";
import boilerideImg from "../images/boileride.PNG";
import libGDX from "../images/libgdx.png";
import hololens from "../images/hololens.jpg";
import carnival from "../images/carnival.png";
import escaperoom from "../images/escaperoom.png";
import card from "../images/card.jpg";
import virtualTour from "../images/virtualtour.PNG";
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
            pageUrl: "https://lcly.github.io/boilerideweb",
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
        //virtual tour
        {
            imgUrl: virtualTour,
            imgAlt: "Apt Virtual Tour",
            headerText: "Apt Virtual Tour",
            projectType: "Web application",
            desc:
                "A virtual tour for apartment viewing to let customers have a better understanding of the interior of the apartment.",
            githubLink: "https://github.com/LCLY/VirtualTourApt",
            pageUrl: "https://lcly.github.io/VirtualTourApt/",
            challenges: [
                "Recreating a website with similar layout.",
                "Creating transition effect from one scene to another scene in Unity",
                "Make use of 360 image and a custom shader to create 360 view effect",
            ],
            lessons: [
                "Require a backend since with only frontend javascript can't directly change the content of the Unity WebGL.",
                "How to add chart/graph onto a website",
                "Change content dynamically using jQuery",
                "There's another way of doing this without Unity but requires more time to execute",
                "For transitioning, add a filter in front of the camera and change the opacity upon click in Unity",
            ],
            tools: [
                "HTML",
                "CSS",
                "JS",
                "JQuery",
                "Bootstrap",
                "WebGL",
                "Unity",
            ],
        },
        //hololens
        {
            imgUrl: hololens,
            imgAlt: "Hololens",
            headerText: "Research Assistant",
            projectType: "MR application",
            desc:
                "A mixed reality application utilizing Microsoft Hololens to detect cracked walls of a building.",
            githubLink: "https://github.com/LCLY/MRHololens",
            pageUrl: "https://lcly.github.io/MRHololens/",
            challenges: [
                "Learn a totally different and new technology.",
                "Understand the nature of Augmented Reality.",
                "Heavily involves self-learning due to the technology involved.",
                "Work with different teams such as civil engineering team",
            ],
            lessons: [
                "The importance of documentations for self reminders and future students reference.",
                "Doing research before building something is really important to prevent reinventing the wheel",
                "Weekly meetings are important to make sure that everything is on track.",
            ],
            tools: [
                "Unity",
                "C#",
                "Microsoft Azure",
                "Microsoft Hololens",
                "Vuforia",
                "Python",
                "Mixed Reality",
            ],
        },
        //AR card
        {
            imgUrl: card,
            imgAlt: "CardAR",
            headerText: "Business Card AR",
            projectType: "AR application",
            desc:
                "Implemented Augmented Reality on business card as a target to generate interactive 3D model",
            githubLink: "https://github.com/LCLY/BusinessCardAR",
            pageUrl: "https://lcly.github.io/BusinessCardAR/",
            challenges: [
                "Revise on how to use Unity program application",
                "Made a website to show more info about the app",
                "3D model's rotations and transformations are unusual due to AR implementation.",
            ],
            lessons: [
                "Brainstorming on how to make a simple, interactive and interesting AR application using a business card.",
                "Add image targets to Vuforia's database and separate them in the same game scene.",
                "Made changes to Vuforia's library AR code to add instructions, set it to disappear when image targets are detected.",
                "Adding video element to html and making it responsive.",
            ],
            tools: [
                "Unity",
                "Unity Asset Store",
                "C#",
                "Android device",
                "Paint 3D",
                "Vuforia",
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
            githubLink: "https://github.com/LCLY/Escape-Room-VR",
            pageUrl: "https://www.youtube.com/embed/c8QX4yS26Pc",
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
            githubLink: "https://github.com/LCLY/Carnival-VR",
            pageUrl: "https://www.youtube.com/embed/kZ6j14Q1mc8",
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
