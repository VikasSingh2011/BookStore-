import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const BookReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [book, setBook] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [theme, setTheme] = useState("sepia"); // 'light' | 'dark' | 'sepia'
  const [fontSize, setFontSize] = useState(18); // default 18px

  // Comprehensive, realistic, highly educational chapter data for each book
  const bookContents = {
    "Design Systems Handbook": [
      {
        title: "Chapter 1: The Foundations of Design Systems",
        content: `A design system is a comprehensive guide containing reusable components, rules, and visual tokens that help teams design and develop unified software products. Rather than just a style guide or pattern library, a mature design system acts as a single source of truth for design patterns and developer code.

Atomic design is a methodology for creating design systems. It breaks interfaces down into five distinct levels:
1. Atoms: Basic building blocks (buttons, inputs, icons, typography).
2. Molecules: Combos of atoms working together (search bars with a button and input field).
3. Organisms: Complex component blocks (navbars, headers, footers).
4. Templates: Page-level layouts focusing on content structure and grid alignment.
5. Pages: Specific instances of templates populated with real data.

By adopting this system-based thinking, organizations decrease design debt, double development speed, and build a cohesive product portfolio. Without a design system, technical debt grows exponentially as different teams implement buttons and forms with slightly different styles, colors, and behaviors, leading to a disjointed user experience.`
      },
      {
        title: "Chapter 2: Establishing Color & Typography Tokens",
        content: `Design tokens are the visual atoms of the design system. They are name-value pairs that represent design decisions (colors, typography scales, line-heights, shadows, spacing values, etc.) stored as raw data in JSON or CSS variables.

For example, instead of hardcoding #2563eb throughout your files, define a token:
"color-primary-600": "#2563eb"

This separation of concerns allows you to re-theme an entire application instantly by simply changing the core token files. If you ever need to introduce a "Dark Mode", tokens act as the mapping layer.

Typography is the backbone of usability. When establishing a typographic hierarchy:
- Use a modular scale (like a 1.250 Major Third scale) to compute font sizing logically.
- Base size: 16px (1rem).
- Title: 31.25px (1.953rem).
- Subtitle: 25.00px (1.563rem).
- Lead: 20.00px (1.250rem).
- Small text: 12.80px (0.800rem).

Ensuring your fonts conform to these tokens eliminates visually disorganized layouts and prevents developers from guessing font sizes.`
      },
      {
        title: "Chapter 3: Component-Driven Development",
        content: `Component-Driven Development (CDD) is a development methodology that anchors the process around building user interfaces from the bottom up: starting with basic elements and walking up to templates. Tools like Storybook act as isolated sandboxes for this process.

When building reusable atomic React components:
- Keep props explicit and document them via PropTypes or TypeScript interfaces.
- Isolate component states. For example, a card component should not know about global auth state; pass that data downward as parameters.
- Provide accessible DOM attributes (aria-labels, role values, clean semantic layouts) to ensure screen readers can navigate your UI.
- Build with pure modular CSS or structured styling APIs (like Tailwind CSS or Styled Components) to prevent global style leakage.

An example of an atomic button structure:
<Button variant="primary" size="large" onClick={handler}>Submit</Button>

By structuring components to be isolated, responsive, and composable, you assure maximum testability and seamless maintenance.`
      }
    ],
    "React 19 Deep Dive": [
      {
        title: "Chapter 1: The React Compiler",
        content: `React 19 introduces one of the most long-awaited architectural updates to the ecosystem: React Forget (the compiler). Historically, React developers had to manually optimize performance by wrapping components or callbacks in useMemo and useCallback.

With the new automated compiler, React performs deep structural analysis of your code during build time. It inserts memoization boundaries directly into the transpiled output, eliminating the cognitive overhead of manual optimization. 

The compiler achieves this by tracking dependency changes automatically and compiling components so that only affected branches of the DOM tree re-render on state changes. This means you can write standard JavaScript functions, map arrays without fear of wasteful renders, and let the compiler handle the heavy lifting.

This shift makes writing React code much simpler, cleaner, and automatically performant without manual memory hooks.`
      },
      {
        title: "Chapter 2: Server Components & Server Actions",
        content: `React Server Components (RSC) represent a paradigm shift in how client-server applications are structured. Historically, client applications queried data through APIs and handled hydration and loading UI states inside the browser.

In React 19, Server Components execute strictly on the server:
- They compile static templates directly into HTML.
- They reduce client-side bundle sizes since dependency imports (like markdown parsers or heavy utility packages) stay on the server.
- They connect to databases or services securely without exposing endpoints to the client.

Server Actions allow seamless interactive data mutations from client pages. A developer can pass an asynchronous function directly to a form's action prop:
<form action={updateProfile}>
  <input name="name" />
  <button type="submit">Update</button>
</form>

React coordinates client validation, loading spinners, and state updates under the hood, streamlining database connections.`
      },
      {
        title: "Chapter 3: New Hooks: useActionState & useOptimistic",
        content: `React 19 introduces specialized hooks to streamline form states and client feedback loops, eliminating the need for massive boilerplate logic.

1. useActionState:
This hook wraps server actions or any asynchronous process to provide reactive pending statuses and returned states.
const [state, formAction, isPending] = useActionState(async (prev, formData) => {
  const result = await saveProfile(formData);
  return result;
}, null);

2. useOptimistic:
To ensure instantaneous UI feedback during mutations (like liking a post or adding an item), useOptimistic renders predicted results immediately in the client while the network request is still executing. 
If the request succeeds, the UI stays intact. If it fails, React handles rolling back the state automatically behind the scenes.

These hooks remove the necessity of manually tracking isLoading, isError, and onSuccess states, resulting in smooth, premium interaction cycles.`
      }
    ],
    "The Art of Storytelling": [
      {
        title: "Chapter 1: The Anatomy of a Narrative",
        content: `Storytelling is the deliberate choreography of character, conflict, and consequence. Understanding how stories are structured is crucial for constructing narratives that stick with readers long after the book is closed.

The classic structural model is the Hero's Journey (Monomyth) introduced by Joseph Campbell:
1. The Ordinary World: We meet our protagonist and observe their status quo.
2. The Call to Adventure: An event disrupts their world, calling them to act.
3. The Crossing of the Threshold: The hero enters the unknown, magical, or dangerous world.
4. Ordeal & Revelation: Facing extreme challenges and undergoing psychological change.
5. The Return: Returning with the treasure, solution, or internal wisdom.

By utilizing logical narrative arcs, you establish clear stakes that keep readers turning pages. Without stakes or structure, narratives meander and lose tension.`
      },
      {
        title: "Chapter 2: Character Archetypes & Development",
        content: `Characters are the emotional entry points of your narrative. Readers do not fall in love with plot twists; they fall in love with the people navigating them.

When building a three-dimensional character:
- Define their Want vs. Need. The 'Want' is their conscious external goal (e.g., getting the promotion). The 'Need' is the subconscious internal growth required to resolve their flaws (e.g., learning to trust others).
- Design realistic vulnerabilities. Perfect, flawless characters are boring (Mary Sues). Flawed characters who make mistakes feel real.
- Map distinct dialogue styles. A character's speech should reflect their background, anxieties, education level, and social standing.

Characters drive narrative momentum. Designing unique archetypes ensures your universe feels filled with living, breathing entities capable of making unpredictable choices.`
      },
      {
        title: "Chapter 3: World Building & Setting",
        content: `World building is the art of establishing physical, rules-based environments that frame your characters' choices. Setting is not a static background illustration; it is an active participant in the story.

When designing your setting:
- Use sensory imagery: Go beyond sight. Detail the ambient smell of rain, the hum of fluorescent lights, the temperature of the air, or the texture of dust on the table.
- Establish rules of geography and logic. If your world has magic, science fiction tech, or specific social hierarchies, adhere to strict consistency. Lack of consistency breaks reader immersion.
- Show history in details. Buildings, slang, and cultural taboos should reflect past events in your world. Don't info-dump; let the environment speak for itself.

Rich, intentional settings breathe gravity into conflicts, turning a simple storyline into an unforgettable experience.`
      }
    ],
    "Interactive UI Animations": [
      {
        title: "Chapter 1: Principles of Web Animation",
        content: `Web animation is about communication, not distraction. When implemented correctly, animations establish spatial relationships, direct attention, and provide clear interactive feedback. When implemented poorly, they cause motion sickness and cognitive overload.

Key principles to follow:
1. Ease/Timing Curves: Avoid linear motion. Use cubic-bezier curves (e.g. cubic-bezier(0.4, 0, 0.2, 1)) to mimic natural physical inertia. Elements should accelerate smoothly and decelerate gracefully.
2. Entry/Exit Choreography: Stagger list item entries to guide the eyes logically. Keep enter speeds fast (150ms-250ms) and exits even faster (100ms-150ms) so users are never waiting on UI.
3. Layout Shift Prevention: Only animate properties that trigger GPU acceleration (transforms, scale, opacity). Animating width, height, or padding forces browser layout reflows, causing stutter.

Adhering to these rules guarantees your web applications feel premium, buttery smooth, and highly responsive.`
      },
      {
        title: "Chapter 2: Micro-interactions with Framer Motion",
        content: `Micro-interactions are the subtle feedback details that occur during small moments of use (clicking a button, dragging a card, active state glows, form validation shakes).

Using Framer Motion in React elevates these interactions from basic CSS to complex, physics-based simulations:
- Leverage the <motion.div> element to animate components declaratively.
- Utilize spring physics instead of rigid duration timings. Spring dynamics feel organic and tactile:
  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} />
- Orchestrate transition states smoothly using AnimatePresence for mount/unmount fades, ensuring elements don't just disappear instantly.

Fine-tuning micro-interactions turns standard functional interfaces into premium, delightful interactions that users want to touch.`
      },
      {
        title: "Chapter 3: High Performance Compositing",
        content: `Ensuring 60fps animations requires understanding browser rendering pipelines: JavaScript execution → Style Calculation → Layout → Paint → Composite.

To optimize rendering and avoid dropped frames:
- Shift animation calculations onto the compositor thread by sticking strictly to translate3d(), scale(), and opacity. These do not trigger layout or paint repasses.
- Avoid forcing styles layouts. Reading layout dimensions (like offsetHeight or getBoundingClientRect) right before writing styles forces "layout thrashing" and freezes the main thread.
- Utilize the CSS 'will-change' property selectively on complex animating nodes to hint the hardware to prepare a separate layer. Do not overuse this, or you will drain system RAM.

Optimizing the hardware pipeline allows gorgeous, multi-element transitions to render smoothly even on lower-end mobile displays.`
      }
    ],
    "The Minimalist Developer": [
      {
        title: "Chapter 1: Cognitive Load & Simplicity",
        content: `Minimalism in development is not about writing fewer lines of code; it is about reducing cognitive load. Cognitive load is the amount of mental effort required to read, understand, and modify a piece of code. 

Code is read 10x more than it is written. Therefore, readability must always take precedence over cleverness.

Key philosophies:
- Write readable code over clever code. Complex one-liners or nested ternary operators look smart but are hard to maintain.
- Adhere to the Single Responsibility Principle: a function or file should do exactly one thing. If you find your function has the word 'and' in its description, it's doing too much.
- Prefer explicit logic over implicit configurations. Hidden defaults cause unexpected debugging cycles. Magic numbers and untyped objects lead to brittle systems.

Reducing complexity directly results in fewer bugs, faster onboarding of new engineers, and highly scalable software.`
      },
      {
        title: "Chapter 2: Modular Architecture",
        content: `A clean, modular codebase is like a set of Lego bricks: easy to inspect, swap, and compose without breaking other elements. If removing a feature breaks your entire app, your architecture is highly coupled.

When structuring modular apps:
- Co-locate related assets. Keep your component code, styling, tests, and mock assets inside a single dedicated folder (e.g., /Button/Button.tsx, /Button/Button.test.tsx).
- Establish strict export boundaries. Use index files (index.ts) to export only necessary APIs, keeping utility helpers internal and private.
- Keep dependencies decoupled. If a component relies on an external API client, inject it via props or custom contexts to keep it decoupled. This makes testing incredibly easy.

Structuring code in clean modules makes refactoring enjoyable and allows distributed teams to scale without stepping on each other's toes.`
      },
      {
        title: "Chapter 3: Zero-Dependency Philosophies",
        content: `Every dependency you install from NPM is a liability: a potential security vulnerability, a performance tax, and a maintenance cost. Minimalist developers practice rigorous gatekeeping when importing external libraries.

When evaluating package imports:
- Can you write it in vanilla JS in 30 lines? If yes, build it yourself. (e.g., date formatting, simple deep clones).
- Check package bundles and tree-shaking compatibility. Do not import a 150KB library for a single helper function. Use Bundlephobia to analyze package weight.
- Prefer standard browser APIs (Fetch, IntersectionObserver, CSS animations, Intl APIs) over bulky utility libraries. Browsers are incredibly powerful now.

By maintaining a light, dependency-aware footprint, your build times remain lightning-fast and security vulnerabilities stay at absolute zero.`
      }
    ],
    "Zero to One Startup Guide": [
      {
        title: "Chapter 1: The Philosophy of progress",
        content: `Progress comes in two types: horizontal progress (going from 1 to n, copying existing concepts) and vertical progress (going from 0 to 1, creating entirely new things).

Horizontal progress is easy: you copy a successful model (like building another regional delivery app). Vertical progress is hard: you build something that has never existed (like compiling digital books dynamically in the browser, or inventing a new payment infrastructure).

The most successful startups target vertical progress. They achieve this by answering the "Contra-Question": "What important truth do very few people agree with you on?" Developing a business around a unique, contrarian truth creates massive long-term value, as it establishes a monopoly rather than a competitive commodity.`
      },
      {
        title: "Chapter 2: Product-Market Fit & Distribution",
        content: `Many technical founders believe that if they build a superior product, the world will beat a path to their door. This is a dangerous myth. Distribution is just as important as the product. Poor distribution kills great products; great distribution can save mediocre ones.

To achieve Product-Market Fit (PMF):
- Talk directly to users. Solve a painful, burning problem that they are already spending money or time trying to solve. If you have to convince them they have a problem, you don't have PMF.
- Iterate rapidly. Build a high-fidelity MVP, get it into hands, and measure retention. Do they come back on day 7? Day 30?
- Master a niche. Start small, monopolize a small target audience (e.g., college students at one university), and then expand outwards.

Excellent products with poor distribution will fail. Orchestrating robust marketing, partnerships, and conversions is critical to unlocking PMF.`
      },
      {
        title: "Chapter 3: Scaling Culture",
        content: `Culture is not about table tennis tables, free snacks, or company swag. Culture is the set of values, rules, and habits that govern how your team behaves when no one is watching. It is how decisions are made when the founder is asleep.

Key aspects of scaling team culture:
- Hire missionaries, not mercenaries. Missionaries are obsessed with the product's vision and long-term impact. Mercenaries are obsessed with short-term rewards and prestige.
- Foster high transparency. Share metrics, failures, runway cash, and structural directions openly. Treat your employees like adults.
- Encourage extreme ownership. Empower team members to own components fully, from conception to final user delivery. No passing the buck.

By building a strong, aligned culture, your startup retains a high pace of progress even as it scales from 2 to 200 employees.`
      }
    ]
  };

  useEffect(() => {
    // If book wasn't passed via state, fetch it from backend
    if (!book) {
      const fetchBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          const found = res.data.find((b) => b._id === id || b.id === id);
          if (found) {
            setBook(found);
          } else {
            toast.error("Book not found!");
            navigate("/");
          }
        } catch (err) {
          console.error(err);
          toast.error("Failed to load book data.");
          navigate("/");
        } finally {
          setLoading(false);
        }
      };
      fetchBook();
    }
  }, [id, book, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center space-y-4">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
        <p className="text-slate-400 text-sm font-light">Loading premium e-reader...</p>
      </div>
    );
  }

  if (!book) return null;

  // Retrieve chapters for this book (fallback to Design Systems if name doesn't match exactly)
  const chapters = bookContents[book.name] || bookContents["Design Systems Handbook"];
  const isFree = book.category === "Free";

  const handleBuyNow = () => {
    navigate("/checkout", { state: book });
  };

  // Determine current chapter lock status
  const isChapterLocked = !isFree && currentChapter > 0;

  // Styled themes configs
  const themeClasses = {
    light: {
      wrapper: "bg-white text-slate-800",
      sidebar: "bg-slate-50 border-r border-slate-200 text-slate-700",
      header: "bg-white border-b border-slate-200",
      activeChapter: "bg-blue-50 text-blue-600 font-bold",
      inactiveChapter: "hover:bg-slate-100 text-slate-600",
      progressBg: "bg-slate-100",
      progressBar: "bg-blue-600",
      pill: "bg-slate-100 border-slate-300 text-slate-700",
      pillActive: "bg-blue-600 text-white border-transparent",
    },
    dark: {
      wrapper: "bg-slate-950 text-slate-100",
      sidebar: "bg-slate-900 border-r border-slate-800 text-slate-300",
      header: "bg-slate-950 border-b border-slate-800",
      activeChapter: "bg-blue-950/50 text-blue-400 font-bold border-l-4 border-blue-500",
      inactiveChapter: "hover:bg-slate-800 text-slate-400",
      progressBg: "bg-slate-800",
      progressBar: "bg-blue-500",
      pill: "bg-slate-800 border-slate-700 text-slate-300",
      pillActive: "bg-blue-500 text-slate-950 border-transparent font-bold",
    },
    sepia: {
      wrapper: "bg-[#f7f2e8] text-[#4a3b2c]",
      sidebar: "bg-[#eedec7] border-r border-[#e6dcce] text-[#5c4a38]",
      header: "bg-[#f7f2e8] border-b border-[#e6dcce]",
      activeChapter: "bg-[#dfccb0] text-[#3d2f21] font-bold",
      inactiveChapter: "hover:bg-[#e8d5bc] text-[#5c4a38]",
      progressBg: "bg-[#e8d5bc]",
      progressBar: "bg-[#8b5a2b]",
      pill: "bg-[#eedec7] border-[#dfccb0] text-[#5c4a38]",
      pillActive: "bg-[#8b5a2b] text-[#f7f2e8] border-transparent font-bold",
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${currentTheme.wrapper}`}>
      
      {/* Top Header Bar */}
      <header className={`px-6 py-4 flex items-center justify-between z-10 select-none ${currentTheme.header}`}>
        
        {/* Left Side: Back & Book Details */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/")}
            className="group p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Back to bookstore"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h1 className="font-extrabold text-sm md:text-base leading-tight truncate max-w-[200px] sm:max-w-md">{book.name}</h1>
            <span className="text-xs opacity-60 font-light">
              {isChapterLocked ? "Sample Preview Mode" : `Chapter ${currentChapter + 1} of ${chapters.length}`}
            </span>
          </div>
        </div>

        {/* Center: Reading Progress */}
        <div className="hidden md:flex flex-col items-center gap-1.5 w-64">
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${currentTheme.progressBg}`}>
            <div 
              className={`h-full transition-all duration-500 ${currentTheme.progressBar}`}
              style={{ width: `${isChapterLocked ? 33 : ((currentChapter + 1) / chapters.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            {isChapterLocked ? "33% Read (Sample)" : `${Math.round(((currentChapter + 1) / chapters.length) * 100)}% Read`}
          </span>
        </div>

        {/* Right Side: E-reader Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Font Resizer */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => setFontSize(Math.max(14, fontSize - 1))}
              disabled={fontSize <= 14}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              title="Decrease Font Size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <span className="text-xs font-mono font-bold select-none">{fontSize}px</span>
            <button 
              onClick={() => setFontSize(Math.min(26, fontSize + 1))}
              disabled={fontSize >= 26}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              title="Increase Font Size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <hr className="h-5 w-px border-none bg-black/10 dark:bg-white/10" />

          {/* Theme Controllers */}
          <div className="flex items-center gap-1 select-none">
            {['light', 'dark', 'sepia'].map((t) => (
              <button 
                key={t}
                onClick={() => setTheme(t)}
                className={`px-2.5 py-1 text-[10px] font-extrabold uppercase rounded-md tracking-wider border transition-all cursor-pointer ${
                  theme === t ? currentTheme.pillActive : currentTheme.pill
                }`}
              >
                {t}
              </button>
            ))}
          </div>

        </div>

      </header>

      {/* Main Reader Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side Menu: Chapters Index */}
        <aside className={`w-80 hidden lg:block overflow-y-auto select-none p-6 ${currentTheme.sidebar}`}>
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Book Index</span>
              <h2 className="text-lg font-black tracking-tight mt-1 truncate">{book.name}</h2>
            </div>
            <hr className="border-black/5 dark:border-white/5" />

            <div className="space-y-2">
              {chapters.map((ch, idx) => {
                const locked = !isFree && idx > 0;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentChapter(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between text-sm cursor-pointer ${
                      currentChapter === idx 
                        ? currentTheme.activeChapter 
                        : currentTheme.inactiveChapter
                    }`}
                  >
                    <span className="truncate pr-2">{ch.title.split(":")[0]}: {ch.title.split(":")[1] || ch.title}</span>
                    {locked && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Locked Info Pill */}
            {!isFree && (
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-4 rounded-2xl text-xs font-light leading-relaxed">
                ⭐ <strong>Preview Mode Active</strong>: You have unlocked free access to Chapter 1. Please purchase the book to unlock all technical blueprints.
              </div>
            )}
          </div>
        </aside>

        {/* Center Canvas: Content Reader */}
        <main className="flex-1 overflow-y-auto relative flex flex-col items-center py-10 px-6 sm:px-12">
          
          <div className="w-full max-w-2xl flex-1 flex flex-col justify-between">
            
            {/* Top Navigation for mobile/tablet */}
            <div className="lg:hidden flex items-center justify-between mb-8 select-none">
              <span className="text-xs opacity-60 font-semibold uppercase tracking-wider">
                {isChapterLocked ? "🔒 Locked Preview" : `📖 Chapter ${currentChapter + 1} of ${chapters.length}`}
              </span>
              <select 
                value={currentChapter} 
                onChange={(e) => setCurrentChapter(Number(e.target.value))}
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs px-3 py-1.5 rounded-lg outline-none cursor-pointer"
              >
                {chapters.map((ch, idx) => (
                  <option key={idx} value={idx} className="dark:bg-slate-950">
                    {ch.title.split(":")[0]}
                  </option>
                ))}
              </select>
            </div>

            {/* Reading Content */}
            {!isChapterLocked ? (
              <article 
                className="leading-relaxed font-light select-text transition-all duration-300 space-y-6"
                style={{ fontSize: `${fontSize}px` }}
              >
                <h2 className="text-3xl font-extrabold tracking-tight leading-snug border-b border-black/5 dark:border-white/5 pb-4 select-none">
                  {chapters[currentChapter].title}
                </h2>
                
                {/* Paragraph Splitting */}
                {chapters[currentChapter].content.split("\n\n").map((para, idx) => {
                  // Render structured blocks if contains numbered items or code mocks
                  if (para.includes("1.") || para.includes("color-primary-600")) {
                    return (
                      <div key={idx} className="bg-black/5 dark:bg-white/5 font-mono p-4 rounded-xl border border-black/15 dark:border-white/5 my-4 select-text">
                        {para.split("\n").map((line, lidx) => (
                          <div key={lidx} className="text-xs sm:text-sm font-medium opacity-90 leading-loose py-0.5">{line}</div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="whitespace-pre-line text-justify leading-loose">
                      {para}
                    </p>
                  );
                })}
              </article>
            ) : (
              /* Premium Blur Lock Preview Wall */
              <div className="flex-1 flex flex-col justify-center items-center select-none text-center max-w-xl mx-auto space-y-8 animate-floating">
                
                <div className="w-20 h-20 bg-amber-500/10 text-amber-500 border border-amber-500/30 flex items-center justify-center rounded-full shadow-lg shadow-amber-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-extrabold tracking-tight">Unlock the Full Blueprint</h2>
                  <p className="text-sm opacity-60 leading-relaxed font-light">
                    You've finished the free sample chapter. Gain complete lifetime digital access to <strong>{book.name}</strong>, including all diagrams, code guides, and technical breakdowns.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-3xl w-full border border-black/10 dark:border-white/5 premium-glow bg-amber-500/5 text-center flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60">Premium Access Blueprint</span>
                  <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mt-2">${book.price}</div>
                  <button 
                    onClick={handleBuyNow}
                    className="w-full mt-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform active:scale-95 cursor-pointer"
                  >
                    Buy & Unlock All Chapters
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Navigation Buttons */}
            <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-8 mt-12 select-none">
              <button 
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                disabled={currentChapter === 0}
                className="group flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">
                {currentChapter + 1} / {chapters.length}
              </span>

              <button 
                onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                disabled={currentChapter === chapters.length - 1 || isChapterLocked}
                className="group flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
};

export default BookReader;
