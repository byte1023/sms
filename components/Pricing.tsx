
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: '体验版',
      price: '￥0',
      desc: '适合个人开发者测试与小型项目启动',
      features: ['50 条免费短信', '共享测试签名', '基础 API 访问', '社区支持'],
      cta: '立即领取',
      popular: false
    },
    {
      name: '标准版',
      price: '￥0.038',
      unit: '/ 条起',
      desc: '适合中小企业正式环境，稳定可靠',
      features: ['自定义签名/模板', '独享 VIP 路由', '控制台实时统计', '工作日技术支持', 'Webhook 状态回调'],
      cta: '立即开启',
      popular: true
    },
    {
      name: '企业版',
      price: '定制',
      desc: '专为大规模发送、高并发需求设计',
      features: ['专属大客户通道', 'SLA 服务保障', '1对1专属客户经理', 'API 频率无限制', '多账号组织管理'],
      cta: '联系销售',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">简单透明的阶梯定价</h2>
          <p className="text-slate-600">无月费，按需付费，量大更优。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border transition-all duration-300 ${p.popular ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 hover:border-blue-300 bg-slate-50'}`}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  最受欢迎
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{p.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                {p.unit && <span className="text-slate-500 ml-1">{p.unit}</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-500 hover:text-blue-600'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
