// main variables

let theInput = document.querySelector(".get-repos input");
let getBtn = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getBtn.onclick = function () {
  getRepos();
};

//get repos function
function getRepos() {
  if (theInput.value == "") {
    // if value in Empty
    reposData.innerHTML = "<span> Please Write Gethub usename</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())

      .then((repos) => {
        // empty the container
        reposData.innerHTML = "";
        // loop on repos
        repos.forEach((repo) => {
          // create the main div element
          let mainDiv = document.createElement("div");

          // create repo name text
          let repoName = document.createTextNode(repo.name);

          // append the text to main div
          mainDiv.appendChild(repoName);

          //create repo url
          let theUrl = document.createElement("a");

          // create repo url text
          let thUrlText = document.createTextNode("Visit");

          //append the repo url text to anchor tag
          theUrl.appendChild(thUrlText);

          // add the hypertext refereance (href);
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`; //ElzeroWebSchool

          // set attribute Blank
          theUrl.setAttribute("target", "_blank");

          // append url anchor to main div
          mainDiv.appendChild(theUrl);

          //create stars count span

          let starsSpan = document.createElement("span");

          //create the stars span text
          let starsText = document.createTextNode(
            `Starts ${repo.stargazers_count}`,
          );

          // add stars count text to stars span
          starsSpan.appendChild(starsText);

          //append stars count span to main div
          mainDiv.appendChild(starsSpan);

          // add class on main div
          mainDiv.className = "repo-box";

          // append the main div to the container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
