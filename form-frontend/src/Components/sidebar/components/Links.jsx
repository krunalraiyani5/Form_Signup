/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";

import DashIcon from "../../icons/DashIcon";


import { useContext } from 'react';
import { Timer_Context } from '../../../Context/Timer_context';

export function SidebarLinks(props) {
  let location = useLocation();
  const { routes } = props;
  const exam = JSON.parse(localStorage.getItem('exam'));
  const points = JSON.parse(localStorage.getItem('points'));
  const training_completed = JSON.parse(localStorage.getItem('training_completed'));
  console.log("Training Completed ---", training_completed )
  const {training} = useContext(Timer_Context);

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


            {   route.path === "home" ? (<Link key={index} to={ route.layout + "/" + route.path}>
                
                <li className="flex">
                <span
                        className={`${activeRoute(route.path) === true
                            ? "font-bold text-blue"
                            : "font-medium text-[#5d5c5d]"
                          }`}
                      >
                        {route.icon ? route.icon : <DashIcon />}{" "}
                      </span>
                      <span
                        className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                            ? "font-bold text-blue"
                            : "font-medium text-gray-300"
                          }`}
                      >
                        {route.name}
                      </span>
              
              </li>
                 </Link>) :
              route.path === "training" ? (<Link key={index} to={route.layout + "/" + route.path}>
                <li className="flex">
                <span
                      className={`${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}{" "}
                    </span>
                    <span
                      className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium tex-blue"
                        }`}
                    >
                      {route.name}
                    </span>
             
            </li>
             
              </Link>) : route.path === "Examination" && training_completed & !exam? (<Link key={index} to={route.layout + "/" + route.path}>
              
              <li className="flex">
              <span
                      className={`${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}{" "}
                    </span>
                    <span
                      className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.name}
                    </span>
            
            </li>
                


              </Link>) : route.path === "Certification" && training_completed && exam && points ? (<Link key={index} to={route.layout + "/" + route.path}>
                
              <li className="flex">
              <span
                      className={`${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}{" "}
                    </span>
                    <span
                      className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.name}
                    </span>
            
            </li>
             

              </Link>) : route.path === "profile" ? (<Link key={index} to={"/login"} >
                
              <li className="flex">
              <span
                      className={`${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}{" "}
                    </span>
                    <span
                      className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.name}
                    </span>
             
            </li>
                

              </Link>)  : route.path === "kyc_verification" ? (<Link key={index} to={route.layout + "/" + route.path} >
                
                <li className="flex">
                <span
                        className={`${activeRoute(route.path) === true
                            ? "font-bold text-blue"
                            : "font-medium text-blue"
                          }`}
                      >
                        {route.icon ? route.icon : <DashIcon />}{" "}
                      </span>
                      <span
                        className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                            ? "font-bold text-blue"
                            : "font-medium text-gray-300"
                          }`}
                      >
                        {route.name}
                      </span>
                
              
              </li>
                 </Link>) :
             
                <li className="flex">
                   <span
                      className={`${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-blue"
                        }`}
                    >
                      {route.icon ? route.icon : <DashIcon />}{" "}
                    </span>
                    <span
                      className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                          ? "font-bold text-blue"
                          : "font-medium text-gray-300"
                        }`}
                    >
                      {route.name}
                    </span>
              
              </li>
             
            }
          </>

        );
      }
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
