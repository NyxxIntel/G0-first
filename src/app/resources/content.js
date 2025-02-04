import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nyxx",
  lastName: "Intel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mastering the Unknowns with NyxxIntel",
  avatar: "/images/android-chrome-192x192.png",
  location: "Asia/Kolkata", 
  languages: [], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} {person.lastName}'s Newsletter</>,
  description: (
    <>
      We occasionally write about threat Intelligence share thoughts on upcoming cybersecurity news.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "nyxxintel@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Mastering the Unknowns with NyxxIntel`,
  headline: <>Mastering the Unknowns with NyxxIntel</>,
  subline: (
    <>
      We offer a robust suite of <InlineCode>Threat Intelligence</InlineCode> solutions designed to protect organizations from today's complex and evolving cyber threats. Through real-time intelligence feeds, dark web monitoring, attack surface management, and third-party risk assessments, we enable proactive detection and mitigation of emerging risks.
      <br /> Our services monitor illicit online communities, digital assets, and vendor ecosystems to uncover stolen data, vulnerabilities, and potential attack vectors before they can be exploited. Stay Ahead of Threats, and Secure What Matters Most.
    </>
  ),
};

const about = {
  label: "About",
  title: "About us",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        To empower organizations with actionable threat intelligence, enabling proactive defense strategies, reducing risk, 
        and safeguarding digital assets from evolving cyber threats. To be the global leader in cybersecurity threat intelligence, 
        transforming the way businesses understand, anticipate, and combat cyber risks. Our goal is to foster a more secure digital ecosystem,
        enabling organizations to operate with confidence and resilience.
      </>
    ),
  },
  servicesWeOffer: {
    display: true, // set to false to hide this section
    title: "Services We Offer",
    experiences: [
      {
        company: "Threat Intelligence Feeds",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Real-time, actionable threat intelligence on emerging cyber threats, vulnerabilities, and attack tactics.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Geopolitical-Cyber Threat Insights",
        timeframe: "",
        role: "",
        achievements: [
          <>
            In-depth analysis of the intersection between geopolitical events and cyber threats, including region-specific risks.
          </>,
          
        ],
        images: [],
      },
      {
        company: "Managed Threat Intelligence Platform (TIP)",
        timeframe: "",
        role: "",
        achievements: [
          <>
            A comprehensive platform that centralizes threat intelligence, integrates with existing security tools, and automates threat response.
          </>,
          
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const servicesWeOffer = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, servicesWeOffer, gallery };
