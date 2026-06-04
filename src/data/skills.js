// ─────────────────────────────────────────────────────────────
// Skills data
// Grouped by category. 'level' determines the size of the bubble.
// ─────────────────────────────────────────────────────────────

const skillGroups = [
  {
    group: 'Technical & Engineering',
    accent: '#5B8FB9', // Blueish
    skills: [
      { label: 'C++', level: 95 },
      { label: 'Python', level: 90 },
      { label: 'HTML/CSS', level: 80 },
      { label: 'SQL', level: 85 },
      { label: 'MySQL', level: 80 },
      { label: 'Oracle SQL', level: 75 },
      { label: 'Git & GitHub', level: 85 },
      { label: 'React.js', level: 60 },
      { label: 'JavaScript', level: 60 },
      { label: 'Docker', level: 50 },
      { label: 'Azure', level: 50 },
    ],
  },
  {
    group: 'Data & Analytics',
    accent: '#B8A0D4', // Purpleish
    skills: [
      { label: 'Power BI', level: 95 },
      { label: 'DAX', level: 85 },
      { label: 'Power Query', level: 85 },
      { label: 'Data Visualization', level: 90 },
      { label: 'Data Analysis', level: 90 },
      { label: 'Analytical Reasoning', level: 85 },
    ],
  },
  {
    group: 'Product & Design',
    accent: '#D4A96A', // Goldish
    skills: [
      { label: 'Systems Thinking', level: 90 },
      { label: 'Product Design', level: 85 },
      { label: 'User Experiences', level: 85 },
      { label: 'Figma', level: 80 },
      { label: 'Canva', level: 85 },
      { label: 'Logical Thinking', level: 88 },
      { label: 'Problem Solving', level: 90 },
    ],
  },
  {
    group: 'Soft Skills & Leadership',
    accent: '#E06C75', // Reddish
    skills: [
      { label: 'Event Management', level: 95 },
      { label: 'Cross-functional Leadership', level: 90 },
      { label: 'Public Relations', level: 85 },
      { label: 'Financial Tracking', level: 85 },
      { label: 'Vendor Coordination', level: 80 },
      { label: 'Community Engagement', level: 85 },
      { label: 'Team Building', level: 90 },
    ],
  },
]

export default skillGroups
