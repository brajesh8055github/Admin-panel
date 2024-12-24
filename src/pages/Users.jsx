const users = [
    { name: "Rohit", phone: 6788776575, email: "rohit123@gmail.com", address: "Patna" },
    { name: "Aniket", phone: 8867776544, email: "ankit23@gmail.com", address: "Kolkata" },
    { name: "Anika", phone: 8758776580, email: "anika223@gmail.com", address: "Lucknow" },
    { name: "Rahul", phone: 9088776555, email: "rahul003@gmail.com", address: "Delhi" },
    { name: "Aadarsh", phone: 7588776533, email: "aadrash00@gmail.com", address: "Jainpur" },
]
const Users = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Name</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.phone}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users