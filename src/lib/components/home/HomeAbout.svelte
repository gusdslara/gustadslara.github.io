<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Motion } from 'svelte-motion';
	import AnimatedSection from '$lib/components/utils/AnimatedSection.svelte';
	import { staggerContainer, fadeUpVariant, hoverSpring } from '$lib/utils/animations';
	import ScrollText from '$lib/components/utils/ScrollText.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { t } from '$lib/i18n';

	gsap.registerPlugin(ScrollTrigger);

	
	
	let openJobs: Set<number> = new Set([1, 3, 5, 7, 8, 9]);
	let selectedExpertise = 0;

	
	let stackSection: HTMLElement;
	let scrollTriggers: ScrollTrigger[] = [];

	function initGsapScrollAnimations() {
		if (!stackSection) return;

		const categories = stackSection.querySelectorAll('.stack-category');

		categories.forEach((cat, i) => {
			
			gsap.set(cat, { opacity: 0, y: 40, scale: 0.95 });

			
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: cat,
					start: 'top 95%',
					end: 'top 60%',
					scrub: 0.8
					
				}
			});

			tl.to(cat, {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 1,
				ease: 'elastic.out(1, 0.5)'
			});

			if (tl.scrollTrigger) {
				scrollTriggers.push(tl.scrollTrigger);
			}
		});
	}

	onMount(async () => {
		
		if (window.innerWidth < 768) {
			openJobs = new Set([1]);
		}
		

		
		await tick();
		initGsapScrollAnimations();
	});

	onDestroy(() => {
		
		scrollTriggers.forEach((st) => st.kill());
		scrollTriggers = [];
	});

	$: expertise = [
		{
			title: $t('expertise.1.title'),
			skills: $t('expertise.1.skills') as any as string[]
		},
		{
			title: $t('expertise.2.title'),
			skills: $t('expertise.2.skills') as any as string[]
		},
		{
			title: $t('expertise.3.title'),
			skills: $t('expertise.3.skills') as any as string[]
		},
		{
			title: $t('expertise.4.title'),
			skills: $t('expertise.4.skills') as any as string[]
		},
		{
			title: $t('expertise.5.title'),
			skills: $t('expertise.5.skills') as any as string[]
		}
	];

	const techStack = {
		languages: [
			{
				name: 'JavaScript',
				logo: '/assets/img/tools/javascript.png',
				link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{
				name: 'TypeScript',
				logo: '/assets/img/tools/typescript.png',
				link: 'https://www.typescriptlang.org/'
			},
			{ name: 'Python', logo: '/assets/img/tools/javascript.png', link: 'https://www.python.org/' },
			{ name: 'Java', logo: '/assets/img/tools/java.png', link: 'https://www.java.com/' },
			{
				name: 'Kotlin',
				logo: '/assets/img/tools/kotlin-logo.png',
				link: 'https://kotlinlang.org/'
			},
			{ name: 'Scala', logo: '/assets/img/tools/scala.png', link: 'https://www.scala-lang.org/' },
			{ name: 'Groovy', logo: '/assets/img/tools/groovy.png', link: 'https://groovy-lang.org/' },
			{ name: 'Swift', logo: '/assets/img/tools/swift.png', link: 'https://swift.org/' },
			{ name: 'Golang', logo: '/assets/img/tools/golang.png', link: 'https://go.dev/' },
			{ name: 'Rust', logo: '/assets/img/tools/rust.png', link: 'https://www.rust-lang.org/' },
			{
				name: 'C',
				logo: '/assets/img/tools/c.png',
				link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
			},
			{ name: 'C++', logo: '/assets/img/tools/c++.png', link: 'https://isocpp.org/' }
		],
		frontend: [
			{
				name: 'Angular',
				logo: '/assets/img/tools/angular.png',
				link: 'https://angular.io/',
				color: '#DD0031'
			},
			{
				name: 'NgRx',
				logo: '/assets/img/tools/ngrx.svg',
				link: 'https://ngrx.io/',
				color: '#BA2BD2'
			},
			{
				name: 'Svelte',
				logo: '/assets/img/tools/svelte.png',
				link: 'https://svelte.dev/'
			},
			{ name: 'Ionic', logo: '/assets/img/tools/ionic.png', link: 'https://ionicframework.com/' },
			{
				name: 'Tailwind CSS',
				logo: '/assets/img/tools/tailwind.png',
				link: 'https://tailwindcss.com/'
			},
			{
				name: 'Sass',
				logo: '/assets/img/tools/sass-logo.svg',
				link: 'https://sass-lang.com/',
				color: '#CC6699'
			},
			{
				name: 'Flutter',
				logo: '/assets/img/tools/flutter_logo.svg',
				link: 'https://flutter.dev/',
				color: '#02569B'
			},
			{
				name: 'Android',
				logo: '/assets/img/tools/android.svg',
				link: 'https://developer.android.com/',
				color: '#3DDC84'
			},
			{
				name: 'Jetpack Compose',
				logo: '/assets/img/tools/pic_jetpack_compose.png',
				link: 'https://developer.android.com/jetpack/compose'
			},
			{
				name: 'SwiftUI',
				logo: '/assets/img/tools/swiftui.png',
				link: 'https://developer.apple.com/xcode/swiftui/'
			},
			{ name: 'Qt', logo: '/assets/img/tools/qt.png', link: 'https://www.qt.io/' },
			{ name: 'LVGL', logo: '/assets/img/tools/lvgl.png', link: 'https://lvgl.io/' },
			{ name: 'Tauri', logo: '/assets/img/tools/tauri.png', link: 'https://tauri.app/' },
			{ name: 'D3.js', logo: '/assets/img/tools/d3.svg', link: 'https://d3js.org/' },
			{
				name: 'Highcharts',
				logo: '/assets/img/tools/highchart-logo.png',
				link: 'https://www.highcharts.com/'
			},
			{ name: 'Chart.js', logo: '/assets/img/tools/chartjs.png', link: 'https://www.chartjs.org/' }
		],
		backend: [
			{ name: 'Node.js', logo: '/assets/img/tools/nodejs.png', link: 'https://nodejs.org/' },
			{ name: 'Express', logo: '/assets/img/tools/express.png', link: 'https://expressjs.com/' },
			{ name: 'NestJS', logo: '/assets/img/tools/nestjs.png', link: 'https://nestjs.com/' },
			{ name: 'Prisma', logo: '/assets/img/tools/prisma.png', link: 'https://www.prisma.io/' },
			{
				name: 'Sequelize',
				logo: '/assets/img/tools/sequelize.png',
				link: 'https://sequelize.org/'
			},
			{
				name: 'Spring Boot',
				logo: '/assets/img/tools/springboot.png',
				link: 'https://spring.io/projects/spring-boot'
			},
			{ name: 'Quarkus', logo: '/assets/img/tools/quarkus.png', link: 'https://quarkus.io/' },
			{
				name: 'Micronaut',
				logo: '/assets/img/tools/micronaut.png',
				link: 'https://micronaut.io/',
				color: '#000000'
			},
			{ name: 'Helidon', logo: '/assets/img/tools/helidon.png', link: 'https://helidon.io/' },
			{ name: 'Fiber', logo: '/assets/img/tools/golang.png', link: 'https://gofiber.io/' },
			{ name: 'gRPC', logo: '/assets/img/tools/grpc.png', link: 'https://grpc.io/' }
		],
		databases: [
			{
				name: 'PostgreSQL',
				logo: '/assets/img/tools/postgres.png',
				link: 'https://www.postgresql.org/'
			},
			{ name: 'MySQL', logo: '/assets/img/tools/mysql.png', link: 'https://www.mysql.com/' },
			{
				name: 'Oracle DB',
				logo: '/assets/img/tools/oracledb.png',
				link: 'https://www.oracle.com/database/'
			},
			{ name: 'MongoDB', logo: '/assets/img/tools/mongodb.png', link: 'https://www.mongodb.com/' },
			{ name: 'Redis', logo: '/assets/img/tools/redis.png', link: 'https://redis.io/' },
			{ name: 'Neo4j', logo: '/assets/img/tools/neo4j.png', link: 'https://neo4j.com/' },
			{
				name: 'ChromaDB',
				logo: '/assets/img/tools/chromadb.png',
				link: 'https://www.trychroma.com/'
			},
			{
				name: 'Firebase',
				logo: '/assets/img/tools/firebase.png',
				link: 'https://firebase.google.com/'
			}
		],
		cloud: [
			{ name: 'Docker', logo: '/assets/img/tools/docker.png', link: 'https://www.docker.com/' },
			{
				name: 'Kubernetes',
				logo: '/assets/img/tools/kubernetes.png',
				link: 'https://kubernetes.io/'
			},
			{
				name: 'Terraform',
				logo: '/assets/img/tools/terraform.png',
				link: 'https://www.terraform.io/'
			},
			{ name: 'AWS', logo: '/assets/img/tools/aws.png', link: 'https://aws.amazon.com/' },
			{ name: 'Azure', logo: '/assets/img/tools/azure.png', link: 'https://azure.microsoft.com/' },
			{
				name: 'Google Cloud',
				logo: '/assets/img/tools/google-cloud.png',
				link: 'https://cloud.google.com/'
			},
			{ name: 'Kafka', logo: '/assets/img/tools/kafka.png', link: 'https://kafka.apache.org/' },
			{
				name: 'RabbitMQ',
				logo: '/assets/img/tools/rabbitmq.png',
				link: 'https://www.rabbitmq.com/'
			},
			{ name: 'GitHub', logo: '/assets/img/tools/github.png', link: 'https://github.com/' },
			{ name: 'Maven', logo: '/assets/img/tools/maven.png', link: 'https://maven.apache.org/' },
			{ name: 'Gradle', logo: '/assets/img/tools/gradle.png', link: 'https://gradle.org/' },
			{
				name: 'ELK Stack',
				logo: '/assets/img/tools/elk stack.png',
				link: 'https://www.elastic.co/elastic-stack'
			},
			{
				name: 'SonarQube',
				logo: '/assets/img/tools/sonarqube.png',
				link: 'https://www.sonarqube.org/'
			}
		],
		ai: [
			{
				name: 'FastAPI',
				logo: '/assets/img/tools/fastapi.png',
				link: 'https://fastapi.tiangolo.com/'
			},
			{ name: 'PyTorch', logo: '/assets/img/tools/pytorch.png', link: 'https://pytorch.org/' },
			{
				name: 'TensorFlow',
				logo: '/assets/img/tools/tensorflow.png',
				link: 'https://www.tensorflow.org/'
			},
			{
				name: 'TensorFlow.js',
				logo: '/assets/img/tools/tensorflowjs.png',
				link: 'https://www.tensorflow.org/js'
			},
			{
				name: 'LangChain',
				logo: '/assets/img/tools/langchain.png',
				link: 'https://www.langchain.com/'
			},
			{
				name: 'LlamaIndex',
				logo: '/assets/img/tools/llamaindex.png',
				link: 'https://www.llamaindex.ai/'
			},
			{ name: 'Ollama', logo: '/assets/img/tools/ollama.png', link: 'https://ollama.ai/' },
			{
				name: 'MCP Server',
				logo: '/assets/img/tools/mcpserver.png',
				link: 'https://modelcontextprotocol.io/'
			},
			{ name: 'OpenCV', logo: '/assets/img/tools/opencv.png', link: 'https://opencv.org/' },
			{ name: 'Pandas', logo: '/assets/img/tools/pandas.png', link: 'https://pandas.pydata.org/' },
			{ name: 'NumPy', logo: '/assets/img/tools/numpy.png', link: 'https://numpy.org/' },
			{ name: 'MQTT', logo: '/assets/img/tools/mqtt.png', link: 'https://mqtt.org/' }
		],
		tools: [
			{ name: 'Git', logo: '/assets/img/tools/git.png', link: 'https://git-scm.com/' },
			{
				name: 'VS Code',
				logo: '/assets/img/tools/vscode.png',
				link: 'https://code.visualstudio.com/'
			},
			{
				name: 'IntelliJ IDEA',
				logo: '/assets/img/tools/intellij.png',
				link: 'https://www.jetbrains.com/idea/'
			},
			{
				name: 'DataGrip',
				logo: '/assets/img/tools/datagrip.png',
				link: 'https://www.jetbrains.com/datagrip/'
			},
			{
				name: 'Figma',
				logo: '/assets/img/tools/figma.svg',
				link: 'https://www.figma.com/',
				color: '#F24E1E'
			},
			{
				name: 'Affinity',
				logo: '/assets/img/tools/affinity.png',
				link: 'https://affinity.serif.com/'
			},
			{ name: 'GIMP', logo: '/assets/img/tools/gimp.png', link: 'https://www.gimp.org/' },
			{ name: 'Inkscape', logo: '/assets/img/tools/inkscape.png', link: 'https://inkscape.org/' }
		],
		gamedev: [
			{ name: 'Unity', logo: '/assets/img/tools/unity.png', link: 'https://unity.com/' },
			{
				name: 'Unreal Engine',
				logo: '/assets/img/tools/unreal.png',
				link: 'https://www.unrealengine.com/'
			},
			{ name: 'Blender', logo: '/assets/img/tools/blender.png', link: 'https://www.blender.org/' },
			{ name: 'Three.js', logo: '/assets/img/tools/threejs.png', link: 'https://threejs.org/' },
			{
				name: 'Babylon.js',
				logo: '/assets/img/tools/babylonjs.png',
				link: 'https://www.babylonjs.com/'
			},
			{ name: 'p5.js', logo: '/assets/img/tools/p5js.png', link: 'https://p5js.org/' }
		]
	};

	interface JobExperience {
		id: number;
		company: string;
		logo: string;
		title: string;
		startDate: string;
		endDate: string;
		color: string;
		description: string | string[];
		isFreelance?: boolean;
	}

	$: experiences = [
		{
			id: 1,
			company: 'QIMA',
			logo: '/assets/img/logos/qima_logo.png',
			title: $t('jobs.1.title'),
			startDate: 'Set 2024',
			endDate: 'Out 2025',
			color: '#DD206B',
			description: $t('jobs.1.description')
		},
		{
			id: 2,
			company: 'Umbler',
			logo: '/assets/img/logos/umbler.jpg',
			title: $t('jobs.2.title'),
			startDate: 'Jun 2024',
			endDate: 'Out 2024',
			color: '#FF6B35',
			description: $t('jobs.2.description'),
			isFreelance: true
		},
		{
			id: 3,
			company: 'MamInfo',
			logo: '/assets/img/logos/maminfo_logo.png',
			title: $t('jobs.3.title'),
			startDate: 'Mai 2022',
			endDate: 'Jul 2024',
			color: '#9C27B0',
			description: $t('jobs.3.description')
		},
		{
			id: 4,
			company: 'Totem TI',
			logo: '/assets/img/logos/totemti_logo.png',
			title: $t('jobs.4.title'),
			startDate: 'Jun 2022',
			endDate: '1 sprint',
			color: '#FF9500',
			description: $t('jobs.4.description'),
			isFreelance: true
		},
		{
			id: 5,
			company: 'Accenture Brasil',
			logo: '/assets/img/logos/accenture_logo.png',
			title: $t('jobs.5.title'),
			startDate: 'Mai 2021',
			endDate: 'Mai 2022',
			color: '#F57FFF',
			description: $t('jobs.5.description')
		},
		{
			id: 6,
			company: 'ArloesiTech',
			logo: '/assets/img/logos/arloesitech_logo.png',
			title: $t('jobs.6.title'),
			startDate: 'Ago 2021',
			endDate: '1 sprint',
			color: '#00C9A7',
			description: $t('jobs.6.description'),
			isFreelance: true
		},
		{
			id: 7,
			company: 'TCE-MT',
			logo: '/assets/img/logos/tcemt_logo.png',
			title: $t('jobs.7.title'),
			startDate: 'Jan 2020',
			endDate: 'Mai 2021',
			color: '#027DFD',
			description: $t('jobs.7.description')
		},
		{
			id: 8,
			company: 'Ábaco Tecnologia',
			logo: '/assets/img/logos/abaco_logo.png',
			title: $t('jobs.8.title'),
			startDate: 'Jan 2019',
			endDate: 'Jan 2020',
			color: '#68F17E',
			description: $t('jobs.8.description')
		},
		{
			id: 9,
			company: 'Totem TI',
			logo: '/assets/img/logos/totemti_logo.png',
			title: $t('jobs.9.title'),
			startDate: 'Mar 2018',
			endDate: 'Dez 2018',
			color: '#FFD647',
			description: $t('jobs.9.description')
		}
	];

	function toggleJob(id: number) {
		if (openJobs.has(id)) {
			openJobs.delete(id);
		} else {
			openJobs.add(id);
		}
		openJobs = openJobs; 
	}
</script>

<div id="about" class="home-about pt-8 pb-4 md:pt-16 md:pb-8 px-4 md:px-8 lg:px-12">
	
	<div class="mb-6 md:mb-8">
		<h2 class="text-3xl md:text-4xl font-medium whitespace-nowrap">
			<ScrollText text={$t('home.about.title')} />
		</h2>
	</div>

	<div class="max-w-7xl mx-auto">
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
			
			<div class="flex flex-col">
				<AnimatedSection customVariant={staggerContainer} tag="div" className="flex flex-col">
					<div class="h-12 md:h-16"></div>

					<Motion variants={fadeUpVariant} let:motion>
						<p use:motion class="text-base md:text-lg leading-relaxed text-black/70 mb-3 md:mb-4">
							{@html $t('home.about.desc1')}
						</p>
					</Motion>

					<Motion variants={fadeUpVariant} let:motion>
						<p use:motion class="text-base md:text-lg leading-relaxed text-black/70 mb-8 md:mb-14">
							{@html $t('home.about.desc2')}
						</p>
					</Motion>

					
					<Motion
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { type: 'spring', stiffness: 300, damping: 20 }
							}
						}}
						let:motion
					>
						<div use:motion class="flex flex-wrap gap-8 md:gap-12 mb-8 md:mb-14">
							<div>
								<h2 class="text-4xl md:text-5xl font-extralight mb-3">8+</h2>
								<h4 class="text-lg md:text-xl font-normal">{$t('home.about.yearsExperience')}</h4>
							</div>
							<div>
								<h2 class="text-4xl md:text-5xl font-extralight mb-3">20+</h2>
								<h4 class="text-lg md:text-xl font-normal">{$t('home.about.projectsDelivered')}</h4>
							</div>
						</div>
					</Motion>

					<Motion
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { type: 'spring', stiffness: 300, damping: 20 }
							}
						}}
						let:motion
					>
						<Motion
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							let:motion={buttonMotion}
						>
							<a
								use:motion
								href={$t('home.about.cvLink')}
								target="_blank"
								rel="noopener"
								class="inline-block self-start bg-[#dd206b] text-white px-8 py-3 rounded transition-all duration-300 font-medium shadow-[0_2px_8px_rgba(221,32,107,0.3)] hover:bg-[#c01252] hover:shadow-[0_4px_12px_rgba(221,32,107,0.4)] no-underline"
							>
								<div use:buttonMotion>{$t('home.about.downloadCV')}</div>
							</a>
						</Motion>
					</Motion>
				</AnimatedSection>

				<div>
					<div class="mt-8 md:mt-12" bind:this={stackSection}>
						<div class="flex items-end gap-3 mb-4 md:mb-6">
							<h4 class="text-xl md:text-2xl font-normal whitespace-nowrap">
								<ScrollText text={$t('home.about.stack')} />
							</h4>
						</div>

						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.languages')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.languages as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline bg-gray-100 text-black whitespace-nowrap"
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.frontend')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.frontend as tool, i}
									<a
										href={tool.link}
										target="_blank"
										rel="noopener"
										class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg no-underline whitespace-nowrap"
										class:bg-gray-100={!tool.color}
										class:text-black={!tool.color}
										class:text-white={tool.color}
										style={tool.color ? `background-color: ${tool.color};` : ''}
									>
										<img
											src={tool.logo}
											alt={tool.name}
											class="h-4 md:h-5 w-auto object-contain"
											style="max-height: 20px; max-width: 100px;"
										/>
										<span class="text-xs md:text-sm font-medium">{tool.name}</span>
									</a>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.backend')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.backend as tool, i}
									<a
										href={tool.link}
										target="_blank"
										rel="noopener"
										class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg no-underline whitespace-nowrap"
										class:bg-gray-100={!tool.color}
										class:text-black={!tool.color}
										class:text-white={tool.color}
										style="{tool.color
											? `background-color: ${tool.color};`
											: ''} animation-delay: {1.1 + i * 0.03}s;"
									>
										<img
											src={tool.logo}
											alt={tool.name}
											class="h-4 md:h-5 w-auto object-contain"
											style="max-height: 20px; max-width: 100px;"
										/>
										<span class="text-xs md:text-sm font-medium">{tool.name}</span>
									</a>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.databases')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.databases as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline bg-gray-100 text-black whitespace-nowrap"
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.cloud')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.cloud as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline bg-gray-100 text-black whitespace-nowrap"
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.ai')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.ai as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline bg-gray-100 text-black whitespace-nowrap"
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">{$t('home.about.tools')}</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.tools as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline whitespace-nowrap"
											class:bg-gray-100={!tool.color}
											class:text-black={!tool.color}
											class:text-white={tool.color}
											style={tool.color ? `background-color: ${tool.color};` : ''}
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						
						<div class="mb-6 stack-category">
							<h5 class="text-sm md:text-base font-semibold mb-3 text-gray-600">
								{$t('home.about.gamedev')}
							</h5>
							<div class="flex flex-wrap gap-2 md:gap-3 justify-start">
								{#each techStack.gamedev as tool, i}
									<Motion
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={hoverMotion}
									>
										<a
											href={tool.link}
											target="_blank"
											rel="noopener"
											class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:shadow-lg no-underline whitespace-nowrap bg-gray-100 text-black"
										>
											<div use:hoverMotion class="flex items-center gap-2">
												<img
													src={tool.logo}
													alt={tool.name}
													class="h-4 md:h-5 w-auto object-contain"
													style="max-height: 20px; max-width: 100px;"
												/>
												<span class="text-xs md:text-sm font-medium">{tool.name}</span>
											</div>
										</a>
									</Motion>
								{/each}
							</div>
						</div>

						
						<div class="mt-8 mb-6 stack-category">
							<div class="flex items-end gap-3 mb-4 md:mb-6">
								<h4 class="text-xl md:text-2xl font-normal whitespace-nowrap">
									<ScrollText text={$t('home.about.expertise')} />
								</h4>
							</div>

							
							<div class="flex flex-wrap gap-2 mb-6 pb-2 relative">
								{#each expertise as item, i}
									<Motion
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: 'spring', stiffness: 400, damping: 10 }}
										let:motion={tabMotion}
									>
										<button
											use:tabMotion
											class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
											class:bg-black={selectedExpertise === i}
											class:text-white={selectedExpertise === i}
											class:bg-gray-100={selectedExpertise !== i}
											class:text-gray-600={selectedExpertise !== i}
											class:hover:bg-gray-200={selectedExpertise !== i}
											on:click={() => (selectedExpertise = i)}
											on:keydown={(e) => e.key === 'Enter' && (selectedExpertise = i)}
										>
											{item.title}
										</button>
									</Motion>
								{/each}
							</div>

							
							<div class="bg-gray-50/50 rounded-xl p-5 md:p-6 border border-gray-100 min-h-[220px]">
								{#key selectedExpertise}
									<div
										class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4"
										in:fade={{ duration: 300, delay: 50 }}
									>
										{#each expertise[selectedExpertise].skills as skill}
											<div class="flex items-start gap-3">
												<span class="text-[#dd206b] text-xl leading-5 mt-0.5">•</span>
												<span class="text-sm md:text-base text-gray-800 font-medium">{skill}</span>
											</div>
										{/each}
									</div>
								{/key}
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div id="experience" class="relative flex flex-col items-start mt-8 md:mt-0 pl-4 md:pl-8">
				<div class="mb-6">
					<h3 class="text-2xl md:text-3xl font-normal text-black mb-2">
						<ScrollText text={$t('home.about.experience')} />
					</h3>
					<p class="text-sm text-black/60">{$t('home.about.clickToExplore')}</p>
				</div>

				
				<div class="relative w-full">
					
					<div
						class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#dd206b] via-[#667eea] to-[#FFD647]"
					></div>

					
					{#each experiences as exp, i}
						<div
							class="relative mb-6 pl-16 cursor-pointer group"
							style="animation-delay: {0.8 + i * 0.08}s;"
							on:click={() => toggleJob(exp.id)}
							on:keydown={(e) => e.key === 'Enter' && toggleJob(exp.id)}
							role="button"
							tabindex="0"
						>
							
							<div
								class="absolute left-6 top-4 w-10 h-0.5 transition-all duration-300 group-hover:w-12"
								style="background: {exp.color};"
								class:border-dashed={exp.isFreelance}
							></div>

							
							<div
								class="absolute left-4 top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform group-hover:scale-125 shadow-lg"
								style="background: {openJobs.has(exp.id)
									? exp.color
									: '#fff'}; border-color: {exp.color};"
								class:ring-4={openJobs.has(exp.id)}
								class:ring-opacity-30={openJobs.has(exp.id)}
								class:border-dashed={exp.isFreelance}
								style:--tw-ring-color={exp.color}
							>
								{#if openJobs.has(exp.id)}
									<div class="w-2 h-2 rounded-full bg-white"></div>
								{/if}
							</div>

							
							<div
								class="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-md overflow-hidden bg-white"
								class:opacity-90={exp.isFreelance}
							>
								<img
									src={exp.logo}
									alt="{exp.company} logo"
									class="w-full h-full object-contain p-1"
								/>
							</div>

							
							<Motion
								whileHover={{ scale: 1.02, y: -5 }}
								whileTap={{ scale: 0.98 }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
								let:motion={cardMotion}
							>
								<div
									use:cardMotion
									class="bg-white rounded-xl p-4 shadow-md border-2 transition-colors duration-300"
									style="border-color: {openJobs.has(exp.id) ? exp.color : 'rgba(0,0,0,0.08)'};"
									class:border-dashed={exp.isFreelance}
								>
									<div class="flex items-start justify-between mb-2">
										<div class="flex-1">
											<div class="flex items-center gap-2 flex-wrap">
												<h4 class="text-base md:text-lg font-medium text-black">{exp.title}</h4>
												{#if exp.isFreelance}
													<span
														class="text-xs px-2 py-0.5 rounded-full font-medium text-white"
														style="background: {exp.color};"
													>
														{$t('home.about.freelance')}
													</span>
												{/if}
											</div>
											<p class="text-sm md:text-base text-black/70 font-medium">{exp.company}</p>
										</div>
										<div
											class="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0"
											class:rotate-90={openJobs.has(exp.id)}
											style="background: {exp.color}30;"
										>
											<span style="color: {exp.color};">→</span>
										</div>
									</div>

									<div
										class="flex items-center gap-2 text-xs md:text-sm text-black/60 mb-2 flex-wrap"
									>
										<span class="bg-black/5 px-2 md:px-3 py-1 rounded-full">{exp.startDate}</span>
										<span>—</span>
										<span class="bg-black/5 px-2 md:px-3 py-1 rounded-full">{exp.endDate}</span>
									</div>

									
									<Motion
										animate={{
											height: openJobs.has(exp.id) ? 'auto' : 0,
											opacity: openJobs.has(exp.id) ? 1 : 0
										}}
										initial={false}
										transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
										let:motion={descMotion}
									>
										<div use:descMotion class="overflow-hidden">
											<div
												class="mt-3 pt-3 border-t border-black/10 text-xs md:text-sm text-black/70 journey-description"
											>
												{#if Array.isArray(exp.description)}
													{#each exp.description as paragraph}
														<p class="mb-3 last:mb-0">{paragraph}</p>
													{/each}
												{:else}
													<p>{exp.description}</p>
												{/if}
											</div>
										</div>
									</Motion>
								</div>
							</Motion>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.ring-4 {
		box-shadow: 0 0 0 4px currentColor;
		opacity: 0.3;
	}

	.journey-description p {
		text-align: justify;
		text-indent: 2em;
		line-height: 1.6;
	}

	.journey-description p:first-child {
		margin-top: 0;
	}
</style>
