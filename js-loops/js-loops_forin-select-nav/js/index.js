console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (const opt in languages) {
  console.log(languages[opt])
  const option = document.createElement("option")
  option.textContent = languages[opt]
  select.append(option)
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
document.body.append("nav")
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--



for (const key in nav){
  const link = nav[key]
  const list = document.createElement("li");
  ul.append(list)
  const linkUrl = document.createElement("a")
  linkUrl.setAttribute('href', link.href);
  linkUrl.textContent = link.text;
  list.append(linkUrl)

  console.log("Link:", link.text, "url:", link.href )

}

// --^-- write/change code here --^--
