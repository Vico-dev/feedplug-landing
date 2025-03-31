import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import logo from "./assets/feedplug-logo.png";



export default function App() {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://hook.eu1.make.com/k6bdi6xsprwy18vpehjhy7n8cb8n6jl3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Erreur lors de l’envoi vers Make :", err);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5FDF2] text-[#0D352D] px-6 py-16 font-sans overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-[#E1EE2C] via-lime-300 to-[#0D352D] opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-[#0D352D] via-lime-400 to-[#E1EE2C] opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

      <div className="relative z-10">
        {/* Header */}
        <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-2 md:px-0">
          <img src={logo} alt="FeedPlug logo" className="h-10" />
        </header>

        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1 text-sm bg-[#E1EE2C] text-[#0D352D] rounded-full font-medium">
            🚀 Bêta privée ouverte
          </div>
          <h1 className="text-5xl font-extrabold leading-tight text-[#0D352D]">
            Boostez vos ventes multi-canal avec l’IA
          </h1>
          <p className="text-xl text-[#0D352D] max-w-2xl mx-auto">
            FeedPlug centralise, enrichit et optimise vos flux produits pour Google, Meta, Amazon, et plus encore. Sans friction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-6 text-4xl text-[#0D352D]">
            <Icon icon="simple-icons:google" />
            <Icon icon="simple-icons:meta" />
            <Icon icon="simple-icons:amazon" />
            <Icon icon="simple-icons:tiktok" />
            <Icon icon="simple-icons:cdiscount" />
          </div>

          <a href="#form" className="inline-block mt-8 bg-[#E1EE2C] hover:bg-[#DDE829] text-[#0D352D] px-6 py-3 text-lg rounded-2xl shadow-xl transition-all duration-300">
            Je m'inscris à la bêta
          </a>
        </section>

        {/* Form */}
        <section id="form" className="max-w-2xl mx-auto mt-20">
          <form
            onSubmit={handleSubmit}
            className="shadow-2xl border-0 bg-white/70 backdrop-blur-xl p-8 space-y-6 rounded-xl animate-fade-in"
          >
            <h3 className="text-2xl font-bold text-center">Rejoignez la bêta privée</h3>
            <p className="text-center">
              Réservé aux e-commerçants motivés à scaler leur acquisition produits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border border-gray-300 rounded-md p-2" name="email" onChange={handleChange} placeholder="Email professionnel" required />
              <input className="border border-gray-300 rounded-md p-2" name="url" onChange={handleChange} placeholder="URL de votre boutique" required />
              <input className="border border-gray-300 rounded-md p-2" name="cms" onChange={handleChange} placeholder="CMS utilisé" required />
              <input className="border border-gray-300 rounded-md p-2" name="platforms" onChange={handleChange} placeholder="Plateformes cibles" />
              <input className="border border-gray-300 rounded-md p-2" name="products" onChange={handleChange} placeholder="Nombre de produits" />
              <input className="border border-gray-300 rounded-md p-2" name="goal" onChange={handleChange} placeholder="Objectif principal" />
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="bg-[#E1EE2C] hover:bg-[#DDE829] text-[#0D352D] px-6 py-2 rounded-xl shadow-md transition-all">
                Je veux tester FeedPlug
              </button>
            </div>
            {submitted && (
              <div className="text-green-600 text-sm font-medium text-center pt-4 animate-pulse">
                ✅ Merci ! Votre demande a bien été envoyée.
              </div>
            )}
            <div className="text-center text-sm text-[#0D352D] pt-2">
              💡 À partir de <strong>99€ / mois HT à vie</strong>. Offre spéciale bêta sans engagement.
            </div>
          </form>
        </section>

        {/* Storytelling Section */}
        <motion.section
          className="max-w-6xl mx-auto mt-32 text-center px-4 md:px-0 py-32 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <motion.h2 className="text-4xl font-extrabold mb-6 text-[#0D352D]">Votre équipe marketing mérite mieux qu’un tableur</motion.h2>
            <motion.p className="text-xl text-[#0D352D] max-w-3xl mx-auto mb-12">
              Chaque jour, des responsables e-commerce perdent des heures à gérer des flux produits manuellement, à jongler entre Google Merchant, Meta, Amazon et des dizaines de formats différents.
              <br /><br />
              Avec <span className="text-[#E1EE2C] font-semibold">FeedPlug</span>, vous automatisez, enrichissez et optimisez vos données produits grâce à l’intelligence artificielle.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-[#0D352D]">
              <motion.div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">🧠 IA éditoriale embarquée</h3>
                <p>Des titres réécrits automatiquement selon la plateforme, des descriptions orientées conversion, en respectant votre ton de marque.</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">🎯 Scoring commercial</h3>
                <p>Identifiez les produits à fort potentiel, suivez leur performance sur chaque canal et ajustez votre stratégie en temps réel.</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">🔁 Connecteurs et exports</h3>
                <p>Intégration rapide à votre CMS (Shopify, Magento, Prestashop, etc.) et export direct vers vos canaux de vente.</p>
              </motion.div>
            </div>

            <motion.div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#0D352D]">
                Prêt à propulser vos produits là où ils performent ?
              </h3>
              <a
                href="#form"
                className="inline-block bg-[#E1EE2C] hover:bg-[#DDE829] text-[#0D352D] px-8 py-3 rounded-xl text-lg shadow-lg transition-all duration-300"
              >
                Rejoindre la bêta maintenant
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-24 text-center text-sm text-[#0D352D]">
          © {new Date().getFullYear()} FeedPlug — Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}
