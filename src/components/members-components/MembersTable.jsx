export default function MembersTable() {
  return (
    <div className="hidden lg:flex">
        <table className="table table-zebra ">
      {/* head */}
      <thead className="sticky top-0 z-10 bg-white">
        <tr>
          <th>#</th>
          <th>Member</th>
          <th>Phone</th>
          <th>Plan</th>
          <th>Status</th>
          <th>Jion Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>1</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 2 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>2</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 3 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>3</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 4 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>4</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 5 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>5</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 6 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>6</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 7 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>7</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
        {/* row 8 */}
        <tr className="hover:bg-gray-200 ease-in transition-all duration-300">
          <th>8</th>
          <td className="flex items-center gap-1.5">
            {" "}
            <div className="bg-gray-300 w-10 h-10 rounded-full "></div> Cy
            Ganderton
          </td>
          <td>(555)1234567</td>
          <td>Annual</td>
          <td className="">
            <div className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  text-center p-1">
              Active
            </div>
          </td>
          <td>Jan 12,2023</td>
          <td>...</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={"7"}>
            {/* Pagination */}
            <div className="join flex justify-center mt-1">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 1</button>
              <button className="join-item btn">»</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}
