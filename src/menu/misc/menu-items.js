import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const menuAdmin = [
  {
    icon: faHome,
    title: "Home",
    url: "url1",
    mainMenu: false,
  },
  {
    icon: faUser,
    title: "Users",
    url: "url2",
    mainMenu: true,
  },
  {
    icon: faEnvelope,
    title: "Form",
    url: "url3",
    mainMenu: true,
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
    title: "Forms",
    url: "url3",
    mainMenu: true
  },
];
