export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    instructor: "Dr. Smith",
    description: "Introduction to HTML, CSS and JavaScript",
  },
  {
    id: 2,
    title: "Databases",
    instructor: "Prof. Brown",
    description: "Relational databases and SQL",
  },
  {
    id: 3,
    title: "Computer Networks",
    instructor: "Dr. Green",
    description: "Basics of networking and protocols",
  },
  {
    id: 4,
    title: "Algorithms",
    instructor: "Prof. White",
    description: "Sorting, searching and algorithm analysis",
  },
];

export function getCourseById(id: number) {
  return courses.find((c) => c.id === id);
}