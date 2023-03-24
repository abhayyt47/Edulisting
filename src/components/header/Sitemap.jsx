import React from 'react'
import { Routes, Route} from "react-router-dom"

const sitemap = () => {
  return (
    <>
    
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


<url>
  <loc>https://edulisting.ml/</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>
<url>
  <loc>https://edulisting.ml/allchats</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>
<url>
  <loc>https://edulisting.ml/profile</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>
<url>
  <loc>https://edulisting.ml/sell</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>
<url>
  <loc>https://edulisting.ml/login</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>
<url>
  <loc>https://edulisting.ml/ads</loc>
  <lastmod>2023-03-15T16:59:20+00:00</lastmod>
</url>


</urlset>
</>
  )
}


<Routes>
      <Route path="/sitemap" element={ sitemap } />
</Routes>
export default sitemap