// ─────────────────────────────────────────────────────────────
// Work & Explorations data
// Edit the fields below to update your project cards.
// For images: drop your file in src/assets/images/ and import it here.
// ─────────────────────────────────────────────────────────────

// import work1 from '../assets/images/work-1.jpg'
// import work2 from '../assets/images/work-2.jpg'
// import work3 from '../assets/images/work-3.jpg'

const explorations = [
  {
    id: 1,
    title: 'Campus Event App',
    what: 'A mobile app concept for discovering and joining college events.',
    focus:
      'Focused on understanding why students miss events — turned out to be a discovery problem, not a scheduling one.',
    learned:
      'Defining the right problem matters more than jumping to solutions. The first assumption is usually wrong.',
    tags: ['Problem Framing', 'Mobile', 'User Thinking'],
    year: '2024',
    accent: '#D4A96A',
    // image: work1,   ← uncomment after adding your image
    image: null,
  },
  {
    id: 2,
    title: 'Library Seat Finder',
    what: 'A web tool to check real-time seat availability across campus library floors.',
    focus:
      'Mapped the actual user journey — students walk two floors before giving up. The problem was visibility, not capacity.',
    learned:
      'Sometimes the solution is just surfacing existing information better. Not every problem needs a new feature.',
    tags: ['Systems Thinking', 'Web', 'UX Flow'],
    year: '2024',
    accent: '#7EB8A4',
    // image: work2,
    image: null,
  },
  {
    id: 3,
    title: 'Peer Study Matcher',
    what: 'A lightweight matching system connecting students studying the same subjects.',
    focus:
      'Explored why existing group chats fail — accountability and intent mismatch, not lack of communication tools.',
    learned:
      'User psychology shapes product decisions more than technology does. People need the right motivation, not just the right feature.',
    tags: ['Behavioural Thinking', 'Product Idea', 'Research'],
    year: '2023',
    accent: '#B8A0D4',
    // image: work3,
    image: null,
  },
]

export default explorations
