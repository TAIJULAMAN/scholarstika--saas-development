const branches = [
    {
        name: "Downtown Campus",
        type: "Primary & Secondary",
        students: "2,847",
        teachers: "89",
        attendance: "94.2%",
        feeCollection: "87%",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        name: "Westside Branch",
        type: "Primary School",
        students: "1,523",
        teachers: "89",
        attendance: "91.8%",
        feeCollection: "92%",
        gradient: "from-pink-500 to-pink-600",
    },
    {
        name: "Northgate Academy",
        type: "Secondary School",
        students: "3,124",
        teachers: "187",
        attendance: "88.5%",
        feeCollection: "78%",
        gradient: "from-green-500 to-green-600",
    },
    {
        name: "Riverside School",
        type: "Primary & Secondary",
        students: "2,356",
        teachers: "112",
        attendance: "93.7%",
        feeCollection: "95%",
        gradient: "from-orange-500 to-red-600",
    },
    {
        name: "Eastside Institute",
        type: "Secondary School",
        students: "1,897",
        teachers: "112",
        attendance: "95.1%",
        feeCollection: "85%",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        name: "Southpark Academy",
        type: "Primary School",
        students: "1,100",
        teachers: "71",
        attendance: "90.3%",
        feeCollection: "91%",
        gradient: "from-pink-500 to-pink-600",
    },
]

export function TopBranchesTable() {
    // Get top 5 branches sorted by student count
    const topBranches = [...branches]
        .sort((a, b) => parseInt(a.students.replace(/,/g, '')) - parseInt(b.students.replace(/,/g, '')))
        .reverse()
        .slice(0, 5)

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Top Branches</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Branch Name</th>
                            <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Type</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Students</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Teachers</th>
                            <th className="pb-3 pt-3 text-right text-sm font-semibold text-white">Attendance</th>
                            <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Fee Collection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topBranches.map((branch, index) => (
                            <tr key={branch.name} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="py-4 pl-6">
                                    <p className="font-medium text-gray-900">{branch.name}</p>
                                </td>
                                <td className="py-4 text-sm text-gray-600">{branch.type}</td>
                                <td className="py-4 text-right">
                                    <span className="font-semibold text-gray-900">{branch.students}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="text-gray-600">{branch.teachers}</span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(branch.attendance) >= 93
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(branch.attendance) >= 90
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {branch.attendance}
                                    </span>
                                </td>
                                <td className="py-4 pr-6 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(branch.feeCollection) >= 90
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(branch.feeCollection) >= 80
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {branch.feeCollection}
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
