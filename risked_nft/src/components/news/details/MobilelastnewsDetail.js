import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import socialBg from "../../../assets/images/news/socialBg.png";
import ShapeWhite from "../../../assets/images/news/ShapeWhite.png";
import facebook from "../../../assets/images/icons/facebook.svg";
import insta from "../../../assets/images/icons/insta.svg";
import send from "../../../assets/images/icons/send.svg";

const MobilelastnewsDetail = () => {

    return (
        <Fragment>
            <div className="social-media-section">
                <img src={socialBg} alt="socialBg" className="w-100 mb-2"/>
                <h3 className="mb-3 mt-4">Social medias</h3>
                <p className="mb-4 mt-2">A Las Vegas man accused of holding a woman hostage, murdering her 4-year-old son and keeping his remains in the garage freezer will
                remain behind bars for at least a month.
                A judge has ordered Brandon Toseland to be held without bail until his next court appearance in
                early $RNFTil and new charges of felony child abuse and neglect were added Monday on top of the existing charges of open murder
                and kidnapping.</p>
                <p className="mb-4 mt-2">Toseland, 35, was arrested last week after the 7-year-old daughter of his alleged victim handed a pile of sticky notes to her elementary
                school teacher from her mother, claiming she was being held hostage and hadn’t seen her 4-year-old son, Mason Dominguez, in months.</p>
                <p className="mb-4 mt-2">The note, allegedly scribbled over time while the mother, who has not been publicly identified, was handcuffed inside Toseland’s car, led
                police to Toseland, who they arrested as he left the house on Feb. 22. Handcuffs were found in the car, as was the woman’s cell phone,
                which she claimed he confiscated from her.</p>
            </div>
            <button className="mb-5 mt-3"><img src={ShapeWhite} alt="Shape" className="me-2"/>I like</button>
            <div className="social-footer">
                <img src={facebook} alt="back"/>
                <img src={insta} alt="back" className="mx-4"/>
                <img src={send} alt="back"/>
            </div>
            <div className="copyright">
                <p>© 2022 Arcader. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="" className="mx-4">Terms of Service</Link>
                    <Link to="" className="mx-4">Privacy Policy</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default MobilelastnewsDetail;
