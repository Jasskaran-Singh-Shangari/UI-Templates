import Login from "@/components/temp1/Login";

export default function Page() {
    return (
        <div
        style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: "100px 100px"
        }} 
        className="min-h-screen w-full bg-neutral-100 flex items-center justify-center">
            <Login />
        </div>
    );
}