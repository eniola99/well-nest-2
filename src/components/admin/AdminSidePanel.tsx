import React from "react";

interface IDashboardIndex {
  [key: string]: string;
}
interface IAdminSidePanel {
  setActiveTab: (tab: IDashboardIndex) => void;
  activeTab: IDashboardIndex | undefined;
}

export const AdminSidePanel = ({
  setActiveTab,
  activeTab,
}: IAdminSidePanel) => {
  const tabs = [
    {
      name: "Dashboard",
    },
    {
      name: "Job Openings",
    },
  ];
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            {tabs.map((item, index) => (
              <div key={index} onClick={() => setActiveTab(item)}>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab && activeTab.name === item.name ? "active" : ""
                    }`}
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                  >
                    <span data-feather="home"></span>
                    {item.name}
                  </a>
                </li>
              </div>
            ))}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
