import UserInfo, { UserInfoProps } from './UserInfo';

interface TestimonialCardProps{
    review: string;
    by: string 
    designation?: string
}

const TestimonialCard = ({review, by, designation} : TestimonialCardProps) => {
  return (
    <div className='shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white max-w-sm rounded-2xl flex flex-col items-start gap-5 p-10 break-inside-avoid mb-5'>
        <span className='text-2xl text-neutral-800'><q> {review} </q> </span>
      <UserInfo by={by} designation={designation} />
    </div>
  )
}

export default TestimonialCard;
