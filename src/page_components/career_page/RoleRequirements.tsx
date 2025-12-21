import React from "react";

interface RoleRequirementsProps {
  role: {
    id: number;
    value: string;
  }[];
  title: string;
}
export const RoleRequirements = ({ role, title }: RoleRequirementsProps) => {
  return (
    <div className="mt-5 mx-2">
      <h5 className="mb-3">{title} :</h5>
      <ul className="" style={{ listStyleType: "disc", color: "black" }}>
        {role.map((item, index) => (
          <div key={index}>
            <li className="" style={{ listStyleType: "disc", color: "black" }}>
              {item.value}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
