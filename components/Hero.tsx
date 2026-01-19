
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full text-blue-700 text-sm font-medium mb-6 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          新一代企业级短信引擎已上线
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.15] mb-8">
          毫秒级触达，<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">链接全球 200+ 国家</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          CloudSMS Pro 提供稳定、安全、高效的云短信发送服务。无论是验证码、通知还是营销短信，
          我们都能为您提供 99.9% 的交付率保障。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            立即接入
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-blue-400 hover:text-blue-600 transition-all"
          >
            查看文档
          </button>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-900">
             <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
               <span className="ml-4 text-xs text-slate-400 font-mono">CloudSMS-Console v2.4.0</span>
             </div>
             <div className="p-8 aspect-video bg-slate-900 flex items-center justify-center">
                <div className="w-full max-w-2xl text-left font-mono text-sm text-blue-300">
                   <p className="mb-2"><span className="text-purple-400">$</span> npm install @cloudsms/sdk</p>
                   <p className="mb-2 text-slate-500">// 发送一条验证码短信</p>
                   <p className="mb-2">
                    <span className="text-pink-400">const</span> client = <span className="text-yellow-300">new</span> SMSClient({"{"} apiKey: <span className="text-green-400">'YOUR_API_KEY'</span> {"}"});
                   </p>
                   <p className="mb-2"><span className="text-pink-400">await</span> client.send({"{"}</p>
                   <p className="pl-4">to: <span className="text-green-400">'+8613800138000'</span>,</p>
                   <p className="pl-4">templateId: <span className="text-green-400">'OTP_123'</span>,</p>
                   <p className="pl-4">params: {"{"} code: <span className="text-green-400">'888888'</span> {"}"}</p>
                   <p>{"}"});</p>
                   <p className="mt-4 text-slate-400 animate-pulse">_</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
