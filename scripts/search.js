const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    startLoading();
    const query = searchInput.value.trim();
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`;

    fetch(url)
    .then(re => re.json())
    .then(data => displayIssues(data.data));

})