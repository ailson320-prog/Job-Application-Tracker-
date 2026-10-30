
/* =========================
   DOM ELEMENTS
========================= */

const jobForm = document.querySelector("#jobForm");
const companyName = document.querySelector("#companyName");
const jobTitle = document.querySelector("#jobTitle");
const jobList = document.querySelector("#jobList");

const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const resultsCount = document.querySelector("#resultsCount");

const totalJobs = document.querySelector("#totalJobs");
const totalInterviews = document.querySelector("#totalInterviews");
const totalOffers = document.querySelector("#totalOffers");


/* =========================
   LOAD SAVED JOBS
========================= */

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];


/* =========================
   ADD JOB
========================= */

jobForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const company = companyName.value.trim();
    const position = jobTitle.value.trim();

    if (company === "" || position === "") {
        alert("Please fill out all fields.");
        return;
    }

    const newJob = {
        id: Date.now(),
        company: company,
        position: position,
        status: "Applied"
    };

    jobs.push(newJob);

    saveJobs();
    updateDashboard();
    searchJobs();

    jobForm.reset();

});


/* =========================
   SAVE JOBS
========================= */

function saveJobs() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}


/* =========================
   DELETE JOB
========================= */

function deleteJob(id) {

    jobs = jobs.filter(function (job) {
        return job.id !== id;
    });

    saveJobs();
    updateDashboard();
    searchJobs();

}


/* =========================
   UPDATE JOB STATUS
========================= */

function updateJobStatus(id, newStatus) {

    const jobToUpdate = jobs.find(function (job) {
        return job.id === id;
    });

    if (jobToUpdate) {

        jobToUpdate.status = newStatus;

        saveJobs();
        updateDashboard();
        searchJobs();

    }
}


/* =========================
   SEARCH AND FILTER JOBS
========================= */

function searchJobs() {

    const searchTerm = searchInput.value.trim().toLowerCase();

    const selectedStatus = statusFilter.value;

    const filteredJobs = jobs.filter(function (job) {

        const companyMatch =
            job.company.toLowerCase().includes(searchTerm);

        const positionMatch =
            job.position.toLowerCase().includes(searchTerm);

        const textMatch = companyMatch || positionMatch;

        const statusMatch =
            selectedStatus === "All" ||
            job.status === selectedStatus;

        return textMatch && statusMatch;

    });

    renderJobs(filteredJobs);

}


/* =========================
   RENDER JOBS
========================= */

function renderJobs(jobsToRender = jobs) {

    jobList.innerHTML = "";

    resultsCount.textContent =
        `${jobsToRender.length} of ${jobs.length} applications`;

    if (jobsToRender.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.classList.add("empty-message");

        emptyMessage.textContent =
            "No matching applications found.";

        jobList.appendChild(emptyMessage);

        return;
    }

    jobsToRender.forEach(function (job) {

        // Create job card
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        // Company heading
        const companyHeading = document.createElement("h3");
        companyHeading.textContent = job.company;

        // Job title
        const positionText = document.createElement("p");
        positionText.textContent = job.position;

        // Status badge
        const statusBadge = document.createElement("span");
        statusBadge.classList.add("status-badge");

        statusBadge.classList.add(
            `status-${job.status.toLowerCase()}`
        );

        statusBadge.textContent = job.status;

        // Status dropdown
        const statusSelect = document.createElement("select");

        statusSelect.setAttribute(
            "aria-label",
            `Change status for ${job.company} ${job.position}`
        );

        const statuses = [
            "Applied",
            "Interviewing",
            "Offered",
            "Rejected"
        ];

        statuses.forEach(function (status) {

            const option = document.createElement("option");

            option.value = status;
            option.textContent = status;

            statusSelect.appendChild(option);

        });

        statusSelect.value = job.status;

        // Update status event
        statusSelect.addEventListener("change", function () {

            updateJobStatus(job.id, statusSelect.value);

        });

        // Delete button
        const deleteBtn = document.createElement("button");

        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";

        deleteBtn.setAttribute(
            "aria-label",
            `Delete ${job.company} ${job.position}`
        );

        // Delete event
        deleteBtn.addEventListener("click", function () {

            deleteJob(job.id);

        });

        // Actions container
        const jobActions = document.createElement("div");
        jobActions.classList.add("job-actions");

        jobActions.appendChild(statusSelect);
        jobActions.appendChild(deleteBtn);

        // Build card
        jobCard.appendChild(companyHeading);
        jobCard.appendChild(positionText);
        jobCard.appendChild(statusBadge);
        jobCard.appendChild(jobActions);

        // Add card to page
        jobList.appendChild(jobCard);

    });

}


/* =========================
   UPDATE DASHBOARD
========================= */

function updateDashboard() {

    totalJobs.textContent = jobs.length;

    const interviews = jobs.filter(function (job) {
        return job.status === "Interviewing";
    });

    const offers = jobs.filter(function (job) {
        return job.status === "Offered";
    });

    totalInterviews.textContent = interviews.length;

    totalOffers.textContent = offers.length;

}


/* =========================
   EVENT LISTENERS
========================= */

searchInput.addEventListener("input", searchJobs);

statusFilter.addEventListener("change", searchJobs);


/* =========================
   INITIAL PAGE LOAD
========================= */

updateDashboard();
searchJobs();
