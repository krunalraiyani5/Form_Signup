// import CheckTable from "./components/CheckTable";

// import {
//   columnsDataDevelopment,
//   columnsDataCheck,
//   columnsDataColumns,
//   columnsDataComplex,
// } from "./variables/columnsData";
// import tableDataDevelopment from "./variables/tableDataDevelopment.json";
// import tableDataCheck from "./variables/tableDataCheck.json";
// import tableDataColumns from "./variables/tableDataColumns.json";
// import tableDataComplex from "./variables/tableDataComplex.json";
// import DevelopmentTable from "./components/DevelopmentTable";
// import ColumnsTable from "./components/ColumnsTable";
// import ComplexTable from "./components/ComplexTable";



// Number(((correctAnswers * 100) / totalQuestions).toFixed(2))


import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Components/generateInvoice/Invoice';
import InvoiceData from './jsonData/InvoiceData';
import { Image } from "@react-pdf/renderer";
import download from "./assets/download.png";




const Tables = () => {
  const fileName = "POSP_Certificate.pdf";

  const styles = {
    download: {
      width: 50,
      height: 50
    }

    

  }
  return (
      <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
      <PDFViewer width={800} height={1000} showToolbar={false}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      <div className='download-link'>
        {/* <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
          <Image style={styles.download} src={download} />

        </PDFDownloadLink> */}
      </div>
    
      </div>

    </div> 
   
  );
};

export default Tables;
