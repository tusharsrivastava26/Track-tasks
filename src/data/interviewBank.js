// Technical Flashcards & Behavioral Interview Bank categorized by role

export const interviewQuestions = [
  // SDE
  {
    id: 'int-sde-1',
    roleId: 'sde',
    category: 'System Design',
    question: 'How does Consistent Hashing work, and why is it crucial for distributed caching systems?',
    answer: 'Consistent Hashing maps both servers and cache keys to points on an abstract 360-degree ring using a hash function. When a server node is added or removed, only K/N keys need to be remapped on average (where K is total keys, N is nodes), unlike traditional hash modulo (hash % N) which triggers a full cache invalidation and thundering herd problem. Virtual nodes are added to ensure uniform key distribution.',
    difficulty: 'Advanced',
    tags: ['Distributed Systems', 'Caching', 'Scalability']
  },
  {
    id: 'int-sde-2',
    roleId: 'sde',
    category: 'Computer Science Fundamentals',
    question: 'Explain the difference between Process and Thread, and what resources they share.',
    answer: 'A Process is an independent executing program with its own isolated address space (virtual memory, file descriptors, heap, stack). A Thread is the smallest unit of CPU execution within a process. Threads of the same process share the heap, data segment, code segment, and open files, but each maintains its own program counter, stack pointer, and CPU registers. Context switching between threads is faster than between processes due to shared memory pages and TLB caches.',
    difficulty: 'Intermediate',
    tags: ['Operating Systems', 'Concurrency', 'Memory']
  },
  {
    id: 'int-sde-3',
    roleId: 'sde',
    category: 'Database Internals',
    question: 'What is the ACID principle in databases, and how does Write-Ahead Logging (WAL) support Atomicity and Durability?',
    answer: 'ACID stands for Atomicity (all or nothing), Consistency (preserves invariants), Isolation (transactions execute without conflicting interference), and Durability (committed data survives crashes). WAL writes changes to an append-only transaction log on disk BEFORE modifying in-memory database pages. On unexpected crash, the DB recovers state by replaying committed logs (Redo) and reverting uncommitted operations (Undo).',
    difficulty: 'Intermediate',
    tags: ['DBMS', 'Transactions', 'Storage']
  },

  // DATA ANALYST
  {
    id: 'int-da-1',
    roleId: 'data-analyst',
    category: 'Advanced SQL',
    question: 'What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER() in SQL window functions?',
    answer: 'All three assign sequential integers ordered by specified columns within a partition:\n1. ROW_NUMBER(): Assigns unique sequential numbers with no duplicates (1, 2, 3, 4), even if values tie.\n2. RANK(): Assigns duplicate ranks for tied values, but skips subsequent ranks (e.g. 1, 2, 2, 4).\n3. DENSE_RANK(): Assigns duplicate ranks for tied values without skipping subsequent ranks (e.g. 1, 2, 2, 3).',
    difficulty: 'Intermediate',
    tags: ['SQL', 'Window Functions', 'Data Analysis']
  },
  {
    id: 'int-da-2',
    roleId: 'data-analyst',
    category: 'Business Intelligence & Metrics',
    question: 'How do you calculate Churn Rate, Customer Lifetime Value (CLV), and Customer Acquisition Cost (CAC)?',
    answer: '1. Churn Rate = (Lost Customers during period) / (Customers at start of period).\n2. CAC = Total Sales & Marketing Expenses / Number of New Customers Acquired.\n3. CLV = (Average Purchase Value * Purchase Frequency * Customer Lifespan) or (Average Revenue Per User / Churn Rate). A healthy SaaS business maintains a CLV/CAC ratio of at least 3:1.',
    difficulty: 'Intermediate',
    tags: ['Product Analytics', 'Metrics', 'SaaS']
  },

  // AI ENGINEER
  {
    id: 'int-ai-1',
    roleId: 'ai-engineer',
    category: 'LLMs & GenAI',
    question: 'When should you choose RAG (Retrieval-Augmented Generation) versus Model Fine-Tuning?',
    answer: 'Choose RAG when you need access to dynamic, proprietary, or frequently updating real-time data, need exact citation source attribution, want lower compute costs, and wish to prevent factual hallucinations. Choose Fine-Tuning (e.g., LoRA/QLoRA) when you need to teach the model a specialized output format/syntax, specific tone/persona, domain jargon, or optimize latency/token usage for specific specialized classification/generation tasks where knowledge is static.',
    difficulty: 'Advanced',
    tags: ['GenAI', 'RAG', 'Fine-Tuning']
  },
  {
    id: 'int-ai-2',
    roleId: 'ai-engineer',
    category: 'Vector Search & Architecture',
    question: 'How does HNSW (Hierarchical Navigable Small World) indexing work in Vector Databases?',
    answer: 'HNSW is a multi-layered graph index for Approximate Nearest Neighbor (ANN) search. The top layers contain sparse graphs with long-distance links for rapid geometric navigation across high-dimensional embedding space, while lower layers become progressively denser for localized precision. Search starts at the top layer, greedily traverses nearest neighbors, and descends through layers until reaching target vectors at sub-linear O(log N) time complexity.',
    difficulty: 'Advanced',
    tags: ['Vector DB', 'Embeddings', 'ANN']
  },

  // DATA SCIENTIST
  {
    id: 'int-ds-1',
    roleId: 'data-scientist',
    category: 'Machine Learning Theory',
    question: 'Explain the Bias-Variance Tradeoff and how regularization techniques (L1 vs L2) impact it.',
    answer: 'Bias is error from erroneous assumptions in the model (underfitting; fails to capture true data complexity). Variance is error from sensitivity to small fluctuations in training data (overfitting; models noise). Regularization penalizes model complexity: L1 (Lasso) adds sum of absolute weights (|w|), producing sparse weights for feature selection. L2 (Ridge) adds sum of squared weights (w^2), shrinking weights smoothly towards zero without zeroing them out, reducing variance with minimal bias increase.',
    difficulty: 'Intermediate',
    tags: ['ML Theory', 'Regularization', 'Modeling']
  },
  {
    id: 'int-ds-2',
    roleId: 'data-scientist',
    category: 'Model Evaluation',
    question: 'Why is ROC-AUC misleading on highly imbalanced datasets, and what should you use instead?',
    answer: 'ROC plots True Positive Rate vs False Positive Rate. When negative class examples vastly outnumber positive ones (e.g., 99.9% fraud negatives), FPR can remain microscopic even with thousands of false alarms, making the ROC curve look unrealistically optimistic. Instead, use the Precision-Recall (PR) Curve and PR-AUC, which evaluates Precision (TP / (TP + FP)) against Recall (TP / (TP + FN)), directly exposing false positives without being masked by huge true negative counts.',
    difficulty: 'Advanced',
    tags: ['Evaluation', 'Imbalanced Data', 'Metrics']
  },

  // WEB DEVELOPER
  {
    id: 'int-web-1',
    roleId: 'web-dev',
    category: 'Core JavaScript & Runtimes',
    question: 'Explain the JavaScript Event Loop, Call Stack, Microtask Queue, and Macrotask Queue.',
    answer: 'JavaScript has a single-threaded call stack. Asynchronous operations are delegated to Web APIs or libuv. When completed, callbacks enter queues:\n- Microtask Queue (Promises, queueMicrotask, MutationObserver) has highest priority; the engine executes ALL pending microtasks until empty before rendering.\n- Macrotask / Task Queue (setTimeout, setInterval, I/O, UI events) executes one task per loop iteration, followed by clearing the microtask queue, then browser paint.',
    difficulty: 'Intermediate',
    tags: ['JavaScript', 'Async', 'Event Loop']
  },
  {
    id: 'int-web-2',
    roleId: 'web-dev',
    category: 'Web Performance & Security',
    question: 'What are Core Web Vitals (LCP, INP, CLS) and how do you optimize them?',
    answer: '1. LCP (Largest Contentful Paint < 2.5s): Optimize hero image load via priority hints (fetchpriority="high"), CDN caching, and modern formats (WebP/AVIF).\n2. INP (Interaction to Next Paint < 200ms): Minimize main-thread blocking by code-splitting, offloading heavy computations to Web Workers, and yielding execution via requestIdleCallback.\n3. CLS (Cumulative Layout Shift < 0.1): Prevent layout jumps by specifying explicit width/height or aspect-ratio on images, reserving space for ads/embeds, and avoiding injecting dynamic DOM elements above existing content.',
    difficulty: 'Advanced',
    tags: ['Web Vitals', 'Performance', 'Frontend']
  },

  // BEHAVIORAL (Universal)
  {
    id: 'int-beh-1',
    roleId: 'all',
    category: 'Behavioral & Leadership',
    question: 'Tell me about a time you encountered an ambiguous problem with tight deadlines (STAR Method).',
    answer: 'Situation: During a sprint, a critical integration failed 3 days before product release.\nTask: As the lead, I needed to diagnose whether the issue was our backend serialization or external third-party API changes.\nAction: Set up request logging, isolated payload differences, discovered an unannounced schema change, and implemented an adapter pattern layer with circuit breakers.\nResult: Released on schedule with zero customer disruption; drafted an integration test suite adopted across 4 teams.',
    difficulty: 'Behavioral',
    tags: ['STAR Method', 'Problem Solving', 'Leadership']
  },
  {
    id: 'int-beh-2',
    roleId: 'all',
    category: 'Behavioral & Collaboration',
    question: 'Describe a disagreement with a tech lead or product manager regarding an engineering decision.',
    answer: 'Situation: Product manager wanted to launch a new feature immediately by bypassing database migrations and using in-memory state.\nTask: I needed to communicate technical debt risks while respecting business urgency.\nAction: Analyzed data loss probabilities in production and proposed a two-phase compromise: launch a feature-flagged beta with light sqlite caching on day 1, followed by persistent Postgres schema rollout on day 3.\nResult: Feature delivered within product deadline without risk of customer data loss; PM commended the collaborative risk mitigation.',
    difficulty: 'Behavioral',
    tags: ['Conflict Resolution', 'Communication', 'STAR Method']
  }
];
