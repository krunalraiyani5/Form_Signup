import React from 'react';
import KYC_logo1 from "../../../../assets/Icon/kyc_verification_img1.png"
import KYC_logo from "../../../../assets/Icon/kyc_verification_img2.png"
import certification1 from "../../../../assets/Icon/advisory_certification1.png";
import certification from "../../../../assets/Icon/advisory_certification2.png";
import sell_policy1 from "../../../../assets/Icon/sell_policy1.png";
import sell_policy from "../../../../assets/Icon/sell_policy2.png";



const Selling = () => {



  return (
    <div class="goalsWrapper  ">
        <div class="homeHeading">Start 
        <font color="#00A465"> Selling</font> in 3 simple steps</div>
        <div class="goalsContent">
           
                            <section class="active style__GoalsHomeStyle-sc-tiou6f-0 cNBNFI">
                                <div class="goalDescriptionWrapper">
                                    <span class="step null"> Step 1</span>
                                    <span class="title activeTitle">Advisor Certification</span>
                                    <span class="description activeDescription">Get your license to make your first sale </span>
                                    <div class="actionWrapper">
                                    <span class="ctaButton" role="presentation">Get Started</span>
                                        {/* <span class="note">Complete KYC to Unlock</span> */}
                                    </div></div><div class="iconWrapper">
                                        <img className='certi_image' src={certification1} alt="certification"/>
                                        </div></section>

                                        <section class="inactive style__GoalsHomeStyle-sc-tiou6f-0 cNBNFI">
                <div class="goalDescriptionWrapper">
                    <span class="step null"> Step 2</span>
                    <span class="title inactiveTitle">KYC Verification</span>
                    <span class="description inactiveDescription">Complete KYC in under 60 seconds</span>
                    <div class="actionWrapper">
                        {/* <span class="ctaButton" role="presentation">Get Verified</span> */}
                        {/* <span class="note">Complete KYC to Unlock</span> */}
                        <span class="note">Complete Certification to Unlock</span>
                        </div>
                        </div>
                        <div class="iconWrapper">
                            <img 
                            className='kyc_image'
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
                                                    
                                                    <span class="note">Complete KYC to Unlock</span>
                                                    </div></div><div class="iconWrapper">
                                                        <img className='sell_image' src={sell_policy} alt=""/>
                                                        </div>
                                                        </section>
                                                        </div>
                                                        </div>
  )
}

export default Selling
