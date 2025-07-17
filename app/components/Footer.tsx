import Button from "~/components/Button";
import PorscheLogo from "~/assets/images/porsche-logo-text.svg"
import React from "react";

const Footer = () => {
    const companyItems = [
        "Investor Relations",
        "Careers",
        "Global Partnership Council",
        "Compliance",
        "Newsroom & Press",
    ]
    const socialItems = {
        youtube: {
            icon: "fa-brands fa-youtube",
            link: "https://www.youtube.com/porsche"
        },
        linkedin: {
            icon: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/company/porsche"
        },
        pinterest: {
            icon: "fa-brands fa-pinterest",
            link: "https://www.pinterest.com/porsche/"
        },
        instagram: {
            icon: "fa-brands fa-instagram",
            link: "https://www.instagram.com/porsche/"
        },
        twitter: {
            icon: "fa-brands fa-twitter",
            link: "https://twitter.com/Porsche"
        },
        facebook: {
            icon: "fa-brands fa-facebook",
            link: "https://www.facebook.com/Porsche"
        },

    }
    return (
        <footer className="footer-container">

            <div className="footer-section">
                <h2>Current Region / Language</h2>
                <div className="flex flex-row gap-10" >
                    <div className="flex flex-row gap-3">
                        <i className="fa-solid fa-globe text-2xl"></i>
                        <p>International / English</p>
                    </div>
                    <a className="link underline" href="#">Change</a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                <div className="footer-section">
                    <h2>Locations & Contacts</h2>
                    <p>Do you have any questions?</p>
                    <Button type="secondary" className="w-full mt-3 h-14"/>
                </div>

                <div className="footer-section">
                    <h2>Social Media</h2>
                    <p>Get in touch with us via social media.</p>
                    <div className="flex flex-wrap gap-2 w-70 mt-3">
                        {Object.entries(socialItems).map(([key, item]) => (
                            <Button
                                key={key}
                                type="secondary"
                                className="h-14 w-14 flex items-center justify-center text-xl"
                                onClick={() => window.open(item.link, "_blank")}>
                                <i className={item.icon}></i>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>


            <div className="footer-section">
                <h2>Company</h2>
                <div className="flex flex-wrap gap-10 w-full">
                    {companyItems.map((item, index) => (
                        <a key={index} href="#" className="link">{item}</a>
                    ))}
                </div>
            </div>

            <hr className="my-10 text-neutral-600" />


            <div className="footer-section">
                <p>© 2025 Dr. Ing. h.c. F. Porsche AG</p>
                <p>
                    * If the values are given as ranges, these do not relate to a single, individual
                    vehicle and do not constitute part of the offer.
                    They are intended solely as a means of comparing different
                    vehicle models and refer to the product portfolio that is
                    available on the German market. Extra features and accessories
                    (attachments, tyre formats etc.) can change relevant vehicle
                    parameters such as weight, rolling resistance and aerodynamics
                    and, in addition to weather and traffic conditions, as well as individual handling, can affect the fuel
                    consumption, energy consumption, CO₂ emissions, range and performance values of a car.
                </p>

                <p>
                    ** Important information about the all-electric
                    Porsche models can be found <a className="link underline" href="https://www.porsche.com/international/accessoriesandservice/porscheservice/vehicleinformation/bev/">here.</a>
                </p>
            </div>

            <div className="footer-logo-container">
               <img src={PorscheLogo} alt="porsche logo" width="250rem" style={{ filter: "invert(1)" }} />
            </div>

        </footer>
    );
}

export default Footer;


