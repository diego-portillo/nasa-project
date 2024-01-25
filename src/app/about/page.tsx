export default function Page() {
    return (
    <div className="h-full w-1/2 m-auto mt-12 leading-6">
    <h1 className="text-4xl text-center mb-4" >APOD</h1>
    <p className="text-center">
      One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
    </p>
    <p className="text-center">
      The full documentation for this API can be found in the <a className="underline" href="https://github.com/nasa/apod-api">APOD API Github repository</a>.
    </p>
    </div>
    )
  }