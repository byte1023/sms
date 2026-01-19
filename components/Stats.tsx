
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: '累计发送', value: '100亿+', sub: '条/年' },
    { label: '平均延迟', value: '3-5', sub: '秒' },
    { label: '服务可用性', value: '99.99', sub: '%' },
    { label: '直连通道', value: '500+', sub: '家' },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {s.value}
                <span className="text-blue-500 text-lg ml-1 font-normal">{s.sub}</span>
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
