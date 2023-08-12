import TopContent from "@/components/Home/TopContent";
import AuthorityBadges from "@/components/Home/AuthorityBadges";
import Template from "@/components/Home/Template";
import Comments from "@/components/Home/Comments";
export default function Home() {
  return (
    <main >
      <TopContent/>
      <AuthorityBadges/>
      <Template/>
      <Comments/>
    </main>
  )
}
