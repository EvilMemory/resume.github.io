const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');

const routes = {
    'home': {
        title: 'Zhihao Guo - Software Engineer & Researcher',
        content: `
        <div class="hero">
            <div class="hero-content">
                <img src="assets/images/profile-photo.jpg" alt="Zhihao Guo" class="profile-image">
                <div class="hero-text">
                    <h1>Zhihao Guo</h1>
                    <h2>Software Engineer & Researcher</h2>
                    <p class="tagline">Bridging the gap between innovative research and practical software solutions</p>
                </div>
            </div>
        </div>
        <section class="about-me">
            <h1>About Me</h1>
            <p>I'm a 4th-year Software Engineering student at the University of Technology Sydney, passionate about leveraging technology to solve complex problems. With a strong foundation in both theoretical computer science and practical software development, I strive to create innovative solutions that make a real-world impact.</p>
            
            <h3>Quick Facts</h3>
            <ul class = "quick-facts">
                <li>🎓 4th-year Software Engineering student at UTS</li>
                <li>🏆 Dean's List, UTS 2024</li>
                <li>🏆 <a href="https://www.uts.edu.au/scholarship/engineering-undergraduate-achievement-prize"> Engineering Undergraduate Achievement Prize, 2021 Spring</a> </li>
                <li>💻 Full-stack developer with experience in Python, Java, and JavaScript</li>
                <li>🧠 Passionate about AI, machine learning, and algorithm optimization</li>
                <li>🌍 International Collegiate Programming Contest (ICPC) participant</li>
            </ul>
            <div class="experience">
                <h3>Experience Highlights:</h3>
                <ul>
                    <li>
                        <strong>UTS Casual Academic (02/2023 - Present):</strong> Assisting in programming courses and supporting students in their learning journey.
                    </li>
                    <li>
                        <strong>Software Engineer at PuraLink (08/2022 - 11/2022):</strong> Developed full-stack solutions using Python Flask, NodeJS, and React, implementing MVC architecture and working with SQL Server.
                    </li>
                    <li>
                        <strong>ICPC Participant (05/2022 - 10/2023):</strong> Represented UTS in the International Collegiate Programming Contest, focusing on dynamic programming and greedy algorithms.
                    </li>
                    <li>
                        <strong>Research Publication (WEEF 2024):</strong> Co-authored a paper on "Accelerating Learning with AI" in programming education.
                    </li>
                </ul>
            </div>
        </section>

        <section class="highlights">
            <div class="highlight-item">
                <i data-feather="code"></i>
                <h3>Software Engineering</h3>
                <p>Expertise in full-stack development, algorithms, and system design</p>
            </div>
            <div class="highlight-item">
                <i data-feather="cpu"></i>
                <h3>AI & Machine Learning</h3>
                <p>Applying cutting-edge AI techniques to solve real-world problems</p>
            </div>
            <div class="highlight-item">
                <i data-feather="book-open"></i>
                <h3>Academic Research</h3>
                <p>Published work on AI-driven learning in programming education</p>
            </div>
        </section>

        <section class="contact">
            <h3>Get in Touch</h3>
            <div class="contact-info">
                <div class="contact-item">
                    <i data-feather="mail"></i>
                    <p><a href="mailto:guodududu@gmail.com">guodududu@gmail.com</a></p>
                </div>
                <div class="contact-item">
                    <i data-feather="phone"></i>
                    <p><a href="tel:0479096998">0479 096 998</a></p>
                </div>
                <div class="contact-item">
                    <i data-feather="github"></i>
                    <p><a href="https://github.com/dududuguo" target="_blank">github.com/dududuguo</a></p>
                </div>
            </div>
        </section>
        `
    },
    'reflections': {
        title: 'Reflections - Zhihao Guo',
        content: `
            <h1>Reflections</h1>

            <section class="reflection">
                <h2>Sustainability in Software Engineering</h2>
                <p>During my time as a UTS Casual Academic, I had the opportunity to contribute to a groundbreaking project that not only advanced my own understanding of sustainable software practices but also had a significant impact on student learning outcomes.</p>

                <h3>The Innovation: Java Dynamic Execution Graph</h3>
                <p>I developed an innovative tool using Java Debugging Interface (JDI) and Finite State Machines (FSM) to create programming execution graphs. Each state in these graphs represents a line of code, providing a comprehensive visualization of program execution. This tool allows students to observe how Java programs run, how bugs are triggered, and how objects are set up and initialized.</p>

                <h3>Professional Significance</h3>
                <p>The development of this tool exemplifies sustainable software engineering in several ways:</p>
                <ul>
                    <li>Reusability: The execution graphs can be applied to various Java programs, providing a versatile learning tool.</li>
                    <li>Efficiency: By visualizing program execution, we reduce the time and resources needed for debugging and understanding complex code structures.</li>
                    <li>Longevity: The tool's integration with Large Language Models (LLMs) for bug detection and fixing advice ensures it can evolve with advancements in AI technology.</li>
                </ul>

                <h3>Personal Reflection</h3>
                <p>Working on this project filled me with a sense of purpose and excitement. Seeing students grasp complex programming concepts more quickly and develop better debugging skills was incredibly rewarding. It reinforced my belief in the power of innovative tools to enhance learning and improve software development practices.</p>

                <h3>Future Implications</h3>
                <p>This experience has profoundly shaped my approach to software engineering. Moving forward, I am committed to:</p>
                <ul>
                    <li>Prioritizing visualization in complex systems to enhance understanding and maintenance</li>
                    <li>Integrating AI and machine learning to create more adaptive and efficient development tools</li>
                    <li>Focusing on creating sustainable, long-lasting solutions that can evolve with technology advancements</li>
                </ul>
            </section>

            <section class="reflection">
                <h2>Professional Practice in Intercultural and Global Contexts</h2>

                <p>My participation in the International Collegiate Programming Contest (ICPC) provided a profound insight into the challenges and opportunities of working in diverse, intercultural teams.</p>

                <h4>Professional Significance</h4>
                <p>This experience was crucial in demonstrating the importance of effective communication and collaboration in a global context. It highlighted how diverse perspectives can lead to more innovative solutions, but also the potential challenges in aligning different working styles and cultural approaches to problem-solving.</p>

                <h4>Personal Reflection</h4>
                <p>I felt both excited and apprehensive about working with team members from different cultural backgrounds. The experience was eye-opening, challenging my preconceptions and pushing me out of my comfort zone. I learned to appreciate different problem-solving approaches and communication styles, which ultimately enriched our team's performance.</p>

                <h4>Future Implications</h4>
                <p>This intercultural experience has significant implications for my future professional development:</p>
                <ul>
                    <li>Develop greater cultural intelligence and adaptability in diverse team settings</li>
                    <li>Prioritize clear and inclusive communication in all professional interactions</li>
                    <li>Seek out opportunities to work on international projects and with diverse teams</li>
                    <li>Continuously reflect on and challenge my own cultural biases and assumptions</li>
                </ul>

                <p>By embracing these learnings, I aim to become a more effective and culturally competent professional in the global software industry.</p>
            </section>
        `
    },
    'research': {
        title: 'Research & Development Experience - Zhihao Guo',
        content: `
            <h1>Research & Development Experience</h1>

            <section id="research-work">
                <h2>Research Work</h2>

                <div class="experience-item">
                    <h3>Accelerating Learning with AI: Improving Students' Capability to Receive and Build Automated Feedback for Programming Courses</h3>
                    <p><strong>Publication:</strong> WEEF 2024</p>
                    <p>This research focuses on enhancing the learning experience in programming courses through AI-driven automated feedback systems.</p>
                    <ul>
                        <li>Developed AI models for analyzing student code and generating constructive feedback</li>
                        <li>Designed and implemented the Java Dynamic Exe-Graph tool</li>
                        <li>Conducted experiments to measure the effectiveness of AI-generated feedback</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>UTS Casual Academic</h3>
                    <p><strong>Duration:</strong> 02/2023 - Present</p>
                    <p>Assisting in programming courses and providing support to students, contributing to academic research and teaching methodologies.</p>
                </div>

                <div class="experience-item">
                    <h3>Java Dynamic Exe-Graph</h3>
                    <p><strong>GitHub:</strong> <a href="https://github.com/dududuguo/java-dynamic-exe-graph" target="_blank">Repository</a></p>
                    <p>Part of the "Accelerating Learning with AI" research, this tool provides visual representations of Java program execution.</p>
                    <ul>
                        <li>Real-time generation of execution graphs for Java programs</li>
                        <li>Visual representation of method calls, variable states, and control flow</li>
                        <li>Integration with UTS Programming 2 course</li>
                    </ul>
                </div>
            </section>

            <section id="development-experience">
                <h2>Development Experience</h2>

                <div class="experience-item">
                    <h3>Programming Malicious Behavior Detection Model</h3>
                    <p><strong>Duration:</strong> 08/2023 - 12/2023</p>
                    <p>Developing advanced models for detecting and predicting aggressive behavior using machine learning and computer vision techniques.</p>
                    <ul>
                        <li>Training large-scale models for aggressive behavior detection</li>
                        <li>Implementing human posture reshaping algorithms</li>
                        <li>Developing weapon detection systems</li>
                        <li>Creating LSTM models to predict imminent aggressive behavior</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>Software Engineer, PuraLink Inc.</h3>
                    <p><strong>Duration:</strong> 08/2022 - 11/2022</p>
                    <p>Internship experience as a full-stack developer.</p>
                    <ul>
                        <li>Developed using Python Flask (Backend) and NodeJS, React (Frontend)</li>
                        <li>Implemented MVC architecture for both frontend and backend</li>
                        <li>Worked with SQL Server for database management</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>International Collegiate Programming Contest (ICPC)</h3>
                    <p><strong>Duration:</strong> 05/2022 - 10/2023</p>
                    <p>UTS team member focusing on competitive programming.</p>
                    <ul>
                        <li>Specialized in dynamic programming and greedy algorithms</li>
                        <li>Served as a primary coder for the team</li>
                    </ul>
                </div>
            </section>
        `
    }
};

function loadContent(route) {
    if (routes[route]) {
        const { title, content } = routes[route];
        document.title = title;
        document.getElementById('content').innerHTML = content;
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = e.target.getAttribute('href').substr(1);
        loadContent(route);
    });
});

// Load initial content
loadContent('home');