

import DropFileInput from './DropFileInput';
import SectionHeading from './SectionHeading';

function Test4() {

    const styles = {
        header: {
          background: "aliceblue",
        padding: "12px",
        borderRadius: "5px"
    }
        }
    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
               <SectionHeading
      style={styles.header}
       title="Profile Photo"
        desc="Take a moment to personalize your account by uploading a profile photo."
      />
            <h2 className="header">
                
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default Test4;
