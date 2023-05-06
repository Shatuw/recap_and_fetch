
// fetch the json-file from somewhere to get an object with many info AND the file
// wait for it been fetched then do the function: give me only the json back with .json()
// then take this "variable/file" and do something/call a function with it
//(youtube-tut: https://www.youtube.com/watch?v=jv_cs0I60C4)
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) =>{ return response.json();})
.then((data) => { 

    // define variable for the Node where the output should be printed in
    const helpSection = document.getElementById('help_section');

    //now iterate through the json-file
    data.forEach((element) => {
        
        // create the html-elements 
        let article = document.createElement('article');
        let heading = document.createElement('h4');
        let paragraph = document.createElement('p');
        let toggleBtn = document.createElement('span');
        let moreBtn = document.createElement('div');

        // add content to the new html-elements
        //(heading-line not only adds content from the json but also conferts a bit, so the frist letter of the string become a caital letter and then add a "?" at the end)
        heading.innerHTML= `${element.title.charAt(0).toUpperCase()}${element.title.slice(1)} ?`;
        paragraph.innerHTML = element.body;
        moreBtn.classList.add('moreInfo');
        moreBtn.textContent="to console";
        paragraph.appendChild(moreBtn);
        
        //add a class to the <span> to style the "dropdown-button"
        toggleBtn.classList.add('arrow-bottom');

        article.classList.add('dropdown_container');
        //adds a class to the paraqraph with display:none to hide it at start
        paragraph.classList.add('hide');

        // add functionality to the dropdown-button
        toggleBtn.addEventListener('click', () => {
            //to show the paraqraph: remove the "hide"-class and change the "button"-span
            if (toggleBtn.classList.contains('arrow-bottom')){
                paragraph.classList.remove('hide');
                toggleBtn.classList.remove('arrow-bottom');
                toggleBtn.classList.add('arrow-top');
            }
            else {//to hide it again after showing: add the "hide"-class again and change the "button"-span back to old state
                paragraph.classList.add('hide');
                toggleBtn.classList.remove('arrow-top');
                toggleBtn.classList.add('arrow-bottom');
            }
        });

        // add functionality to the "more-Info-button" -> just printing the actuel object to the console
        moreBtn.addEventListener('click', () =>{
            console.log(element);
        })

        // after creating, filling and adding functionality now print all to the DOM by adding all together under the article-tag
        article.appendChild(heading);
        article.appendChild(toggleBtn);
        article.appendChild(paragraph);
        //and then append this article in the html-section on the site
        helpSection.appendChild(article);
    })
});