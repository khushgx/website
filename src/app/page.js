'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ExternalLink, FileText, GraduationCap } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-xl font-semibold text-gray-100">
              Khush Gupta
            </h1>
            <nav className="flex gap-6 mt-4 sm:mt-0">
              <button 
                onClick={() => setActiveTab('about')}
                className={`pb-1 transition-all ${activeTab === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveTab('research')}
                className={`pb-1 transition-all ${activeTab === 'research' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Research
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`pb-1 transition-all ${activeTab === 'projects' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('teaching')}
                className={`pb-1 transition-all ${activeTab === 'teaching' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Teaching
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left column - Photo and Links */}
              <div className="md:col-span-1">
                <Image
                  src="/img.png"
                  alt="Khush Gupta"
                  width={200}
                  height={200}
                  className="rounded-lg mb-6 border border-gray-800"
                />
                <div className="space-y-3">
                  <a href="https://github.com/khushgx" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://scholar.google.com/citations?user=VCQ7t1YAAAAJ&hl=en&authuser=1" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <GraduationCap size={18} />
                    <span>Google Scholar</span>
                  </a>
                  <a href="https://linkedin.com/in/khushg" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://x.com/khushgx" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={18} />
                    <span>X/Twitter</span>
                  </a>
                  <a href="mailto:khushgx@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Mail size={18} />
                    <span>Email</span>
                  </a>
                  <a href="/KhushGupta_RE.pdf" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <FileText size={18} />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

              {/* Right column - Bio */}
              <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m currently an AI Research Intern at <a href="https://together.ai" className="text-blue-400 underline">Together AI</a>, working on inference optimization.
                  Previously, I was a Machine Learning Engineer Intern at <span className="text-gray-100">Apple</span>, 
                  where I worked with state-space models for long-horizon tasks.
                </p>
                
                <p>
                  I&apos;m pursuing a B.S. in Computer Science, B.S. in Statistics, and M.S. in Computer Science at the University of Pennsylvania 
                  through the Jerome Fisher M&T Program. 
                  I&apos;m a member of the <span className="text-gray-100">Efficient AI Lab</span> under Professors <a href="https://www.seas.upenn.edu/~leebcc/" className="text-blue-400 underline">Benjamin Lee</a> and <a href="https://www.cis.upenn.edu/~devietti/" className="text-blue-400 underline">Joe Devietti</a>.
                </p>
                
                <p>
                  I co-lead <a href="https://mlrpenn.vercel.app/" className="text-blue-400 underline">MLR@Penn</a>, 
                  our machine learning research organization.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="animate-fadeIn space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Research Focus</h2>
              <div className="border border-gray-800 rounded-lg p-5 mb-8">
                <p className="text-gray-300 leading-relaxed mb-3">
                  I work on improving the cost-efficiency tradeoff in AI systems by exploiting and understanding their internal structure and dynamics.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  By leveraging interpretability tools and structural insights, I believe we can dramatically reduce computational requirements 
                  while pushing the boundaries of AI capabilities in memory, reasoning, and efficiency—making powerful AI more accessible and sustainable.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Publications</h2>
              <div className="space-y-4">
                <PublicationCard 
                  title="Language Modeling With Learned Meta-Tokens"
                  authors="Alok Shah*, Khush Gupta*, Keshav Ramji, Pratik Chaudhari"
                  venue="ICML 2025, LCFM Workshop"
                  link="https://openreview.net/pdf?id=oaHYnLldHM"
                />
                <PublicationCard 
                  title="Modeling Human Behavior Without Humans: Prospect Theoretic Multi-Agent RL"
                  authors="Sheyan Lalmohammed*, Khush Gupta*, Alok Shah*, Keshav Ramji"
                  venue="ICML 2025, MAS Workshop"
                  link="#"
                />
                <PublicationCard 
                  title="Investigating Language Model Dynamics using Meta-Tokens"
                  authors="Alok Shah*, Khush Gupta*, Keshav Ramji, Vedant Gaur"
                  venue="NeurIPS 2024, ATTRIB Workshop"
                  link="#"
                />
                <PublicationCard 
                  title="Weak-to-Strong In-Context Optimization of Language Model Reasoning"
                  authors="Keshav Ramji*, Alok Shah*, Vedant Gaur*, Khush Gupta*"
                  venue="NeurIPS 2024, ATTRIB Workshop"
                  link="#"
                />
                <PublicationCard 
                  title="Dropout, Johnson-Lindenstrauss, Low-Rank Bias, and Generalization"
                  authors="Alok Shah*, Mohul Aggarwal*, Khush Gupta"
                  venue=""
                  link="#"
                />
                <PublicationCard 
                  title="Conformal Actor-Critic: Distribution-Free Uncertainty Quantification for Offline RL"
                  authors="Alok Shah*, Nikhil Kumar*, Khush Gupta*, Mohul Aggarwal"
                  venue=""
                  link="#"
                />
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            <div className="grid gap-6">
              <ProjectCard
                title="discus.ai"
                description="Open source platform for enhancing AI interactions, synthetic text generation, and LLM fine-tuning. Built to democratize advanced AI tooling."
                tags={['Python', 'LLMs', 'Open Source']}
                link="https://github.com/khushgx/discus"
              />
              <ProjectCard
                title="MLX Examples"
                description="Contributing to Apple's MLX framework for machine learning on Apple Silicon. Optimizing models and implementations for efficient on-device inference."
                tags={['Swift', 'Machine Learning', 'Apple Silicon']}
                link="https://github.com/ml-explore/mlx-examples"
              />
              <ProjectCard
                title="KAN Transformer"
                description="Experimental implementation replacing traditional MLPs in GPT-2 with Kolmogorov-Arnold Networks (KANs). Exploring alternative architectures for transformers."
                tags={['PyTorch', 'Transformers', 'Research']}
                link="https://github.com/khushgx/kan-transformer"
              />
            </div>
          </div>
        )}

        {/* Teaching Tab */}
        {activeTab === 'teaching' && (
          <div className="animate-fadeIn">
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed mb-6">
                I&apos;ve had the privilege of being a Teaching Assistant for the following graduate courses at Penn:
              </p>
              <div className="grid gap-4">
                <TeachingCard
                  code="CIS 5200"
                  title="Graduate Machine Learning"
                  description="Core ML course covering supervised/unsupervised learning, deep learning, and theoretical foundations."
                />
                <TeachingCard
                  code="CIS 5550"
                  title="Graduate Internet and Web Systems"
                  description="Distributed systems, web architectures, cloud computing, and scalable system design."
                />
                <TeachingCard
                  code="CIS 5480"
                  title="Graduate Operating Systems"
                  description="Advanced OS concepts including virtualization, distributed systems, and system security."
                />
                <TeachingCard
                  code="ESE 5460"
                  title="Graduate Deep Learning"
                  description="Neural network architectures, optimization, and applications in computer vision and NLP."
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const PublicationCard = ({ title, authors, venue, link }) => (
  <div className="border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
    <h3 className="text-lg font-semibold mb-2 text-gray-100">{title}</h3>
    <p className="text-sm text-gray-400 mb-2">{authors}</p>
    <div className="flex items-center justify-between">
      <p className="text-sm text-purple-400">{venue}</p>
      {link && (
        <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  </div>
);

const ProjectCard = ({ title, description, tags, link }) => (
  <div className="border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-all">
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      {link && (
        <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
          <ExternalLink size={20} />
        </a>
      )}
    </div>
    <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const TeachingCard = ({ code, title, description }) => (
  <div className="border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-all">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-blue-400 font-mono text-sm">{code}</span>
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);