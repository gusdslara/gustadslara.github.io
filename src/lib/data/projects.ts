import { getToolIcon } from '$lib/config/toolIcons';
import type { ClientApp, MyApp, Tab, ProjectData } from '$lib/types/projects';

export const clientApps: ClientApp[] = [
    {
        id: '1',
        name: 'acannabis.legal: Plataforma de Cannabis Medicinal',
        image: '/assets/img/clients/acannabis.gif',
        link: 'https://acannabis.legal/',
        description:
            'Plataforma web completa para o mercado legal de cannabis, oferecendo informações regulatórias, produtos certificados e conexão entre usuários e fornecedores autorizados.',
        role: 'Arquiteto de Software & Full Stack Developer',
        year: '2023',
        technologies: ['Angular', 'TailwindCSS', 'ThreeJS', 'Go', 'WebRTC', 'Stripe'],
        features: [
            'Sistema de autenticação e autorização multi-nível',
            'Catálogo de produtos com filtros avançados',
            'Painel administrativo para gerenciamento de conteúdo',
            'Integração com APIs de pagamento',
            'Sistema de notificações em tempo real'
        ],
        stackImages: ['Angular', 'Go', 'WebRTC', 'Stripe'].map((t) => getToolIcon(t) ?? ''),
        stackImageNames: ['Angular', 'Go', 'WebRTC', 'Stripe'],
        backgroundColor: '#E2F1E7',
        titleColor: '#000000',
        type: 'desktop',
        phoneImages: [
            '/assets/img/clients/cannabislegal-logo.png',
            '/assets/img/clients/acannabis.jpg'
        ]
    },
    {
        id: '2',
        name: 'EduCanoas: App de gestão educacional',
        image: '/assets/img/clients/educanoas.gif',
        link: 'https://apkpure.com/br/educanoas/br.com.abaco.rs.canoas.educanoas',
        description:
            'Aplicativo mobile de gestão educacional para escolas, permitindo acompanhamento de alunos, comunicação com pais, gerenciamento de notas, frequência e atividades escolares.',
        role: 'Lead Mobile Developer',
        year: '2022-2023',
        technologies: ['Ionic', 'Android', 'iOS', 'Cordova', 'Firebase'],
        features: [
            'Painel para professores, alunos e pais',
            'Sistema de mensagens e notificações push',
            'Controle de frequência e notas',
            'Calendário de eventos e atividades',
            'Compartilhamento de documentos e materiais',
            'Sincronização offline'
        ],
        stackImages: ['Ionic', 'Android', 'iOS', 'Cordova'].map((t) => getToolIcon(t) ?? ''),
        stackImageNames: ['Ionic', 'Android', 'iOS', 'Cordova'],
        backgroundColor: '#E1F0FF',
        titleColor: '#000000',
        type: 'mobile',
        phoneImages: ['/assets/img/clients/educanoas1.png', '/assets/img/clients/educanoas2.png']
    },
    {
        id: '3',
        name: 'Skill: Landing Page + Gerenciamento de LAN',
        image: '/assets/img/clients/skill.gif',
        link: 'https://skill.unrender.dev/',
        description:
            'Interface web moderna para sistema de gerenciamento de rede local (LAN), oferecendo controle de dispositivos, monitoramento de tráfego e configuração de rede de forma intuitiva.',
        role: 'Frontend Architect',
        year: '2023',
        technologies: ['Svelte', 'TailwindCSS', 'Go', 'Qt'],
        features: [
            'Dashboard em tempo real com métricas de rede',
            'Visualização de dispositivos conectados',
            'Controle de largura de banda',
            'Sistema de alertas e logs',
            'Interface responsiva e moderna',
            'Temas claro e escuro'
        ],
        stackImages: ['Svelte', 'TailwindCSS', 'Go', 'Qt'].map((t) => getToolIcon(t) ?? ''),
        stackImageNames: ['Svelte', 'TailwindCSS', 'Go', 'Qt'],
        backgroundColor: '#FFE2E2',
        titleColor: '#000000',
        type: 'desktop-left',
        phoneImages: ['/assets/img/clients/skilllan1.jpg', '/assets/img/clients/skilllan2.png']
    }
];

export const myApps: MyApp[] = [
    {
        id: 1,
        name: 'ng-tropicaliacraft-landingpage',
        image: '/assets/img/apps/tropicalia.webp',
        caption:
            'Landing Page para o TropicaliaCraft em Angular (SSG) com hidratação zoneless + Serviços em Go/Fiber',
        description:
            'Landing page de alta performance construída com Angular moderno utilizando hidratação zoneless e Server-Side Generation (SSG). Inclui integração com serviços backend em Go usando Fiber para gerenciar os dados dinâmicos do servidor de Minecraft.',
        technologies: ['Angular', 'Go', 'TailwindCSS'],
        features: [
            'Hidratação Zoneless para máxima performance',
            'Server-Side Generation (SSG)',
            'Integração com API RESTful em Go',
            'Design responsivo e acessível'
        ],
        background: '#F5F5F0',
        link: 'https://tropicaliacraft.online/',
        githubUrl: 'https://github.com/gustavodslara/ng-tropicaliacraft-landing-page',
        additionalImages: []
    },
    {
        id: 2,
        name: 'svelte-threejs-tech-store',
        image: '/assets/img/apps/techstore.webp',
        caption: 'Landing Page em SvelteKit e TailwindCSS + Animações com GSAP e Three.js',
        description:
            'Loja virtual tecnológica e interativa desenvolvida com SvelteKit. Combina a fluidez do TailwindCSS com animações complexas controladas pelo GSAP e visualizações 3D imersivas renderizadas via Three.js.',
        technologies: ['Svelte', 'TailwindCSS', 'ThreeJS', 'Vite'],
        features: [
            'Visualização de produtos em 3D interativo',
            'Animações suaves baseadas em scroll (GSAP ScrollTrigger)',
            'Arquitetura SvelteKit com transições rápidas',
            'Layout moderno e responsivo'
        ],
        background: '#FFF0E0',
        link: 'https://techstore.gustavodslara.pro/',
        githubUrl: 'https://github.com/gustavodslara/svelte-threejs-tech-store',
        additionalImages: []
    }
];

export const tabs: Tab[] = [
    {
        id: 'software',
        label: 'Software',
        icon: 'fa-solid fa-code'
    },
    {
        id: 'hardware',
        label: 'Hardware',
        icon: 'fa-solid fa-microchip'
    },
    {
        id: '3d',
        label: 'Modelagem 3D',
        icon: 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44a.5.5 0 0 1-.57 0l-7.9-4.44A1 1 0 0 1 3.5 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.36-.14.57-.14s.41.05.57.14l7.9 4.44c.32.17.53.5.53.88v9zM12 4.14L5.82 7.62 12 11.1l6.18-3.48L12 4.14zM11 19.38l-6-3.38V9.38l6 3.38v6.62zm2 0v-6.62l6-3.38v6.62l-6 3.38z'
    },
    {
        id: 'games',
        label: 'Games',
        icon: 'M15.5 14a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zm3.5-3a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zM21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2z'
    }
];

export const moreProjects: ProjectData[] = [
    {
        id: 'm1',
        name: 'Pantheon Launcher',
        category: 'software',
        image: '/assets/img/logos/phanteon.png',
        color: '#FFE2E2',
        description: 'Landing Page em Svelte',
        technologies: ['Svelte', 'TailwindCSS'],
        githubUrl: 'https://github.com/gustavodslara/pantheon-launcher',
        link: 'https://pantheon.gustavodslara.pro/'
    },
    {
        id: 'm2',
        name: 'PolyUI',
        category: 'software',
        image: '/assets/img/logos/polyui.png',
        color: '#FFF0E0',
        description: 'Interface Web para IA local',
        technologies: ['Svelte', 'TailwindCSS'],
        githubUrl: 'https://github.com/gustavodslara/poly-ui',
        link: 'https://polyui.gustavodslara.pro/'
    },
    {
        id: 'm3',
        name: 'Argus Player',
        category: 'software',
        image: '/assets/img/logos/argusplayer.png',
        color: '#E1F0FF',
        description: 'Streaming de mídia local',
        technologies: ['Angular', 'Go'],
        githubUrl: 'https://github.com/gustavodslara/argus-player',
        link: 'https://argus.gustavodslara.pro/'
    },
    {
        id: 'm4',
        name: 'Voxel Canvas',
        category: 'software',
        image: '/assets/img/logos/voxelcanvas.png',
        color: '#E2F1E7',
        description: 'Paint 3D cúbico interativo',
        technologies: ['ThreeJS', 'Svelte'],
        githubUrl: 'https://github.com/gustavodslara/threejs-voxel-canvas',
        link: 'https://voxelcanvas.gustavodslara.pro/'
    },
    {
        id: 'm5',
        name: 'World Trips Album',
        category: 'software',
        image: '/assets/img/logos/worldtrip.png',
        color: '#FFF0E0',
        description: 'Album interativo de viagens em 3D',
        technologies: ['Angular', 'ThreeJS'],
        githubUrl: 'https://github.com/gustavodslara/ng-threejs-world-trips',
        link: 'https://trips.gustavodslara.pro/'
    },
    {
        id: 'm6',
        name: 'WebXR Tour Virtual',
        category: 'software',
        image: '/assets/img/logos/virtualtour.png',
        color: '#E1F0FF',
        description: 'Passeio virtual imersivo',
        technologies: ['ThreeJS', 'WebXR', 'Svelte'],
        githubUrl: 'https://github.com/gustavodslara/svelte-threejs-tour-virtual'
    },
    {
        id: 'm10',
        name: 'Tropicalia Server',
        category: 'hardware',
        image: '/assets/img/apps/server.webp',
        color: '#E0FFF4',
        description: 'Infraestrutura de Minecraft',
        technologies: ['Go', 'Docker', 'Azure'],
        link: 'https://tropicaliacraft.online/'
    },
    {
        id: '3d-1',
        name: 'Apple iPad Pro',
        category: '3d',
        image: '/assets/3dmodels/apple_ipad_pro.png',
        color: '#E8EBF0',
        description: 'Modelo 3D detalhado do Apple iPad Pro com texturas PBR e acabamento realista',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/apple_ipad_pro.glb'
    },
    {
        id: '3d-2',
        name: 'ASUS ROG RTX 4090',
        category: '3d',
        image: '/assets/3dmodels/asus_rog_geforce_rtx_4090_v2.0.png',
        color: '#EBE4FF',
        description: 'Modelagem da placa de vídeo ASUS ROG GeForce RTX 4090 com detalhes de hardware',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/asus_rog_geforce_rtx_4090_v2.0.glb'
    },
    {
        id: '3d-3',
        name: 'Bird Orange',
        category: '3d',
        image: '/assets/3dmodels/bird_orange.png',
        color: '#FFF0E0',
        description: 'Modelo estilizado de pássaro laranja com texturização artística',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/bird_orange.glb'
    },
    {
        id: '3d-4',
        name: 'Destiny 2 Character Bust',
        category: '3d',
        image: '/assets/3dmodels/destiny_2_character_bust.png',
        color: '#EBE4FF',
        description: 'Busto de personagem inspirado no universo Destiny 2 com detalhes de armadura',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/destiny_2_character_bust.glb'
    },
    {
        id: '3d-5',
        name: 'iPhone 17 Pro Max',
        category: '3d',
        image: '/assets/3dmodels/iphone_17_pro_max.png',
        color: '#E8EBF0',
        description: 'Conceito 3D do iPhone 17 Pro Max com materiais metálicos e vidro realistas',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/iphone_17_pro_max.glb'
    },
    {
        id: '3d-6',
        name: 'MacBook Pro M3 16"',
        category: '3d',
        image: '/assets/3dmodels/macbook_pro_m3_16_inch_2024.png',
        color: '#E8EBF0',
        description: 'Modelo fiel do MacBook Pro M3 16 polegadas 2024 com tela e teclado detalhados',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/macbook_pro_m3_16_inch_2024.glb'
    },
    {
        id: '3d-7',
        name: 'Medieval Fantasy Book',
        category: '3d',
        image: '/assets/3dmodels/medieval_fantasy_book.png',
        color: '#F5F5F0',
        description: 'Livro de fantasia medieval com texturização detalhada de couro e páginas envelhecidas',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/medieval_fantasy_book.glb'
    },
    {
        id: '3d-8',
        name: 'Meta Quest 3',
        category: '3d',
        image: '/assets/3dmodels/meta_quest_3.png',
        color: '#EBE4FF',
        description: 'Headset de realidade mista Meta Quest 3 com controladores e detalhes de engenharia',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/meta_quest_3.glb'
    },
    {
        id: '3d-9',
        name: 'Samsung Galaxy S25 Ultra',
        category: '3d',
        image: '/assets/3dmodels/s_amsung_galaxy_s25_ultra_galaxy.png',
        color: '#E8EBF0',
        description: 'Modelo 3D do Samsung Galaxy S25 Ultra com câmeras e acabamentos premium',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/s_amsung_galaxy_s25_ultra_galaxy.glb'
    },
    {
        id: '3d-10',
        name: 'Steam Deck',
        category: '3d',
        image: '/assets/3dmodels/steam_deck_console.png',
        color: '#E8EBF0',
        description: 'Console portátil Steam Deck com botões, thumbsticks e tela detalhados',
        technologies: ['Blender', 'ThreeJS'],
        modelPath: '/assets/3dmodels/steam_deck_console.glb'
    },
    {
        id: 'game-1',
        name: 'Cyber Run',
        category: 'games',
        image: '/assets/img/apps/techstore.webp',
        color: '#FFE2E2',
        description: 'Jogo de corrida infinita com tema cyberpunk',
        technologies: ['Unity', 'C#'],
        link: 'https://itch.io/jam/example-game'
    },
    {
        id: 'game-2',
        name: 'Space Explorer',
        category: 'games',
        image: '/assets/img/apps/techstore.webp',
        color: '#E1F0FF',
        description: 'Exploração espacial em 2D com elementos de survival',
        technologies: ['Godot', 'GDScript'],
        link: 'https://store.steampowered.com/'
    }
];
