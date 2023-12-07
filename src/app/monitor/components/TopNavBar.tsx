import Link from "next/link"

interface Props {
  crumbs:
  {
    label: string,
    url: string,
  }[]

}

export default function TopNavBar({ crumbs }: Props) {
  let cummulativeCrumb = "";
  return <div className="bg-[#ffffff] px-4 py-2">
    <div className="relative left-0 ">
      /{crumbs.map((crumb, index) => {
        cummulativeCrumb += crumb.url + "/"
        return <Link key={index} href={cummulativeCrumb}
          className="hover:border-b-[#ff0000] border border-[#ffffff] border-b-2">
          {crumb.label}/
        </Link>})}
    </div>
  </div>
}