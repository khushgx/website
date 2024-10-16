import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black py-24">
      <Head>
        <title>Khush Gupta | Portfolio</title>
        <meta name="description" content="Portfolio website of Khush Gupta" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          }
        `}</style>
      </Head>

      <main className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start">
          {/* Headshot on the left, left-aligned */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start md:pr-8">
            <Image
              src="/img.png"
              alt="Khush Gupta Headshot"
              width={250}
              height={250}
              className="rounded-full border-4 border-gray-200 mb-4"
            />
            <h1 className="text-3xl font-bold mb-2 text-left">Khush Gupta</h1>
            <div className="space-y-2 text-left">
              <div><Link href="https://twitter.com/notkhushg" className="text-blue-500 hover:underline">Twitter</Link></div>
              <div><Link href="https://linkedin.com/in/khushg" className="text-blue-500 hover:underline">LinkedIn</Link></div>
              <div><Link href="https://github.com/khushgx" className="text-blue-500 hover:underline">Github</Link></div>
              <div><a href="mailto:khushgx@gmail.com" className="text-blue-500 hover:underline">Email</a></div>
                
            </div>
          </div>
          
          {/* Description on the right, left-aligned */}
          <div className="md:w-2/3 mt-8 md:mt-0 text-left">
          
          <p className="text-lg mb-4">
  Hello! I am a student at the University of Pennsylvania pursuing a B.S. in Computer Science and B.S. in Business dual degree at the Jerome Fisher Program in Management and Technology (Engineering + Wharton). 
  
</p>
<p className="text-lg mb-4">
  Most recently, I was a Machine Learning Engineer Intern at Apple, where I worked with transformers and structured state-space models (SSMs) for the Ads team. Currently, I am working on GPU Profiling and Long-Context Reasoning @ Penn Machine Learning & The Distributed Systems Lab.
</p>
<p className="text-lg mb-4">
  Outside of class, I help lead <Link href="https://mlrpenn.vercel.app/" className="text-blue-500 hover:underline">MLR@Penn</Link> and serve as a Teaching Assistant for the Graduate Machine Learning class here (CIS 5200). I also work with the Cypher Accelerator at UPenn, focusing on incubating early-stage AI startups.
</p>
<p className="text-lg mb-4">If you&apos;re interested in the collaborating, talking about research, or startups, feel free to reach out—I’d love to connect.</p>
<p className="text-lg">
  You can find my resume <Link href="/resume.pdf" className="text-blue-500 hover:underline">here</Link>.
</p>


          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Research</h2>
          <div className="space-y-6">
            <p className="mb-6">
              I&apos;m interested in improving the efficiency of foundation models by analyzing and exploiting the structure of their internal dynamics. By cleverly employing interpretability tools and explainability techniques, I believe we can significantly reduce model resource consumption and circumvent memory requirements. 
            </p>
            <div className="space-y-6">
              <PublicationCard 
                title="Investigating Language Model Dynamics using Meta-Tokens"
                authors="Alok Shah, Khush Gupta, Keshav Ramji, Vedant Gaur"
                venue="NeurIPS 2024, ATTRIB Workshop"
              />
              <PublicationCard 
                title="Weak-to-Strong In-Context Optimization of Language Model Reasoning"
                authors="Keshav Ramji, Vedant Gaur, Alok Shah, Khush Gupta,"
                venue="NeurIPS 2024, ATTRIB Workshop"
              />
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Software</h2>
          <p className="mb-6">The following is a non-exhaustive list of open source software projects that I started or contribute to:</p>
          <div className="space-y-6">
            <ProjectCard
              title="discus.ai"
              description="An open source project to enhance AI interactions, Synthetic Text Generation, and LLM Fine-Tuning."
              link=""
            />
            <ProjectCard
              title="mlx-examples"
              description="MLX is an array framework for machine learning research on Apple silicon, brought to you by Apple machine learning research"
              link="/projects/compiler"
            />
            <ProjectCard
              title="kan transformer"
              description="a quick hack to redo the GPT-2 Transformer to use a KAN instead of a traditional MLP"
              link="/projects/solar"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

const PublicationCard = ({ title, authors, venue }) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm mb-2">{authors}</p>
    <p className="text-sm text-gray-600">{venue}</p>
  </div>
);

const ProjectCard = ({ title, description, link }) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    {/* <Link href={link} className="text-blue-500 hover:underline">Learn More</Link> */}
  </div>
);
