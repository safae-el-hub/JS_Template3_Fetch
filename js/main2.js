let mainDiv=document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/comments")
.then(reponse=>reponse.json())
.then((repos)=>{
    repos.forEach(repo => {
        let myDiv=document.createElement("div");

        let idEle=document.createElement("h2");
        let idCount=document.createTextNode(`# ${repo.id}`);

        idEle.appendChild(idCount);
        myDiv.appendChild(idEle);

        let repoNameEl=document.createElement("h4");
        let repoNameText=document.createTextNode(repo.name);

        repoNameEl.appendChild(repoNameText);
        myDiv.appendChild(repoNameEl);


        let repoBody=document.createElement("p");
        let repoBodyText=document.createTextNode(repo.body);

        repoBody.appendChild(repoBodyText);
        myDiv.appendChild(repoBody);

         let repoEmail=document.createElement("span");
        let repoEmailText=document.createTextNode(repo.email);

        repoEmail.appendChild(repoEmailText);
        myDiv.appendChild(repoEmail);

        myDiv.className="div-box";

       mainDiv.appendChild(myDiv);
         
    });
     console.log(repos)
})