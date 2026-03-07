// Tracking count of total issues
function calculateCount() {
    const count = document.getElementById("total-count");
    const parent = document.getElementById("card-container");

    count.innerText = parent.children.length;
}

calculateCount();

