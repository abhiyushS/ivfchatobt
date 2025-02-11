import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to FertiliSense
          </h1>
          <h2 className="mt-4 text-2xl text-blue-600">Your AI-Powered IVF Companion</h2>
          <p className="mt-4 text-xl text-gray-500">
            Empowering patients, researchers, and clinicians with advanced AI technology for personalized IVF guidance.
          </p>
          <div className="mt-10">
            <Link href="/patient">
              <Button className="w-full sm:w-auto">Enter Patient Portal</Button>
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image
            src="/pregrobot.jpg"
            alt="Fertility health illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Patient Portal</h3>
              <p className="mt-5 text-base text-gray-500">
                Access our AI chatbot, upload medical reports, and get personalized insights.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Researcher Hub</h3>
              <p className="mt-5 text-base text-gray-500">
                Explore molecular dynamics of disorders with our advanced LLM.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Clinician Dashboard</h3>
              <p className="mt-5 text-base text-gray-500">
                Access predictive models and patient data for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

