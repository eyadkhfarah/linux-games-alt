import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import {
  RiDiscordFill,
  RiMailSendLine,
  RiHashtag,
  RiExternalLinkLine,
} from "react-icons/ri";
import { Contact } from "../../lib/SocialContact";

export const metadata: Metadata = {
  title: "Contact & Community",
  description:
    "Connect with the Linux Games Alt community. Join our Discord Nexus for real-time game compatibility reports, community patches, and technical support.",
  openGraph: {
    title: "Contact Linux Games Alt",
    description:
      "Join the mission to bridge the gap between Windows and Linux gaming.",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Linux Games Alt",
    url: "https://linuxgamesalt.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "community support",
      url: "https://discord.gg/Fzzn6BgREs",
    },
    sameAs: [
      "https://twitter.com/combatredirect",
      "https://github.com/eyadkhfarah/linux-games-alt/",
    ],
  };

  const { discord, github, x } = Contact;

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-200 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="absolute top-0 right-0 w-full h-96 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <header className="mb-20 text-center">
          <h1 className="text-6xl text-white md:text-8xl font-black uppercase tracking-wide mb-8 italic">
            Get In <span className="text-indigo-500">Touch</span>
          </h1>
        </header>

        <div className="group relative mb-8">
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <Link
            href={discord}
            target="_blank"
            className="relative flex flex-col md:flex-row items-center justify-between p-10 md:p-16 rounded-[2.5rem] bg-zinc-950 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col w-full items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-6">
                <RiDiscordFill size={40} className="text-indigo-400" />
                <span className="text-xs font-black uppercase text-indigo-400">
                  Official Server
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-4 italic">
                Join the <span className="text-indigo-500">Nexus</span>
              </h2>
              <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
                Direct access to the developers, community patches, and
                real-time compatibility reports for Linux gamers.
              </p>
              <div className="PrimaryBtn">
                Connect To Discord <RiExternalLinkLine />
              </div>
            </div>

            <RiDiscordFill
              size={300}
              className="absolute -right-20 -bottom-20 text-white/2 rotate-12 group-hover:rotate-6 transition-transform duration-700"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <RiMailSendLine size={24} className="text-zinc-400" />
              <h3 className="text-lg text-white font-black uppercase tracking-widest">
                Direct Signal
              </h3>
            </div>
            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              For professional inquiries, security reports, or partnership
              technicals regarding Linux Games Alt.
            </p>
            <p className="text-white text-sm italic">
              Email relay temporarily offline
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <RiHashtag size={24} className="text-zinc-400" />
              <h3 className="text-lg text-white font-black uppercase tracking-widest">
                Social Feed
              </h3>
            </div>
            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              Follow our deployment logs and update history on our social nodes.
            </p>
            <div className="flex gap-4">
              <Link
                href={x}
                className="text-xs font-bold text-zinc-300 hover:text-white cursor-pointer transition-colors"
              >
                Twitter/X
              </Link>
              <Link
                href={github}
                className="text-xs font-bold text-zinc-300 hover:text-white cursor-pointer transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
