
import React from 'react';

const DevSection: React.FC = () => {
  return (
    <section id="dev" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-blue-500 fill-current">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-bold uppercase tracking-widest mb-4">
            Developer First
          </div>
          <h2 className="text-4xl font-bold mb-6">为开发者量身打造</h2>
          <p className="text-slate-400 text-lg mb-8">
            我们的 API 设计遵循 RESTful 规范，提供完善的 SDK (Node.js, Go, Java, Python, PHP)。
            只需几行代码，即可集成强大的全球消息能力。
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              'RESTful API 响应，平均延迟 < 100ms',
              '完善的 Webhook 机制，实时同步发送状态',
              '智能模板审核机制，24/7 在线响应',
              '多密钥管理，保障企业账户安全'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">快速开始</button>
            <button className="text-slate-400 hover:text-white transition-all font-medium">查看 API 规范 →</button>
          </div>
        </div>

        <div className="relative">
           <div className="bg-slate-800 rounded-xl p-6 shadow-2xl border border-slate-700 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex gap-4 mb-6 border-b border-slate-700 pb-2">
                 <span className="text-blue-400 border-b-2 border-blue-400 pb-2 cursor-pointer">CURL</span>
                 <span className="text-slate-500 cursor-pointer hover:text-slate-300">Python</span>
                 <span className="text-slate-500 cursor-pointer hover:text-slate-300">Node.js</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-pink-400">curl</span> -X POST <span className="text-green-400">"https://api.cloudsms.pro/v1/send"</span> \</p>
                <p className="pl-4">-H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \</p>
                <p className="pl-4">-H <span className="text-green-400">"Content-Type: application/json"</span> \</p>
                <p className="pl-4">-d <span className="text-pink-400">{"'{"}</span></p>
                <p className="pl-8"><span className="text-yellow-300">"mobile"</span>: <span className="text-green-400">"+8613800138000"</span>,</p>
                <p className="pl-8"><span className="text-yellow-300">"signName"</span>: <span className="text-green-400">"CloudSMS"</span>,</p>
                <p className="pl-8"><span className="text-yellow-300">"templateCode"</span>: <span className="text-green-400">"SMS_001"</span>,</p>
                <p className="pl-8"><span className="text-yellow-300">"params"</span>: <span className="text-pink-400">{"{"} "code": "123456" {"}"}</span></p>
                <p className="pl-4"><span className="text-pink-400">{"'}'"}</span></p>
              </div>
           </div>
           
           <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg p-4 shadow-xl animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
           </div>
        </div>
      </div>
    </section>
  );
};

export default DevSection;
