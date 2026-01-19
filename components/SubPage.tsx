
import React from 'react';
import { PageType } from '../App';

interface SubPageProps {
  type: PageType;
  onBack: () => void;
}

const SubPage: React.FC<SubPageProps> = ({ type, onBack }) => {
  const renderContent = () => {
    switch (type) {
      case 'docs':
        return (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-extrabold mb-8 text-slate-900">快速开始指南</h1>
            <div className="prose prose-slate max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">1. 获取 API Key</h2>
                <p className="text-slate-600 mb-4">登录控制台后，在“设置”页面中点击“创建 Key”按钮。请妥善保存该 Key，它将用于所有的接口鉴权。</p>
                <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm text-blue-700">
                  X-SMS-AUTH-KEY: your_api_key_here
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">2. 发送第一条短信</h2>
                <p className="text-slate-600 mb-4">使用标准 HTTP POST 请求即可完成发送。支持 JSON 格式传参。</p>
                <div className="bg-slate-900 text-blue-300 p-6 rounded-xl font-mono text-sm">
                  <p>POST /v1/messages/send</p>
                  <p>Content-Type: application/json</p>
                  <p>{"{"}</p>
                  <p className="pl-4">"to": "+8613800138000",</p>
                  <p className="pl-4">"template": "SMS_WELCOME",</p>
                  <p className="pl-4">"params": {"{ \"user\": \"Developer\" }"}</p>
                  <p>{"}"}</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">3. 处理回执</h2>
                <p className="text-slate-600 mb-4">您可以配置 Webhook 地址，我们会将短信的实时投递状态推送给您的服务器。</p>
              </section>
            </div>
          </div>
        );
      case 'api':
        return (
          <div className="max-w-5xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-extrabold mb-4 text-slate-900">API 参考手册</h1>
            <p className="text-slate-500 mb-12 italic text-lg font-light leading-relaxed">基于 RESTful 架构设计的企业级通信接口</p>
            
            <div className="space-y-12">
              <div className="border-b border-slate-200 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold">POST</span>
                  <code className="text-lg font-bold text-slate-800">/v1/send</code>
                </div>
                <p className="text-slate-600 mb-6">发送单条或批量短信。支持模板变量替换。</p>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200">
                      <th className="p-3 font-bold">参数名</th>
                      <th className="p-3 font-bold">类型</th>
                      <th className="p-3 font-bold">描述</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="p-3 font-mono">to</td><td className="p-3 text-slate-500">String</td><td className="p-3">目标手机号，需包含国家码（如 +86）</td></tr>
                    <tr><td className="p-3 font-mono">template_code</td><td className="p-3 text-slate-500">String</td><td className="p-3">审核通过的模板 ID</td></tr>
                    <tr><td className="p-3 font-mono">sign_name</td><td className="p-3 text-slate-500">String</td><td className="p-3">审核通过的短信签名</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'legal':
        return (
          <div className="max-w-3xl mx-auto py-20 px-6 prose">
            <h1>法律声明</h1>
            <p>欢迎访问 CloudSMS Pro。本页面包含规范您使用我们服务的法律条款。通过访问或使用本服务，即表示您同意接受这些条款的约束。</p>
            <h3>1. 服务使用</h3>
            <p>您不得将我们的服务用于任何非法目的，包括但不限于发送骚扰信息、垃圾短信或进行诈骗活动。一经发现，我们将立即冻结账户并报备相关部门。</p>
            <h3>2. 责任限制</h3>
            <p>在法律允许的最大范围内，CloudSMS Pro 不对因使用或无法使用服务而导致的任何间接、偶然或惩罚性损害负责。</p>
          </div>
        );
      case 'privacy':
        return (
          <div className="max-w-3xl mx-auto py-20 px-6 prose">
            <h1>隐私政策</h1>
            <p>我们非常重视您的隐私。本政策描述了我们在您使用服务时如何收集、使用和保护您的信息。</p>
            <h3>信息收集</h3>
            <p>我们会收集您的账户信息（如邮箱）、日志信息（如 IP 地址）以及您发送的短信记录。这些信息仅用于提供服务及提升系统稳定性。</p>
            <h3>数据安全</h3>
            <p>我们采用行业领先的加密技术（AES-256）存储您的敏感信息，并定期进行安全审计。</p>
          </div>
        );
      case 'company':
        return (
          <div className="max-w-5xl mx-auto py-12 px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold mb-4">关于 CloudSMS Pro</h1>
              <p className="text-slate-600">成立于 2018 年，致力于构建全球最稳健的通信基础设施。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" className="rounded-2xl shadow-xl" alt="Office" />
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">我们的使命</h2>
                <p className="text-slate-600 leading-relaxed">通过极简的 API 赋能全球开发者，让商业沟通无处不在。我们相信技术的力量可以打破地域限制，实现真正的即时连接。</p>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl flex-1 text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-xs text-slate-500">员工规模</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl flex-1 text-center">
                    <div className="text-2xl font-bold text-blue-600">15000+</div>
                    <div className="text-xs text-slate-500">企业客户</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="sticky top-20 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            返回首页
          </button>
          <div className="text-sm text-slate-400 font-mono uppercase tracking-widest">{type} PAGE</div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default SubPage;
