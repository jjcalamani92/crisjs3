import { useRouter } from "next/router";
import { FC } from "react"
import { Hero } from "../components/hero";
import { Site } from "../interfaces/siteV1";
import { getChildren1 } from "../utils/function";
import { getChildren0 } from "../utils/functionV3";
import { Blog } from "./pages/blog";

interface Props {
  sites: Site[]
}

export const Children1:FC<Props>= ({sites}) => {
  const { asPath, query} = useRouter()
  const children0 = getChildren0(sites, query)!
  console.log(getChildren1(sites, query)!);
 
  switch (asPath) {
    case '/services/seo-marketing':
      return <h1>{asPath}</h1>
    case '/services/web-designer':
      return  <h1>{asPath}</h1>
    // case '/services':
    //   return (
    //     <h1>{asPath}</h1>
    //   )
    // case '/blog':
    //   return (
    //     <Blogs children0={children0} />

    //   )
    default:
      return null;
  }
}