// app/voice-samples/page.tsx (if using App Router)
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VoiceSamples() {
  const samples = [
    {
      title: "Cartoon Narrator",
      script:
        "In the heart of a city where waffles rule the streets and squirrels run the government... one pancake dares to rise! Meet Benny—the breakfast hero we didn’t know we needed!",
      audio: "/voice/cartoon-narrator.mp3",
    },
    {
      title: "Goofy Sidekick",
      script:
        "Whoa, whoa, whoa! You mean to tell me… the cookies were ALIVE the whole time?! Man, I *knew* that chocolate chip winked at me!",
      audio: "/voice/goofy-sidekick.mp3",
    },
    {
      title: "Suspense Narration",
      script:
        "Every school has a legend… but this one? This one bites. Literally. Join us as we dive into the case of the hallway hamster—who may or may not be an evil genius!",
      audio: "/voice/suspense-narrator.mp3",
    },
    {
      title: "Fast-Paced Recap",
      script:
        "Previously on Galaxy Frogs—Zorp was captured by the evil Ice Cream King, Froyo! But just when things got sticky… Boom! Queen Lily arrived with her bubblegum bazooka!",
      audio: "/voice/fast-recap.mp3",
    },
  ];

  return (
    <>
      <Header />
      <section className="min-h-screen bg-light text-neutral-900 py-16 px-4 sm:px-6 h-full -mb-[80px]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Voice Over Samples</h1>
            <p className="text-lg text-gray-700">
              Explore my voice acting range through these short,
              character-driven demos!
            </p>
            <div className="w-16 h-1 mx-auto bg-primary-400" />
          </div>

          {samples.map((sample, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-primary-600">
                {sample.title}
              </h2>
              <p className="text-gray-700">{sample.script}</p>
              <audio controls className="w-full">
                <source src={sample.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
