import DraggableNavbar from "@/components/ui/practiceUI/DraggableNavbar"

export default function Page() {

  return (
    <div className="min-h-screen bg-white relative z-200">
        <DraggableNavbar />
        <div className="bg-black h-screen -z-1"></div>
        <div className="bg-black h-screen -z-1"></div>
    </div>
  )
}