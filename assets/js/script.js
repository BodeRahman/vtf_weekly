
const currWeek = 4;
let modalOpen = false;

const weekData = [
    {
        week: 1, 
        title: 'CyberSecurity Foundations', 
        topics: ['MITRE attack', 'Breach & Attack Simulation', 'Red Canary Atomic Red', 'CYBERSECURITY FRAMEWORK', 'Professional Networking'],
        data: [
            {
                title: "Technology",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p>MITRE ATTACK - <a href="https://attack.mitre.org/">https://attack.mitre.org/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Defend - <a href="https://d3fend.mitre.org/about/">https://d3fend.mitre.org/about/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Navigator - <a href="https://atlas.mitre.org/navigator/">https://atlas.mitre.org/navigator/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Breach & Attack Simulation</p>
                            </li>
                            <li class="inside-text">
                                <p>Threat Informed Defense 101</p>
                            </li>
                            <li class="inside-text">
                                <p>CYBERSECURITY FRAMEWORK : <a href="https://www.nist.gov/cyberframework">https://www.nist.gov/cyberframework</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Red Canary Atomic Red - <a href="https://redcanary.com/blog/atomic-red-team-tests-catching-dragon-tail/">https://redcanary.com/blog/atomic-red-team-tests-catching-dragon-tail/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Metta - <a href="https://github.com/uber-common/metta">Metta Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Infection Monkey - <a href="https://0x1.gitlab.io/pentesting/Infection-Monkey/">https://0x1.gitlab.io/pentesting/Infection-Monkey/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Mitre Caldera - <a href="https://github.com/mitre/caldera">Caldera Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Prelude Operation - <a href=" https://github.com/preludeorg"> https://github.com/preludeorg</a></p>
                            </li>
                            <li class="inside-text">
                                <p>PurpleSharp - <a href="https://github.com/mvelazc0/PurpleSharp">PurpleSharp Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Endgame’s RTA - <a href="https://github.com/endgameinc/RTA">Endgame’s RTA Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://app.cybrary.it/browse/course/mitre-attack-adversary-emulation">https://app.cybrary.it/browse/course/mitre-attack-adversary-emulation</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://academy.attackiq.com/courses/top-attck-techniques">https://academy.attackiq.com/courses/top-attck-techniques</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://academy.attackiq.com/courses/countering-ransomware-with-mitre-attack">https://academy.attackiq.com/courses/countering-ransomware-with-mitre-attack</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p>APA guidelines</p>
                            </li>

                            <ol type=a>
                                <li class="inside-text">
                                    <a href="https://www.apa.org/practice/guidelines/">https://www.apa.org/practice/guidelines/</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=xWFqv-aJAXE">https://www.youtube.com/watch?v=xWFqv-aJAXE</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=hS7xBrWXmYU">https://www.youtube.com/watch?v=hS7xBrWXmYU</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.scribbr.com/apa-style/format/">https://www.scribbr.com/apa-style/format/</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.verywellmind.com/how-to-write-an-essay-in-apa-format-2794837">https://www.verywellmind.com/how-to-write-an-essay-in-apa-format-2794837</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a sample document about the topics you have learnt about this week in the Technology section using the APA Guidelines Format.</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
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
        title: 'Web application security', 
        topics: ["Web application security", "OWASP top10 (tryhackme room)", "BurpSuite", "Team conflict management", "Professional Networking"],
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/burpsuitebasics">https://tryhackme.com/room/burpsuitebasics</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://youtu.be/UBWMLFbjPBc">https://youtu.be/UBWMLFbjPBc</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://m.youtube.com/c/RanaKhalil101">https://m.youtube.com/c/RanaKhalil101</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/owasptop10">https://tryhackme.com/room/owasptop10</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://alison.com/course/web-application-security">https://alison.com/course/web-application-security</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.mindtools.com/pages/article/newTMM_79.htm">https://www.mindtools.com/pages/article/newTMM_79.htm</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://employmenthero.com/blog/team-conflict-management/#:~:text=Take action early to help,Never take sides.">https://employmenthero.com/blog/team-conflict-management/#:~:text=Take action early to help,Never take sides.</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://hbr.org/2017/07/how-to-handle-a-disagreement-on-your-team">https://hbr.org/2017/07/how-to-handle-a-disagreement-on-your-team</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=ElZ7MRIxzZU">https://www.youtube.com/watch?v=ElZ7MRIxzZU</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=2l-AOBz69KU">https://www.youtube.com/watch?v=2l-AOBz69KU</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Record video for 5 -10 min on topic Team conflict management with a scenario to explain how you will handle the situation.</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 7, 
        title: 'Virtualization Fundamentals', 
        topics: ["Virtualization Fundamentals", "Network Security", "VMware HOL", "highlight your past accomplishments in the company to manager", "Professional Networking"],
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.redhat.com/en/topics/virtualization/what-is-virtualization">https://www.redhat.com/en/topics/virtualization/what-is-virtualization</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=Ci4jCxzbRJY">https://www.youtube.com/watch?v=Ci4jCxzbRJY</a></p>
                            </li>
                            <li class="inside-text">
                                <p>VMware HOL</p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.udemy.com/course/virtualization-one-hour-crash-course/">https://www.udemy.com/course/virtualization-one-hour-crash-course/</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                        <li class="inside-text">
                            <p><a href="https://www.indeed.com/career-advice/interviewing/what-is-your-greatest-accomplishment">https://www.indeed.com/career-advice/interviewing/what-is-your-greatest-accomplishment</a></p>
                        </li>
                        <li class="inside-text">
                            <a href="https://www.indeed.com/career-advice/resumes-cover-letters/listing-accomplishments-on-your-resume">https://www.indeed.com/career-advice/resumes-cover-letters/listing-accomplishments-on-your-resume</a>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://www.cnbc.com/2017/11/30/how-to-describe-your-past-work-experience-in-a-job-interview.html">https://www.cnbc.com/2017/11/30/how-to-describe-your-past-work-experience-in-a-job-interview.html</a></p>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://ca.indeed.com/career-advice/resumes-cover-letters/achievement-in-resume">https://ca.indeed.com/career-advice/resumes-cover-letters/achievement-in-resume</a></p>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://www.forbes.com/sites/amymorin/2017/01/29/7-ways-to-talk-about-your-accomplishments-without-sounding-like-a-braggart/?sh=414d434b6fcchttps://www.indeed.com/career-advice/resumes-cover-letters/years-of-experience-on-resume">https://www.forbes.com/sites/amymorin/2017/01/29/7-ways-to-talk-about-your-accomplishments-without-sounding-like-a-braggart/?sh=414d434b6fcchttps://www.indeed.com/career-advice/resumes-cover-letters/years-of-experience-on-resume</a></p>
                        </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a YouTube video on “Highlighting your past accomplishments in the company to your manager” for 5 mins.</p>
                            </li>
                            <li class="inside-text">
                                <p>Create Google slide with 1 slide on “Give 5 reasons for promotion in VTF”</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 8, 
        title: 'Container fundamentals', 
        topics: ["Container fundamentals", "Kubernetes", "How to join VTF", "Professional Networking"],
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://collabnix.com/docker-cheatsheet/">https://collabnix.com/docker-cheatsheet/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://github.com/David-VTUK/CKA-StudyGuide"></a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://blog.cloudnativefolks.org/introduction-to-kubernetes-part-3-pods-scheduling-sequence">https://blog.cloudnativefolks.org/introduction-to-kubernetes-part-3-pods-scheduling-sequence</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://lnkd.in/eRTVDJ3J">https://lnkd.in/eRTVDJ3J</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.linkedin.com/posts/semaan_ebook-kubernetes-essentials-ugcPost-6956962563158851584-7Xen?utm_source=linkedin_share&utm_medium=ios_app">https://www.linkedin.com/posts/semaan_ebook-kubernetes-essentials-ugcPost-6956962563158851584-7Xen?utm_source=linkedin_share&utm_medium=ios_app</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.edx.org/course/fundamentals-of-containers-kubernetes-and-red-hat">https://www.edx.org/course/fundamentals-of-containers-kubernetes-and-red-hat</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=s2NlVas0Cew">https://www.youtube.com/watch?v=s2NlVas0Cew</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://resume.io/blog/why-do-you-want-to-work-here">https://resume.io/blog/why-do-you-want-to-work-here</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://resources.biginterview.com/interview-questions-answers/why-do-you-want-to-work-here/">https://resources.biginterview.com/interview-questions-answers/why-do-you-want-to-work-here/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://in.indeed.com/career-advice/interviewing/why-do-you-want-to-join-our-company">https://in.indeed.com/career-advice/interviewing/why-do-you-want-to-join-our-company</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a Youtube video of 5-6 minutes on “why do you want to join VTF”</p>
                            </li>
                        `
                    }
                ]
            }
    
        ]
    },
    
    
    {
        week: 9, 
        title: 'Cloud Fundamentals', 
        topics: ["Cloud Fundamentals", "AWS Cloud", "mental and physical health", "Professional Networking"],
        data: [
            {
                title: "Cloud (AWS)",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://m.youtube.com/c/LearnCantrill/playlists">https://m.youtube.com/c/LearnCantrill/playlists</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://github.com/acantril/learn-cantrill-io-labs"></a></p>
                            </li>
                            <li class="inside-text">
                                <p>Navigator - <a href="https://atlas.mitre.org/navigator/">https://atlas.mitre.org/navigator/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://cloudstudio.com.au/category/public-cloud/">https://cloudstudio.com.au/category/public-cloud/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-for-beginners1">https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-for-beginners1</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations">https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://sageclinic.org/blog/healthy-body-mental-health/">https://sageclinic.org/blog/healthy-body-mental-health/</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://www.linkedin.com/pulse/how-important-mncs-deal-mental-health-problem-chirag-naithani/">https://www.linkedin.com/pulse/how-important-mncs-deal-mental-health-problem-chirag-naithani/</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="http://ignited.in/I/a/99710">http://ignited.in/I/a/99710</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=rTNEwzbpTTQ">https://www.youtube.com/watch?v=rTNEwzbpTTQ</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=vG5S4Kkz9lo">https://www.youtube.com/watch?v=vG5S4Kkz9lo</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a Youtube video with duration 5-6 minutes on  “mental and physical health ”</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 10, 
        title: 'CTF or Threat Hunting Lab', 
        topics: ["CTF or threat hunting lab", "and...", "<b>Oops! It's SECRET🤐</b>"],
        data: [
            {
                title: "Technology",
                options: [
                    {
                        title: "Cyber Security",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/basicpentestingjt">https://tryhackme.com/room/basicpentestingjt</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/easyctf">https://tryhackme.com/room/easyctf</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/ohsint">https://tryhackme.com/room/ohsint</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/rrootme">https://tryhackme.com/room/rrootme</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/lazyadmin">https://tryhackme.com/room/lazyadmin</a></p>
                            </li>
                            <li class="inside-text">
                                <p><strong>TRAFFIC ANALYSIS EXERCISE - </strong></strong><a href="https://www.malware-traffic-analysis.net/2015/08/31/page2.html"></a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.malware-traffic-analysis.net/2015/08/31/index.html">https://www.malware-traffic-analysis.net/2015/08/31/index.html</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create Google Slides and share your experience and learning from VTF</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    }
]

function changeBodyHtml(data) {
    $("#weekModal #weeklyCardData").html(data);

}

function showModal(week) {
    const {title, topics, data} = weekData.filter(data => data.week === week)[0];

    $("#weekModal .week-title").html(`Week ${week}: ${title}`);

    $("#weekModal #weeklyCardSidebar").html("");
    data.map((item, key) => $("#weekModal #weeklyCardSidebar").append(

        item.options ? 
            `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading${key}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${key}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ${item.title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapse${key}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${key}">
                        <div class="accordion-body">
                            ${item.options.map((option, index) => 
                                index === item.options.length - 1 ?
                                    "<button class='inner-button last' onclick='changeBodyHtml(" + JSON.stringify(option.html) + ")'>" + option.title + "</button>"
                                :
                                    "<button class='inner-button' onclick='changeBodyHtml(" + JSON.stringify(option.html) + ")'>" + option.title + "</button>"
                            ).join("")}
                        </div>
                    </div>
                </div>
            `
        :
            `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-single-button" type="button" onclick='changeBodyHtml(${JSON.stringify(item.html)})'>
                            ${item.title}
                        </button>
                    </h2>
                </div>
            `

    ))

    topics.map(topic => $("#weekModal .body ul").append(`<li class="inside-text">${topic}</li>`));

    $("#weekModal").show();
    $("#weekModal .weekCard").css("margin-top", "-500px").animate({
        marginTop: "0"
    }, 500, () => modalOpen = true);
}

function closeModal() {
    
    $("#weekModal .weekCard").css("margin-top", "0").animate({
        marginTop: "500px"
    }, 200);

    $("#weekModal").fadeOut("fast");
    modalOpen = false;
    
}

$( document ).ready(function() {
    $("#weekModal").hide();
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
        <div class="d-flex justify-content-between">
            <span class="card-title"><strong>Week ${week}: ${title} </strong></span>
            <span class="card-text">
                <svg height="20" width="20" class="blinking">
                    <circle cx="10" cy="8" r="5" fill="#00ab08" /> 
                </svg> <span style="text-transform: uppercase; font-size: 0.8em; font-weight: 600">current week</span>
            </span>
        </div>
        <ul id="currWeekList">
        </ul>
    `)

    topics.map(topic => $("#currWeekList").append(`<li class="py-1">${topic}</li>`))

});

// Modal Mouse Click outside
$(document).mouseup(function(e) {
    const container = $("#weekModal .weekCard");
    if (modalOpen && (!container.is(e.target) && container.has(e.target).length === 0)) {
        closeModal();
    }
});