import { CiLogin } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineShowChart } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

export default function HowToUse() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center text-muted">How to Use Our Product</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4 border border-accent p-4 rounded-md border-dashed">
                <div className="rounded-lg  p-4 dark:bg-gray-800">
                  <CiLogin className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                <h3 className="text-xl font-semibold text-primary">Step 1: Set Up Your Account</h3>
                  <p className=" dark:text-gray-400 text-muted">
                  setting up your account with our AI-powered potato disease detection platform. Sign up and get ready to streamline your crop management process.
                  </p>
                </div>
              </div>
              <div className="space-y-4 border border-accent p-4 rounded-md border-dashed">
                <div className="rounded-lg  p-4 dark:bg-gray-800">
                  <MdOutlineFileUpload className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Step 2:upload Image potato plant</h3>
                  <p className="dark:text-gray-400 text-muted">
                  Upload images of your potato plants to our platform for quick and accurate disease analysis. Simply capture the affected areas and let our AI algorithms do the rest
                  </p>
                </div>
              </div>
              <div className="space-y-4 border border-accent p-4 rounded-md border-dashed">
                <div className="rounded-lg  p-4 dark:bg-gray-800">
                  <MdOutlineShowChart className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Step 3: waiting result</h3>
                  <p className=" dark:text-gray-400 text-muted">
                  Sit back and relax as our advanced AI processes the uploaded images in real-time. No need to wait for days or weeks for results – get instant feedback on the health of your potato crop.                  </p>
                </div>
              </div>
              <div className="space-y-4 border border-accent p-4 rounded-md border-dashed">
                <div className="rounded-lg p-4 dark:bg-gray-800">
                  <AiTwotoneSafetyCertificate className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Step 4:protect</h3>
                  <p className=" dark:text-gray-400 text-muted">
                  Receive detailed reports and insights on potential diseases affecting your potato plants within minutes. Take proactive measures to protect your crop and maximize yields with our intuitive AI-powered solution.
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}