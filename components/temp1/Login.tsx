import IconButton from "../ui/temp1/IconButton"
import Input from "../ui/temp1/Input"
import Logo from "../ui/temp1/Logo"
import PrimaryButton from "../ui/temp1/PrimaryButton"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-start shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] w-[30%] bg-white rounded-2xl p-10 gap-3">

            <Logo className="text-neutral-600" />
            <span className="text-xl text-neutral-500"> Sign in to ProtonX </span>
            {/* INPUT FIELDS */}
            <div className="w-full flex flex-col items-center justify-center gap-5">
            <Input className="w-full" placeholder="Username" />
            <Input className="w-full" placeholder="Email Address" />
            <Input className="w-full" placeholder="Password" />
            <PrimaryButton text="Sign in" className="w-full" />
            </div>
            <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-neutral-300" />
                <span className="text-neutral-500 text-sm">or</span>
                <div className="flex-1 h-px bg-neutral-300" />
            </div>

            <IconButton icon={GoogleIcon} className="w-full" text="Sign in with Google" />
            <IconButton icon={GitHubIcon} className="w-full" text="Sign in with GitHub" />
            <IconButton icon={LinkedInIcon} className="w-full" text="Sign in with LinkedIn" />

            <Link href="/temp1/signup" className="text-neutral-600 text-xs"> Click here to Sign Up </Link>
            </div>
  )
}

export default Login
