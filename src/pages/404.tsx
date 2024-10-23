import exp from "constants"
import Link from "next/link"

const PageNotFound = () => {
  return (
    <div>
      <div className="h-full w-full flex justify-center">Page Not Found</div>
      <div className="h-full w-full flex justify-center">
        <Link href="/home">Go to home</Link>
      </div>
    </div>
  )
}

export default PageNotFound;