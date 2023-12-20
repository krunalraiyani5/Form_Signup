

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Components/generateInvoice/Invoice';
import InvoiceData from './jsonData/InvoiceData';
import { Image } from "@react-pdf/renderer";
import download from "./assets/download.png";




const Tables = () => {
  const fileName = "POSP_Certificate.pdf";

  const styles = {
    download: {
      position : 'absolute',
      top : '20%',
      left : "17.5%"
  
     
    },
    pdf:{
      margin: "auto"
    },
    
   }
  return (
      <div className='flex justify-center'>
      <div className="m-auto mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2 w-[50%]">
      <PDFViewer width={800} height={1000} showToolbar={false} style={styles.pdf}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      
    
      </div>

      <div className='download-link' style={styles.download}>
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download POSP Certificate"
          }
          {/* <Image style={styles.download} src={download} /> */}

        </PDFDownloadLink>
      </div>
    </div> 
   
  );
};

export default Tables;
