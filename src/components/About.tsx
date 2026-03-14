"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                alt="Kamillo Santos em ação" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            
            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl backdrop-blur-2xl max-w-[240px]">
              <p className="text-4xl font-display font-bold text-gradient">10+ Anos</p>
              <p className="text-base text-white/70 font-bold mt-1">de experiência no mercado digital</p>
            </div>

            {/* Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold text-base uppercase tracking-[0.3em] mb-4">O Especialista</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Liderando o Futuro da <span className="text-gradient">Performance Digital</span>
            </h2>
            
            <div className="space-y-8 text-white/70 leading-relaxed mb-12 text-xl">
              <p>
                Kamillo Santos é especialista em <strong>Growth & Elite Traffic</strong>, focado em escalar empresas através da <strong>KJS Consultoria</strong> utilizando nossa metodologia exclusiva de <strong>Predictive ROI</strong> e <strong>Marketing 360</strong>.
              </p>
              <p>
                Com passagens por grandes agências e atuação direta em mais de 200 campanhas, Kamillo desenvolveu o <strong>KJS Proprietary System</strong>, que une <strong>Causal Artificial Intelligence</strong> com fusões tecnológicas de alta performance (Merges).
              </p>
              <p>
                Na <strong>KJS Consultoria</strong>, seu objetivo é transformar o marketing em uma ciência exata de crescimento, eliminando incertezas através de algoritmos preditivos e estratégias de elite.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
