
import React from 'react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'APP 注册与身份验证',
      desc: '用户注册、密码找回、支付确认。验证码采用专用直连通道，确保 100% 成功率。',
      img: 'https://picsum.photos/seed/mobile/800/600'
    },
    {
      title: '物流与服务通知',
      desc: '快递投递、预约成功提醒、账户异动通知。支持变量模板，个性化信息一键触达。',
      img: 'https://picsum.photos/seed/logistics/800/600'
    },
    {
      title: '全球品牌营销',
      desc: '节日大促、新品上市、会员关怀。支持全球 200+ 国家和地区，覆盖主流语言。',
      img: 'https://picsum.photos/seed/marketing/800/600'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">赋能千行百业的沟通</h2>
            <p className="text-slate-600">
              各行各业都在使用 CloudSMS Pro 来优化他们的客户触达效率。
            </p>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
            查看更多行业方案
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg">{c.title}</div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
