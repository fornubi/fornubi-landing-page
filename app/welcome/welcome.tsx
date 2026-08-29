import { useEffect, useState } from "react";
import { translations, type Language } from "../translations";

export function Welcome({ message }: { message: string }) {
	const [language, setLanguage] = useState<Language>("en");

	useEffect(() => {
		const saved = localStorage.getItem("fornubi-language");
		if (saved === "id" || saved === "en") {
			setLanguage(saved);
		}
	}, []);

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		localStorage.setItem("fornubi-language", lang);
	};

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

	const t = translations[language];
	const navT = t.nav;

	const featuredProjects = t.projects.map((proj, idx) => ({
		...proj,
		iframeUrl: proj.iframeUrl,
		accent: idx === 0 ? "from-sky-500 to-blue-600" : idx === 1 ? "from-slate-600 to-slate-800" : "from-cyan-500 to-indigo-600",
		tech: ["React", "TypeScript", "Tailwind"],
		url: proj.url || ["https://md5tools.fornubi.my.id", "https://bebe.my.id", "https://djangoforge.fornubi.my.id"][idx],
	}));

	const stackPills = ["React", "Next.js", "TypeScript", "Flutter", "Tauri", "Node.js", "Tailwind", "Firebase"];

	const socialLinks = [
		{ label: "GitHub", href: "https://github.com/fornubi" },
		{ label: "LinkedIn", href: "https://www.linkedin.com/" },
		{ label: "Email", href: "mailto:dev@fornubi.my.id" },
	];

	return (
		<>
			<style>{`
				@keyframes revealUp {
					0% {
						opacity: 0;
						transform: translateY(30px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.reveal {
					animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
				}

				.reveal-delay {
					animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
				}
			`}</style>
			<main className="min-h-screen bg-white text-[#111111]">
				{/* Sticky Navigation */}
				<nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8e8e8] bg-white/95 backdrop-blur-md">
					<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
						<div>
							<h1 className="text-lg font-bold text-[#111111]">{navT.brand}</h1>
							<p className="text-xs text-[#888888]">{navT.tagline}</p>
						</div>
						<div className="flex items-center gap-6 text-sm text-[#555555]">
							<a className="transition hover:text-[#111111]" href="#about">{navT.about}</a>
							<a className="transition hover:text-[#111111]" href="#services">{navT.services}</a>
							<a className="transition hover:text-[#111111]" href="#work">{navT.work}</a>
							<div className="flex items-center gap-3 border-l border-[#e0e0e0] pl-6">
								<button
									onClick={() => handleLanguageChange("en")}
									className={`px-2 py-1 text-xs font-semibold transition ${language === "en"
										? "text-[#111111]"
										: "text-[#999999] hover:text-[#555555]"
										}`}
								>
									EN
								</button>
								<button
									onClick={() => handleLanguageChange("id")}
									className={`px-2 py-1 text-xs font-semibold transition ${language === "id"
										? "text-[#111111]"
										: "text-[#999999] hover:text-[#555555]"
										}`}
								>
									ID
								</button>
							</div>
							<a className="rounded-full bg-[#111111] px-5 py-2 text-white transition hover:bg-[#2a2a2a]" href="#contact">{navT.getStarted}</a>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<section className="pt-24">
					{/* Hero Section */}
					<section className="reveal relative overflow-hidden bg-gradient-to-br from-white via-white to-[#f5f5f5] px-4 py-24 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<div className="space-y-8">
								<div className="inline-block rounded-full border border-[#e0e0e0] bg-[#fafafa] px-4 py-2 text-sm text-[#666666]">
									{t.hero.badge}
								</div>
								<h2 className="text-6xl font-black tracking-[-0.04em] text-[#111111] lg:text-7xl">
									{t.hero.title}
								</h2>
								<p className="max-w-2xl text-xl leading-8 text-[#555555]">
									{t.hero.description}
								</p>
								<div className="flex flex-wrap gap-4 pt-4">
									<a className="rounded-lg bg-[#111111] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#2a2a2a]" href="#contact">{t.hero.cta1}</a>
									<a className="rounded-lg border border-[#ddd] px-7 py-4 text-base font-semibold text-[#111111] transition hover:bg-[#f8f8f8]" href="/cv.pdf" target="_blank" rel="noreferrer">{t.hero.cta2}</a>
								</div>
							</div>
						</div>
					</section>

					{/* About Section */}
					<section id="about" className="reveal-delay border-t border-[#f0f0f0] px-4 py-20 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl space-y-16">
							<div>
								<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#888888]">{t.about.label}</p>
								<h3 className="text-4xl font-black text-[#111111]">{t.about.title}</h3>
								<p className="mt-6 text-xl leading-8 text-[#555555]">
									{t.about.description}
								</p>
							</div>

							<div className="grid gap-8 sm:grid-cols-3">
								{t.about.highlights.map((item) => (
									<div key={item} className="space-y-3">
										<div className="h-1 w-12 bg-[#111111]" />
										<p className="text-base font-semibold text-[#111111]">{item}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Services Section */}
					<section id="services" className="reveal-delay border-t border-[#f0f0f0] bg-[#f8f8f8] px-4 py-20 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#888888]">{t.services.label}</p>
							<h3 className="mb-12 text-4xl font-black text-[#111111]">{t.services.title}</h3>

							<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
								{[
									{ icon: "🎨", ...t.services.items[0] },
									{ icon: "💻", ...t.services.items[1] },
									{ icon: "📱", ...t.services.items[2] },
								].map((service, idx) => (
									<div key={idx} className="space-y-4">
										<div className="text-3xl">{service.icon}</div>
										<h4 className="text-lg font-bold text-[#111111]">{service.title}</h4>
										<p className="text-sm text-[#666666]">{service.desc}</p>
									</div>
								))}
							</div>

							<div className="mt-12 flex flex-wrap gap-3">
								{stackPills.map((item) => (
									<span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#333333]">{item}</span>
								))}
							</div>
						</div>
					</section>

					{/* Process Section */}
					<section id="process" className="reveal-delay border-t border-[#f0f0f0] px-4 py-20 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#888888]">{t.process.label}</p>
							<h3 className="mb-12 text-4xl font-black text-[#111111]">{t.process.title}</h3>

							<div className="grid gap-8 sm:grid-cols-3">
								{t.process.steps.map((step) => (
									<div key={step.step} className="space-y-4">
										<div className="text-4xl font-black text-[#d0d0d0]">{step.step}</div>
										<h4 className="text-xl font-bold text-[#111111]">{step.title}</h4>
										<p className="text-sm leading-6 text-[#666666]">{step.text}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Portfolio Section */}
					<section id="work" className="reveal-delay border-t border-[#f0f0f0] px-4 py-20 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-5xl">
							<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#888888]">{t.portfolio.label}</p>
							<h3 className="mb-12 text-4xl font-black text-[#111111]">{t.portfolio.title}</h3>

							<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
								{featuredProjects.map((project) => (
									<div key={project.title} className="overflow-hidden rounded-2xl bg-[#f9f9f9] transition-all duration-300 hover:shadow-2xl">
										<div className="pointer-events-none  relative h-40 w-full overflow-hidden rounded-t-lg bg-background">
											<iframe
												src={project.iframeUrl}
												title={`${project.title} Preview`}
												className="absolute top-0 left-0 h-[600px] w-[1280px] origin-top-left scale-[0.25] border-none pointer-events-none"
												loading="lazy"
												sandbox=""
											/>
										</div>
										<div className="p-6">
											<p className="text-xs font-semibold uppercase text-[#888888]">{project.tag}</p>
											<h4 className="mt-3 text-xl font-bold text-[#111111]">{project.title}</h4>
											<p className="mt-2 text-sm leading-6 text-[#666666]">{project.description}</p>
											<div className="mt-4 flex flex-wrap gap-2">
												{project.tech.map((item) => (
													<span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#444444]">{item}</span>
												))}
											</div>
											<div className="mt-4 inline-flex items-center gap-2">
												<a href={project.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#111111] transition hover:text-[#555555]">
													View project →
												</a>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Contact/CTA Section */}
					<section id="contact" className="reveal-delay border-t border-[#f0f0f0] bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl text-center">
							<h3 className="text-5xl font-black">{t.contact.title}</h3>
							<p className="mt-6 text-xl text-[#cccccc]">
								{t.contact.description}
							</p>
							<div className="mt-10 flex flex-wrap justify-center gap-4">
								<a className="rounded-lg bg-white px-8 py-4 text-base font-bold text-[#111111] transition hover:bg-[#f0f0f0]" href="mailto:dev@fornubi.my.id">
									{t.contact.email}
								</a>
								<a className="rounded-lg border border-[#555555] px-8 py-4 text-base font-bold text-white transition hover:bg-[#2a2a2a]" href="#about">
									{t.contact.learnMore}
								</a>
							</div>

							<div className="mt-12 flex justify-center gap-6">
								{socialLinks.map((link) => (
									<a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm text-[#999999] transition hover:text-white">
										{link.label}
									</a>
								))}
							</div>
						</div>
					</section>

					{/* Footer */}
					<footer className="border-t border-[#f0f0f0] bg-white px-4 py-8 text-center text-sm text-[#888888] sm:px-6 lg:px-8">
						{message || t.footer}
					</footer>
				</section>
			</main>
		</>
	);
}
