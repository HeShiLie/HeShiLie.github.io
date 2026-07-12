import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Selected papers and preprints.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "",
        isActive: false,
    },
    projects: {
        title: "Projects",
        subtitle: "Research systems, benchmarks, and engineering work.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};
