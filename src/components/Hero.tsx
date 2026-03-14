"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#FBFAF9]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px] animate-pulse-slow font-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.015]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Marketing 360 & Elite Traffic
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 [text-shadow:_0_1px_10px_rgba(0,0,0,0.02)]">
              Engenharia de <br />
              <span className="text-gradient hover:scale-105 transition-transform cursor-default inline-block">Predictive ROI.</span>
            </h1>
          
          <p className="text-xl md:text-2xl text-black/70 mb-10 max-w-xl leading-relaxed">
            Estratégias avançadas de <strong>Growth & Marketing 360</strong> utilizando IA Causal para empresas que buscam escala com previsibilidade matemática.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-primary md:text-lg">
              Agendar Consultoria <ArrowRight size={22} strokeWidth={3} />
            </button>
            <button className="btn-secondary">
              <Play size={22} className="fill-current text-primary" /> Ver Resultados
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 py-4 px-6 glass rounded-2xl w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-black/5 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-black">+100 empresas</p>
              <p className="text-black/40 text-xs">atendidas com sucesso</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Visual Container */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
            {/* Ultra-Premium Team Success Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-black/5 z-10 shadow-2xl"
            >
              <img 
                src="/images/hero_elite.png"
                alt="Elite Growth Team Celebration - KJS Consultoria" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
            </motion.div>

            {/* Floating Stats Overlaying the Photo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-5 rounded-2xl z-20 shadow-2xl backdrop-blur-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shadow-inner">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-black/40 uppercase font-black tracking-tighter">Growth Rate</p>
                  <p className="text-xl font-display font-bold">+312%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl z-20 shadow-2xl backdrop-blur-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary shadow-inner">
                  <TrendingUp size={24} className="rotate-90" />
                </div>
                <div>
                  <p className="text-[10px] text-black/40 uppercase font-black tracking-tighter">Elite Traffic</p>
                  <p className="text-xl font-display font-bold">R$ 5M+</p>
                </div>
              </div>
            </motion.div>

            {/* Background Glows for the photo */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
