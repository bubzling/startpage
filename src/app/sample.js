import { AppModel, LinkModel } from "../models/links.model";

const list = [
  {
    categoryLabel: "School",
    urlList: [
      { text: "Mail", url: "email.itd.uts.edu.au/email/" },
      { text: "BlackBoard", url: "online.uts.edu.au/webapps/login/" },
      { text: "Canvas", url: "canvas.uts.edu.au/" },
      { text: "Github", url: "github.com/" },
    ],
  },
  {
    categoryLabel: "Chill",
    urlList: [
      { text: "youtube", url: "www.youtube.com/" },
      { text: "reddit", url: "reddit.com/" },
      { text: "twitch", url: "www.twitch.tv/" },
      { text: "primetv", url: "primevideo.com/" },
    ],
  },
];

let classList = new AppModel();
classList.addCategory('Egg');

console.log("hello")
console.log(classList.categories)

/* I need a way to cast json into class objects */

// test addLink
// test addLink from plain

// test updateLink
// test updateLink from plain

// test deleteLink
// test deleteLink from plain

export default classList;
