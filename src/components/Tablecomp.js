import React, { useState } from "react";
import './Tablecomp.css'
function Tablecomp() {
  const [openRows, setOpenRows] = useState([]);

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      mobile: "+1 (555) 555-5555",
      children: [
        { id: 1, name: "Sara", age: 5, mobile: "+1 (555) 555-0001" },
        { id: 2, name: "Tom", age: 3, mobile: "+1 (555) 555-0002" },
        { id: 3, name: "Emma", age: 1, mobile: "+1 (555) 555-0003" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 40,
      mobile: "+44 20 1234 5678",
      children: [
        { id: 1, name: "Harry", age: 10, mobile: "+44 20 1234 0001" },
        { id: 2, name: "Sophie", age: 8, mobile: "+44 20 1234 0002" },
      ],
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 45,
      mobile: "+61 2 1234 5678",
      children: [
        { id: 1, name: "Jack", age: 15, mobile: "+61 2 1234 0001" },
        { id: 2, name: "Olivia", age: 12, mobile: "+61 2 1234 0002" },
        { id: 3, name: "Lucas", age: 9, mobile: "+61 2 1234 0003" },
      ],
    },
  ];

  const handleRowClick = (id) => {
    setOpenRows(
      openRows.includes(id)
        ? openRows.filter((rowId) => rowId !== id)
        : [...openRows, id]
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {data.map((parent) => (
          <React.Fragment key={parent.id}>
            <tr onClick={() => handleRowClick(parent.id)}>
              <td>{parent.name}</td>
              <td>{parent.age}</td>
              <td>{parent.mobile}</td>
            </tr>
            {openRows.includes(parent.id) &&
              parent.children.map((child) => (
                <tr key={child.id}>
                  <td>{child.name}</td>
                  <td>{child.age}</td>
                  <td>{child.mobile}</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default Tablecomp;
