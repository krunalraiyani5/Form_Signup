

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Components/generateInvoice/Invoice';
import InvoiceData from './jsonData/InvoiceData';
import { Image } from "@react-pdf/renderer";
import download from "./assets/download.png";




const Tables = () => {
  const fileName = "POSP_Certificate.pdf";

  const styles = {
    download: {
      position : 'fixed',
      top : '15%',
      left : "68%",
      zIndex: 100
      },
    pdf:{
      margin: "auto",
      overflow: "hidden",
      height:'100%',
      width:"100%",
      border: 0
    }
    
    
   }
  return (
      <div className='flex justify-center h-[800px] '>
      <div className="m-auto mt-5 h-[800px] w-[40%] ml-[750px]">
      <PDFViewer width={800} height={1000} showToolbar={false} style={styles.pdf}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      
    
      </div>
{/* 
      <div className='download-link ' style={styles.download}>
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download POSP Certificate"
          }
        

        </PDFDownloadLink>
      </div> */}

     
    </div> 
   
  );
};

export default Tables;
