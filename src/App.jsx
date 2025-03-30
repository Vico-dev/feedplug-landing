import React from "react";
import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 px-6 py-16 font-sans overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-600 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />

      <div className="relative z-10">
        {/* Header */}
        <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-2 md:px-0">
          <div className="text-2xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            FeedPlug
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1 text-sm bg-violet-100 text-violet-800 rounded-full font-medium">
            🚀 Bêta privée ouverte
          </div>
          <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Boostez vos ventes multi-canal avec l’IA
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            FeedPlug centralise, enrichit et optimise vos flux produits pour Google, Meta, Amazon, et plus encore. Sans friction.
          </p>

          {/* Logos en pictos vectoriels */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6 text-4xl text-gray-600">
            <Icon icon="simple-icons:google" title="Google Merchant" />
            <Icon icon="simple-icons:meta" title="Meta" />
            <Icon icon="simple-icons:amazon" title="Amazon" />
            <Icon icon="simple-icons:tiktok" title="TikTok" />
            <Icon icon="simple-icons:cdiscount" title="Cdiscount" />
          </div>

          <a href="#form" className="inline-block mt-8 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg rounded-2xl shadow-xl transition-all duration-300">
            Je m'inscris à la bêta
          </a>
        </section>

        {/* Form */}
        <section id="form" className="max-w-2xl mx-auto mt-20">
          <div className="shadow-2xl border-0 bg-white/70 backdrop-blur-xl p-8 space-y-6 rounded-xl animate-fade-in">
            <h3 className="text-2xl font-bold text-center">Rejoignez la bêta privée</h3>
            <p className="text-center text-gray-600">
              Réservé aux e-commerçants motivés à scaler leur acquisition produits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border border-gray-300 rounded-md p-2" placeholder="Email professionnel" />
              <input className="border border-gray-300 rounded-md p-2" placeholder="URL de votre boutique" />
              <input className="border border-gray-300 rounded-md p-2" placeholder="CMS utilisé (Shopify, etc.)" />
              <input className="border border-gray-300 rounded-md p-2" placeholder="Plateformes cibles (Google, Amazon…)" />
              <input className="border border-gray-300 rounded-md p-2" placeholder="Nombre de produits" />
              <input className="border border-gray-300 rounded-md p-2" placeholder="Objectif principal" />
            </div>
            <div className="text-center pt-4">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl shadow-md transition-all">
                Je veux tester FeedPlug
              </button>
            </div>
            <div className="text-center text-sm text-gray-500 pt-2">
              💡 À partir de <strong>99€ / mois HT à vie</strong>. Offre spéciale bêta sans engagement.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
