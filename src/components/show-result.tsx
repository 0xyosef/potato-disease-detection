
type ShowResultProps = {
        classR:string;
        confidence:string   
  };


export default function ShowResult({
    classR,
    confidence
}: ShowResultProps) {
    return (
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Classification Result</h2>
            <div className="grid grid-cols-2 gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Class</h3>
                <p className="text-2xl font-bold">{classR}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Confidence</h3>
                <p className="text-2xl font-bold">{confidence}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }