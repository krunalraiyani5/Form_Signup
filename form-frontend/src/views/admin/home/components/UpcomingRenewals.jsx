import React from 'react';
import Renewals_Img from "../../../../assets/Icon/home_vector.png";


const Renewals = () => {

    const styles = {
        svg: {
            margin: "5px 0px 5px 5px",
      
          },
      
    }
    const text = "text-[18px]"

    return (

       

            <div class="businessUpdateWrapper ">
                <section class="style__BusinessUpdateWrapper-sc-105ddp1-0 fkjiCM">
                    <div class="business_update text-[37px]"></div>
                    <div class="businessUpdateWrapper1">
                        <section class="style__UpcomingRenewalsWrapper-sc-1ema8a4-0 ekulFW">
                            <div class="upcomingRenewals">
                                <div class="left_section">
                                    <div class="titleValue text-[28px]" >Upcoming Renewals</div>
                                    <div class={`regards ${text}`}>Hey vivek belwal!</div>
                                    <div class= {`description ${text}`} >There are no renewals scheduled for this week. Once there are any, you will be able to see them here</div>
                                    <div class={`renewals_redirection ${text} flex gap-[5px]`} role="presentation">Go to the Renewals page
                                        <svg width="15" height="15" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.svg}>
                                            <path d="M7.81656 6.292L10.9126 3.4L7.81656 0.508V3.148H0.0885625V3.652H7.81656V6.292Z" fill="#000">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="right_section">
                                    <img src={Renewals_Img} width="70%" alt="" height="196px" />
                                    </div>
                                    </div>
                                    </section>
                                    </div>
                                    </section>
            </div>


       
    )
}

export default Renewals
