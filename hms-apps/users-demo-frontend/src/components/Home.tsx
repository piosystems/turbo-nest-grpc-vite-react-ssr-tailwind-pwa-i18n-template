import { H1 } from "@/components/ui/typography";

type Props = {
    title?: string
}

const Home:React.FC<Props> = () => {
    return (
        <>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <H1>
              This is the Home Page
            </H1>
          </div>
        </section>
        </>
      )
}

export default Home;