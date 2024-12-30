"use client";
import dynamic from "next/dynamic";
import "./MainComponent/Home.css";
import { useEffect } from "react";

const Header = dynamic(() => import("./MainComponent/Header"), {
    loading: () => <p>loader</p>,
});

const Content = dynamic(() => import("./MainComponent/Content"), {
    loading: () => <p>loader</p>,
});

const Second_content = dynamic(() => import("./MainComponent/Second_content"), {
    loading: () => <p>loader</p>,
});

const Special = dynamic(() => import("./MainComponent/Special"), {
    loading: () => <p>loader</p>,
});

const Review = dynamic(() => import("./MainComponent/Reviews"), {
    loading: () => <p>loader</p>,
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>,
});

const SelectProduct = dynamic(() => import("@/app/commonUse/SelectProduct"), {
    loading: () => <p>loader</p>,
});

const FooterP = dynamic(
    () => import("@/app/commonUse/bottompopup/BottomHandler"),
    {
        loading: () => <p>loader</p>,
    }
);

const page = () => {
    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/afb");
    }, []);

    return (
        <section className="">
            <div className="">
                <Header />

                <Content />

                <Second_content />

                <Special />

                <SelectProduct />

                <Review />

                <Footer />

                <FooterP />
            </div>
        </section>
    );
};

export default page;
