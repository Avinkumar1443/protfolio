import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, url, image }) => {
    const siteTitle = "Avin Kumar | Full Stack Developer";
    const defaultDescription = "Portfolio of Avin Kumar, a Full Stack Developer specializing in MERN stack, ASP.NET MVC, and Scalable Web Apps.";
    const defaultKeywords = "Full Stack Developer, MERN Stack, React Developer, ASP.NET MVC, Web Development, Portfolio";
    const siteUrl = "https://avinkumar.vercel.app/";
    const defaultImage = "https://avinkumar.vercel.app/og-image.jpg"; // You should ensure this image exists in public folder


    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | Avin Kumar` : siteTitle}</title>
            {/* <meta name="google-site-verification" content="Lm6lpL-l-WY9EJhHK9plWBhtad9773hONZjBkCOyW3A" /> */}
            <meta name='description' content={description || defaultDescription} />
            <meta name='keywords' content={keywords || defaultKeywords} />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || "Avin Kumar"} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
