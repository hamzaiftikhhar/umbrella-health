export type NavItem = { label: string; to: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "Specialties", to: "/specialties" },
  { label: "Diagnostics", to: "/diagnostics" },
  { label: "Weight Loss", to: "/weight-loss-glp1" },
  { label: "Longevity", to: "/longevity" },
  { label: "Physicians", to: "/our-physicians" },
  { label: "Employers", to: "/employers" },
  { label: "Insurance", to: "/insurance" },
];

export const MORE_NAV: NavItem[] = [
  { label: "Patient Reviews", to: "/reviews" },
  { label: "Resources", to: "/resources" },
  { label: "Refer a Friend", to: "/refer-a-friend" },
  { label: "FAQ", to: "/faq" },
  { label: "Visit Us", to: "/visit-us" },
  { label: "Patient Portal", to: "/portal" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Care",
    links: [
      { label: "Specialties", to: "/specialties" },
      { label: "Diagnostics & Data", to: "/diagnostics" },
      { label: "Weight Loss (GLP-1)", to: "/weight-loss-glp1" },
      { label: "Longevity", to: "/longevity" },
      { label: "Insurance & Pricing", to: "/insurance" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Physicians", to: "/our-physicians" },
      { label: "For Employers", to: "/employers" },
      { label: "Visit Us", to: "/visit-us" },
      { label: "Patient Reviews", to: "/reviews" },
      { label: "Refer a Friend", to: "/refer-a-friend" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Resources", to: "/resources" },
      { label: "FAQ", to: "/faq" },
      { label: "Patient Portal", to: "/portal" },
      { label: "Careers", to: "/careers" },
      { label: "HIPAA & Accessibility", to: "/hipaa-accessibility" },
    ],
  },
] as const;
