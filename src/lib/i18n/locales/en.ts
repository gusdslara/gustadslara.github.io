export const en = {
    nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        showcases: 'Portfolio',
        platforms: 'Platforms',
        contact: 'Contact'
    },
    home: {
        top: {
            greeting: "Hi, I'm Gustavo Lara",
            title1: 'Software',
            title2: 'Architect',
            title3: '& Tech Lead',
            desc1: 'Software Architect with extensive experience in legacy modernization, distributed architectures, and native code interoperability.',
            desc2: 'Polyglot profile, with high adaptability to new languages and ecosystems.'
        },
        about: {
            title: 'About Me',
            desc1: 'From Brazil, I specialize in <strong class="text-black font-medium">distributed systems architecture</strong> and <strong class="text-black font-medium">fullstack development</strong>. I have architected and delivered <strong class="text-black font-medium">microservices platforms</strong> processing millions of requests, <strong class="text-black font-medium">mobile applications</strong> for Android and iOS, and <strong class="text-black font-medium">modern web applications</strong> using Angular and Svelte.',
            desc2: 'My focus is on building resilient and scalable distributed systems with event-driven architectures, CI/CD pipeline implementation, and engineering team leadership to deliver high-quality software that can scale and evolve with business needs.',
            yearsExperience: 'Years of Experience',
            projectsDelivered: 'Projects Delivered',
            downloadCV: 'Download CV',
            cvLink: 'https://github.com/gustavodslara/gustavodslara.github.io/raw/refs/heads/master/cv-gusdsl-ptbr.pdf',
            stack: 'Stack',
            languages: 'Languages',
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Databases',
            cloud: 'Cloud',
            ai: 'AI & Data',
            tools: 'Tools',
            gamedev: 'Game Development & 3D',
            expertise: 'Expertise',
            experience: 'Experience',
            clickToExplore: 'Click to explore my journey',
            freelance: 'Freelance'
        },
        expertise: {
        '1': {
            title: 'Distributed Systems',
            skills: ['Hexagonal Architecture', 'Event-Driven Architecture', 'Saga Pattern & Service Mesh', 'Circuit Breaker Pattern', 'TDD/BDD', 'CQRS & Event Sourcing']
        },
        '2': {
            title: 'Full-Stack Development',
            skills: ['Web Apps (Angular, Svelte)', 'Hybrid Apps (Ionic, Flutter, Qt, Tauri)', 'Native Apps (Android/iOS)', 'Microfrontend Architecture', 'Static Site Generation (SSG)', 'Client-Side Rendering (CSR)', 'Thermal Printers']
        },
        '3': {
            title: 'Artificial Intelligence',
            skills: ['Autonomous Agents', 'Chatbots & Conversational AI', 'Computer Vision', 'Image Recognition', 'Video Analysis', 'Image Generation']
        },
        '4': {
            title: 'IoT & Embedded',
            skills: ['Orange Pi', 'Zephyr RTOS', 'Bare Metal Programming', 'GPIO & Hardware Control', 'Smart Home Systems', 'Image Recognition', 'Sensors and Actuators', 'Hardware Integration', 'Biometric Readers']
        },
        '5': {
            title: '3D & Game Development',
            skills: ['3D Modeling', 'Retopology', 'Character Animation', 'Game Design Document', 'Level Design', 'Web, PC, Mobile, AR, VR and MR']
        }
    },
    education: {
            title: 'Education',
            inProgress: 'In progress'
        },
        showcases: {
            clients: 'Client Projects',
            personal: 'Personal Projects',
            morePersonal: 'More Personal Projects',
            learnMore: 'Learn More',
            access: 'Access',
            myPlatforms: 'My Platforms'
        },
        platforms: {
            unrenderDesc: 'Game studio specialized in VR games and immersive virtual reality experiences. Creating next-generation VR entertainment.',
            unrenderBtn: 'OUR PROJECTS',
            memorycardDesc: 'Automatic cloud backup for game saves across all platforms, stores, and emulators. Open source solution to never lose your game progress again.',
            memorycardBtn: 'TRY NOW'
        },
        contact: {
            title: 'Looking for the Software Architect?',
            subtitle: 'Get in touch with me:',
            emailLabel: 'Or send me an email:'
        }
    },
    common: {
        footer: {
            staticSite: '<span class="font-medium">High Performance</span> Static Site, built with',
            and: 'and',
            copyright: '© {year} Copyright | Gustavo Lara | All rights reserved.'
        },
        modal: {
            category: 'Category',
            project: 'Project',
            about: 'About the Project',
            tech: 'Technologies',
            features: 'Key Features',
            architecture: 'Software Architecture',
            gallery: 'Project Gallery',
            viewProject: 'View Project',
            viewCode: 'View Code'
        },
        model3d: {
            loading: 'Loading 3D model...',
            error: 'Failed to load model',
            checkPath: 'Make sure the file path is correct.',
            instructions: '🖱️ Drag: Rotate · Scroll: Zoom · Shift+Drag: Pan'
        }
    },
    projects: {
        '1': {
            name: 'acannabis.legal: Medical Cannabis Platform',
            description: 'Complete web platform for the legal cannabis market, offering regulatory information, certified products, and connecting users with authorized suppliers.',
            role: 'Software Architect & Full Stack Developer',
            features: [
                'Multi-level authentication and authorization system',
                'Product catalog with advanced filters',
                'Administrative panel for content management',
                'Payment APIs integration',
                'Real-time notification system'
            ]
        },
        '2': {
            name: 'EduCanoas: School management app',
            description: 'Mobile educational management application for schools, allowing student tracking, parent communication, grading management, attendance, and school activities.',
            role: 'Lead Mobile Developer',
            features: [
                'Dashboard for teachers, students, and parents',
                'Messaging and push notification system',
                'Attendance and grading control',
                'Events and activities calendar',
                'Document and material sharing',
                'Offline synchronization'
            ]
        },
        '3': {
            name: 'Skill: Landing Page + LAN Management',
            description: 'Modern web interface for a Local Area Network (LAN) management system, offering device control, traffic monitoring, and intuitive network configuration.',
            role: 'Frontend Architect',
            features: [
                'Real-time dashboard with network metrics',
                'Connected devices visualization',
                'Bandwidth control',
                'Alerts and logs system',
                'Responsive and modern interface',
                'Light and dark themes'
            ]
        },
        '1_my': {
            name: 'ng-tropicaliacraft-landingpage',
            caption: 'Landing Page for TropicaliaCraft in Angular (SSG) with zoneless hydration + Go/Fiber Services',
            description: 'High performance landing page built with modern Angular using zoneless hydration and Server-Side Generation (SSG). Includes backend integration in Go using Fiber to manage Minecraft server dynamic data.',
            features: [
                'Zoneless hydration for maximum performance',
                'Server-Side Generation (SSG)',
                'RESTful API integration in Go',
                'Responsive and accessible design'
            ]
        },
        '2_my': {
            name: 'svelte-threejs-tech-store',
            caption: 'Landing Page in SvelteKit and TailwindCSS + GSAP and Three.js Animations',
            description: 'Technological and interactive virtual store developed with SvelteKit. Combines TailwindCSS fluidity with complex animations driven by GSAP and immersive 3D visualizations rendered via Three.js.',
            features: [
                'Interactive 3D product visualization',
                'Smooth scroll-based animations (GSAP ScrollTrigger)',
                'SvelteKit architecture with fast transitions',
                'Modern and responsive layout'
            ]
        },
        'software': 'Software',
        'hardware': 'Hardware',
        '3d': '3D Modeling',
        'games': 'Games',
        'm1': { description: 'Svelte Landing Page' },
        'm2': { description: 'Web Interface for local AI' },
        'm3': { description: 'Local media streaming' },
        'm4': { description: 'Interactive cubic 3D Paint' },
        'm5': { description: 'Interactive 3D travel album' },
        'm6': { description: 'Immersive virtual tour' },
        'm10': { description: 'Minecraft infrastructure' },
        '3d-1': {
            name: 'Apple iPad Pro',
            description: 'Detailed 3D model of the Apple iPad Pro with PBR textures and realistic finish'
        },
        '3d-2': {
            name: 'ASUS ROG RTX 4090',
            description: 'Modeling of the ASUS ROG GeForce RTX 4090 graphics card with hardware details'
        },
        '3d-3': {
            name: 'Bird Orange',
            description: 'Stylized orange bird model with artistic texturing'
        },
        '3d-4': {
            name: 'Destiny 2 Character Bust',
            description: 'Character bust inspired by the Destiny 2 universe with armor details'
        },
        '3d-5': {
            name: 'iPhone 17 Pro Max',
            description: '3D concept of the iPhone 17 Pro Max with realistic metal and glass materials'
        },
        '3d-6': {
            name: 'MacBook Pro M3 16"',
            description: 'Faithful model of the 2024 MacBook Pro M3 16-inch with detailed screen and keyboard'
        },
        '3d-7': {
            name: 'Medieval Fantasy Book',
            description: 'Medieval fantasy book with detailed leather texturing and aged pages'
        },
        '3d-8': {
            name: 'Meta Quest 3',
            description: 'Meta Quest 3 mixed reality headset with controllers and engineering details'
        },
        '3d-9': {
            name: 'Samsung Galaxy S25 Ultra',
            description: '3D model of the Samsung Galaxy S25 Ultra with cameras and premium finishes'
        },
        '3d-10': {
            name: 'Steam Deck',
            description: 'Steam Deck portable console with detailed buttons, thumbsticks, and screen'
        },
        'game-1': { description: 'Cyberpunk-themed infinite runner game' },
        'game-2': { description: '2D space exploration with survival elements' }
    },
    jobs: {
        '1': {
            title: 'Software Engineer',
            description: [
                'Collaborated with an international team on a legacy system migration (PHP, MySQL), automating manual backoffice processes. Implemented an Angular microfrontend, a Quarkus Native BFF, and Python AI agents (gRPC).',
                'This resulted in 80% less latency, 60% lower resource consumption, and certificate issuance time dropped from hours to minutes, eliminating 95% of manual errors.'
            ]
        },
        '2': {
            title: 'Software Architect',
            description: 'Led the architecture and development of an AI customer service agent (Python, FastAPI, RAG), ensuring technical excellence and roadmap alignment with business goals.'
        },
        '3': {
            title: 'Tech Lead',
            description: [
                'Led the architecture and development of a modular, multi-technology post-sales platform (.NET, Spring Boot). Defined the microservices and Angular microfrontends architecture, CI/CD pipelines (GitHub Actions), and used IaC (Terraform) for AWS (EC2) production deployment.',
                'Besides sprint planning and technical backlog refinement, I mentored the team and tackled the most complex challenges hands-on, ensuring quality and continuous project evolution.'
            ]
        },
        '4': {
            title: 'Full Stack Developer',
            description: 'Worked on a maintenance sprint for a legacy system (Java 6, JSF, JBoss Seam, Oracle) for MPMA, focusing on screen updates and critical bug fixes.'
        },
        '5': {
            title: 'Senior Developer',
            description: [
                'Participated in the migration of banking systems and ATM middlewares (Spring 3) to microservices in Java 11 with Spring Boot Webflux, jPOS, ISO-8583, Apache Kafka, and Redis.',
                'Also contributed to the ATM frontend migration from Windows/JAM (Diebold Framework based on Java Swing) to Linux Yocto with Qt and Rust, integrating with the microservices.'
            ]
        },
        '6': {
            title: 'App Developer',
            description: 'Delivered the MVP of a restaurant application (Flutter), defining the state architecture with MobX within a rapid prototyping and delivery sprint.'
        },
        '7': {
            title: 'Mid-level Developer',
            description: [
                'Participated in the modernization of a legacy auditing system (Delphi, Oracle Procedures) to a microservices architecture (Java 11, Kotlin, Spring Boot) with communication via Spring Cloud (OpenFeign).',
                'Developed asynchronous processing routines (Kafka, Spring Batch), created ETL processes, and integrated with OCR (Tess4J) and legacy native libraries (JNI, JNA).'
            ]
        },
        '8': {
            title: 'Junior Developer',
            description: [
                'Worked on the development of an educational management app (Ionic 3, Angular 4, Cordova), built for a public tender and adapted for another client.',
                'Implemented an offline-first architecture (SQLite, NgRx) with Lazy Loading, and automated builds and deployments to the App Store/Google Play (Jenkins, Fastlane).'
            ]
        },
        '9': {
            title: 'Junior Developer',
            description: [
                'Worked on an ERP/POS (Java Swing, MySQL) and a BI dashboard (Angular, Spring Boot, MongoDB).',
                'Handled NFe emission (JAX-WS, XML-DSig), ETL processes, hardware integration (.dll) via JNI/JNA, and deployment with Java Web Start (JNLP).'
            ]
        }
    },
    expertise: {
        '1': {
            title: 'Distributed Systems',
            skills: ['Hexagonal Architecture', 'Event-Driven Architecture', 'Saga Pattern & Service Mesh', 'Circuit Breaker Pattern', 'TDD/BDD', 'CQRS & Event Sourcing']
        },
        '2': {
            title: 'Full-Stack Development',
            skills: ['Web Apps (Angular, Svelte)', 'Hybrid Apps (Ionic, Flutter, Qt, Tauri)', 'Native Apps (Android/iOS)', 'Microfrontend Architecture', 'Static Site Generation (SSG)', 'Client-Side Rendering (CSR)', 'Thermal Printers']
        },
        '3': {
            title: 'Artificial Intelligence',
            skills: ['Autonomous Agents', 'Chatbots & Conversational AI', 'Computer Vision', 'Image Recognition', 'Video Analysis', 'Image Generation']
        },
        '4': {
            title: 'IoT & Embedded',
            skills: ['Orange Pi', 'Zephyr RTOS', 'Bare Metal Programming', 'GPIO & Hardware Control', 'Smart Home Systems', 'Image Recognition', 'Sensors and Actuators', 'Hardware Integration', 'Biometric Readers']
        },
        '5': {
            title: '3D & Game Development',
            skills: ['3D Modeling', 'Retopology', 'Character Animation', 'Game Design Document', 'Level Design', 'Web, PC, Mobile, AR, VR and MR']
        }
    },
    education: {
        '1': {
            degree: 'Technologist',
            field: 'Internet Systems',
            description: ['Higher Degree in Internet Systems with focus on web development, programming, databases, and application architecture.']
        }
    }
};
