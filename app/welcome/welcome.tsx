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
		"Desain landing page yang clean dan fokus pada pesan utama",
		"Gallery portofolio responsif untuk menampilkan karya secara rapi",
		"Tema light & dark mode dengan palette grey dan blue yang modern",
	];

	const projectManagement = [
		"Planning & scope project",
		"UI/UX design dan prototype",
		"Development, testing, dan deployment",
		"Maintenance dan update berkala",
	];

	const projectSteps = [
		{ step: "01", title: "Brief", text: "Mengidentifikasi kebutuhan bisnis, target audiens, dan tujuan utama aplikasi." },
		{ step: "02", title: "Build", text: "Membangun antarmuka dan fitur dengan arsitektur yang rapi dan scalable." },
		{ step: "03", title: "Launch", text: "Menguji performa, keamanan, dan kesiapan publish untuk hasil yang stabil." },
	];

	return (
		<main className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#eff4f9_45%,#f5f7fb_100%)] text-slate-900 dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)] dark:text-slate-100">
			<section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-8 lg:px-10 lg:py-10">
				<header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
					<div>
						<p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">fornubi</p>
						<h1 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">Web, Mobile & Desktop Developer</h1>
					</div>
					<nav className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
						<a className="rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="#portfolio">Portfolio</a>
						<a className="rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="#projects">Project</a>
						<a className="rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="#about">Tentang</a>
						<a className="rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-sky-500 dark:text-slate-950" href="#contact">Kontak</a>
					</nav>
				</header>

				<section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-black/30">
						<p className="inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-200">Simple • Modern • Responsive</p>
						<h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white lg:text-5xl">Saya membangun pengalaman digital yang modern untuk web, mobile, dan desktop.</h2>
						<p className="max-w-lg text-lg text-slate-600 dark:text-slate-300">fornubi adalah ruang portofolio saya sebagai developer yang fokus pada solusi aplikasi yang clean, cepat, dan siap dipakai oleh pengguna.</p>
						<div className="flex flex-wrap gap-3">
							<a className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 dark:bg-sky-400 dark:text-slate-950" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
							<a className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800" href="#contact">Hubungi Saya</a>
						</div>
					</div>

					<aside className="grid gap-4 rounded-3xl border border-slate-200/80 bg-slate-900 p-6 text-slate-100 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950">
						<div className="rounded-2xl border border-slate-800 bg-white/6 p-4">
							<p className="text-sm text-slate-300">Impact</p>
							<p className="mt-1 text-3xl font-semibold">3x</p>
							<p className="text-sm text-slate-400">lebih cepat memahami value Anda dari halaman depan.</p>
						</div>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<div className="rounded-2xl border border-slate-800 bg-slate-800/90 p-4">
								<p className="text-sm text-slate-300">Focus</p>
								<p className="mt-1 text-xl font-semibold">Clean layout</p>
							</div>
							<div className="rounded-2xl border border-slate-800 bg-slate-800/90 p-4">
								<p className="text-sm text-slate-300">Mood</p>
								<p className="mt-1 text-xl font-semibold">Grey + blue</p>
							</div>
						</div>
					</aside>
				</section>

				<section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
						<p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">Tentang</p>
						<h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Portofolio saya menampilkan hasil kerja yang rapi, modern, dan berorientasi pada pengguna.</h3>
						<p className="mt-3 text-slate-600 dark:text-slate-300">Saya menggabungkan desain yang bersih dengan pengembangan yang praktis untuk menghadirkan produk web, mobile, dan desktop yang solid.</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-3">
						{highlights.map((item) => (
							<div key={item} className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
								<p className="text-slate-700 dark:text-slate-200">{item}</p>
							</div>
						))}
					</div>
				</section>

				<section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
					<div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
						<p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">Tech Stack</p>
						<h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Teknologi yang sering saya gunakan</h3>
						<div className="mt-4 flex flex-wrap gap-2">
							{stackPills.map((item) => (
								<span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{item}</span>
							))}
						</div>
					</div>
					<div className="rounded-3xl border border-slate-200/80 bg-slate-900 p-6 text-slate-100 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950">
						<p className="text-sm uppercase tracking-[0.35em] text-sky-300">Focus</p>
						<h3 className="mt-2 text-2xl font-semibold">Layanan yang saya tawarkan</h3>
						<ul className="mt-4 space-y-3 text-slate-200">
							<li>• Web app modern dan dashboard bisnis</li>
							<li>• Aplikasi mobile untuk startup dan usaha kecil</li>
							<li>• Desktop app untuk kebutuhan internal dan admin</li>
						</ul>
					</div>
				</section>

				<section id="projects" className="grid gap-6 lg:grid-cols-[1fr_1fr]">
					<div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
						<p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">Project Management</p>
						<h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Alur kerja project yang rapi dan terukur</h3>
						<ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
							{projectManagement.map((item) => (
								<li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/80">
									<span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="grid gap-4">
						{projectSteps.map((item) => (
							<article key={item.step} className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
								<p className="text-xs uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">{item.step}</p>
								<h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h4>
								<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
							</article>
						))}
					</div>
				</section>

				<section id="portfolio" className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
					<div className="mb-5 flex flex-wrap items-end justify-between gap-3">
						<div>
							<p className="text-sm uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">Gallery</p>
							<h3 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">Karya pilihan</h3>
						</div>
						<p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">Contoh tampilan portfolio yang cocok untuk designer, freelancer, atau studio kreatif.</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{featuredProjects.map((project) => (
							<article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/90">
								<div className={`h-32 bg-gradient-to-r ${project.accent}`} />
								<div className="p-5">
									<p className="text-xs uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">{project.tag}</p>
									<h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h4>
									<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{project.tech.map((item) => (
											<span key={item} className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
										))}
									</div>
									{project.url ? (
										<a className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300" href={project.url} target="_blank" rel="noreferrer">Lihat Project</a>
									) : null}
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="contact" className="rounded-3xl border border-slate-200/80 bg-slate-900 p-6 text-slate-100 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950">
					<div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm uppercase tracking-[0.35em] text-sky-300">Mulai</p>
							<h3 className="mt-1 text-2xl font-semibold">Siap bekerja sama atau melihat portofolio saya?</h3>
							<p className="mt-2 text-slate-300">Saya siap membantu membangun aplikasi web, mobile, dan desktop dengan alur project yang jelas, cepat, dan profesional.</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<a className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
							<a className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800" href="mailto:dev@fornubi.my.id">dev@fornubi.my.id</a>
						</div>
					</div>
					<div className="mt-4 flex flex-wrap gap-3">
						{socialLinks.map((item) => (
							<a key={item.label} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-800" href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
						))}
					</div>
				</section>

				<footer className="pb-8 text-center text-sm text-slate-500 dark:text-slate-400">{message || "Tema modern grey & blue, siap untuk light mode dan dark mode."}</footer>
			</section>
		</main>
	);
}
