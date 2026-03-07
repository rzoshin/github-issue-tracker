const disableActive = (btn) => {
    btn.classList.remove("btn-primary");
}
const enableActive = (btn) => {
    btn.classList.add("btn-primary")
}
// Toggle between All, Open and Closed issues
const showTab = (id) => {
    const allBtns = document.querySelectorAll(".tab-btn");
    for(btn of allBtns) {
        disableActive(btn);
    }
    const active = document.getElementById(id);
    enableActive(active);
}

// Filtering Open Issues
const openTab = document.getElementById("openTab");

openTab.addEventListener("click", function(){
    startLoading();
    const loadOpenIssues = () => {
        fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(re => re.json())
        .then((data) => {
            const allIssues = data.data;
            const openIssues = allIssues.filter(iss => iss.status === "open");

            displayIssues(openIssues);
        })};
        loadOpenIssues();
        
});

const allTab = document.getElementById("allTab");
allTab.addEventListener("click", function(){
    startLoading();
    loadIssues();
    calculateCount();
});

const closedTab = document.getElementById("closedTab");
closedTab.addEventListener("click", function(){
    startLoading();
    const loadClosedIssues = () => {
        fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(re => re.json())
        .then((data) => {
            const allIssues = data.data;
            const closedIssues = allIssues.filter(iss => iss.status === "closed");

            displayIssues(closedIssues);
        })};
        loadClosedIssues();
});