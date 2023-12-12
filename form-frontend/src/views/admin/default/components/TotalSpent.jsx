
import React from "react";

import Card from "../../../../Components/card";


import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Pppt from "../../../../assets/Docs/POSP_Training.pdf";


const TotalSpent = () => {

  const docs = [

    { uri: Pppt }, // Local File
  ];
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          {/* <MdOutlineCalendarToday /> */}
          {/* <span className="text-sm font-medium text-gray-600">This month</span> */}
        </button>
    
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden border-2 border-black">
        

          <DocViewer 
           documents={docs} 

           config={{
            header: {
              disableHeader: false,
              disableFileName: true,
              retainURLParams: false,
            },
            csvDelimiter: ",", // "," as default,
            pdfZoom: {
              defaultZoom: 1.1, // 1 as default,
          
            },
            pdfVerticalScrollByDefault: true, // false as default
          }}
           
           
           pluginRenderers={DocViewerRenderers} />
      

      </div>
    </Card>
  );
};

export default TotalSpent;







