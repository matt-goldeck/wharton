import { FAQListItem } from "@/components/faq-list-item";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

export default function FAQPage() {
  const items = [
    {
      question: "What is Batsto Labs?",
      answer: "matt goldeck in a false mustache",
    },
    {
      question: "Why?",
      answer: "i don't know",
    },
    {
      question: "What kind of engineering do you do?",
      answer:
        "software. backend stuff. some devops. some data. frontend when theres a fire and the org has insurance.",
    },
    {
      question: "What keeps you going?",
      answer: "building cool stuff and working with smart people",
    },
    {
      question: "Is there even a lab?",
      answer: (
        <>
          my parents have a labrador
          <Image src="/images/luna.jpg" width={400} height={400} alt="luna" />
        </>
      ),
    },
    {
      question: "Is this some kind of joke?",
      answer: "thats rude",
    },
    {
      question: "What are you into right now?",
      answer: "i've been playing with rust and it's cool",
    },
    {
      question: "Do you do consultant work?",
      answer: "no (maybe)",
    },
    {
      question:
        "What could the American Motor Corporation have done to save itself from a Chrysler buyout?",
      answer: (
        <>
          <div>
            a good start would have been a stronger focus on the niche markets
            they had traction in. amc essentially originated the midsize suv
            segment but never fully capitalized on it. the grand cherokee is a
            once in a generation product that drove a stake through the heart of
            the sedan and sold the world on the power and sophistication of the
            american suv. but because amc sat on its hands the zj is forever
            accredited to lee iacocca and his goons at chrysler, and amc is an
            also-ran in the dust bin of history
          </div>
          <div className="mt-1">
            also they could have tried building less uglier cars lol
          </div>
        </>
      ),
    },
    {
      question:
        "Does the monolith have a place in modern development?",
      answer: "no comment (but yes)",
    },
    {
      question: "What's the creamiest rock you've ever touched?",
      answer:
        "look my dude im gonna let you in on a little crag near lyons called lions den. honestly the approach sucks and the rock isn't great but there's this incredible v6 called hyperion proboscis and i found god in a heel hook there and you can too",
    },
    {
      question: "Best Ski hill?",
      answer: "eldora",
    },
    {
      question: "Is there anything you can't do?",
      answer: "hand eye coordination :(",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      <Header />
      <div className="text-4xl font-vt323">/faq</div>
      <div className="flex flex-col mt-5 space-y-2">
        {items.map((item, x) => (
          <FAQListItem item={item} key={x} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
