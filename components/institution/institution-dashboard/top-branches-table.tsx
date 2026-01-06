import { branches } from "@/data/branches"

export function TopBranchesTable() {
    const topBranches = [...branches]
        .sort((a, b) => parseInt(a.students.replace(/,/g, '')) - parseInt(b.students.replace(/,/g, '')))
        .reverse()
        .slice(0, 5)

    return (
        <div className="rounded-xl bg-white py-4 shadow-sm sm:py-6">
            <h2 className="mb-4 px-4 text-lg font-semibold text-gray-900 sm:px-6">Top Branches</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                        <tr>
                            <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Branch Name</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Contact</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[100px]">Students</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[100px]">Teachers</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-right text-sm font-semibold text-white min-w-[120px]">Attendance</th>
                            <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[120px]">Fee Collection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topBranches.map((branch, index) => (
                            <tr key={branch.name} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="whitespace-nowrap py-6 pl-6">
                                    <p className="font-medium text-gray-900">{branch.name}</p>
                                </td>
                                <td className="whitespace-nowrap py-6 text-sm text-gray-600">{branch.contact}</td>
                                <td className="whitespace-nowrap py-6 text-right">
                                    <span className="font-semibold text-gray-900">{branch.students}</span>
                                </td>
                                <td className="whitespace-nowrap py-6 text-right">
                                    <span className="text-gray-600">{branch.teachers}</span>
                                </td>
                                <td className="whitespace-nowrap py-6 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(branch.attendance) >= 93
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(branch.attendance) >= 90
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {branch.attendance}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap py-6 pr-6 text-right">
                                    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${parseFloat(branch.earnings) >= 90
                                        ? 'bg-green-100 text-green-700'
                                        : parseFloat(branch.earnings) >= 80
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                        {branch.earnings}
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
