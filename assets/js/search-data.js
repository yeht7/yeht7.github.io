// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of Haotian Ye.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-m-s-in-computer-engineering-at-uc-san-diego",
          title: 'Started my M.S. in Computer Engineering at UC San Diego.',
          description: "",
          section: "News",},{id: "news-joined-prof-yufei-ding-s-lab-at-ucsd-as-a-research-intern",
          title: 'Joined Prof. Yufei Ding’s Lab at UCSD as a research intern.',
          description: "",
          section: "News",},{id: "news-started-working-on-simsd-simple-speculative-decoding-in-diffusion-language-models",
          title: 'Started working on SimSD: Simple Speculative Decoding in Diffusion Language Models.',
          description: "",
          section: "News",},{id: "news-our-paper-chipbench-a-next-step-benchmark-for-evaluating-llm-performance-in-ai-aided-chip-design-was-released-on-arxiv",
          title: 'Our paper ChipBench: A Next-Step Benchmark for Evaluating LLM Performance in AI-Aided Chip...',
          description: "",
          section: "News",},{id: "news-our-paper-amma-a-multi-chiplet-memory-centric-architecture-for-low-latency-1m-context-attention-serving-was-released-on-arxiv",
          title: 'Our paper AMMA: A Multi-Chiplet Memory-Centric Architecture for Low-Latency 1M Context Attention Serving...',
          description: "",
          section: "News",},{id: "projects-risc-v-gpgpu-design",
          title: 'RISC-V GPGPU Design',
          description: "A RISC-V based GPGPU architecture exploration developed at the SYSU Hardware-Software Co-Design &amp; Parallel Computing Group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%35%79%65@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yeht7", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/haotian-ye", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
