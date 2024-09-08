// https://jsonplaceholder.typicode.com/posts/1

const title = document.querySelector(".title");
const paragraph = document.querySelector(".paragraph");
const button = document.querySelector(".button");
let postNumber = 1;

async function fetchData(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error(err);
    }
}

async function displayData(postNumber) {
    title.textContent = "Loading...";
    paragraph.textContent = "Loading...";
    try{
        const data = await fetchData(postNumber);
        title.textContent = data?.title;
        paragraph.textContent = data?.body;
    }
    catch(err){
        console.log(err);
    }
}

displayData(postNumber);


button.addEventListener("click", () => {
    postNumber += 1;
    console.log(postNumber);
    displayData(postNumber);
})