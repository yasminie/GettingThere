let availableKeywords = [
    'Asian Art Museum, 200 Larkin Street, San Francisco, CA 94102',
    'Opera Plaza Cinemas, 601 Van Ness Ave, San Francisco, CA 94102',
    'San Francisco City Hall, 1 Dr Carlton B Goodlett, San Francisco, CA 94102',
    'San Francisco Public Library, 100 Larkin Street, San Francisco, CA 94102',
    'War Memorial Opera House, 301 Van Ness Ave, San Francisco, CA 94102',
];

let selected = [];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().startsWith(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
    selected = result.concat(selected);
}

document.getElementById("searchb").addEventListener("click", function(){
    readData(document.querySelector("input").value);
});

function readData(keyword){
    if(availableKeywords[0] === keyword){
        setTimeout(() => {
            window.location.href = "locations/AsianArtMuseum.html";
        }, "100");
    }
    else if(availableKeywords[1] === keyword){
        setTimeout(() => {
            window.location.href = "locations/OperaPlazaCinemas.html";
        }, "100");
    }
    else if(availableKeywords[2] === keyword){
        setTimeout(() => {
            window.location.href = "locations/SFCityHall.html";
        }, "100");
    }
    else if(availableKeywords[3] === keyword){
        setTimeout(() => {
            window.location.href = "locations/SFPublicLibrary.html";
        }, "100");
    }
    else if(availableKeywords[4] === keyword){
        setTimeout(() => {
            window.location.href = "locations/WarMemorial.html";
        }, "100");
    }
    else{
        setTimeout(() => {
            window.location.href = "ErrorPage.html";
        }, "100");
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
