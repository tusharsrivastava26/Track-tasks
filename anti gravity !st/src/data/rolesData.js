// Comprehensive Career Data for Tech Job Roles with Zero-to-Advanced Roadmaps

export const jobRoles = [
  // 1. SDE (Software Development Engineer)
  {
    id: 'sde',
    title: 'Software Development Engineer',
    shortTitle: 'SDE / Backend Eng',
    category: 'Core Engineering',
    badge: 'High Demand',
    icon: 'Code2',
    tagline: 'Architect robust distributed systems, scalable APIs, and high-performance algorithms.',
    description: 'Software Development Engineers (SDEs) build mission-critical enterprise systems, microservices architectures, and high-scale backends handling millions of concurrent operations with minimal latency.',
    marketDemand: 'Extremely High',
    avgSalary: '₹14 - ₹42 LPA',
    experienceLevel: 'Zero to Job-Ready (6-8 Months)',
    theme: {
      primary: '#6366f1', // Indigo
      border: 'border-indigo-500/30',
      borderHover: 'hover:border-indigo-500/70',
      bgLight: 'bg-indigo-500/10',
      text: 'text-indigo-400',
      glow: 'shadow-indigo-500/20',
      gradient: 'from-indigo-500 to-purple-600'
    },
    skillsMatrix: [
      {
        category: 'Core Foundations',
        skills: [
          { name: 'Data Structures & Algorithms', level: 'Crucial', desc: 'Arrays, Trees, Graphs, DP, Heaps, Hash Tables, Sorting' },
          { name: 'Object-Oriented Design', level: 'Crucial', desc: 'SOLID principles, Design Patterns (Factory, Strategy, Singleton)' },
          { name: 'Computer Science Fundamentals', level: 'Essential', desc: 'Operating Systems, Networking (TCP/IP, HTTP), DBMS internals' }
        ]
      },
      {
        category: 'Backend & Systems',
        skills: [
          { name: 'REST & gRPC APIs', level: 'Essential', desc: 'API contracts, serialization, authentication, rate limiting' },
          { name: 'Distributed Caching & Queues', level: 'Advanced', desc: 'Redis, Kafka, RabbitMQ, cache invalidation strategies' },
          { name: 'High-Level System Design', level: 'Advanced', desc: 'Microservices, Sharding, Consistent Hashing, CAP Theorem, Load Balancing' }
        ]
      },
      {
        category: 'DevOps & Tooling',
        skills: [
          { name: 'Docker & Kubernetes', level: 'Essential', desc: 'Containerization, pod orchestration, helm charts' },
          { name: 'CI/CD & Cloud Deployments', level: 'Essential', desc: 'GitHub Actions, AWS (EC2, S3, RDS), telemetry & monitoring' }
        ]
      }
    ],
    programmingLanguages: [
      { name: 'Java / C++', importance: 'Primary Core', roleInJob: 'Core language for DSA problem solving, enterprise systems, and low-latency services.', masteryTarget: 'OOP, Collections / STL, Multi-threading, Memory model' },
      { name: 'Python / Go', importance: 'Secondary', roleInJob: 'Rapid microservices, backend scripting, automation, concurrent micro-daemons.', masteryTarget: 'Goroutines / AsyncIO, REST frameworks (FastAPI / Gin)' },
      { name: 'SQL', importance: 'Crucial Supplementary', roleInJob: 'Relational data query optimization, transactions, schema normalization.', masteryTarget: 'Indexing, CTEs, Window functions, ACID isolation levels' }
    ],
    phases: [
      {
        phaseId: 'sde-p0',
        phaseNumber: 0,
        title: 'Phase 0: Absolute Zero & Logic Fundamentals',
        duration: 'Month 1',
        description: 'Set up your dev environment, master programming syntax, and develop mathematical problem-solving instincts.',
        topics: [
          {
            id: 'sde-t-01',
            title: 'Language Syntax & Control Flow (Java or C++)',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Variables & Primitive Data Types', 'Loops & Conditional Logic', 'Functions, Scope & Recursion Basics'],
            practiceChallenge: 'Solve 15 beginner problems on pattern printing, prime checks, and recursive fibonacci.',
            resource: 'https://www.geeksforgeeks.org/c-plus-plus/'
          },
          {
            id: 'sde-t-02',
            title: 'Memory Basics, Pointers & References',
            estimatedHours: 15,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Stack vs Heap Memory', 'Pointers/References', 'Garbage Collection vs Manual Deallocation'],
            practiceChallenge: 'Implement dynamic array resizing from scratch without using std::vector or ArrayList.',
            resource: 'https://en.cppreference.com/w/cpp/language/pointer'
          },
          {
            id: 'sde-t-03',
            title: 'Git & Version Control Mastery',
            estimatedHours: 10,
            difficulty: 'Beginner',
            pillar: 'project',
            keyConcepts: ['Git branching & merging', 'Resolving merge conflicts', 'Writing clean semantic commit messages'],
            practiceChallenge: 'Initialize a GitHub repo, create feature branches, and submit a cleanly merged pull request.',
            resource: 'https://learngitbranching.js.org/'
          },
          {
            id: 'sde-t-04',
            title: 'Foundation Aptitude: Numbers & Logic Puzzles',
            estimatedHours: 12,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Divisibility & LCM/HCF', 'Number Series', 'Binary & Bitwise Logic Puzzles'],
            practiceChallenge: 'Complete 30 quantitative number-theory questions with under 90s per question.',
            resource: 'https://www.indiabix.com/aptitude/questions-and-answers/'
          }
        ]
      },
      {
        phaseId: 'sde-p1',
        phaseNumber: 1,
        title: 'Phase 1: Intermediate Mastery & Core Data Structures',
        duration: 'Months 2-3',
        description: 'Master non-linear data structures, algorithm complexity analysis, and object-oriented design.',
        topics: [
          {
            id: 'sde-t-05',
            title: 'Linear Data Structures: Arrays, Strings, Linked Lists',
            estimatedHours: 35,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Two Pointers & Sliding Window', 'Fast & Slow Pointers', 'In-place List Reversal', 'Prefix Sums'],
            practiceChallenge: 'Solve LeetCode: 3Sum, Longest Substring Without Repeating Characters, Reverse Linked List II.',
            resource: 'https://leetcode.com/explore/featured/card/top-interview-questions-easy/'
          },
          {
            id: 'sde-t-06',
            title: 'Stacks, Queues & Monotonic Patterns',
            estimatedHours: 20,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Monotonic Stack/Queue', 'Next Greater Element', 'Sliding Window Maximum', 'LRU Cache Design'],
            practiceChallenge: 'Implement an LRU Cache with O(1) get and put time complexity.',
            resource: 'https://leetcode.com/problems/lru-cache/'
          },
          {
            id: 'sde-t-07',
            title: 'Trees, Binary Search Trees & Heaps',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['DFS & BFS Traversals', 'Lowest Common Ancestor', 'Top-K Elements using Min/Max Heap', 'Trie / Prefix Trees'],
            practiceChallenge: 'Solve Binary Tree Maximum Path Sum and Word Search II.',
            resource: 'https://leetcode.com/tag/tree/'
          },
          {
            id: 'sde-t-08',
            title: 'OOP & SOLID Principles in Practice',
            estimatedHours: 18,
            difficulty: 'Intermediate',
            pillar: 'interview',
            keyConcepts: ['Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion', 'Factory & Observer Patterns'],
            practiceChallenge: 'Write a clean, extensible Parking Lot or Elevator System simulation applying all 5 SOLID principles.',
            resource: 'https://refactoring.guru/design-patterns'
          }
        ]
      },
      {
        phaseId: 'sde-p2',
        phaseNumber: 2,
        title: 'Phase 2: Advanced Algorithms & Computer Systems',
        duration: 'Months 4-5',
        description: 'Conquer Graphs, Dynamic Programming, Operating Systems, Networking, and Database Internals.',
        topics: [
          {
            id: 'sde-t-09',
            title: 'Graphs: Shortest Paths, Topological Sort & Disjoint Sets',
            estimatedHours: 35,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Dijkstra & Bellman-Ford', 'Union-Find / Disjoint Set Union', 'Kruskal Minimum Spanning Tree', 'Tarjan SCC'],
            practiceChallenge: 'Solve Course Schedule II, Network Delay Time, and Number of Islands.',
            resource: 'https://cp-algorithms.com/graph/breadth-first-search.html'
          },
          {
            id: 'sde-t-10',
            title: 'Dynamic Programming: 1D, 2D & Knapsack Patterns',
            estimatedHours: 40,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Memoization vs Tabulation', '0/1 Knapsack & Unbounded Knapsack', 'Longest Common Subsequence', 'Bitmask DP'],
            practiceChallenge: 'Solve Coin Change, Edit Distance, and Regular Expression Matching.',
            resource: 'https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns'
          },
          {
            id: 'sde-t-11',
            title: 'Operating Systems & Concurrency Deep-Dive',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Process vs Thread', 'Deadlocks & Dining Philosophers', 'Virtual Memory & Page Replacement', 'Mutex, Semaphores & Atomic Ops'],
            practiceChallenge: 'Implement a thread-safe bounded blocking queue using locks and condition variables.',
            resource: 'https://pages.cs.wisc.edu/~remzi/OSTEP/'
          },
          {
            id: 'sde-t-12',
            title: 'Database Internals & Advanced SQL',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['B-Trees vs LSM Trees', 'ACID Transactions & MVCC', 'Indexing Strategies & Query Execution Plans', 'Deadlock in DBs'],
            practiceChallenge: 'Analyze EXPLAIN query plans on a 1-million row Postgres dataset and eliminate sequential scans.',
            resource: 'https://use-the-index-luke.com/'
          }
        ]
      },
      {
        phaseId: 'sde-p3',
        phaseNumber: 3,
        title: 'Phase 3: High-Impact Distributed Projects & System Design',
        duration: 'Month 6',
        description: 'Build enterprise-grade microservices and design systems for massive concurrency and fault tolerance.',
        topics: [
          {
            id: 'sde-t-13',
            title: 'High-Level System Design Patterns',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Consistent Hashing & Partitioning', 'Read-through vs Write-through Caching', 'Rate Limiting (Token Bucket)', 'Message Brokers'],
            practiceChallenge: 'Design TinyURL / Bitly and a Scalable Notification Service on whiteboard.',
            resource: 'https://github.com/donnemartin/system-design-primer'
          },
          {
            id: 'sde-t-14',
            title: 'Capstone: Distributed Key-Value Store or Microservice Gateway',
            estimatedHours: 45,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['Raft/Gossip Consensus or Redis replication', 'gRPC & Protobuf communication', 'Containerization with Docker Compose'],
            practiceChallenge: 'Deliver a functional multi-node distributed cache with replication and heartbeat monitoring.',
            resource: 'https://raft.github.io/'
          }
        ]
      },
      {
        phaseId: 'sde-p4',
        phaseNumber: 4,
        title: 'Phase 4: Interview Cracking & Job Hunt Readiness',
        duration: 'Month 7',
        description: 'Timed mock coding rounds, behavioral STAR method answers, and resume ATS optimization.',
        topics: [
          {
            id: 'sde-t-15',
            title: 'Timed LeetCode Blind 75 / NeetCode 150 Marathons',
            estimatedHours: 35,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Time Management in 45-min rounds', 'Thinking aloud & clarifying constraints', 'Dry-running edge cases'],
            practiceChallenge: 'Simulate 5 mock live coding sessions solving 2 medium problems under 45 minutes.',
            resource: 'https://neetcode.io/practice'
          },
          {
            id: 'sde-t-16',
            title: 'Behavioral & Leadership Principles (STAR Method)',
            estimatedHours: 15,
            difficulty: 'Intermediate',
            pillar: 'interview',
            keyConcepts: ['Situation-Task-Action-Result format', 'Handling technical disagreements', 'Overcoming major project setbacks'],
            practiceChallenge: 'Draft and rehearse 6 core STAR stories aligned with Amazon Leadership Principles.',
            resource: 'https://www.levels.fyi/blog/amazon-leadership-principles.html'
          }
        ]
      }
    ],
    projectBlueprints: [
      {
        id: 'sde-proj-1',
        title: 'High-Throughput URL Shortener with Analytics Engine',
        difficulty: 'Beginner - Intermediate',
        techStack: 'Java/Spring Boot or Go, Redis, PostgreSQL, Docker',
        summary: 'A production-grade URL redirection service handling 10,000 req/sec with distributed counter analytics and base62 hashing.',
        milestones: [
          'Design DB schema with unique constraints, base62 encoding algorithm, and collision handling.',
          'Implement Redis cache-aside pattern to serve top 20% URLs directly from memory with 2ms latency.',
          'Build asynchronous analytics logging pipeline using background workers for click geolocation & referrers.',
          'Add rate-limiting middleware (Token Bucket algorithm) to block DDoS attempts per IP.',
          'Write comprehensive unit & integration tests; containerize using Docker and write clean README.'
        ]
      },
      {
        id: 'sde-proj-2',
        title: 'Distributed In-Memory Key-Value Store with Write-Ahead Logging',
        difficulty: 'Advanced Capstone',
        techStack: 'C++ or Go, Socket Programming, Concurrency primitives, gRPC',
        summary: 'A resilient in-memory datastore resembling Redis with disk persistence, master-replica replication, and crash recovery.',
        milestones: [
          'Implement concurrent skip-list and hash table with fine-grained lock striping.',
          'Build Write-Ahead Log (WAL) with sequential append and checksum validation for zero data loss on crash.',
          'Implement TCP protocol parser with custom binary packet serialization.',
          'Add master-replica replication stream with heartbeat ping and automatic offset sync.',
          'Benchmark throughput using jemalloc and write a detailed performance whitepaper.'
        ]
      }
    ],
    certifications: [
      {
        id: 'cert-sde-1',
        title: 'CS50x: Introduction to Computer Science',
        issuer: 'Harvard University',
        tier: 'Tier S',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0) with Harvard CS50 Certificate',
        credentialType: 'Verified Academic Credential',
        skillsCovered: ['C', 'Data Structures', 'Memory Allocation', 'Algorithms', 'Python', 'SQL'],
        recruiterValue: 'Universally recognized by FAANG & Tier S tech recruiters as the highest standard foundational computer science curriculum in the world.',
        externalUrl: 'https://cs50.harvard.edu/x/',
        recommendedPhase: 'Phase 0 & 1'
      },
      {
        id: 'cert-sde-2',
        title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
        issuer: 'Amazon Web Services (AWS)',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$150 USD (~₹12,500 INR)',
        credentialType: 'Proctored Industry Certification',
        skillsCovered: ['Distributed Systems', 'VPC Architecture', 'High Availability', 'S3 & DynamoDB', 'Microservices Scaling'],
        recruiterValue: 'The #1 most requested cloud credential in job descriptions for backend & system engineering roles worldwide.',
        externalUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        recommendedPhase: 'Phase 2 & 3'
      },
      {
        id: 'cert-sde-3',
        title: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'The Linux Foundation & CNCF',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$395 USD (Exam Voucher)',
        credentialType: 'Hands-On Performance Exam',
        skillsCovered: ['Container Orchestration', 'Pod Scheduling', 'Cluster Architecture', 'Networking & Ingress'],
        recruiterValue: 'Performance-based, proctored terminal exam demonstrating top-1% production backend infrastructure competence.',
        externalUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
        recommendedPhase: 'Phase 3'
      },
      {
        id: 'cert-sde-4',
        title: 'Back End Development and APIs Certification',
        issuer: 'freeCodeCamp',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: '5 Verified Capstone Projects',
        skillsCovered: ['Node.js', 'Express', 'MongoDB & Mongoose', 'REST API Architecture', 'Microservices'],
        recruiterValue: 'Over 40,000 alumni hired at Google, Apple, and Microsoft. Demonstrates proven code execution via 5 required projects.',
        externalUrl: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
        recommendedPhase: 'Phase 1 & 2'
      },
      {
        id: 'cert-sde-5',
        title: 'Oracle Certified Professional: Java SE 17 Developer',
        issuer: 'Oracle Corporation',
        tier: 'Tier A',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$245 USD (~₹20,000 INR)',
        credentialType: 'Rigorous Proctored Examination',
        skillsCovered: ['Java Concurrency', 'Streams & Lambdas', 'OOP Design', 'Modular JVM Architecture'],
        recruiterValue: 'Massively preferred by top enterprise fintech, investment banks, and Tier-1 product MNCs running high-scale Java backends.',
        externalUrl: 'https://education.oracle.com/java-se-17-developer/pexam_1Z0-829',
        recommendedPhase: 'Phase 1 & 2'
      },
      {
        id: 'cert-sde-6',
        title: 'Problem Solving (Advanced) Skills Certificate',
        issuer: 'HackerRank',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Timed Proctored Coding Test',
        skillsCovered: ['Advanced DSA', 'Dynamic Programming', 'Graph Theory', 'Time Complexity Optimization'],
        recruiterValue: 'Directly verifiable on LinkedIn; proves ability to pass hard online assessment (OA) filtering rounds.',
        externalUrl: 'https://www.hackerrank.com/skills-verification/problem_solving_advanced',
        recommendedPhase: 'Phase 4'
      }
    ]
  },

  // 2. DATA ANALYST
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    shortTitle: 'Data Analyst / BI',
    category: 'Analytics & Insights',
    badge: 'High Placement Rate',
    icon: 'BarChart3',
    tagline: 'Transform raw enterprise data into actionable business intelligence and high-impact dashboards.',
    description: 'Data Analysts bridge the gap between numbers and executive decision-making. They clean messy datasets, write advanced SQL transformations, and build executive KPI dashboards using Power BI and Tableau.',
    marketDemand: 'Very High',
    avgSalary: '₹6 - ₹18 LPA',
    experienceLevel: 'Zero to Job-Ready (4-6 Months)',
    theme: {
      primary: '#06b6d4', // Cyan
      border: 'border-cyan-500/30',
      borderHover: 'hover:border-cyan-500/70',
      bgLight: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
      gradient: 'from-cyan-500 to-teal-600'
    },
    skillsMatrix: [
      {
        category: 'Data Querying & Modeling',
        skills: [
          { name: 'Advanced SQL', level: 'Crucial', desc: 'Window functions, CTEs, Joins, Aggregations, Performance Tuning' },
          { name: 'Data Modeling & Warehousing', level: 'Essential', desc: 'Star vs Snowflake Schema, Normalization, Dimensions & Facts' },
          { name: 'Excel & Advanced Formulas', level: 'Crucial', desc: 'Power Query, XLOOKUP, Pivot Tables, Macro automation' }
        ]
      },
      {
        category: 'Visualization & BI',
        skills: [
          { name: 'Power BI / Tableau', level: 'Crucial', desc: 'DAX formulas, LOD expressions, Interactive Storytelling, Drill-downs' },
          { name: 'Business Metrics & KPI Design', level: 'Essential', desc: 'Churn, CAC, LTV, Retention Cohorts, Revenue Run-Rate' }
        ]
      },
      {
        category: 'Scripting & Stats',
        skills: [
          { name: 'Python (Pandas, NumPy)', level: 'Essential', desc: 'Exploratory Data Analysis, Data Wrangling, Regex data cleaning' },
          { name: 'Descriptive & Inferential Stats', level: 'Essential', desc: 'Hypothesis Testing, A/B Testing, Correlation vs Causation' }
        ]
      }
    ],
    programmingLanguages: [
      { name: 'SQL', importance: 'Primary Core', roleInJob: 'The absolute daily driver for extracting, transforming, and querying analytical datasets.', masteryTarget: 'Window functions, Self-joins, Complex Subqueries, CTEs' },
      { name: 'Python', importance: 'Secondary', roleInJob: 'Data wrangling, automated ETL scripting, API fetching, advanced plotting (Seaborn).', masteryTarget: 'Pandas DataFrames, NumPy vectorization, Matplotlib/Seaborn' },
      { name: 'DAX / M (Power BI)', importance: 'Specialized', roleInJob: 'Calculated columns, custom measure creation, and Power Query transformations.', masteryTarget: 'CALCULATE, FILTER, Time Intelligence functions' }
    ],
    phases: [
      {
        phaseId: 'da-p0',
        phaseNumber: 0,
        title: 'Phase 0: Foundations of Data & Excel Mastery',
        duration: 'Month 1',
        description: 'Build mathematical intuition, master advanced Excel / Sheets, and understand modern analytical thinking.',
        topics: [
          {
            id: 'da-t-01',
            title: 'Modern Excel & Power Query for Data Wrangling',
            estimatedHours: 20,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['XLOOKUP & INDEX-MATCH', 'Pivot Tables & Slicers', 'Power Query ETL & Data Unpivoting'],
            practiceChallenge: 'Clean a raw, messy 50,000-row e-commerce dataset in Excel and create a summary revenue dashboard.',
            resource: 'https://exceljet.net/'
          },
          {
            id: 'da-t-02',
            title: 'Descriptive Statistics for Business Analytics',
            estimatedHours: 15,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Mean, Median, Mode & Skewness', 'Variance & Standard Deviation', 'Outlier Detection (IQR & Z-score)'],
            practiceChallenge: 'Calculate IQR boundaries and remove extreme noise from a sales compensation dataset.',
            resource: 'https://www.khanacademy.org/math/statistics-probability'
          },
          {
            id: 'da-t-03',
            title: 'Quantitative Reasoning & Chart Interpretation',
            estimatedHours: 12,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Percentages, Profit Margins & Growth Rates', 'Reading Bar/Line/Scatter Charts without bias'],
            practiceChallenge: 'Solve 25 chart interpretation business case problems in under 45 minutes.',
            resource: 'https://www.indiabix.com/data-interpretation/table-charts/'
          }
        ]
      },
      {
        phaseId: 'da-p1',
        phaseNumber: 1,
        title: 'Phase 1: Advanced SQL & Relational Databases',
        duration: 'Month 2',
        description: 'Become fluent in complex SQL queries, database relationships, and schema design.',
        topics: [
          {
            id: 'da-t-04',
            title: 'SQL Fundamentals to Complex Joins',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['INNER, LEFT, RIGHT, FULL OUTER & CROSS Joins', 'GROUP BY & HAVING Filters', 'Subqueries vs Joins'],
            practiceChallenge: 'Solve 30 SQL challenges on HackerRank / LeetCode Database section.',
            resource: 'https://mode.com/sql-tutorial/'
          },
          {
            id: 'da-t-05',
            title: 'SQL Window Functions & Analytical CTEs',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['ROW_NUMBER(), RANK(), DENSE_RANK()', 'LEAD(), LAG() for Month-over-Month growth', 'Running totals with SUM() OVER()'],
            practiceChallenge: 'Calculate 7-day rolling revenue and customer churn cohorts using a single readable SQL CTE.',
            resource: 'https://www.sqlservertutorial.net/sql-server-window-functions/'
          },
          {
            id: 'da-t-06',
            title: 'Dimensional Modeling: Star & Snowflake Schemas',
            estimatedHours: 15,
            difficulty: 'Intermediate',
            pillar: 'interview',
            keyConcepts: ['Fact vs Dimension Tables', 'Surrogate Keys', 'Slowly Changing Dimensions (SCD Type 1 & 2)'],
            practiceChallenge: 'Design a dimensional data warehouse schema for an Uber-like ride-sharing business.',
            resource: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/'
          }
        ]
      },
      {
        phaseId: 'da-p2',
        phaseNumber: 2,
        title: 'Phase 2: Business Intelligence Dashboards (Power BI / Tableau)',
        duration: 'Month 3',
        description: 'Design intuitive visual dashboards with interactive drill-downs and DAX calculations.',
        topics: [
          {
            id: 'da-t-07',
            title: 'Power BI Architecture & Data Modeling',
            estimatedHours: 25,
            difficulty: 'Intermediate',
            pillar: 'project',
            keyConcepts: ['Import vs DirectQuery', 'Star Schema Relationships (1-to-many, bidirectional filters)', 'Calendar Date Tables'],
            practiceChallenge: 'Model a multi-table financial sales dataset with automated date intelligence relationships.',
            resource: 'https://learn.microsoft.com/en-us/power-bi/'
          },
          {
            id: 'da-t-08',
            title: 'DAX Formulas & Business Measures',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['CALCULATE & Filter Context Modification', 'Time Intelligence (YTD, QTD, MoM %)', 'Iterators (SUMX, AVERAGEX)'],
            practiceChallenge: 'Build 10 custom DAX measures for Year-over-Year revenue growth and customer retention rates.',
            resource: 'https://dax.guide/'
          }
        ]
      },
      {
        phaseId: 'da-p3',
        phaseNumber: 3,
        title: 'Phase 3: Python for Exploratory Data Analysis & Automation',
        duration: 'Month 4',
        description: 'Leverage Python, Pandas, and visualization libraries to analyze massive datasets and automate reporting.',
        topics: [
          {
            id: 'da-t-09',
            title: 'Python, NumPy & Pandas for Data Wrangling',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['DataFrames, Indexing & Slicing', 'Handling Missing Values & Imputation', 'groupby(), pivot_table() & merge()'],
            practiceChallenge: 'Clean and merge 3 disparate CSV files containing over 200k customer logs with zero memory leaks.',
            resource: 'https://pandas.pydata.org/docs/user_guide/index.html'
          },
          {
            id: 'da-t-10',
            title: 'Statistical Storytelling & Visualization (Seaborn)',
            estimatedHours: 20,
            difficulty: 'Intermediate',
            pillar: 'project',
            keyConcepts: ['Histograms, Boxplots & Heatmaps', 'Correlation matrices', 'Formatting charts for C-suite presentations'],
            practiceChallenge: 'Create a comprehensive exploratory data analysis Jupyter notebook with 6 clear visual findings.',
            resource: 'https://seaborn.pydata.org/tutorial.html'
          }
        ]
      },
      {
        phaseId: 'da-p4',
        phaseNumber: 4,
        title: 'Phase 4: Capstone Portfolio, A/B Testing & Interview Ready',
        duration: 'Months 5-6',
        description: 'Master A/B testing analytics, build a verified portfolio on GitHub, and ace technical SQL live rounds.',
        topics: [
          {
            id: 'da-t-11',
            title: 'A/B Testing & Hypothesis Testing in Business',
            estimatedHours: 20,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Null vs Alternative Hypothesis', 'P-values & Significance Levels', 'Sample Size Determination & Minimum Detectable Effect'],
            practiceChallenge: 'Evaluate an e-commerce checkout A/B test with statistical significance testing in Python.',
            resource: 'https://towardsdatascience.com/a-b-testing-a-complete-guide-to-statistical-testing-e3f1db1defdb'
          },
          {
            id: 'da-t-12',
            title: 'Live SQL Interview Speed Drilling & Business Cases',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['StrataScratch Medium/Hard Questions', 'Translating vague business requests into SQL', 'Defending KPI choices'],
            practiceChallenge: 'Complete 25 timed business case SQL questions from Amazon, Meta, and Uber archives.',
            resource: 'https://www.stratascratch.com/'
          }
        ]
      }
    ],
    projectBlueprints: [
      {
        id: 'da-proj-1',
        title: 'Executive SaaS Customer Churn & Cohort Retention Dashboard',
        difficulty: 'Intermediate',
        techStack: 'SQL (PostgreSQL), Power BI / Tableau, Excel',
        summary: 'An end-to-end analytical pipeline analyzing 50,000 subscription customers, calculating retention cohorts, and alerting churn risks.',
        milestones: [
          'Extract and clean raw subscription event logs using SQL window functions (LAG, LEAD).',
          'Build cohort matrix analyzing 12-month customer retention curves and churn drivers.',
          'Model star schema with Date, Customer, Plan, and Payment dimensions.',
          'Develop executive Power BI dashboard with interactive slicers, drill-throughs, and dynamic KPI cards.',
          'Record a 3-minute video walkthrough explaining findings and strategic recommendations.'
        ]
      },
      {
        id: 'da-proj-2',
        title: 'E-Commerce Supply Chain Optimization & Sales Forecasting',
        difficulty: 'Advanced Capstone',
        techStack: 'Python (Pandas, Statsmodels), SQL, Streamlit or Power BI',
        summary: 'Analyzes inventory stockout risks, freight delivery bottlenecks, and seasonal product demand patterns.',
        milestones: [
          'Design ETL pipeline in Python to ingest multi-channel sales and logistics logs.',
          'Perform statistical correlation analysis identifying key variables causing transit delays.',
          'Build seasonal moving average and forecast models for warehouse stock replenishment.',
          'Deploy an interactive web dashboard for supply chain managers with automated PDF export.',
          'Publish codebase with documentation on GitHub with sample data and interactive demo.'
        ]
      }
    ],
    certifications: [
      {
        id: 'cert-da-1',
        title: 'Google Data Analytics Professional Certificate',
        issuer: 'Google',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free to Audit ($0) or $49/mo (Coursera Financial Aid Available)',
        credentialType: 'Official Industry Certificate with Hiring Consortium',
        skillsCovered: ['SQL', 'Spreadsheets', 'Tableau', 'R Programming', 'Data Cleaning', 'Case Studies'],
        recruiterValue: 'Created by Google; connects graduates directly to a consortium of 150+ top global employers committed to hiring certificate holders.',
        externalUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        recommendedPhase: 'Phase 0, 1 & 2'
      },
      {
        id: 'cert-da-2',
        title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
        issuer: 'Microsoft',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$165 USD (~₹13,500 INR) / Free prep on MS Learn',
        credentialType: 'Proctored Microsoft Examination',
        skillsCovered: ['DAX Formulas', 'Power Query M', 'Data Modeling', 'Row-Level Security', 'Executive KPI Dashboards'],
        recruiterValue: 'The undisputed gold standard credential for business intelligence and data visualization professionals worldwide.',
        externalUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/',
        recommendedPhase: 'Phase 2'
      },
      {
        id: 'cert-da-3',
        title: 'Data Analysis with Python Certification',
        issuer: 'freeCodeCamp',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: '5 Verified Python Analytics Projects',
        skillsCovered: ['NumPy', 'Pandas', 'Matplotlib & Seaborn', 'Medical Data Visualizer', 'Page View Time Series'],
        recruiterValue: 'Verifiable hands-on proof of Python data wrangling capabilities with real public project submissions.',
        externalUrl: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedPhase: 'Phase 3'
      },
      {
        id: 'cert-da-4',
        title: 'IBM Data Analyst Professional Certificate',
        issuer: 'IBM',
        tier: 'Tier A',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free Audit / $49/mo (Financial Aid Available)',
        credentialType: 'Comprehensive Professional Credential',
        skillsCovered: ['Advanced SQL', 'Excel Macros', 'Cognos Analytics', 'Python ETL Pipelines'],
        recruiterValue: 'Recognized globally by Fortune 500 corporations for end-to-end data analytics and business reporting workflows.',
        externalUrl: 'https://www.coursera.org/professional-certificates/ibm-data-analyst',
        recommendedPhase: 'Phase 1 & 3'
      },
      {
        id: 'cert-da-5',
        title: 'Kaggle Data Analysis & Pandas Competencies',
        issuer: 'Kaggle (Google)',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Verified Micro-Course Credentials',
        skillsCovered: ['Pandas Indexing', 'Data Types & Missing Values', 'Renaming & Combining DataFrames'],
        recruiterValue: 'Instant proof of practical exploratory data analysis directly on the world’s largest data science platform.',
        externalUrl: 'https://www.kaggle.com/learn',
        recommendedPhase: 'Phase 3'
      }
    ]
  },

  // 3. AI ENGINEER
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    shortTitle: 'AI / GenAI Engineer',
    category: 'Applied Intelligence',
    badge: 'Surging Frontier',
    icon: 'Sparkles',
    tagline: 'Build production GenAI applications, autonomous agent workflows, and scalable RAG pipelines.',
    description: 'AI Engineers specialize in harnessing Large Language Models (LLMs), multimodal foundation models, and vector databases to create intelligent enterprise agents, RAG systems, and semantic search platforms.',
    marketDemand: 'Surging (Highest Growth)',
    avgSalary: '₹18 - ₹50 LPA',
    experienceLevel: 'Zero to Job-Ready (7-9 Months)',
    theme: {
      primary: '#8b5cf6', // Violet
      border: 'border-violet-500/30',
      borderHover: 'hover:border-violet-500/70',
      bgLight: 'bg-violet-500/10',
      text: 'text-violet-400',
      glow: 'shadow-violet-500/20',
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    skillsMatrix: [
      {
        category: 'Foundation AI & LLMs',
        skills: [
          { name: 'LLM Architectures & APIs', level: 'Crucial', desc: 'Transformers, Attention, Prompt Engineering, Gemini / OpenAI SDKs' },
          { name: 'Retrieval-Augmented Generation (RAG)', level: 'Crucial', desc: 'Chunking strategies, Embeddings, Hybrid search, Re-ranking' },
          { name: 'Vector Databases', level: 'Crucial', desc: 'Chroma, Pinecone, Qdrant, Milvus, HNSW indexing, Cosine similarity' }
        ]
      },
      {
        category: 'Autonomous Agents & Orchestration',
        skills: [
          { name: 'Agent Frameworks', level: 'Essential', desc: 'LangChain, LlamaIndex, LangGraph, AutoGen, Function calling' },
          { name: 'Evaluation & Guardrails', level: 'Essential', desc: 'Ragas, TruLens, Hallucination checks, NeMo Guardrails' }
        ]
      },
      {
        category: 'Fine-Tuning & MLOps',
        skills: [
          { name: 'Parameter-Efficient Fine-Tuning (PEFT)', level: 'Advanced', desc: 'LoRA, QLoRA, Axolotl, Unsloth, HuggingFace Transformers' },
          { name: 'Model Serving & Optimization', level: 'Advanced', desc: 'vLLM, Ollama, TensorRT-LLM, Quantization (GGUF, AWQ)' }
        ]
      }
    ],
    programmingLanguages: [
      { name: 'Python', importance: 'Primary Core', roleInJob: 'The universal language for modern AI, LLM frameworks, data processing, and backends.', masteryTarget: 'AsyncIO, Pydantic, FastAPI, Type hinting, PyTorch basics' },
      { name: 'TypeScript / JavaScript', importance: 'Secondary', roleInJob: 'Full-stack AI integration, Next.js AI SDK, client-side streaming.', masteryTarget: 'Vercel AI SDK, Streaming responses, Server Actions' },
      { name: 'SQL & Vector Query', importance: 'Essential', roleInJob: 'Hybrid search combining relational filters with dense vector embeddings (pgvector).', masteryTarget: 'pgvector syntax, HNSW indexes, hybrid BM25 + dense search' }
    ],
    phases: [
      {
        phaseId: 'ai-p0',
        phaseNumber: 0,
        title: 'Phase 0: Python Foundations & Data Science Stack',
        duration: 'Month 1',
        description: 'Master advanced Python, data structures, and mathematical prerequisites for modern AI.',
        topics: [
          {
            id: 'ai-t-01',
            title: 'Modern Python 3.12+ & Async Programming',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['AsyncIO & event loops', 'Type hints & Pydantic models', 'Generators & Iterators for streaming tokens'],
            practiceChallenge: 'Build an async scraper that streams text chunks into a Pydantic validation schema.',
            resource: 'https://docs.pydantic.dev/latest/'
          },
          {
            id: 'ai-t-02',
            title: 'Linear Algebra & Probability for AI',
            estimatedHours: 20,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Dot Products & Cosine Distance', 'Matrix Multiplications', 'Softmax & Probability Distributions'],
            practiceChallenge: 'Implement dot product, cosine similarity, and softmax manually using pure NumPy.',
            resource: 'https://www.3blue1brown.com/topics/linear-algebra'
          },
          {
            id: 'ai-t-03',
            title: 'NumPy Vectorization & Data Representation',
            estimatedHours: 15,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Multidimensional Arrays & Tensors', 'Broadcasting rules', 'Dimensionality reshaping'],
            practiceChallenge: 'Vectorize pairwise Euclidean distance computation between 1,000 512-dim vectors.',
            resource: 'https://numpy.org/doc/stable/user/quickstart.html'
          }
        ]
      },
      {
        phaseId: 'ai-p1',
        phaseNumber: 1,
        title: 'Phase 1: Deep Learning Core & Transformer Mechanics',
        duration: 'Months 2-3',
        description: 'Understand how Neural Networks learn, and demystify the Transformer Self-Attention architecture.',
        topics: [
          {
            id: 'ai-t-04',
            title: 'Neural Networks & PyTorch Fundamentals',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Tensors, Autograd & Backpropagation', 'Loss Functions (Cross-Entropy, MSE)', 'Training loops & Optimizers (AdamW)'],
            practiceChallenge: 'Train a multi-layer perceptron from scratch in PyTorch to classify non-linear tabular patterns.',
            resource: 'https://pytorch.org/tutorials/beginner/basics/intro.html'
          },
          {
            id: 'ai-t-05',
            title: 'The Transformer Architecture Deep-Dive',
            estimatedHours: 35,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Scaled Dot-Product Attention', 'Multi-Head Attention', 'Positional Encoding (RoPE)', 'Decoder-only vs Encoder-Decoder'],
            practiceChallenge: 'Code a miniature Multi-Head Attention layer in PyTorch following the "Attention is All You Need" paper.',
            resource: 'https://jalammar.github.io/illustrated-transformer/'
          },
          {
            id: 'ai-t-06',
            title: 'Tokenization, Embeddings & Latent Space',
            estimatedHours: 20,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Byte-Pair Encoding (BPE) & SentencePiece', 'Token limits & context windows', 'Embedding geometry & semantic clusters'],
            practiceChallenge: 'Tokenize and project sentence embeddings into 2D using t-SNE or UMAP to visualize semantic clusters.',
            resource: 'https://tiktokenizer.vercel.app/'
          }
        ]
      },
      {
        phaseId: 'ai-p2',
        phaseNumber: 2,
        title: 'Phase 2: Production RAG & Vector Search Systems',
        duration: 'Months 4-5',
        description: 'Design enterprise Retrieval-Augmented Generation architectures with hybrid search and citation tracking.',
        topics: [
          {
            id: 'ai-t-07',
            title: 'Advanced Chunking & Vector DB Indexing',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['Semantic vs Fixed-size vs Hierarchical Chunking', 'Metadata filtering in Chroma / Pinecone / pgvector', 'HNSW vs IVF indexes'],
            practiceChallenge: 'Benchmark retrieval accuracy across 3 different chunk sizes on a 500-page legal or medical PDF.',
            resource: 'https://www.pinecone.io/learn/series/rag/'
          },
          {
            id: 'ai-t-08',
            title: 'Advanced RAG Techniques (Re-ranking & Query Expansion)',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Cross-Encoder Re-rankers (Cohere, BGE)', 'HyDE (Hypothetical Document Embeddings)', 'Multi-query expansion & contextual compression'],
            practiceChallenge: 'Build a production RAG pipeline with reciprocal rank fusion (RRF) and dynamic thresholding.',
            resource: 'https://docs.llamaindex.ai/en/stable/'
          },
          {
            id: 'ai-t-09',
            title: 'RAG Evaluation Metrics (Ragas & TruLens)',
            estimatedHours: 20,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Faithfulness (Hallucination score)', 'Answer Relevance', 'Context Precision & Recall', 'Synthetic test-set generation'],
            practiceChallenge: 'Run an automated RAGAS evaluation suite on 50 questions to grade your retrieval precision.',
            resource: 'https://docs.ragas.io/en/stable/'
          }
        ]
      },
      {
        phaseId: 'ai-p3',
        phaseNumber: 3,
        title: 'Phase 3: Autonomous Agents, Tool Calling & Fine-Tuning',
        duration: 'Month 6',
        description: 'Build self-reflecting agent workflows, MCP tools, and fine-tune open-weight models (Llama 3 / Mistral).',
        topics: [
          {
            id: 'ai-t-10',
            title: 'Agentic Workflows & Multi-Agent Teams (LangGraph)',
            estimatedHours: 35,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['ReAct prompting loops', 'State machines & cyclic graphs in LangGraph', 'Human-in-the-loop validation', 'Tool use / function calling'],
            practiceChallenge: 'Build an autonomous research agent that searches the web, verifies sources, and compiles a Markdown report.',
            resource: 'https://langchain-ai.github.io/langgraph/'
          },
          {
            id: 'ai-t-11',
            title: 'Parameter-Efficient Fine-Tuning (PEFT / LoRA)',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Low-Rank Adaptation (LoRA) math', '4-bit Quantization (QLoRA)', 'Dataset preparation & instruction tuning with Unsloth'],
            practiceChallenge: 'Fine-tune a Llama 3 8B model to generate domain-specific SQL queries with 95%+ execution accuracy.',
            resource: 'https://github.com/unslothai/unsloth'
          }
        ]
      },
      {
        phaseId: 'ai-p4',
        phaseNumber: 4,
        title: 'Phase 4: High-Concurrency AI Serving & Interview Prep',
        duration: 'Month 7',
        description: 'Deploy models with vLLM, optimize token throughput, and prepare for system design & theoretical AI interviews.',
        topics: [
          {
            id: 'ai-t-12',
            title: 'High-Performance Inference Engines (vLLM & TensorRT)',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['PagedAttention mechanics', 'Continuous batching', 'Time to First Token (TTFT) vs Tokens Per Second (TPS)'],
            practiceChallenge: 'Deploy an open model via vLLM on a cloud GPU instance with streaming SSE endpoints.',
            resource: 'https://docs.vllm.ai/en/latest/'
          },
          {
            id: 'ai-t-13',
            title: 'AI System Design & Live Interview Scenarios',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Designing Copilot for GitHub or Enterprise Slack', 'Latency budget calculations', 'Cost estimation & caching strategies'],
            practiceChallenge: 'Design an end-to-end multimodal customer support agent handling 100k daily queries.',
            resource: 'https://www.youtube.com/results?search_query=system+design+for+llms'
          }
        ]
      }
    ],
    projectBlueprints: [
      {
        id: 'ai-proj-1',
        title: 'Enterprise Multi-Document RAG with Hybrid Search & Citations',
        difficulty: 'Intermediate',
        techStack: 'Python, FastAPI, Pinecone / Qdrant, LangChain/LlamaIndex, React',
        summary: 'Ingests corporate documentation, PDFs, and Notion pages; performs hybrid dense/sparse search with source citations and guardrails.',
        milestones: [
          'Build recursive hierarchical chunker retaining page numbers and section headers as metadata.',
          'Implement hybrid search with BGE re-ranking for top-5 accurate context retrieval.',
          'Integrate streaming response UI with interactive highlighted citation snippets.',
          'Implement hallucination evaluation score for every generated answer.',
          'Package as Docker container with FastAPI backend and clean Next.js frontend.'
        ]
      },
      {
        id: 'ai-proj-2',
        title: 'Autonomous Multi-Agent Software Development Squad',
        difficulty: 'Advanced Capstone',
        techStack: 'LangGraph, Python 3.12, Docker sandbox, Anthropic/Gemini APIs',
        summary: 'A team of collaborating AI agents (Architect, Coder, Tester, Reviewer) that converts user requirements into tested code repositories.',
        milestones: [
          'Design LangGraph state machine with cyclic feedback loops between Coder and Tester.',
          'Implement secure sandboxed code execution environment using Docker.',
          'Add automated AST linting and unit test generation step before agent submits work.',
          'Provide human-in-the-loop review checkpoints via a polished web UI.',
          'Deploy live with demo recordings and comprehensive open-source GitHub documentation.'
        ]
      }
    ],
    certifications: [
      {
        id: 'cert-ai-1',
        title: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI & Stanford University (Andrew Ng)',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free to Audit all videos & labs ($0) or $49/mo for Certificate',
        credentialType: 'Gold Standard Academic Credential',
        skillsCovered: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Unsupervised Learning', 'Recommender Systems', 'Reinforcement Learning'],
        recruiterValue: 'The #1 globally revered ML credential. Taught by Andrew Ng; held as proof of authentic theoretical comprehension by every Tier S AI team.',
        externalUrl: 'https://www.deeplearning.ai/courses/machine-learning-specialization/',
        recommendedPhase: 'Phase 0 & 1'
      },
      {
        id: 'cert-ai-2',
        title: 'Generative AI with Large Language Models (LLMs)',
        issuer: 'DeepLearning.AI & Amazon Web Services (AWS)',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free Audit ($0) or $49/mo (Financial Aid Available)',
        credentialType: 'Verified Production GenAI Certificate',
        skillsCovered: ['Transformer Attention', 'PEFT & LoRA Fine-Tuning', 'RLHF (Human Feedback)', 'RAG Pipelines', 'LangChain'],
        recruiterValue: 'Direct co-development with AWS GenAI scientists. The most respected credential for practical modern LLM engineering.',
        externalUrl: 'https://www.deeplearning.ai/courses/generative-ai-with-llms/',
        recommendedPhase: 'Phase 2 & 3'
      },
      {
        id: 'cert-ai-3',
        title: 'Google Cloud Professional Machine Learning Engineer',
        issuer: 'Google Cloud (GCP)',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$200 USD (~₹16,500 INR)',
        credentialType: 'Proctored Google Cloud Certification',
        skillsCovered: ['Vertex AI', 'Production MLOps', 'Data Pipelines', 'Model Serving', 'Scalable Training'],
        recruiterValue: 'Recognized by top tech enterprises as proof that an engineer can deploy and monitor AI models reliably at petabyte scale.',
        externalUrl: 'https://cloud.google.com/learn/certification/machine-learning-engineer',
        recommendedPhase: 'Phase 4'
      },
      {
        id: 'cert-ai-4',
        title: 'Hugging Face Open-Source AI Courses & Certifications',
        issuer: 'Hugging Face',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Hands-on Community Verified Certificate',
        skillsCovered: ['Hugging Face Transformers', 'Tokenizers', 'Datasets', 'Diffusion Models', 'Deep RL'],
        recruiterValue: 'Directly values your Hugging Face ecosystem knowledge; the primary open-source platform used by modern AI startups.',
        externalUrl: 'https://huggingface.co/learn',
        recommendedPhase: 'Phase 1 & 2'
      },
      {
        id: 'cert-ai-5',
        title: 'AWS Certified Machine Learning – Specialty (MLS-C01)',
        issuer: 'Amazon Web Services (AWS)',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$300 USD (~₹25,000 INR)',
        credentialType: 'Proctored Specialty Certification',
        skillsCovered: ['SageMaker', 'Feature Engineering', 'Distributed Training', 'Hyperparameter Tuning'],
        recruiterValue: 'Premium credential indicating advanced cloud-native machine learning pipeline orchestration.',
        externalUrl: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
        recommendedPhase: 'Phase 3 & 4'
      }
    ]
  },

  // 4. DATA SCIENTIST
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    shortTitle: 'Data Scientist / ML',
    category: 'Statistical Modeling',
    badge: 'High Impact',
    icon: 'BrainCircuit',
    tagline: 'Formulate predictive machine learning models, unearth hidden patterns, and drive data science innovation.',
    description: 'Data Scientists blend advanced statistics, exploratory mathematics, and machine learning algorithms (XGBoost, Neural Networks) to predict future trends, segment customer populations, and optimize complex decisions.',
    marketDemand: 'Very High',
    avgSalary: '₹14 - ₹38 LPA',
    experienceLevel: 'Zero to Job-Ready (6-8 Months)',
    theme: {
      primary: '#10b981', // Emerald
      border: 'border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/70',
      bgLight: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
      gradient: 'from-emerald-500 to-teal-600'
    },
    skillsMatrix: [
      {
        category: 'Mathematics & Modeling',
        skills: [
          { name: 'Multivariate Calculus & Linear Algebra', level: 'Crucial', desc: 'Gradients, Eigenvalues, SVD, Matrix decomposition' },
          { name: 'Classical Machine Learning', level: 'Crucial', desc: 'Linear/Logistic Regression, Tree Ensembles (Random Forest, XGBoost, LightGBM)' },
          { name: 'Unsupervised Learning & Clustering', level: 'Essential', desc: 'K-Means, DBSCAN, PCA, t-SNE, Hierarchical clustering' }
        ]
      },
      {
        category: 'Data Engineering & MLOps',
        skills: [
          { name: 'Feature Engineering & Selection', level: 'Crucial', desc: 'Target encoding, polynomial features, handling high-cardinality data' },
          { name: 'Model Lifecycle & Tracking', level: 'Essential', desc: 'MLflow, Weights & Biases, model drift detection, model registries' }
        ]
      },
      {
        category: 'Business & Experimentation',
        skills: [
          { name: 'Rigorous A/B Testing & Causal Inference', level: 'Essential', desc: 'Power analysis, Bonferroni correction, propensity score matching' },
          { name: 'Executive Storytelling', level: 'Essential', desc: 'Translating model coefficients & SHAP values to business ROI' }
        ]
      }
    ],
    programmingLanguages: [
      { name: 'Python', importance: 'Primary Core', roleInJob: 'Core ecosystem for Scikit-Learn, XGBoost, Pandas, PyTorch, and Statsmodels.', masteryTarget: 'Pandas vectorization, Scikit-Learn pipelines, custom estimators' },
      { name: 'SQL', importance: 'Primary Core', roleInJob: 'Extracting training feature sets from big data warehouses (Snowflake, BigQuery).', masteryTarget: 'Window functions, Partitioning, complex aggregate rollups' },
      { name: 'R', importance: 'Supplementary', roleInJob: 'Specialized statistical tests, biostatistics, econometric modeling.', masteryTarget: 'ggplot2, dplyr, survival analysis packages' }
    ],
    phases: [
      {
        phaseId: 'ds-p0',
        phaseNumber: 0,
        title: 'Phase 0: Math, Probability & Data Science Stack',
        duration: 'Month 1',
        description: 'Build an unshakeable foundation in linear algebra, multivariable calculus, and probability theory.',
        topics: [
          {
            id: 'ds-t-01',
            title: 'Calculus, Optimization & Linear Algebra',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Partial Derivatives & Gradient Vectors', 'Matrix Inversion & Rank', 'Convex vs Non-convex optimization'],
            practiceChallenge: 'Implement gradient descent from scratch in Python to find the minimum of a 3D loss surface.',
            resource: 'https://mml-book.github.io/'
          },
          {
            id: 'ds-t-02',
            title: 'Probability Distributions & Central Limit Theorem',
            estimatedHours: 20,
            difficulty: 'Beginner',
            pillar: 'aptitude',
            keyConcepts: ['Normal, Binomial, Poisson & Exponential distributions', 'Law of Large Numbers & Central Limit Theorem', 'Bayes Theorem'],
            practiceChallenge: 'Simulate 10,000 coin toss experiments in NumPy to empirically verify the Central Limit Theorem.',
            resource: 'https://www.statlearning.com/'
          },
          {
            id: 'ds-t-03',
            title: 'Python for Data Science (NumPy, Pandas, Seaborn)',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Data manipulation with Pandas', 'Vectorized math with NumPy', 'Statistical visualization with Seaborn'],
            practiceChallenge: 'Perform complete Exploratory Data Analysis on the Titanic or Housing Prices Kaggle dataset.',
            resource: 'https://jakevdp.github.io/PythonDataScienceHandbook/'
          }
        ]
      },
      {
        phaseId: 'ds-p1',
        phaseNumber: 1,
        title: 'Phase 1: Supervised Learning & Regression / Classification',
        duration: 'Months 2-3',
        description: 'Master core machine learning algorithms, regularization techniques, and evaluation metrics.',
        topics: [
          {
            id: 'ds-t-04',
            title: 'Linear & Logistic Regression with Regularization',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Cost function formulation (MSE, Log-Loss)', 'L1 Lasso vs L2 Ridge regularization', 'Odds ratios & decision boundaries'],
            practiceChallenge: 'Build regularized logistic regression from scratch using NumPy with gradient descent updates.',
            resource: 'https://scikit-learn.org/stable/modules/linear_model.html'
          },
          {
            id: 'ds-t-05',
            title: 'Decision Trees, Random Forests & Gradient Boosting',
            estimatedHours: 35,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Gini Impurity & Entropy', 'Bagging vs Boosting mechanics', 'XGBoost & LightGBM hyperparameters'],
            practiceChallenge: 'Train and tune an XGBoost classifier with Optuna / GridSearchCV on an imbalanced fraud dataset.',
            resource: 'https://xgboost.readthedocs.io/en/stable/'
          },
          {
            id: 'ds-t-06',
            title: 'Model Evaluation & Cross-Validation Strategies',
            estimatedHours: 20,
            difficulty: 'Intermediate',
            pillar: 'interview',
            keyConcepts: ['Stratified K-Fold vs Time-Series split', 'ROC-AUC vs PR-AUC curve nuances', 'Confusion Matrix, Precision, Recall, F1-Score'],
            practiceChallenge: 'Evaluate 4 distinct classifiers on a 1:99 imbalanced target dataset and justify your chosen metric.',
            resource: 'https://scikit-learn.org/stable/modules/model_evaluation.html'
          }
        ]
      },
      {
        phaseId: 'ds-p2',
        phaseNumber: 2,
        title: 'Phase 2: Unsupervised Learning & Advanced Feature Engineering',
        duration: 'Month 4',
        description: 'Discover latent structures using clustering, PCA, and build robust Scikit-Learn pipelines.',
        topics: [
          {
            id: 'ds-t-07',
            title: 'Clustering & Dimensionality Reduction (PCA & t-SNE)',
            estimatedHours: 25,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['K-Means (Elbow method, Silhouette score)', 'DBSCAN for spatial noise', 'Principal Component Analysis (Explained Variance)'],
            practiceChallenge: 'Segment 50,000 retail customers into distinct personas using K-Means and visualize with PCA.',
            resource: 'https://scikit-learn.org/stable/modules/clustering.html'
          },
          {
            id: 'ds-t-08',
            title: 'Production Feature Engineering & Scikit-Learn Pipelines',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['ColumnTransformer & custom transformers', 'Handling high-cardinality categorical data', 'Preventing data leakage between train/test'],
            practiceChallenge: 'Build a production-grade leak-free Scikit-Learn pipeline exported via joblib or ONNX.',
            resource: 'https://scikit-learn.org/stable/modules/compose.html'
          }
        ]
      },
      {
        phaseId: 'ds-p3',
        phaseNumber: 3,
        title: 'Phase 3: Explainable AI (XAI), Deep Learning & MLOps',
        duration: 'Months 5-6',
        description: 'Demystify black-box models using SHAP values, explore PyTorch, and track experiments with MLflow.',
        topics: [
          {
            id: 'ds-t-09',
            title: 'Explainable AI: SHAP & LIME Interpretability',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Shapley values from game theory', 'TreeSHAP for global & local feature importance', 'Defending model decisions in regulated industries'],
            practiceChallenge: 'Generate waterfall and beeswarm SHAP plots to explain why an applicant was denied a loan.',
            resource: 'https://shap.readthedocs.io/en/latest/'
          },
          {
            id: 'ds-t-10',
            title: 'MLOps: Experiment Tracking & Model Registry (MLflow)',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['Logging parameters, metrics & artifacts', 'Model versioning & staging', 'Detecting concept & data drift'],
            practiceChallenge: 'Set up an MLflow tracking server and compare 10 automated model training runs.',
            resource: 'https://mlflow.org/docs/latest/index.html'
          }
        ]
      },
      {
        phaseId: 'ds-p4',
        phaseNumber: 4,
        title: 'Phase 4: Causal Inference, Business Scenarios & Interview Prep',
        duration: 'Month 7',
        description: 'Prepare for product data science rounds, business case studies, and coding live tests.',
        topics: [
          {
            id: 'ds-t-11',
            title: 'Causal Inference & Advanced A/B Experimentation',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Difference-in-Differences (DiD)', 'Propensity Score Matching', 'Network effects & spillover in marketplace experimentation'],
            practiceChallenge: 'Estimate the true causal revenue lift of a premium feature rollout using synthetic controls.',
            resource: 'https://www.bradyneal.com/causal-inference-course'
          },
          {
            id: 'ds-t-12',
            title: 'Product Data Science Case Studies & Technical Interview',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Diagnosing metric drops (e.g. why did DAU fall by 8%?)', 'Designing recommendation systems', 'Live ML coding tests'],
            practiceChallenge: 'Complete 5 full product metric diagnosis cases from Meta and Netflix interview questions.',
            resource: 'https://www.tryexponent.com/courses/data-science'
          }
        ]
      }
    ],
    projectBlueprints: [
      {
        id: 'ds-proj-1',
        title: 'End-to-End Financial Fraud Detection Pipeline with SHAP Explainability',
        difficulty: 'Intermediate',
        techStack: 'Python, Scikit-Learn, LightGBM, SHAP, FastAPI, Docker',
        summary: 'Detects fraudulent credit card transactions across 280,000 skewed instances, providing real-time risk scores and human explanations.',
        milestones: [
          'Preprocess imbalanced credit transaction stream with SMOTE / class weighting.',
          'Train tuned LightGBM model optimizing PR-AUC and cost-sensitive business matrix.',
          'Extract SHAP attribution for top predictive risk factors per transaction.',
          'Wrap model into a sub-50ms latency FastAPI REST prediction service.',
          'Package with unit tests and publish interactive Streamlit dashboard for credit risk officers.'
        ]
      },
      {
        id: 'ds-proj-2',
        title: 'E-Commerce Dynamic Pricing & Demand Elasticity Engine',
        difficulty: 'Advanced Capstone',
        techStack: 'Python, Statsmodels, XGBoost, MLflow, BigQuery',
        summary: 'Estimates price elasticity of demand across 10,000 SKUs to maximize gross revenue without cannibalizing sales volume.',
        milestones: [
          'Formulate log-log econometric demand regression models to isolate price elasticity.',
          'Account for holiday seasonality, competitor promotions, and inventory stock levels.',
          'Track hyperparameter tuning runs and model checkpoints inside an MLflow server.',
          'Simulate price changes and project net revenue impact under various market elasticity scenarios.',
          'Document results in a boardroom-ready whitepaper with clear business recommendations.'
        ]
      }
    ],
    certifications: [
      {
        id: 'cert-ds-1',
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI & Andrew Ng',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free to Audit all videos ($0) or $49/mo for Certificate',
        credentialType: 'Gold Standard Academic Credential',
        skillsCovered: ['Convolutional Networks (CNN)', 'Sequence Models (RNN/LSTM)', 'Transformers', 'Hyperparameter Tuning', 'Structuring ML Projects'],
        recruiterValue: 'The most cited deep learning credential globally; certifies mathematical mastery of gradient optimization and neural architectures.',
        externalUrl: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
        recommendedPhase: 'Phase 1 & 3'
      },
      {
        id: 'cert-ds-2',
        title: 'HarvardX: Professional Certificate in Data Science',
        issuer: 'Harvard University & edX',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free Audit available / $790 for full 9-course verified Harvard series',
        credentialType: 'Ivy League Professional Certificate',
        skillsCovered: ['Probability & Statistics', 'Inference & Modeling', 'Linear Regression', 'Machine Learning', 'Productivity Tools'],
        recruiterValue: 'Prestigious Harvard academic rigor, highly respected for quantitative and causal inference roles in quantitative finance and tech research.',
        externalUrl: 'https://www.edx.org/certificates/professional-certificate/harvardx-data-science',
        recommendedPhase: 'Phase 0, 1 & 4'
      },
      {
        id: 'cert-ds-3',
        title: 'Google Cloud Professional Data Engineer',
        issuer: 'Google Cloud (GCP)',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$200 USD (~₹16,500 INR)',
        credentialType: 'Industry Enterprise Certification',
        skillsCovered: ['BigQuery', 'Apache Spark / Dataproc', 'Dataflow (Beam)', 'Data Warehousing', 'Cloud SQL'],
        recruiterValue: 'Critical for Data Scientists who need to query, clean, and model petabyte-scale datasets directly in enterprise warehouses.',
        externalUrl: 'https://cloud.google.com/learn/certification/data-engineer',
        recommendedPhase: 'Phase 2 & 3'
      },
      {
        id: 'cert-ds-4',
        title: 'Kaggle Intermediate Machine Learning & Feature Engineering',
        issuer: 'Kaggle (Google)',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Verified Micro-Course Credentials',
        skillsCovered: ['Categorical Encodings', 'Mutual Information', 'XGBoost & Cross-Validation', 'Data Leakage Prevention'],
        recruiterValue: 'Directly validates practical competitive tabular data science skills on Kaggle benchmarks.',
        externalUrl: 'https://www.kaggle.com/learn',
        recommendedPhase: 'Phase 1 & 2'
      },
      {
        id: 'cert-ds-5',
        title: 'IBM Data Science Professional Certificate',
        issuer: 'IBM',
        tier: 'Tier A',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free to Audit ($0) or $49/mo (Coursera Financial Aid Available)',
        credentialType: '10-Course Professional Series',
        skillsCovered: ['Python Data Science', 'SQL Databases', 'Data Analysis with Pandas', 'Applied Scikit-Learn Modeling'],
        recruiterValue: 'Demonstrates end-to-end data science lifecycle execution from data prep to model deployment.',
        externalUrl: 'https://www.coursera.org/professional-certificates/ibm-data-science',
        recommendedPhase: 'Phase 1 & 2'
      }
    ]
  },

  // 5. WEB DEVELOPER (Full Stack)
  {
    id: 'web-dev',
    title: 'Full Stack Web Developer',
    shortTitle: 'Web Developer / Full Stack',
    category: 'Full Stack Engineering',
    badge: 'Fastest Route to Market',
    icon: 'Globe',
    tagline: 'Craft responsive, high-performance web applications, dynamic UIs, and robust server backends.',
    description: 'Full Stack Web Developers build modern digital products. From pixel-perfect, accessible React frontends to resilient Node.js / Next.js backends and cloud database architectures, they bring complete software products to life.',
    marketDemand: 'Extremely High',
    avgSalary: '₹8 - ₹28 LPA',
    experienceLevel: 'Zero to Job-Ready (5-7 Months)',
    theme: {
      primary: '#f59e0b', // Amber
      border: 'border-amber-500/30',
      borderHover: 'hover:border-amber-500/70',
      bgLight: 'bg-amber-500/10',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/20',
      gradient: 'from-amber-500 to-orange-600'
    },
    skillsMatrix: [
      {
        category: 'Frontend Engineering',
        skills: [
          { name: 'Semantic HTML5 & Modern CSS3', level: 'Crucial', desc: 'Flexbox, CSS Grid, Tailwind CSS, Responsive Design, Accessibility (a11y)' },
          { name: 'Modern JavaScript (ES6+) & TypeScript', level: 'Crucial', desc: 'Async/Await, Closures, DOM, Prototypal inheritance, Strict Types' },
          { name: 'React 18/19 & Component Architecture', level: 'Crucial', desc: 'Hooks (useEffect, useMemo, custom hooks), State Management, Context API' }
        ]
      },
      {
        category: 'Backend & APIs',
        skills: [
          { name: 'Node.js, Express & Next.js', level: 'Crucial', desc: 'Server Actions, Server Components (RSC), RESTful APIs, Middleware' },
          { name: 'Databases & ORMs', level: 'Essential', desc: 'PostgreSQL, MongoDB, Prisma ORM, Drizzle, migrations & indexing' },
          { name: 'Authentication & Security', level: 'Essential', desc: 'JWT, OAuth 2.0, NextAuth, CORS, CSRF, XSS, rate limiting' }
        ]
      },
      {
        category: 'DevOps & Web Performance',
        skills: [
          { name: 'Core Web Vitals & Optimization', level: 'Essential', desc: 'LCP, INP, CLS, code splitting, lazy loading, image optimization' },
          { name: 'Deployment & CI/CD', level: 'Essential', desc: 'Vercel, Docker, GitHub Actions, Nginx basics' }
        ]
      }
    ],
    programmingLanguages: [
      { name: 'JavaScript / TypeScript', importance: 'Primary Core', roleInJob: 'The universal language powering both the browser interface and the server runtime.', masteryTarget: 'TypeScript generics, utility types, async runtime, Event Loop' },
      { name: 'HTML5 & CSS3', importance: 'Primary Core', roleInJob: 'Structural semantics, responsive layouts, web animations, and styling systems.', masteryTarget: 'Grid, Flexbox, Tailwind CSS, Container Queries, a11y standards' },
      { name: 'SQL', importance: 'Secondary', roleInJob: 'Relational data persistence with PostgreSQL via raw queries and modern ORMs.', masteryTarget: 'Schema design, migrations, indexing, relational foreign keys' }
    ],
    phases: [
      {
        phaseId: 'web-p0',
        phaseNumber: 0,
        title: 'Phase 0: Web Foundations (HTML, CSS & Modern JS)',
        duration: 'Month 1',
        description: 'Build semantic, accessible, and mobile-responsive websites using vanilla HTML, CSS, and modern JavaScript.',
        topics: [
          {
            id: 'web-t-01',
            title: 'Semantic HTML5 & Accessibility (WCAG / a11y)',
            estimatedHours: 15,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Semantic tags (header, main, nav, article)', 'ARIA roles & screen-reader compatibility', 'Form validation attributes'],
            practiceChallenge: 'Code a fully accessible, keyboard-navigable registration form with zero div soup.',
            resource: 'https://web.dev/learn/html/'
          },
          {
            id: 'web-t-02',
            title: 'Modern CSS, Flexbox & CSS Grid Mastery',
            estimatedHours: 25,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Flexbox alignment & axes', 'CSS Grid templates & auto-fit/minmax', 'Media queries & mobile-first mindset'],
            practiceChallenge: 'Build a responsive 12-column dashboard layout that seamlessly adapts from mobile to 4K monitor.',
            resource: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
          },
          {
            id: 'web-t-03',
            title: 'Core JavaScript (ES6+) & DOM Manipulation',
            estimatedHours: 30,
            difficulty: 'Beginner',
            pillar: 'programming',
            keyConcepts: ['Arrow functions, destructuring & spread', 'Event listeners & event delegation', 'Fetch API, Promises & Async/Await'],
            practiceChallenge: 'Build an interactive Kanban board with drag-and-drop and localStorage persistence in vanilla JS.',
            resource: 'https://javascript.info/'
          }
        ]
      },
      {
        phaseId: 'web-p1',
        phaseNumber: 1,
        title: 'Phase 1: React & Component-Driven Architecture',
        duration: 'Months 2-3',
        description: 'Master React, hooks, state management, and modern styling with Tailwind CSS.',
        topics: [
          {
            id: 'web-t-04',
            title: 'React Fundamentals: JSX, Props & State',
            estimatedHours: 25,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Component lifecycle & rendering', 'useState & useEffect nuances', 'Lifting state up & controlled inputs'],
            practiceChallenge: 'Build an interactive recipe search app consuming a public API with debounced search inputs.',
            resource: 'https://react.dev/learn'
          },
          {
            id: 'web-t-05',
            title: 'Advanced React Hooks & Performance Optimization',
            estimatedHours: 30,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['useCallback, useMemo & React.memo', 'useRef for DOM measurements', 'Custom hooks for API fetching and window sizing'],
            practiceChallenge: 'Build a high-performance virtualized table rendering 10,000 rows without UI lag.',
            resource: 'https://react.dev/reference/react'
          },
          {
            id: 'web-t-06',
            title: 'Tailwind CSS & Modern Design Systems',
            estimatedHours: 20,
            difficulty: 'Intermediate',
            pillar: 'project',
            keyConcepts: ['Utility-first workflow', 'Dark mode theming', 'Reusable component design with class-variance-authority'],
            practiceChallenge: 'Construct a reusable UI component library (Buttons, Modals, Dropdowns, Cards) with dark mode.',
            resource: 'https://tailwindcss.com/docs'
          }
        ]
      },
      {
        phaseId: 'web-p2',
        phaseNumber: 2,
        title: 'Phase 2: TypeScript & Next.js Full Stack Architecture',
        duration: 'Month 4',
        description: 'Transition to TypeScript and build scalable full-stack applications with Next.js App Router.',
        topics: [
          {
            id: 'web-t-07',
            title: 'TypeScript for Full Stack Developers',
            estimatedHours: 25,
            difficulty: 'Intermediate',
            pillar: 'programming',
            keyConcepts: ['Interfaces vs Types', 'Generics & Utility types (Partial, Pick, Omit)', 'Type narrowing & Zod schema validation'],
            practiceChallenge: 'Refactor a standard JavaScript React project to strict TypeScript with zero "any" types.',
            resource: 'https://www.typescriptlang.org/docs/'
          },
          {
            id: 'web-t-08',
            title: 'Next.js App Router, SSR & Server Components',
            estimatedHours: 35,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['React Server Components (RSC) vs Client Components', 'Server Actions for form submissions', 'Route Handlers & Dynamic Routing'],
            practiceChallenge: 'Build a server-rendered blog platform with dynamic SEO meta tags and incremental static regeneration (ISR).',
            resource: 'https://nextjs.org/docs'
          }
        ]
      },
      {
        phaseId: 'web-p3',
        phaseNumber: 3,
        title: 'Phase 3: Databases, ORMs, Auth & Real-Time Sockets',
        duration: 'Month 5',
        description: 'Architect secure databases with PostgreSQL & Prisma, integrate OAuth, and implement WebSockets.',
        topics: [
          {
            id: 'web-t-09',
            title: 'PostgreSQL, Prisma ORM & Database Migrations',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'programming',
            keyConcepts: ['Relational schema design (1-to-many, many-to-many)', 'Prisma client queries & nested relations', 'Safe production migrations'],
            practiceChallenge: 'Model an e-commerce database with products, variants, orders, and payment records in Prisma.',
            resource: 'https://www.prisma.io/docs'
          },
          {
            id: 'web-t-10',
            title: 'Authentication & Security (NextAuth / JWT / OAuth)',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Session-based vs JWT stateless auth', 'Google & GitHub OAuth integration', 'Protecting API routes with middleware & CSRF tokens'],
            practiceChallenge: 'Implement secure role-based access control (Admin vs User) with password hashing and email verification.',
            resource: 'https://authjs.dev/'
          },
          {
            id: 'web-t-11',
            title: 'Real-Time WebSockets & Event Streaming',
            estimatedHours: 20,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['Socket.IO / native WebSockets', 'Bi-directional communication', 'Presence indicators & broadcast channels'],
            practiceChallenge: 'Build a real-time collaborative whiteboarding or messaging room with typing indicators.',
            resource: 'https://socket.io/docs/v4/'
          }
        ]
      },
      {
        phaseId: 'web-p4',
        phaseNumber: 4,
        title: 'Phase 4: Capstone SaaS, Performance Auditing & Interview Readiness',
        duration: 'Months 6-7',
        description: 'Deploy a production SaaS application, optimize Core Web Vitals, and master frontend/full-stack interviews.',
        topics: [
          {
            id: 'web-t-12',
            title: 'Core Web Vitals Optimization & Production Deployment',
            estimatedHours: 25,
            difficulty: 'Advanced',
            pillar: 'project',
            keyConcepts: ['Measuring LCP, INP, and CLS with Chrome DevTools', 'Bundle analysis & dynamic imports', 'Vercel / AWS deployment with CDN caching'],
            practiceChallenge: 'Achieve a 95+ Lighthouse performance, accessibility, and SEO score on your capstone project.',
            resource: 'https://web.dev/learn-core-web-vitals/'
          },
          {
            id: 'web-t-13',
            title: 'Frontend System Design & Coding Interview Drilling',
            estimatedHours: 30,
            difficulty: 'Advanced',
            pillar: 'interview',
            keyConcepts: ['Designing Autocomplete / Typeahead', 'Infinite scroll with intersection observers', 'JavaScript Event Loop & tricky Promise questions'],
            practiceChallenge: 'Simulate 5 mock full-stack interviews covering React architecture, caching, and state management.',
            resource: 'https://www.greatfrontend.com/'
          }
        ]
      }
    ],
    projectBlueprints: [
      {
        id: 'web-proj-1',
        title: 'Full-Stack Modern E-Commerce Platform with Stripe Checkout',
        difficulty: 'Intermediate',
        techStack: 'Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Stripe',
        summary: 'A responsive digital storefront with real-time product filtering, server-side cart calculation, webhook-driven order fulfillment, and Stripe payments.',
        milestones: [
          'Design product catalog schema in Prisma with categories, variants, inventory counts, and reviews.',
          'Implement optimistic UI updates for cart items with client-side state synced to localStorage.',
          'Integrate Stripe Checkout session creation and secure signature-verified webhook endpoints.',
          'Build customer order history dashboard with downloadable PDF invoices.',
          'Deploy to Vercel with Neon serverless Postgres; verify 95+ Lighthouse score.'
        ]
      },
      {
        id: 'web-proj-2',
        title: 'Real-Time Collaborative Workspace & Document Editor',
        difficulty: 'Advanced Capstone',
        techStack: 'Next.js, TypeScript, Socket.io / Liveblocks, Tailwind CSS, Redis',
        summary: 'A Notion-like collaborative workspace supporting simultaneous multi-user document editing, comment threads, and live cursors.',
        milestones: [
          'Implement rich-text block editor with markdown shortcuts and image uploads.',
          'Set up WebSocket server syncing document CRDT state changes across concurrent active users.',
          'Add multi-user live avatars and mouse cursor tracking with sub-30ms latency.',
          'Build organization workspace workspaces with granular permission roles (Viewer, Editor, Owner).',
          'Deploy production cluster with automated GitHub Actions CI/CD pipeline.'
        ]
      }
    ],
    certifications: [
      {
        id: 'cert-web-1',
        title: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta (Facebook)',
        tier: 'Tier S',
        costType: 'Free Audit / Paid Option',
        estimatedCost: 'Free to Audit all coursework ($0) or $49/mo (Coursera Financial Aid Available)',
        credentialType: 'Industry Credential Created by Meta Staff Engineers',
        skillsCovered: ['HTML5 & Modern CSS', 'Advanced JavaScript', 'React 18 & Hooks', 'Version Control (Git)', 'UX/UI Principles', 'Jest Testing'],
        recruiterValue: 'Designed and taught directly by Meta engineers; offers entry to the exclusive Meta Career Programs Job Board with 200+ partner recruiters.',
        externalUrl: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        recommendedPhase: 'Phase 0, 1 & 2'
      },
      {
        id: 'cert-web-2',
        title: 'CS50W: Web Programming with Python and JavaScript',
        issuer: 'Harvard University',
        tier: 'Tier S',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0) with verified Harvard CS50 Certificate',
        credentialType: 'Ivy League Project-Verified Credential',
        skillsCovered: ['Django Backend', 'React Integration', 'SQL & Migrations', 'Scalability & Security', 'CI/CD Pipelines'],
        recruiterValue: 'Renowned for extremely challenging project evaluations checked by Harvard course teaching fellows.',
        externalUrl: 'https://cs50.harvard.edu/web/',
        recommendedPhase: 'Phase 1, 2 & 3'
      },
      {
        id: 'cert-web-3',
        title: 'freeCodeCamp: Full Stack Developer Certifications',
        issuer: 'freeCodeCamp',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Portfolio of 15+ Live Verified Web Apps',
        skillsCovered: ['Responsive Web Design', 'JavaScript Algorithms', 'Front End Development Libraries (React, Redux)', 'Back End APIs'],
        recruiterValue: 'The most popular open-source coding curriculum in tech history, with verified graduates hired across FAANG, Fortune 500, and top startups.',
        externalUrl: 'https://www.freecodecamp.org/learn',
        recommendedPhase: 'Phase 0, 1 & 2'
      },
      {
        id: 'cert-web-4',
        title: 'AWS Certified Developer – Associate (DVA-C02)',
        issuer: 'Amazon Web Services (AWS)',
        tier: 'Tier S',
        costType: 'Paid (Exam Voucher)',
        estimatedCost: '$150 USD (~₹12,500 INR)',
        credentialType: 'Proctored Cloud Developer Certification',
        skillsCovered: ['Serverless Architecture (AWS Lambda)', 'DynamoDB NoSQL', 'API Gateway', 'Cognito User Authentication', 'CloudFront CDN'],
        recruiterValue: 'Highly coveted for Full Stack roles deploying serverless microservices and Next.js / React apps on AWS cloud infrastructure.',
        externalUrl: 'https://aws.amazon.com/certification/certified-developer-associate/',
        recommendedPhase: 'Phase 3 & 4'
      },
      {
        id: 'cert-web-5',
        title: 'Frontend (React) & JavaScript Skills Verification',
        issuer: 'HackerRank',
        tier: 'Tier A',
        costType: 'Unpaid (100% Free)',
        estimatedCost: 'Free ($0)',
        credentialType: 'Timed Proctored Practical Assessment',
        skillsCovered: ['React Component Design', 'State & Props Handling', 'Async JavaScript', 'DOM Events'],
        recruiterValue: 'Directly shareable on LinkedIn and resume headers to showcase verified React competency without recruiter skepticism.',
        externalUrl: 'https://www.hackerrank.com/skills-verification/react_basic',
        recommendedPhase: 'Phase 1 & 4'
      }
    ]
  }
];

export const getJobRoleById = (id) => {
  return jobRoles.find(role => role.id === id) || jobRoles[0];
};
