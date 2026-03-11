import Announcement from "../ui/temp1/Announcement"
import Navbar from "../ui/temp1/Navbar"


const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <Announcement />
      <Navbar />
    </div>
  )
}

export default Header
