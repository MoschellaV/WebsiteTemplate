# WebsiteTemplate
![makes people smile](https://forthebadge.com/images/badges/makes-people-smile.svg)
![seo-certified (1)](https://user-images.githubusercontent.com/58868225/209240783-79c923a5-3310-4a78-9254-be3859990f2c.svg)
![built-with-next-js](https://user-images.githubusercontent.com/58868225/209240742-d74d63bf-ef68-4b85-95ba-cfc252d119e1.svg)

This is a basic website template that I use for clients. It sets up the boilerplate for the project cutting out a lot of the 
repetitive work. This allows me to focus on design and customizations so that I can perfect the site for the client.

## The HTML Head
### Things that are USED in this template's HTML Head
#### Canonical Links
Canonical links are a way for websites to tell search engines which version of a webpage should be considered the authoritative or "canonical" version. This helps search engines avoid indexing multiple copies of the same content and potentially penalizing a website for duplicate content. To use a canonical link, a website includes a link to the canonical version of the page in the HTML code of the page. This helps search engines understand which version of the page is the most important and should be indexed, and which versions should be ignored as duplicates. Canonical links are just one way that websites can signal to search engines which pages are most important and should be given priority in search results.
```HTML
<link rel="canonical" href="https://www.example.com/page1">
```

#### Meta & Title & Theme
The "title" tag is simply the tite of the webpage.

The "meta description" tag is a short summary of the webpage's content that is displayed in the search results. It is intended to give users an idea of what the webpage is about and help them decide whether to click on the search result or not. 

The "meta keywords" tag is a list of keywords that are relevant to the webpage's content.  However, the "meta keywords" tag is not widely used anymore, as search engines have become more sophisticated and no longer rely on it as a ranking factor. (I still use the tag becuase there are applications that match meta tags, which could include the keyword meta tag. Plus it doesn't hurt).

The "theme-color" meta tag is an HTML meta tag that can be included in the head section of a webpage. It is used to specify the color of the browser's chrome (e.g. the address bar, tab bar, and toolbars) on mobile devices when the webpage is displayed. This can be useful for creating a cohesive and branded look for your website on mobile devices.
It's important to note that the "theme-color" meta tag is only supported by some browsers on mobile devices, and it does not have any effect on desktop browsers. Additionally, it does not affect the appearance of the webpage itself, only the color of the browser chrome.

#### Social Media Display
Open Graph meta tags are used to specify information about the webpage that is shared on social media platforms, such as the title, description, and image that should be displayed when the webpage is shared.

The Open Graph protocol is a standardized set of meta tags that was created by Facebook to enable any webpage to become a rich object in a social graph. This means that when a webpage with Open Graph meta tags is shared on social media platforms, it can be displayed in a more engaging and interactive way, with a larger image, title, and description.

Here's an example of how Open Graph meta tags might be used in the head section of a webpage:
```HTML
<meta property="og:title" content="The Best Chocolate Chip Cookies Recipe">
<meta property="og:description" content="Get ready for the best chocolate chip cookies you've ever tasted! This easy recipe will give you soft and chewy cookies that are bursting with chocolate flavor. Perfect for a sweet treat anytime!">
<meta property="og:image" content="https://www.example.com/chocolate-chip-cookies.jpg">
<meta property="og:url" content="https://www.example.com/chocolate-chip-cookies">
```
In this example, the "og:title" and "og:description" tags specify the title and description of the webpage that should be displayed when it is shared on social media platforms. The "og:image" tag specifies the image that should be displayed, and the "og:url" tag specifies the URL of the webpage.

Check out this visual:
![image](https://user-images.githubusercontent.com/58868225/209022353-a63e8236-e441-4cb2-b447-14a4d9e3e203.png)

Using Open Graph meta tags can help increase the visibility and engagement of a webpage on social media platforms, as it allows the webpage to be displayed in a more visually appealing and interactive way when it is shared. However, it's important to note that Open Graph meta tags are not used by all social media platforms, and they do not have any direct impact on a webpage's ranking in search results.

#### Google Analytics Tag
To use Google Analytics on a website, you will need to sign up for a Google Analytics account and obtain a tracking code. The tracking code is a JavaScript snippet that needs to be added to the website in order to track and collect data.

One way to add the tracking code to a website is to use a Google Analytics tag. A Google Analytics tag is a piece of code that is added to the website in order to track and collect data using Google Analytics. The tag is typically added to the head section of the webpage's HTML code, or to a template file that is included on all pages of the website.

Here's an example of how you might add a Google Analytics tag to a website:
```HTML
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-123456789-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-123456789-1');
</script>
```

### Things that are NOT USED in this template's HTML head
#### Favicons
***Since I'm using Next.js the favicons are automatically handled.***

A favicon, also known as a "favorite icon" or "shortcut icon," is a small icon that is displayed in the browser tab or bookmark of a webpage. It is meant to help users identify and distinguish different webpages when they have multiple tabs or bookmarks open at the same time. Favicons are typically 16x16 pixels or 32x32 pixels in size, and are saved in a specific file format, such as .ico or .png.

#### Preloading
***Preloading is not used in the HTML head becuase of SSG with Next.js.***

Preloading is a technique that allows web developers to specify which resources (such as images, scripts, and stylesheets) should be loaded and made available for use by the browser as soon as possible, rather than waiting for them to be needed. This can help improve the performance and speed of a website by reducing the amount of time it takes for the browser to load and render the webpage. Example:
```HTML
<link rel="preload" href="/image.jpg" as="image" />
<link rel="preload" as="font" type="font/woff2" href="../src/assets/fonts/inter-v12-latin-regular.woff2" crossorigin />
```
**Note** if you would like to preload fonts in the HTML head you can use https://gwfh.mranftl.com/fonts to download any font then simply add the woff2 version to the href.

Using preloading can help improve the performance and speed of a website by reducing the amount of time it takes for the browser to load and render the webpage. However, it's important to use preloading judiciously, as preloading too many resources or resources that are not needed can actually have a negative impact on performance. It's a good idea to carefully consider which resources are most important and would benefit the most from preloading, and to use performance tools and techniques (such as loading critical resources first and lazy loading) to optimize the loading of resources on the webpage.

#### Stylesheets
***I load my global stylesheet in my _app.js.***

Stylesheets are a way to specify the appearance and layout of a webpage or website. They contain a set of rules and styles that define how the various elements on a webpage should be displayed, including the font, color, size, and position of text and other content. Example:
```HTML
<link rel="stylesheet" href="/style.css">
```

## Next.js

### Fonts
The following command is used to get started with fonts in Next.js. 
```
npm install @next/font
```
There are a few ways you can use Next.js to grab the fonts you want. But I choose to download fonts locally. To do this I use https://gwfh.mranftl.com/fonts.
Here's how I would import my fonts in _app.js
```JS
// pages/_app.js
// importing the font we would like to use
import localFont from "@next/font/local";

// font files are stored in pages/fonts
// we can use multiple font files for a single family using an array
const inter = localFont({
    src: [
        {
            path: "./fonts/inter-v12-latin-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/inter-v12-latin-700.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

// importing css file
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}
```
## Material UI
To install Material UI use the following
```
npm install @mui/material @mui/styled-engine-sc styled-components
```
Here are some reasources where you can find *creative inspiration*: [Creative Tim](https://www.creative-tim.com/), [Dribble](https://dribbble.com/), and [Pinterest](https://www.pinterest.com/).
