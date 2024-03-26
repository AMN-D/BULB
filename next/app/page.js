import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 bg-black">
      <div>
        <p className="text-justify mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
          One night, I was studying at home for the upcoming exams. My house was
          situated in a rural area, where not many people came after sundown. I
          lived with my mother and father, but that day, they were out attending
          a wedding.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-3 text-justify">
          Our house had two floors, and when I arrived home, I thought I saw
          someone on the second-floor balcony, but I guessed it was just my
          imagination. After nearly 11 o'clock, I went to drink some water, but
          when I came back, one of my books was missing. A chilly feeling crept
          over me, and I sensed it was on the second floor. Scared, I went
          upstairs to check, and to my surprise, the book was there. I proceeded
          to pick it up, brought it downstairs, and was about to start studying
          again when someone suddenly knocked on the door.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-3 text-justify">
          I said to myself, "Who could be at the door so late?" I opened it, and
          there stood a girl in a white dress. She said, "Can I have my book
          back?" I knew which book she was talking about, but I stupidly asked,
          "Which book?" She snatched the book from my hand...
        </p>
      </div>
    </main>
  );
}