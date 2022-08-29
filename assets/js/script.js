
const currWeek = 4;

const weekData = [
    {
        week: 1, 
        title: 'CyberSecurity Foundations', 
        topics: ['MITRE attack', 'Breach & Attack Simulation', 'Red Canary Atomic Red', 'CYBERSECURITY FRAMEWORK', 'Professional Networking']
    },
    {
        week: 2, 
        title: 'Vulnerability management + SIEM/Log Management', 
        topics: ['SANS Vulnerability Management', 'Vulnerability-Assessment-Framework', 'Understanding Network Scanning usinng nmap', 'Splunk course', 'Qualys course', 'Professional Networking']
    },
    {
        week: 3, 
        title: 'OSINT', 
        topics: ['OSINT', 'Shodan', 'GooFuzz', 'Tryhackme rooms', "Don't Overcommit", 'Professional Networking']
    },
    {
        week: 4, 
        title: 'Network Security', 
        topics: ['Scappy', 'PFsense', 'Guacamole', 'Honeypots', 'Security Onion', 'Project Management', 'Professional Networking']
    },
    {
        week: 5, 
        title: 'Endpoint Security', 
        topics: ["Endpoint Security", "Windows,Linux", "OSSEC, Wazuh", "PsExec, Bloodhound", "Invoke-Obfuscation, CrackMapExec", "Sysmon", "Effective communication-written, Oral", "Professional Networking"]
    },
    {
        week: 6, 
        title: 'Vulnerability management + SIEM/Log Management', 
        topics: ["Web application security", "OWASP top10 (tryhackme room)", "BurpSuite", "Team conflict management", "Professional Networking"]
    },
    {
        week: 7, 
        title: 'Virtualization Fundamentals', 
        topics: ["Virtualization Fundamentals", "Network Security", "VMware HOL", "highlight your past accomplishments in the company to manager", "Professional Networking"]
    },
    {
        week: 8, 
        title: 'Container fundamentals', 
        topics: ["Container fundamentals", "Kubernetes", "How to join VTF", "Professional Networking"]
    },
    {
        week: 9, 
        title: 'Cloud Fundamentals', 
        topics: ["Cloud Fundamentals", "AWS Cloud", "mental and physical health", "Professional Networking"]
    },
    {
        week: 10, 
        title: 'CTF or Threat Hunting Lab', 
        topics: ["CTF or threat hunting lab", "and...", "<b>Oops! It's SECRET🤐</b>"]
    },
]

function showModal(week) {
    const {title, topics} = weekData.filter(data => data.week === week)[0];

    $("#weekModal .modal-title").html(title);
    $("#weekModal .modal-body ul").html("");
    topics.map(topic => $("#weekModal .modal-body ul").append(`<li class="inside-text">${topic}</li>`));

    $("#weekModal").modal("show");
}

$( document ).ready(function() {
    // Populate All Weeks
    const section = weekData.map(data => `
        <div class="listItem${data.week < currWeek ? ' completed' : ''}">
            <span><strong>Week-${data.week}</strong></span>
            ${data.week < currWeek ?
                `<button type="button" class="btn btn-primary btn-sm" onclick="showModal(${data.week})">
                    Show
                </button>`
                :
                ""
            }
            <p>${data.title}</p>
        </div>
    `)
    $("#sessionSection").html(section);

    //Populate Current Week
    const {week, title, topics} = weekData.filter(data => data.week === currWeek)[0];
    $("#currWeekContent").html(`
        <h5 class="card-title">Week ${week}: ${title} </h5>
        <p class="card-text text-end me-4">
            <svg height="20" width="20" class="blinking">
                <circle cx="10" cy="8" r="5" fill="#3399FF" /> 
            </svg> <span style="text-transform: uppercase; font-size: 0.8em; font-weight: 600">current week</span>
        </p>
        <ul id="currWeekList">
        </ul>
    `)

    topics.map(topic => $("#currWeekList").append(`<li class="py-1">${topic}</li>`))
});