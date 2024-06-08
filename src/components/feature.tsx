import { PiPlantBold } from "react-icons/pi";
import { LuTestTube } from "react-icons/lu";
import { FaTractor } from "react-icons/fa6";


export default function Feature() {
    return (
      <section className="w-full">
        <div className="py-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center text-muted">Featuer</h2>
        </div>
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-primary p-4 dark:bg-gray-800">
              <PiPlantBold className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary">Detection</h3>
            <p className="dark:text-gray-400">
            The model can process images in real-time, allowing farmers to use their smartphones or drones to instantly detect diseases in their potato fields.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-primary p-4 dark:bg-gray-800">
              <LuTestTube className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary">Identification</h3>
            <p className="dark:text-gray-400">
            The model is capable of identifying multiple common potato diseases, such as late blight, early blight, and black scurf, from a single image.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-primary p-4 dark:bg-gray-800">
              <FaTractor className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary">Severity Assessment</h3>
            <p className="dark:text-gray-400">
            Helps farmers prioritize their actions and resources based on the severity of the disease outbreak.
            </p>
          </div>
        </div>
      </section>
    )
}
