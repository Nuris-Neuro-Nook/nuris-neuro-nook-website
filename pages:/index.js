import React, { useState } from 'react';
import Head from 'next/head';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // THIS IS THE LIST YOU UPDATE EVERY WEEK
  // Just add new videos to this list!
  const resources = [
    {
      id: 1,
      title: "Does caffeine actually boost memory?",
      category: "myth-bust",
      type: "video",
      color: "orange",
      link: "#"
    },
    {
      id: 2,
      title: "Neuroplasticity explained",
      category: "concept",
      type: "video",
      color: "pink",
      link: "#"
    },
    {
      id: 3,
      title: "The gut-brain axis myth",
      category: "myth-bust",
      type: "video",
      color: "green",
      link: "#"
    },
    {
      id: 4,
      title: "How dopamine actually works",
      category: "concept",
      type: "explainer",
      color: "orange",
      link: "#"
    }
  ];

  const topics = [
    { name: "Neurobiology", icon: "🧠", color: "orange" },
    { name: "Myth Busting", icon: "✓", color: "pink" },
    { name: "Research Fundamentals", icon: "📊", color: "green" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const getColorClass = (color) => {
    const colors = {
      orange: 'bg-orange-50 border-orange-200 text-orange-900',
      pink: 'bg-pink-50 border-pink-200 text-pink-900',
      green: 'bg-green-50 border-green-200 text-green-900'
    };
    return colors[color] || colors.orange;
  };

  const getAccentColor = (color) => {
    const accents = {
      orange: 'bg-orange-400 hover:bg-orange-500',
      pink: 'bg-pink-400 hover:bg-pink-500',
      green: 'bg-green-400 hover:bg-green-500'
    };
    return accents[color] || accents.orange;
  };

  return (
    <>
      <Head>
        <title>Biology & Neuroscience Education</title>
        <meta name="description" content="Short-form science videos rooted in literature" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Header */}
        <header className="px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-sm font-medium text-slate-500">Science Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Biology &amp; Neuroscience,<br />
              <span className="font-medium">Clearly Explained</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-light">
              Short-form videos rooted in literature. Myth-busting. Core concepts explained clearly. Subscribe for weekly updates.
            </p>
          </div>
        </header>

        {/* CTA Section */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubscribe} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-orange-300 transition bg-slate-50"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 text-white font-medium hover:shadow-lg transition"
                >
                  {subscribed ? '✓ Subscribed' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-8">Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.name}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition hover:shadow-md ${getColorClass(topic.color)}`}
                >
                  <div className="text-3xl mb-2">{topic.icon}</div>
                  <p className="font-medium">{topic.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Content */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-medium">Latest Videos</h2>
              <a href="#" className="text-slate-600 hover:text-slate-900 flex items-center gap-2 text-sm font-medium">
                View all <ChevronRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  className={`p-6 rounded-3xl border-2 group cursor-pointer hover:no-underline transition hover:shadow-md ${getColorClass(resource.color)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${getAccentColor(resource.color)} flex items-center justify-center text-white font-medium text-sm`}>
                      {resource.type === 'video' ? '▶' : '📝'}
                    </div>
                    <ChevronRight size={20} className="text-slate-400 group-hover:translate-x-1 transition" />
                  </div>
                  <h3 className="font-medium text-lg leading-snug">{resource.title}</h3>
                  <p className="text-sm mt-3 opacity-70">{resource.category}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
              <div>
                <h3 className="font-medium mb-2">Science Hub</h3>
                <p className="text-sm text-slate-600 max-w-xs">Education rooted in research, designed for clarity.</p>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-600 hover:text-slate-900">YouTube</a>
                <a href="#" className="text-slate-600 hover:text-slate-900">Twitter</a>
                <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
              </div>
            </div>
            <div className="text-sm text-slate-500 border-t border-slate-100 pt-6">
              © 2024. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
