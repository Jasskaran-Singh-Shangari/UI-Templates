
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({params}: PageProps) {
    const { slug } = await params;

    // const blogs=[
    //     {
    //         slug: 1,
    //         heading: "  What is a website template?",
    //         content:""
    //     }
    // ]

    return (
        <div className="bg-white min-h-screen">
            <div className="text-3xl text-black font-bold">
                {slug}
            </div>
        </div>
    );
}