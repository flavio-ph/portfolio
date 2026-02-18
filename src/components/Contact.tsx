
import React from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#0f0f12]/50 theme-transition">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-pink-500">Contato</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Vamos Conversar?</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-lg pt-4">
                        Estou sempre aberto a novas oportunidades e parcerias. Entre em contato para discutirmos seu próximo projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Email Card */}
                    <div className="p-8 bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl flex flex-col items-center text-center space-y-6 hover:border-pink-500/30 transition-colors group">
                        <div className="p-4 bg-pink-500/10 rounded-full text-pink-500 group-hover:scale-110 transition-transform duration-300">
                            <Mail size={32} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold">Email</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Tem alguma dúvida ou proposta?</p>
                        </div>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=flaviophalmeida@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                        >
                            Enviar Email
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-center md:text-left pl-2">Redes Sociais</h4>
                        <div className="grid gap-4">
                            <a
                                href="https://www.linkedin.com/in/fl%C3%A1vio-almeida-804827361/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg group-hover:scale-110 transition-transform">
                                        <Linkedin size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-slate-200">Linkedin</span>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                            </a>

                            <a
                                href="https://github.com/flavio-ph"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-slate-500/10 text-slate-500 rounded-lg group-hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-slate-200">Github</span>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-500 transition-colors" />
                            </a>

                            <a
                                href="https://www.instagram.com/flaviobzp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/10 rounded-2xl hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-pink-500/10 text-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                                        <Instagram size={20} />
                                    </div>
                                    <span className="font-semibold text-slate-700 dark:text-slate-200">Instagram</span>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-pink-500 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
