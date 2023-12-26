import React from 'react';
import KYC_logo from "../../../../assets/Icon/kyc_verification_img.png"
import certification from "../../../../assets/Icon/advisory_certification.png";
import sell_policy from "../../../../assets/Icon/sell_policy.png";



const Selling = () => {



  return (
    <div class="goalsWrapper pt-[80px]  border-2">
        <div class="homeHeading">Start 
        <font color="#00A465"> Selling</font> in 3 simple steps</div>
        <div class="goalsContent">
           
                            <section class="inactive style__GoalsHomeStyle-sc-tiou6f-0 cNBNFI">
                                <div class="goalDescriptionWrapper">
                                    <span class="step null"> Step 1</span>
                                    <span class="title inactiveTitle">Advisor Certification</span>
                                    <span class="description inactiveDescription">Get your license to make your first sale </span>
                                    <div class="actionWrapper">
                                    <span class="ctaButton" role="presentation">Get Started</span>
                                        {/* <span class="note">Complete KYC to Unlock</span> */}
                                    </div></div><div class="iconWrapper">
                                        <img src={certification} alt="certification"/>
                                        </div></section>

                                        <section class="active style__GoalsHomeStyle-sc-tiou6f-0 cNBNFI">
                <div class="goalDescriptionWrapper">
                    <span class="step null"> Step 2</span>
                    <span class="title null">KYC Verification</span>
                    <span class="description null">Complete KYC in under 60 seconds</span>
                    <div class="actionWrapper">
                        {/* <span class="ctaButton" role="presentation">Get Verified</span> */}
                        <span class="note">Complete KYC to Unlock</span>
                        </div>
                        </div>
                        <div class="iconWrapper">
                            <img 
                            src={KYC_logo}
                             alt="KYC_Logo" />
                            </div>
                            </section>
                                        <section class="inactive style__GoalsHomeStyle-sc-tiou6f-0 cNBNFI">
                                            <div class="goalDescriptionWrapper">
                                                <span class="step null"> Step 3</span>
                                                <span class="title inactiveTitle">Start Selling Policy</span>
                                                <span class="description inactiveDescription">You are one step away from earning 50k/month</span>
                                                <div class="actionWrapper">
                                                    <span class="note">Complete Certification to Unlock</span>
                                                    </div></div><div class="iconWrapper">
                                                        <img src={sell_policy} alt=""/>
                                                        </div>
                                                        </section>
                                                        </div>
                                                        </div>
  )
}

export default Selling
