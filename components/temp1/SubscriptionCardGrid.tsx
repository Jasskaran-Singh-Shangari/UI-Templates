import SubscriptionCard from "../ui/temp1/SubscriptionCard"


const starterPlan=[
    "1 users",
    "10 projects",
    "10,000 website views",
    "2 Integration",
    "1GB storage",
    "Email support",
    "Everything else",
]

const proChampionPlan=[
    "5 users",
    "50 projects",
    "50,000 website views",
    "5 Integration",
    "5GB storage",
    "Talk to Manu for 5 minutes",
    "Read a book together",
    "Understand the meaning of life",
    "Email support",
    "Everything else",
]

const kingMakerPlan=[
    "unlimited users",
    "unlimited projects",
    "unlimited website views",
    "unlimited Integration",
    "unlimited storage",
    "Email support",
    "Everything else",
]

const SubscriptionCardGrid = () => {

  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-3">
      <SubscriptionCard plan="Starter" description="For small teams or office" monthlyPrice={9} annualPrice={69} currency="$" features={starterPlan} className="bg-white" />
      <SubscriptionCard plan="Pro Champion" description="For medium to large teams" annualPrice={169} monthlyPrice={29} currency="$" features={proChampionPlan} className="bg-cyan-800 mb-20"  />
      <SubscriptionCard plan="King Maker" description="For large teams or offices" currency="$" annualPrice={469} monthlyPrice={59} features={kingMakerPlan} className="bg-white " />
    </div>
  )
}

export default SubscriptionCardGrid;
