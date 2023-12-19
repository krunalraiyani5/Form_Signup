/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";

import DashIcon from "../../icons/DashIcon";
// chakra imports

import { useContext } from 'react';
import { Timer_Context } from '../../../Context/Timer_context';

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();
  // const {Set_Exam, training_completed} = useContext(Timer_Context);
  
  
 
  const { routes } = props;
  console.log(routes)
  const exam = JSON.parse(localStorage.getItem('exam'));
  const points = JSON.parse(localStorage.getItem('points'));
  const training_completed = JSON.parse(localStorage.getItem('training_completed'));
  console.log(training_completed);

  console.log(false, "exam from links")
  console.log("Certification Route")
  console.log("Certification" && exam)
  console.log("Examination Route")
  console.log( training_completed )
  console.log( !exam, "exam wala")
  console.log( exam, "exam wala")
  


  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
<>


{
  route.path === "training" ?  (<Link key={index} to={route.layout + "/" + route.path}>
  <div className="relative mb-3 flex hover:cursor-pointer">
    <li
      className="my-[3px] flex cursor-pointer items-center px-8"
      key={index}
    >
      <span
        className={`${
          activeRoute(route.path) === true
            ? "font-bold text-brand-500 dark:text-white"
            : "font-medium text-gray-600"
        }`}
      >
        {route.icon ? route.icon : <DashIcon />}{" "}
      </span>
      <p
        className={`leading-1 ml-4 flex ${
          activeRoute(route.path) === true
            ? "font-bold text-navy-700 dark:text-white"
            : "font-medium text-gray-600"
        }`}
      >
        {route.name}
      </p>
    </li>
    {activeRoute(route.path) ? (
      <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
    ) : null}
  </div>
</Link>) : route.path === "Examination" && training_completed && !exam ? ( <Link key={index} to={route.layout + "/" + route.path}>
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li
              className="my-[3px] flex cursor-pointer items-center px-8"
              key={index}
            >
              <span
                className={`${
                  activeRoute(route.path) === true
                    ? "font-bold text-brand-500 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.icon ? route.icon : <DashIcon />}{" "}
              </span>
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(route.path) === true
                    ? "font-bold text-navy-700 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.name}
              </p>
            </li>
            {activeRoute(route.path) ? (
              <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
            ) : null}
          </div>
        </Link>) :  route.path === "Certification"&& training_completed && exam && points ? (<Link key={index} to={route.layout + "/" + route.path}>
          <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          
           </Link>) : <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
            } 
</>
          
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
