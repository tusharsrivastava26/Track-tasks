// Comprehensive Aptitude & Reasoning Question Bank for Tech Placement Preparation

export const aptitudeCategories = [
  { id: 'all', label: 'All Domains' },
  { id: 'quant', label: 'Quantitative Aptitude' },
  { id: 'logical', label: 'Logical & Analytical' },
  { id: 'verbal', label: 'Verbal & Critical Thinking' },
  { id: 'data-interp', label: 'Data Interpretation' }
];

export const aptitudeQuestions = [
  {
    id: 'apt-1',
    category: 'quant',
    subCategory: 'Percentages & Profit/Loss',
    difficulty: 'Medium',
    question: 'A tech firm offers an employee a 20% salary hike in Year 1, followed by a 15% bonus cut in Year 2 on the updated salary. What is the net percentage change in the initial salary?',
    options: ['2% increase', '5% increase', '3.5% decrease', '2% decrease'],
    correctIndex: 0,
    explanation: 'Let initial salary = 100. After 20% hike = 120. In Year 2, 15% cut on 120 = 120 * 0.15 = 18. New salary = 120 - 18 = 102. Net change = +2% increase.'
  },
  {
    id: 'apt-2',
    category: 'quant',
    subCategory: 'Time & Work',
    difficulty: 'Medium',
    question: 'Developer A can build an API microservice in 12 days, and Developer B can build the same microservice in 18 days. If they collaborate with Senior Dev C, they finish in 4 days. How many days would Senior Dev C take alone?',
    options: ['9 days', '8 days', '10 days', '7.2 days'],
    correctIndex: 0,
    explanation: '1/A + 1/B + 1/C = 1/Total -> 1/12 + 1/18 + 1/C = 1/4. 1/C = 1/4 - (3/36 + 2/36) = 9/36 - 5/36 = 4/36 = 1/9. Therefore, Senior Dev C takes 9 days.'
  },
  {
    id: 'apt-3',
    category: 'quant',
    subCategory: 'Permutations & Probability',
    difficulty: 'Hard',
    question: 'A microservices gateway handles 6 independent endpoints: 4 read endpoints and 2 write endpoints. If 3 endpoints are randomly selected for an audit, what is the probability that at least one write endpoint is selected?',
    options: ['4/5', '3/5', '1/2', '2/3'],
    correctIndex: 0,
    explanation: 'Total ways to pick 3 endpoints from 6 = 6C3 = 20. Ways to pick 0 write endpoints (only read) = 4C3 = 4. Ways to pick at least 1 write = 20 - 4 = 16. Probability = 16/20 = 4/5.'
  },
  {
    id: 'apt-4',
    category: 'quant',
    subCategory: 'Speed, Distance & Time',
    difficulty: 'Medium',
    question: 'Two database replica clusters 1200 km apart sync transactions over dedicated optical fibers moving packets towards each other at 180 km/ms and 220 km/ms. After how many milliseconds will they meet?',
    options: ['3 ms', '4 ms', '2.5 ms', '3.5 ms'],
    correctIndex: 0,
    explanation: 'Relative speed = 180 + 220 = 400 km/ms. Time = Distance / Speed = 1200 / 400 = 3 ms.'
  },
  {
    id: 'apt-5',
    category: 'logical',
    subCategory: 'Syllogisms & Logic',
    difficulty: 'Easy',
    question: 'Statements:\n1. All APIs are protocols.\n2. Some protocols are secure.\nConclusions:\nI. Some APIs are secure.\nII. Some protocols are APIs.',
    options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both I and II follow', 'Neither follows'],
    correctIndex: 1,
    explanation: 'Since all APIs are protocols, naturally some protocols must be APIs (Conversion of universal affirmative). Conclusion I does not necessarily follow from the premises.'
  },
  {
    id: 'apt-6',
    category: 'logical',
    subCategory: 'Seating & Ordering',
    difficulty: 'Medium',
    question: 'Five engineers (P, Q, R, S, T) sit in a row for a standup. R is immediately to the right of Q. S is sitting at one of the extreme ends. T is between S and Q. Who is sitting at the other extreme end?',
    options: ['P', 'R', 'Q', 'Either P or R'],
    correctIndex: 1,
    explanation: 'S is at one end. T is between S and Q -> Sequence from that end: S - T - Q. Since R is immediately right of Q -> S - T - Q - R. That leaves P: S - P - T - Q - R or S - T - P - Q - R, but with T between S and Q and R at the right of Q, the rightmost extreme end is R.'
  },
  {
    id: 'apt-7',
    category: 'logical',
    subCategory: 'Number & Alphabet Series',
    difficulty: 'Medium',
    question: 'Find the next number in the sequence: 3, 7, 15, 31, 63, ?',
    options: ['127', '126', '125', '128'],
    correctIndex: 0,
    explanation: 'Pattern: (N * 2) + 1. 3*2+1 = 7; 7*2+1 = 15; 15*2+1 = 31; 31*2+1 = 63; 63*2+1 = 127.'
  },
  {
    id: 'apt-8',
    category: 'verbal',
    subCategory: 'Critical Reasoning',
    difficulty: 'Hard',
    question: 'Passage: "Deploying automated linting and continuous integration reduced code review turnaround by 40%. However, production incident rates remained unchanged." What assumption best explains why incidents were not reduced?',
    options: [
      'Automated linting catches stylistic and syntactic bugs rather than architectural or domain logic flaws.',
      'Developers stopped testing their code locally.',
      'Continuous integration servers had high latency.',
      'Code reviews were made optional.'
    ],
    correctIndex: 0,
    explanation: 'Linters verify code style, formatting, and syntax issues. Critical production bugs usually stem from business logic, race conditions, and unhandled edge cases.'
  },
  {
    id: 'apt-9',
    category: 'verbal',
    subCategory: 'Sentence Correction',
    difficulty: 'Easy',
    question: 'Choose the grammatically correct sentence for an engineering design doc:',
    options: [
      'Neither the backend service nor the worker threads was able to process the queue.',
      'Neither the backend service nor the worker threads were able to process the queue.',
      'Neither the backend service or the worker threads were able to process the queue.',
      'Neither of the backend service nor worker threads was able to process the queue.'
    ],
    correctIndex: 1,
    explanation: 'In "neither... nor", the verb agrees with the subject closest to it ("worker threads" is plural -> "were able").'
  },
  {
    id: 'apt-10',
    category: 'data-interp',
    subCategory: 'Metrics & Charts',
    difficulty: 'Medium',
    question: 'An e-commerce API server logs 500,000 daily requests. 80% are GET requests, 15% are POST, and 5% are PUT/DELETE. If 2% of GET requests and 6% of POST requests encounter a 500 Internal Error, what is the total number of errors from GET and POST?',
    options: ['12,500', '14,000', '10,500', '8,000'],
    correctIndex: 0,
    explanation: 'GET requests = 500,000 * 0.80 = 400,000. Errors in GET = 400,000 * 0.02 = 8,000. POST requests = 500,000 * 0.15 = 75,000. Errors in POST = 75,000 * 0.06 = 4,500. Total = 8,000 + 4,500 = 12,500.'
  }
];
