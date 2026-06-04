// ─────────────────────────────────────────────────────────────
// Projects data
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'NaviSense',
    what: 'An assistive navigation concept designed to help visually impaired users identify obstacles, locate objects, and navigate more independently.',
    problem: "While exploring the problem statement during a hackathon, I realized that existing assistive tools mainly help detect that an obstacle exists, but often don't help users understand what the obstacle is, where it is, or how to navigate around it. I also wondered how someone could independently find a misplaced object in a familiar environment without relying on another person.",
    solution: 'Proposed a camera-based system using object detection to identify surrounding objects and provide audio guidance. The system was designed to help users locate specific items, understand nearby obstacles, and receive simple navigation instructions such as turning left or right based on available paths. The long-term goal was to make the solution lightweight enough to run on embedded camera devices.',
    learned: 'This project taught me that solving a problem starts with understanding what users actually struggle with, rather than improving existing technology for its own sake. Asking "what happens next?" often reveals problems that are easy to overlook.',
    tags: ['Python', 'TensorFlow Lite', 'AI', 'OpenCV'],
    year: '2025',
    accent: '#D4A96A',
    git: '#',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1614064641913-6b71fdee1ad4?w=800&q=80'
    ]
  },
  {
    id: 2,
    title: 'EduBlogX',
    what: 'A clean, student-centric academic blogging and knowledge-sharing platform.',
    problem: 'I often shared notes and academic resources through WhatsApp, but important information would get buried between regular conversations. Over time, finding and revisiting useful content became frustrating, especially when multiple people were sharing resources in different chats.',
    solution: 'Built a student-focused platform where notes, resources, and discussions could be shared in a more organized and searchable way. The project was inspired by the Conduit open-source platform and adapted around a problem I regularly faced as a student.',
    learned: "The best ideas don't always come from large-scale problems. Sometimes they come from everyday frustrations that many people quietly experience.",
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    year: '2024',
    accent: '#7EB8A4',
    git: '#',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'TaskThreader',
    what: 'A multithreaded shell scheduling system with interactive execution mapping.',
    problem: 'While working on another project, I ran into the limitation of executing commands one at a time through the command line. I wanted a way to run multiple tasks simultaneously and better understand how they were being executed.',
    solution: 'Built a multithreaded shell simulator that could execute up to five commands concurrently. Added a simple visualization layer to track thread activity and identify available resources during execution.',
    learned: 'Many useful ideas come from everyday frustrations. Understanding the problem firsthand made it easier to design a solution that was both practical and easy to interpret.',
    tags: ['Python', 'Matplotlib', 'Concurrency'],
    year: '2024',
    accent: '#B8A0D4',
    git: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    ]
  }
]

export default projects
