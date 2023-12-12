import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/tables";


// Auth Imports


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdImportContacts,
  MdModelTraining,
  MdAssignmentTurnedIn,
  MdAssignment,
} from "react-icons/md";

const routes = [
  {
    name: "Training",
    layout: "/admin",
    path: "training",
    icon: <MdImportContacts className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Examination",
    layout: "/admin",
    path: "Examination",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Certification",
    layout: "/admin",
    icon: <MdAssignmentTurnedIn className="h-6 w-6" />,
    path: "Certification",
    component: <DataTables />,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   alterPath: "pos",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
