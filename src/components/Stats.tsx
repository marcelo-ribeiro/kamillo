"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const platformLogos = [
  { 
    name: "Google Ads", 
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
    className: "brightness-0 invert opacity-60 hover:opacity-100" 
  },
  { 
    name: "Meta Ads", 
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    className: "brightness-0 invert opacity-60 hover:opacity-100" 
  },
  { 
    name: "TikTok Ads", 
    url: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    className: "brightness-0 invert opacity-60 hover:opacity-100" 
  },
  { 
    name: "Shopify", 
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    className: "brightness-0 invert opacity-60 hover:opacity-100" 
  },
  { 
    name: "WordPress", 
    url: "https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg",
    className: "brightness-0 invert opacity-60 hover:opacity-100" 
  },
];

const stats = [
  { label: "Investidos em Tráfego", value: "+R$ 5M", sub: "Gerenciados com foco em ROI" },
  { label: "Campanhas Ativas", value: "+200", sub: "Estratégias multicanal" },
  { label: "ROI Médio", value: "+300%", sub: "Retorno sobre investimento" },
  { label: "Empresas Atendidas", value: "+100", sub: "Em diversos nichos" },
];

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Brand Icon Watermark / Símbolo K para Exclusividade */}
      <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none select-none">
        <img 
          src="/brand/logo.png" 
          alt="" 
          className="w-[600px] h-auto object-contain grayscale brightness-200"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Logos Bar */}
        <div className="mb-20">
          <p className="text-center text-white/30 text-xs uppercase tracking-[0.3em] font-bold mb-10">Parceiros e Plataformas</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {platformLogos.map((logo) => (
              <img 
                key={logo.name} 
                src={logo.url} 
                alt={logo.name} 
                className={cn(
                  "h-6 md:h-8 w-auto object-contain transition-all duration-500 hover:scale-110",
                  logo.className
                )}
                title={logo.name}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">{stat.label}</p>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{stat.sub}</p>
              
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
