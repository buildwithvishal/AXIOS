export const domains = [
  {
    id: "web",
    name: "Web Development",
    number: "01",
    icon: "web",
    phrase: "Shape the first impression.",
    description:
      "Interfaces, design systems and full-stack experiences made for the open web.",
    focus: ["Interfaces", "Frontend", "Full stack"],
  },
  {
    id: "app",
    name: "App Development",
    number: "02",
    icon: "app",
    phrase: "Make useful ideas portable.",
    description:
      "Mobile experiences that bring clear, thoughtful ideas into everyday use.",
    focus: ["Mobile UI", "iOS & Android", "Prototyping"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    number: "03",
    icon: "cloud",
    phrase: "Build for the distance.",
    description:
      "Infrastructure, automation and delivery practices for resilient software.",
    focus: ["Cloud", "Automation", "Deployment"],
  },
  {
    id: "data",
    name: "Data Science",
    number: "04",
    icon: "data",
    phrase: "Find the signal.",
    description:
      "Explore, understand and communicate the patterns hidden in data.",
    focus: ["Analysis", "Visualization", "Statistics"],
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    number: "05",
    icon: "ai",
    phrase: "Teach machines to learn.",
    description:
      "Machine learning concepts, intelligent tools and responsible experiments.",
    focus: ["Machine learning", "Intelligent tools", "Responsible AI"],
  },
  {
    id: "vlsi",
    name: "VLSI & Embedded Systems",
    number: "06",
    icon: "hardware",
    phrase: "Bring code into the physical world.",
    description:
      "Digital design, embedded software and connected hardware systems.",
    focus: ["Digital design", "Embedded software", "Hardware"],
  },
] as const;

export type JourneyMilestone = {
  id: string;
  date: string;
  title: string;
  description: string;
};

// Add only confirmed AXIOS milestones here. The empty state avoids implying
// dates or events that have not been supplied.
export const journeyMilestones: JourneyMilestone[] = [];

export const eventSlots = [
  {
    id: "event-slot-01",
    number: "01",
    title: "Event title",
    date: "Date to be added",
    description: "Add approved event details when they are ready to share.",
    artwork: "one",
  },
  {
    id: "event-slot-02",
    number: "02",
    title: "Event title",
    date: "Date to be added",
    description: "Add approved event details when they are ready to share.",
    artwork: "two",
  },
  {
    id: "event-slot-03",
    number: "03",
    title: "Event title",
    date: "Date to be added",
    description: "Add approved event details when they are ready to share.",
    artwork: "three",
  },
] as const;

export const collaborationSlots = [
  { id: "collab-01", label: "Collaboration slot", number: "01" },
  { id: "collab-02", label: "Collaboration slot", number: "02" },
  { id: "collab-03", label: "Collaboration slot", number: "03" },
  { id: "collab-04", label: "Collaboration slot", number: "04" },
] as const;

export const teamCategories = {
  leadership: {
    label: "Leadership",
    slots: ["leadership-01", "leadership-02", "leadership-03"],
  },
  coordinators: {
    label: "Coordinators",
    slots: ["coordinator-01", "coordinator-02", "coordinator-03"],
  },
  members: {
    label: "Members",
    slots: ["member-01", "member-02", "member-03"],
  },
} as const;

export type TeamCategoryKey = keyof typeof teamCategories;

export const sponsorSlots = [
  { id: "sponsor-01", number: "01" },
  { id: "sponsor-02", number: "02" },
  { id: "sponsor-03", number: "03" },
  { id: "sponsor-04", number: "04" },
  { id: "sponsor-05", number: "05" },
] as const;

export const gallerySlots = [
  { id: "gallery-01", label: "Gallery image", imageSrc: null },
  { id: "gallery-02", label: "Gallery image", imageSrc: null },
  { id: "gallery-03", label: "Gallery image", imageSrc: null },
  { id: "gallery-04", label: "Gallery image", imageSrc: null },
  { id: "gallery-05", label: "Gallery image", imageSrc: null },
  { id: "gallery-06", label: "Gallery image", imageSrc: null },
] as const;

export const contactChannels = [
  { id: "email", label: "Email", value: "Add official club email", href: null },
  {
    id: "instagram",
    label: "Instagram",
    value: "Add official profile link",
    href: null,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Add official profile link",
    href: null,
  },
] as const;
