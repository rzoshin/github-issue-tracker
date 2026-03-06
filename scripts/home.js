// API call to load all issues
const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues"

const loadIssues = () => {
fetch(url)
.then(re => re.json())
.then(data => displayIssues(data.data))
}

loadIssues()
// Icon:green/purple             High+Medium/Low
// Fix Navigation Menu On Mobile Devices
// The navigation menu doesn't collapse properly on mobile devices...
// • BUG   ® HELP WANTED
// #1 by john_doe
// 1/15/2024

// assignee: "jane_smith"
// author: "john_doe"
// createdAt: "2024-01-15T10:30:00Z"
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id: 1
// labels: (2) ['bug', 'help wanted']
// priority: "high"
// status: "open"
// title: "Fix navigation menu on mobile devices"
// updatedAt: "2024-01-15T10:30:00Z"

// Function to display issues as card in UI
const displayIssues = (issues) => {
    for(let issue of issues){
        console.log(issue)
        const parent = document.getElementById("card-container");
        
        const issueCard = document.createElement("div");
        issueCard.classList.add("issue-card", "rounded-[4px]", "bg-white");
        issueCard.innerHTML = `
        <div class="flex flex-col gap-3 p-4">
            <div class="flex items-center justify-between">
                <img src="../assets/${issue.status}.png" alt="${issue.status}">
                <div class="badge badge-soft ${issue.priority == 'high' ? 'badge-error' : issue.priority == 'medium' ? 'badge-warning' : 'badge-neutral'}">
                ${issue.priority.toUpperCase()} </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold">${issue.title} </h3>
                <p class="text-xs font-regular text-[#64748B]">${issue.description} </p>
            </div>
            <div>

            </div>
        </div>
        <div class="p-4 text-[#64748B] text-xs">
            <p>#${issue.id} by ${issue.author}</p>
            <p>${issue.createdAt}</p>

        </div>


        `

        parent.append(issueCard);
    }
}
