
import React from "react";

import Card from "../../../../Components/card";


import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Pppt from "../../../../assets/Docs/POSP_Training.pdf";


const TotalSpent = () => {

  const docs = [
    { uri: Pppt },
  ];

  return (

<>
<div className="w-[100%] m-auto h-[auto]">
<DocViewer
          documents={docs}
          config={{
            header: {
              disableHeader: false,
              disableFileName: true,
              retainURLParams: false,
            },
            csvDelimiter: ",", 
            pdfZoom: {
              defaultZoom: 1.1, 

            },
            pdfVerticalScrollByDefault: false, 
          }}


          pluginRenderers={DocViewerRenderers}
          />
</div>


</>


    // <Card extra="!p-[20px] text-center overflow-y-hidden  ">
    //   <div className="flex  flex-row justify-center sm:flex-wrap lg:flex-nowrap overflow-y-hidden border-2  2xl:w-[80%] xl:w-[70%] w-[90%]  fixed ">
    //    <DocViewer
    //       documents={docs}
    //       config={{
    //         header: {
    //           disableHeader: false,
    //           disableFileName: true,
    //           retainURLParams: false,
    //         },
    //         csvDelimiter: ",", 
    //         pdfZoom: {
    //           defaultZoom: 1.1, 

    //         },
    //         pdfVerticalScrollByDefault: false, 
    //       }}


    //       pluginRenderers={DocViewerRenderers}
    //       />
    //       </div>
    // </Card>
  );
};

export default TotalSpent;







