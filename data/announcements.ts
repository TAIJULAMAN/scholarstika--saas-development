export interface Announcement {
    id: string
    title: string
    description: string
    date: string
    branches: string
    audience: string[]
    status: "Active" | "Archived"
}

export const announcements: Announcement[] = [
    {
        id: "1",
        title: "Winter Break Schedule Update",
        description: "Important information regarding the upcoming winter break schedule. The school will be closed from Dec 20th to Jan 5th.",
        date: "Dec 5, 2024",
        branches: "All Branches",
        audience: ["Parent", "Student", "Teacher", "Bursar"],
        status: "Active",
    },
    {
        id: "2",
        title: "Annual Sports Day Event",
        description: "Join us for our annual sports day event at the main stadium. All parents are invited to attend.",
        date: "Dec 3, 2024",
        branches: "Downtown Campus",
        audience: ["Parent", "Student", "Teacher", "Bursar"],
        status: "Active",
    },
    {
        id: "3",
        title: "Parent-Teacher Meeting Notice",
        description: "Scheduled meetings for all grades will be held next week. Please book your slots.",
        date: "Nov 28, 2024",
        branches: "North Side, Westfield",
        audience: ["Parent", "Teacher"],
        status: "Active",
    },
    {
        id: "4",
        title: "Exam Schedule Released",
        description: "Final examination timetable has been released for all high school grades.",
        date: "Nov 25, 2024",
        branches: "All Branches",
        audience: ["Student", "Teacher"],
        status: "Archived",
    },
    {
        id: "5",
        title: "New Cafeteria Menu",
        description: "Updated menu for the month of December including new vegan options.",
        date: "Nov 20, 2024",
        branches: "Riverside School",
        audience: ["Student", "Teacher"],
        status: "Active",
    },
]