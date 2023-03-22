import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const menuAdmin = [
  {
    icon: faHome,
    title: "Home",
    url: "/",
    mainMenu: false,
  },
  {
    icon: faUser,
    title: "Users",
    url: "/users",
    mainMenu: true,
    functions:[
      "Create an User",
      "Get a List of Users",
      "Edit an User Information",
      "Get an User Information"
    ]
  },
  {
    icon: faEnvelope,
    title: "Forms",
    url: "/forms",
    mainMenu: true,
    functions:[
      "Create a Question",
      "List of Questions",
      "Delte a Questions",
      "Edit a Question",
      "List of Answers of a Question",
    ]
  },
];

export const menuStudent = [
  {
    icon: faHome,
    title: "Home",
    url: "url1",
    mainMenu: false,
  },
  {
    icon: faUser,
    title: "Me",
    url: "url2",
    mainMenu: false,
  },
  {
    icon: faEnvelope,
    title: "Form",
    url: "url3",
    mainMenu: true,
    functions:[
      "Answare the formulary",
    ]
  },
];
