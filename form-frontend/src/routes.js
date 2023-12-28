import React from "react";

// Admin Imports


import MainDashboard from "./views/admin/default";
import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/tables";
import Home from "./views/admin/home";
import KYC from "./views/admin/kyc"


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
  MdLogout,
} from "react-icons/md";

let name = localStorage.getItem("name");



const routes = [
  {
    name: "Home",
    layout: "/admin",
    alterPath: "/pos",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Training",
    layout: "/admin",
    alterPath: "/pos",
    path: "training",
    icon: <MdModelTraining className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Examination",
    layout: "/admin",
    path: "Examination",
    alterPath: "/pos",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "KYC",
    layout: "/admin",
    path: "kyc_verification",
    alterPath: "/pos",
    icon: <MdPerson className="h-6 w-6" />,
    component: <KYC />,
    secondary: true,
  },
  {
    name: "Certification",
    layout: "/admin",
    alterPath: "/pos",
    icon: <MdAssignmentTurnedIn className="h-6 w-6" />,
    path: "Certification",
    component: <DataTables />,
  },
  {
    name: "Logout",
    layout: "/admin",
    alterPath: "pos",
    path: "profile",
    icon: <MdLogout className="h-6 w-6" />,
    component: <Profile />,
  },
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
