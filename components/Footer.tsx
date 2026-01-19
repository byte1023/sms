
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <span className="text-xl font-bold text-white">CloudSMS Pro</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              领先的企业级云通讯服务商，通过全连接的 API 为开发者和商业机构提供极速、稳定、安全的全球短信触达方案。
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" className="hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">产品服务</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">验证码短信</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">通知短信</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">国际短信</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">语音验证</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">营销短信</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">开发者资源</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">开发文档</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SDK 下载</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API 参考</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">服务状态</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">错误码查询</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">关于我们</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">加入我们</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">合作伙伴</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">法律声明</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">联系销售</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 CloudSMS Pro. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务协议</a>
            <a href="#" className="hover:text-white transition-colors">反垃圾协议</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
