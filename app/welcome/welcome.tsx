import { useEffect } from "react";

export function Welcome({ message }: { message: string }) {
	useEffect(() => {
		if (typeof window === "undefined") return;

		const win = window as Window & {
			BrevoConversations?: ((...args: unknown[]) => void) & {
				q?: unknown[][];
			};
			BrevoConversationsID?: string;
		};

		if (win.BrevoConversations) return;

		win.BrevoConversationsID = "6a34ac3086063d4ba106f8f1";
		win.BrevoConversations =
			win.BrevoConversations ||
			function (...args: unknown[]) {
				const queue = win.BrevoConversations;
				if (!queue) return;
				(queue.q = queue.q || []).push(args);
			};

		const script = document.createElement("script");
		script.async = true;
		script.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
		if (document.head) {
			document.head.appendChild(script);
		}
	}, []);

	const featuredProjects = [
		{
			title: "MD5 Tools",
			tag: "Web App",
			description: "Tools online untuk hashing MD5, desain sederhana, cepat, dan cocok untuk kebutuhan developer.",
			accent: "from-sky-500 to-blue-600",
			tech: ["React", "TypeScript", "Tailwind"],
			url: "https://md5tools.fornubi.my.id",
		},
		{
			title: "Bebe Baby Spa",
			tag: "Landing Page & Management",
			description: "Landing page modern dan sistem management untuk usaha bebe baby spa dengan tampilan yang rapi dan mudah dikelola.",
			accent: "from-slate-600 to-slate-800",
			tech: ["React", "Laravel", "Tailwind"],
			url: "https://bebe.qzz.io",
		},
		{
			title: "DjangoForge",
			tag: "Web Tool",
			description: "Generate Django model, serializer, API, view, and template CRUD operations with ease.",
			accent: "from-cyan-500 to-indigo-600",
			tech: ["Django", "Python", "Bootstrap"],
			url: "https://djangoforge.fornubi.my.id",
		},
	];

	const stackPills = ["React", "Next.js", "TypeScript", "Flutter", "Tauri", "Node.js", "Tailwind", "Firebase"];

	const socialLinks = [
		{ label: "GitHub", href: "https://github.com/fornubi" },
		{ label: "LinkedIn", href: "https://www.linkedin.com/" },
		{ label: "Email", href: "mailto:dev@fornubi.my.id" },
	];

	const highlights = [
		"Premium positioning for modern brands",
		"Clear UX storytelling that converts",
		"High-end systems built for scale",
	];

	const projectManagement = [
		"Brand strategy & message clarity",
		"UX concept & interface direction",
		"Build, refine, and launch",
	];

	const projectSteps = [
		{ step: "01", title: "Discover", text: "Mendalami kebutuhan brand, audience, dan celah pasar yang paling relevan untuk tumbuh." },
		{ step: "02", title: "Design", text: "Menciptakan pengalaman premium yang terasa jelas, elegan, dan mudah dijalani pengguna." },
		{ step: "03", title: "Deliver", text: "Mengembangkan produk jadi dan memastikan siap hadir dengan kualitas yang konsisten." },
	];

	return (
		<>
			<style>{`
				@keyframes revealUp {
					0% {
						opacity: 0;
						transform: translateY(20px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes drift {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-8px);
					}
				}

				@keyframes glowPulse {
					0%, 100% {
						box-shadow: 0 0 0 rgba(148, 163, 184, 0.15);
					}
					50% {
						box-shadow: 0 0 0 8px rgba(148, 163, 184, 0.08);
					}
				}

				.reveal {
					animation: revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
				}

				.reveal-delay {
					animation: revealUp 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
				}

				.float-card {
					animation: drift 7s ease-in-out infinite;
				}

				.glow-dot {
					animation: glowPulse 3s ease-in-out infinite;
				}
			`}</style>
			<main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(203,213,225,0.30),_transparent_28%),linear-gradient(135deg,#f5f1ea_0%,#f8fafc_42%,#eef2f7_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.14),_transparent_25%),linear-gradient(135deg,#060b16_0%,#0f172a_32%,#111827_100%)] dark:text-slate-100">
				<section className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
					<header className="reveal flex flex-wrap items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
						<div>
							<p className="text-[10px] font-medium uppercase tracking-[0.45em] text-slate-500 dark:text-slate-400">fornubi</p>
							<h1 className="mt-1 text-base font-medium text-slate-900 dark:text-white">Brand • Product • Experience</h1>
						</div>
						<nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
							<a className="rounded-full px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800" href="#about">About</a>
							<a className="rounded-full px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800" href="#services">Services</a>
							<a className="rounded-full px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800" href="#portfolio">Work</a>
							<a className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300" href="#contact">Contact</a>
						</nav>
					</header>

					<section className="reveal-delay grid items-center gap-6 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
						<div className="space-y-7">
							<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
								<span className="glow-dot h-2.5 w-2.5 rounded-full bg-emerald-500" />
								Luxury digital experiences
							</div>
							<h2 className="max-w-xl text-4xl font-semibold tracking-[-0.08em] text-slate-900 dark:text-white lg:text-6xl">
								Design that feels premium and performs with intent.
							</h2>
							<p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
								fornubi builds polished web products, digital experiences, and brand systems that look elevated and convert with clarity.
							</p>
							<div className="flex flex-wrap gap-3">
								<a className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.15)] transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
								<a className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800" href="#contact">Book a call</a>
							</div>
							<div className="flex flex-wrap gap-7 pt-2 text-sm text-slate-600 dark:text-slate-300">
								<div>
									<p className="text-2xl font-semibold text-slate-900 dark:text-white">12+</p>
									<p>projects launched</p>
								</div>
								<div>
									<p className="text-2xl font-semibold text-slate-900 dark:text-white">3–6w</p>
									<p>delivery window</p>
								</div>
								<div>
									<p className="text-2xl font-semibold text-slate-900 dark:text-white">100%</p>
									<p>custom direction</p>
								</div>
							</div>
						</div>

						<aside className="float-card relative rounded-[1.8rem] border border-slate-700 bg-slate-950 p-5 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.12),_transparent_35%)]" />
							<div className="relative space-y-4">
								<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
									<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-400">Core focus</p>
									<p className="mt-2 text-2xl font-semibold text-white">Strategy • Design • Build</p>
								</div>
								<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
									<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
										<p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Brand</p>
										<p className="mt-2 text-lg font-medium text-white">Positioning & story</p>
									</div>
									<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
										<p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">UX</p>
										<p className="mt-2 text-lg font-medium text-white">Conversion-first flow</p>
									</div>
								</div>
							</div>
						</aside>
					</section>

					<section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
						<div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
							<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">About</p>
							<h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">A sharper digital presence for brands that want to stand out.</h3>
							<p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">We blend strategic thinking, design clarity, and practical development to create digital experiences that feel premium and perform with purpose.</p>
						</div>
						<div className="grid gap-4 sm:grid-cols-3">
							{highlights.map((item) => (
								<div key={item} className="rounded-[1.7rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_35px_rgba(15,23,42,0.03)] dark:border-slate-800 dark:bg-slate-950/80">
									<p className="text-base leading-7 text-slate-700 dark:text-slate-200">{item}</p>
								</div>
							))}
						</div>
					</section>

					<section id="services" className="grid gap-6 lg:grid-cols-[1fr_1fr]">
						<div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
							<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Capabilities</p>
							<h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Built for modern brands that need clarity, speed, and polish.</h3>
							<div className="mt-5 flex flex-wrap gap-2">
								{stackPills.map((item) => (
									<span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{item}</span>
								))}
							</div>
						</div>
						<div className="rounded-[2rem] border border-slate-200/80 bg-slate-900 p-6 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-950">
							<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-sky-300">Services</p>
							<h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">What we build</h3>
							<ul className="mt-5 space-y-3 text-slate-200">
								<li>• High-converting marketing websites</li>
								<li>• Product dashboards and business tools</li>
								<li>• Mobile + desktop application systems</li>
							</ul>
						</div>
					</section>

					<section id="projects" className="grid gap-6 lg:grid-cols-[1fr_1fr]">
						<div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
							<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Process</p>
							<h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Focused execution from strategy to launch.</h3>
							<ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
								{projectManagement.map((item) => (
									<li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/80">
										<span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-500" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="grid gap-4">
							{projectSteps.map((item) => (
								<article key={item.step} className="rounded-[1.7rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_35px_rgba(15,23,42,0.03)] dark:border-slate-800 dark:bg-slate-950/80">
									<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">{item.step}</p>
									<h4 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h4>
									<p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
								</article>
							))}
						</div>
					</section>

					<section id="portfolio" className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
						<div className="mb-6 flex flex-wrap items-end justify-between gap-3">
							<div>
								<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Selected work</p>
								<h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white">Recent projects</h3>
							</div>
							<p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">A closer look at digital products designed to feel premium and work with purpose.</p>
						</div>
						<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
							{featuredProjects.map((project) => (
								<article key={project.title} className="group overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-slate-50 shadow-[0_18px_35px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/90">
									<div className={`h-36 bg-gradient-to-r ${project.accent}`} />
									<div className="p-5">
										<p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{project.tag}</p>
										<h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">{project.title}</h4>
										<p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
										<div className="mt-4 flex flex-wrap gap-2">
											{project.tech.map((item) => (
												<span key={item} className="rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
											))}
										</div>
										{project.url ? (
											<a className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300" href={project.url} target="_blank" rel="noreferrer">View project</a>
										) : null}
									</div>
								</article>
							))}
						</div>
					</section>

					<section id="contact" className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,#0d1726_0%,#101b2b_26%,#0b1220_100%)] p-6 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.16)] dark:border-slate-800">
						<div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
							<div>
								<p className="text-[10px] font-medium uppercase tracking-[0.35em] text-sky-300">Start your project</p>
								<h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Let’s build something worth remembering.</h3>
								<p className="mt-3 max-w-xl text-slate-300">From brand positioning to final launch, we help clients create digital experiences that feel premium, clear, and effective.</p>
							</div>
							<div className="flex flex-wrap gap-3">
								<a className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
								<a className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800" href="mailto:dev@fornubi.my.id">dev@fornubi.my.id</a>
							</div>
						</div>
						<div className="mt-6 flex flex-wrap gap-3">
							{socialLinks.map((item) => (
								<a key={item.label} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800" href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
							))}
						</div>
					</section>

					<footer className="pb-6 text-center text-sm text-slate-500 dark:text-slate-400">{message || "Crafted for modern brands and premium digital experiences."}</footer>
				</section>
			</main>
		</>
	);
}
