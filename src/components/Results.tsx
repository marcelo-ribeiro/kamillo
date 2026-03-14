"use client";

import { motion } from "framer-motion";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from "recharts";

const data = [
  { month: "Jan", sales: 4000, leads: 2400 },
  { month: "Fev", sales: 3000, leads: 1398 },
  { month: "Mar", sales: 2000, leads: 9800 },
  { month: "Abr", sales: 2780, leads: 3908 },
  { month: "Mai", sales: 1890, leads: 4800 },
  { month: "Jun", sales: 2390, leads: 3800 },
  { month: "Jul", sales: 3490, leads: 4300 },
  { month: "Ago", sales: 5000, leads: 6000 },
  { month: "Set", sales: 7000, leads: 8500 },
];

export function Results() {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Performance & <span className="text-gradient">Dados</span>
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto text-xl leading-relaxed">
            Não acreditamos em palpites. Acreditamos em dados reais, crescimento constante e escala previsível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart 1: Sales Growth */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold">Crescimento de Vendas</h3>
                <p className="text-black/50 text-base mt-1">Escala em 9 meses de consultoria</p>
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                +312% ROI
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#3B82F6" 
                    fillOpacity={1} 
                    fill="url(#colorSales)" 
                    strokeWidth={4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Chart 2: Lead Gen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold">Volume de Leads</h3>
                <p className="text-black/50 text-base mt-1">Geração de leads qualificados</p>
              </div>
              <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                -45% CAC
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="#7C3AED" 
                    strokeWidth={4} 
                    dot={{ fill: "#7C3AED", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "CAC Reduzido", value: "45%" },
            { label: "Aumento ROI", value: "312%" },
            { label: "Taxa Conv.", value: "18%" },
            { label: "LTV Growth", value: "85%" },
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-2xl text-center">
              <p className="text-black/50 text-sm uppercase font-bold tracking-widest mb-2">{item.label}</p>
              <p className="text-4xl font-display font-bold text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
