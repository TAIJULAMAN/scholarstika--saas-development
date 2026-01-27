export interface Period {
    subject: string
    teacher: string
    room: string
}

export interface DaySchedule {
    [day: string]: Period[]
}

export interface ClassSchedule {
    [className: string]: DaySchedule
}

// Initial data structure
export const initialSchedule: ClassSchedule = {
    "Grade 1-A": {
        Monday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
        ],
        Tuesday: [
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Social Studies", teacher: "Robert Brown", room: "104" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Music", teacher: "Anna White", room: "Music Room" },
        ],
        Wednesday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
        ],
        Thursday: [
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Social Studies", teacher: "Robert Brown", room: "104" },
            { subject: "Library", teacher: "Tom Green", room: "Library" },
        ],
        Friday: [
            { subject: "Mathematics", teacher: "Sarah Johnson", room: "101" },
            { subject: "English", teacher: "Michael Chen", room: "102" },
            { subject: "PE", teacher: "Lisa Anderson", room: "Gym" },
            { subject: "Break", teacher: "-", room: "-" },
            { subject: "Art", teacher: "James Wilson", room: "Art Room" },
            { subject: "Science", teacher: "Emily Davis", room: "103" },
        ],
    },
}

export const timeSlots = [
    "8:00 - 8:45",
    "8:45 - 9:30",
    "9:30 - 10:15",
    "10:15 - 11:00",
    "11:00 - 11:45",
    "11:45 - 12:30",
]

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

export const subjectColors: { [key: string]: string } = {
    Mathematics: "bg-blue-100 text-blue-700 border-blue-300",
    English: "bg-purple-100 text-purple-700 border-purple-300",
    Science: "bg-green-100 text-green-700 border-green-300",
    "Social Studies": "bg-orange-100 text-orange-700 border-orange-300",
    Art: "bg-pink-100 text-pink-700 border-pink-300",
    PE: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Music: "bg-indigo-100 text-indigo-700 border-indigo-300",
    Library: "bg-teal-100 text-teal-700 border-teal-300",
    Break: "bg-gray-100 text-gray-500 border-gray-300",
}
