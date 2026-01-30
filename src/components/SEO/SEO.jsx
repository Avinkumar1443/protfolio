import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, url, image }) => {
    const siteTitle = "Avin Kumar | Full Stack Developer | React, ASP.NET & Next.js Expert";
    const defaultDescription = "Avin Kumar is a Full Stack Developer specializing in React, Next.js, and ASP.NET Core. Experienced software engineer building enterprise web applications, CRM systems, and scalable REST APIs. Portfolio showcasing real-world projects.";
    const defaultKeywords = "Avin Kumar, Avin Kumar developer, Avin Kumar portfolio, Full Stack Developer, React Developer, Next.js Developer, ASP.NET Developer, ASP.NET Core Developer, JavaScript Developer, Software Engineer, Web Application Developer, REST API Developer, MERN Stack Developer, Frontend Developer, Backend Developer, Full stack developer portfolio, React and ASP.NET developer, Enterprise web application developer";
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
