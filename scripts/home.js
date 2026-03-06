// JavaScript code for the home page of the GitHub Issue Tracker application

// API call to load all issues
const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"

const loadIssues = () => {
fetch(url)
.then(re => re.json())
.then(data => displayIssues(data.data))
};
loadIssues();

// Function to create HTML elements for issue labels
const createElements = (array) => {
    const htmlElements = array.map(el => 
        `
        <div class="badge badge-soft ${el == 'bug' ? 'badge-error' : el == 'help wanted' ? 'badge-warning' : 'badge-success'} text-xs"> 
            <i class="fa-solid ${el == 'bug' ? 'fa-bug' : el == 'help wanted' ? 'fa-life-ring' : 'fa-wand-magic-sparkles'}"></i>
            ${el.toUpperCase()}
        </div>
        `
    );
    return htmlElements.join(" ");
}

// Function to display issues as card in UI
const displayIssues = (issues) => {
    // Get the parent container where the issue cards will be appended
    const parent = document.getElementById("card-container");
    parent.innerHTML = "";

    for(let issue of issues){
        // Create a new div element for the issue card
        const issueCard = document.createElement("div");

        // Add necessary classes to the issue card for styling
        issueCard.classList.add("issue-card", "rounded-[4px]", "bg-white", "flex", "flex-col");
        if(issue.status == "open"){
            issueCard.classList.add("open")
        } else {
            issueCard.classList.add("closed")
        }

        // Set the inner HTML of the issue card to include issue details
        issueCard.innerHTML = `
        <div class="flex flex-col gap-3 p-4 flex-[75%]">
            <div class="flex items-center justify-between">
                <img src="../assets/${issue.status}.png" alt="${issue.status}">
                <div class="badge badge-soft rounded-[100px] text-sm ${issue.priority == 'high' ? 'badge-error text-[#EF4444] bg-[#FEECEC]' : issue.priority == 'medium' ? 'badge-warning text-[#F59E0B] bg-[#FFF6D1' : 'badge-neutral text-[#9CA3AF]'}">
                ${issue.priority.toUpperCase()} </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold">${issue.title} </h3>
                <p class="text-xs font-regular text-[#64748B]">${issue.description} </p>
            </div>
            <div class="flex flex-wrap gap-1">
                ${createElements(issue.labels)}
            </div>
        </div>
        <div class="p-4 text-[#64748B] text-xs border-t border-[#E4E4E7] flex place-items-end w-full h-fit">
            <div class="w-[100%] h-[100%]">
                <p class="">#${issue.id} by ${issue.author}</p>
                <p class="">${issue.createdAt}</p>
            </div>
        </div>
        `
        // Append the issue card to the parent container
        parent.append(issueCard);
    }
}

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
    loadIssues();
});

const closedTab = document.getElementById("closedTab");
closedTab.addEventListener("click", function(){
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

