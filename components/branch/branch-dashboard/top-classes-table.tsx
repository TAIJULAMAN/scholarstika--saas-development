const topClasses = [
    { name: "Grade 5-A", contact: "Ms. Sarah Williams", students: "45", teachers: "4", attendance: "96.5%", feeCollection: "95.2%" },
    { name: "Grade 4-B", contact: "Mr. John Davis", students: "42", teachers: "4", attendance: "94.8%", feeCollection: "92.1%" },
    { name: "Grade 3-A", contact: "Ms. Emily Brown", students: "40", teachers: "3", attendance: "93.2%", feeCollection: "90.5%" },
    { name: "Grade 6-C", contact: "Mr. Michael Johnson", students: "38", teachers: "4", attendance: "95.1%", feeCollection: "88.7%" },
    { name: "Grade 2-B", contact: "Ms. Lisa Anderson", students: "35", teachers: "3", attendance: "92.5%", feeCollection: "87.3%" },
]

export function TopClassesTable() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Top Performing Classes</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Class Name</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Class Teacher</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[100px]">Students</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[100px]">Teachers</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[100px]">Attendance</th>
                            <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[120px]">Fee Collection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topClasses.map((classItem) => (
                            <tr key={classItem.name} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-6">
                                    <p className="font-medium text-gray-900">{classItem.name}</p>
                                </td>
                                <td className="whitespace-nowrap py-4 text-sm text-gray-600">{classItem.contact}</td>
                                <td className="whitespace-nowrap py-4 text-right">
                                    <span className="font-semibold text-gray-900">{classItem.students}</span>
                                </td>
                                <td className="whitespace-nowrap py-4 text-right">
                                    <span className="text-gray-600">{classItem.teachers}</span>
                                </td>
                                <td className="whitespace-nowrap py-4 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(classItem.attendance) >= 95
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(classItem.attendance) >= 92
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {classItem.attendance}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap py-4 pr-6 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(classItem.feeCollection) >= 90
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(classItem.feeCollection) >= 85
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {classItem.feeCollection}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
