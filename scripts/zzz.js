const cards = document.getElementById("card-container");

cards.addEventListener("click", function(e){

    let actualParent = e.target.closest(".issue-card");
    const identity = actualParent.getAttribute("id");
    console.log(identity);
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${identity}`

    fetch(url)
    .then(re => re.json())
    .then(data => displayModal(data.data));

})

displayModal = (data) => {
    const modal = document.getElementById("my_modal_5");
    modal.innerHTML = `
        <div class="modal-box p-6">
            <h3 class="text-2xl font-bold mb-2">${data.title}</h3>
            <div class="flex items-center gap-2">
                <div class = "font-medium text-sm p-2 text-white rounded-[100px] bg-[${data.status == "open"? '#00A96E' : '#A855F7'}]" > ${data.status == "open" ? data.status + 'ed' : data.status} </div>
                <div class = "w-1 h-1 rounded-full bg-[#64748B] my-auto"></div>
                <span class = "text-sm text-[#64748B]">${data.status == "open" ? data.status + 'ed' : data.status} by ${data.assignee}</span>
                <div class = "w-1 h-1 rounded-full bg-[#64748B] my-auto"></div>
                <span class = "text-sm text-[#64748B]">${new Date(data.updatedAt).toLocaleDateString("en-US")}
            </div>
            <div class="labels flex flex-wrap gap-1 my-6">
                ${createElements(data.labels)}
            </div>
            <p class="mb-6 text-[#64748B]">
                ${data.description}
            </p>
            <div class="grid grid-cols-2 gap-2.5 bg-[#F8FAFC] p-4 rounded-lg">
                <div>
                    <p class="text-[#64748B] mb-1"> Assignee: </p>
                    <h4 class="font-semibold text-base"> ${data.assignee} </h4>
                </div>
                <div>
                    <p class="text-[#64748B] mb-1">Priority: </p>
                    <div class="py-[6px] px-[15.5px] w-fit rounded-[100px] uppercase text-xs ${data.priority == 'high' ? 'bg-[#EF4444] text-[#FEECEC]' : data.priority == 'medium' ? 'bg-[#F59E0B] text-[#FFF6D1]' : 'badge-soft badge-neutral text-black'}">${data.priority}</div>
                </div>
            </div>
            <div class="modal-action">
                <form method="dialog">
                <button class="btn btn-primary">Close</button>
                </form>
            </div>
        </div>
    `
    modal.showModal();
}

      // "id": 1,
      // "title": "Fix navigation menu on mobile devices",
      // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
      // "status": "open",
      // "labels": [
      // "bug",
      // "help wanted"
      // ],
      // "priority": "high",
      // "author": "john_doe",
      // "assignee": "jane_smith",
      // "createdAt": "2024-01-15T10:30:00Z",
      // "updatedAt": "2024-01-15T10:30:00Z"



