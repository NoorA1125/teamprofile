const path = require("path");
const fs = require("fs");

const htmlDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(employees.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
  html.push(employees.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)));
  html.push(employees.filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)));

  return renderMain(html.join(""));

};

//Manager
const renderManager = manager => {
  let htmlEl = fs.readFileSync(path.resolve(htmlsDir, "manager.html"), "utf8");
  htmlEl = replacePlaceholders(htmlEl, "name", manager.getName());
  htmlEl = replacePlaceholders(htmlEl, "role", manager.getRole());
  htmlEl = replacePlaceholders(htmlEl, "email", manager.getEmail());
  htmlEl = replacePlaceholders(htmlEl, "id", manager.getId());
  htmlEl = replacePlaceholders(htmlEl, "officeNumber", manager.getOfficeNumber());
  return htmlEl;
};

//Engineer
const renderEngineer = engineer => {
  let htmlEl = fs.readFileSync(path.resolve(htmlDir, "engineer.html"), "utf8");
  htmlEl = replacePlaceholders(htmlEl, "name", engineer.getName());
  htmlEl = replacePlaceholders(htmlEl, "role", engineer.getRole());
  htmlEl = replacePlaceholders(htmlEl, "email", engineer.getEmail());
  htmlEl = replacePlaceholders(htmlEl, "id", engineer.getId());
  htmlEl = replacePlaceholders(htmlEl, "github", engineer.getGithub());
  return htmlEl;
};

//Intern
const renderIntern = intern => {
  let htmlEl = fs.readFileSync(path.resolve(htmlDir, "intern.html"), "utf8");
  htmlEl = replacePlaceholders(htmlEl, "name", intern.getName());
  htmlEl = replacePlaceholders(htmlEl, "role", intern.getRole());
  htmlEl = replacePlaceholders(htmlEl, "email", intern.getEmail());
  htmlEl = replacePlaceholders(htmlEl, "id", intern.getId());
  htmlEl = replacePlaceholders(htmlEl, "school", intern.getSchool());
  return htmlEl;
};

const renderMain = html => {
  const htmlEl = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (htmlEl, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return htmlEl.replace(pattern, value);
};

module.exports = render;