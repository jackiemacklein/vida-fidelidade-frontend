import React, { useEffect, useState } from "react";

export let InitialDataContext = React.createContext(() => {});

export function KieeeHead({ themeColor, title, description, appleIcon, icon, imagePath, siteName, url, favicon, manifest }) {
  return (
    <>
      <meta name="theme-color" content={themeColor} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="apple-touch-icon" href={appleIcon} />
      <meta rel="icon" type="image/png" href={icon} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <link rel="manifest" href={manifest} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content={description} />
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content={siteName} />
      <meta name="twitter:creator" content="@zuktagencia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={imagePath} />
      <meta property="twitter:description" content={description} />

      <link rel="icon" href={favicon} />
    </>
  );
}

/* Essential function to obtain initial data */
export async function getInicialData(staticContext, requestInitialData) {
  let initialData;
  if (global.window) {
    initialData = window.initialData__ ?? [];
    if (initialData.length <= 0) initialData = await requestInitialData();
  } else {
    initialData = staticContext.initialData;
  }
  return initialData;
}

export function useInitialData(props, requestInitialData) {
  const [initialData, setInitialData] = useState(props.staticContext ?? {});

  useEffect(() => {
    async function inicialData() {
      setInitialData(await getInicialData(props.staticContext, requestInitialData));
    }
    inicialData();
  }, []);

  InitialDataContext = { ...initialData };

  return initialData;
}
