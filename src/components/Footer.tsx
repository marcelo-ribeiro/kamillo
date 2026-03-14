import Link from "next/link";
import { Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                <img 
                  src="/brand/logo.png" 
                  alt="KJS Logo" 
                  className="h-8 md:h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
              <div className="flex flex-col border-l border-black/10 pl-3">
                <img 
                  src="/brand/logotype.png" 
                  alt="KJS Consultoria" 
                  className="h-5 md:h-6 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 invert"
                />
              </div>
            </Link>
            <p className="text-black/40 text-sm max-w-sm mb-6 leading-relaxed">
              Consultoria especializada em marketing digital e gestão de tráfego de alta performance. Focada em transformar dados em lucro real para o seu negócio.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-black/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-black/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-black/40 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#hero" className="text-black/40 hover:text-black transition-colors">Home</Link></li>
              <li><Link href="#servicos" className="text-black/40 hover:text-black transition-colors">Serviços</Link></li>
              <li><Link href="#resultados" className="text-black/40 hover:text-black transition-colors">Resultados</Link></li>
              <li><Link href="#sobre" className="text-black/40 hover:text-black transition-colors">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-black/40">
                <Mail size={16} className="text-primary" />
                contato@kamillosantos.com.br
              </li>
              <li className="flex items-center gap-3 text-black/40">
                <Phone size={16} className="text-primary" />
                +55 (11) 99999-9999
              </li>
              <li className="text-black/40">
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-black/20 uppercase font-bold tracking-widest">
          <p>© 2024 KJS Consultoria - Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-black transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
