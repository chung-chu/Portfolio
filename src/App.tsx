import { motion, AnimatePresence } from "motion/react";
import { type ReactNode } from "react";
import { 
  Briefcase, 
  User, 
  Cpu, 
  Award, 
  Heart, 
  FolderKanban, 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Zap,
  Globe,
  Terminal,
  MousePointer2
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const navItems = [
    { name: 'Khởi đầu', id: 'home' },
    { name: 'Hồ sơ', id: 'about' },
    { name: 'Năng lực', id: 'skills' },
    { name: 'Hành trình', id: 'experience' },
    { name: 'Dự án', id: 'projects' },
    { name: 'Kết nối', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-brand-background text-slate-300 font-sans tech-grid selection:bg-brand-accent selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass-dark px-8 py-4 rounded-full flex items-center justify-between border border-white/10 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase hidden sm:block">Chung Chu.sys</span>
          </motion.div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-accent transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center section-padding relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent">
              <Terminal size={14} />
              <span className="font-mono text-[10px] uppercase tracking-widest">System_Status: Stable</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight">
                Phạm Thanh Chung<span className="text-brand-accent">.</span>
              </h1>
              <p className="text-xl md:text-2xl font-mono text-brand-accent glow-text">
                IT Helpdesk • System & Network Enthusiast
              </p>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 font-light leading-relaxed font-serif italic max-w-xl">
              “Đam mê xây dựng hệ thống ổn định, giải quyết các sự cố kỹ thuật và không ngừng học hỏi những công nghệ hiện đại.”
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-brand-accent text-brand-primary rounded-xl overflow-hidden relative group font-bold uppercase tracking-widest text-[10px] transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={14} /> Tải CV ngay
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 glass-dark rounded-xl font-bold uppercase tracking-widest text-[10px] hover:border-brand-accent/50 transition-all"
              >
                Liên hệ ngay
              </button>

              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
              >
                Xem dự án
              </button>
            </motion.div>

            {/* Quick Info */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <Globe size={14} className="text-brand-accent" />
                <span>Đồng Nai, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <Mail size={14} className="text-brand-accent" />
                <span>zzchungzz123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <Phone size={14} className="text-brand-accent" />
                <span>0354 239 534</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Portrait Frame */}
            <div className="relative z-10 p-4 glass rounded-[40px] rotate-3 hover:rotate-0 transition-all duration-700">
              <div className="aspect-[4/5] bg-slate-800 rounded-[30px] overflow-hidden relative">
                <img 
                  src="/chungchu.jpg" 
                  alt="Phạm Thanh Chung Portrait" 
                  className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent opacity-60" />
              </div>
              
              {/* Glass Metadata Tags */}
              <div className="absolute -top-6 -right-6 glass px-6 py-4 rounded-2xl shadow-xl">
                <div className="font-mono text-[10px] text-brand-accent mb-1 tracking-tighter">NODE_NAME</div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">IT_HELPDESK</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl shadow-xl">
                <div className="font-mono text-[10px] text-brand-accent mb-1 tracking-tighter">SYST_UTIME</div>
                <div className="text-2xl font-serif font-bold text-white">24/7</div>
              </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-brand-accent/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding bg-black/20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">SYSTEM.PROFILE</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">About Me</h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
              <p>
                Tôi là sinh viên ngành Công Nghệ Thông Tin với định hướng phát triển trong lĩnh vực IT Helpdesk, Quản trị hệ thống và Hạ tầng mạng doanh nghiệp.
              </p>
              <p className="border-l-2 border-brand-accent pl-8 italic">
                “Tôi có kinh nghiệm hỗ trợ kỹ thuật, xử lý sự cố phần cứng – phần mềm, triển khai website WordPress, cấu hình hệ thống mạng và quản trị máy chủ ảo hóa VMware ESXi.”
              </p>
              <p>
                Ngoài kỹ năng kỹ thuật, tôi cũng có khả năng thiết kế UI/UX, đồ họa và tư duy sáng tạo trong quá trình xây dựng sản phẩm số. Mục tiêu của tôi là trở thành System Engineer hoặc IT Administrator chuyên sâu về hạ tầng hệ thống, cloud và bảo mật mạng.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { label: 'Uptime', value: 'Servers Online', count: '100%' },
                { label: 'Success', value: 'Projects Completed', count: '15+' },
                { label: 'Valid', value: 'Certificates', count: '12' },
                { label: 'Runtime', value: 'Experience', count: '2y+' }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl group hover:bg-brand-accent/10 transition-all">
                  <div className="font-mono text-[10px] text-brand-accent uppercase tracking-widest mb-1 group-hover:glow-text">{item.count}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="p-8 glass rounded-[40px] space-y-8">
              <div className="flex items-center justify-between">
                <Terminal className="text-brand-accent" size={32} />
                <div className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest border border-brand-accent/20">
                  Whoami
                </div>
              </div>
              <div className="font-mono text-sm space-y-2 text-slate-300">
                <p className="text-brand-accent opacity-50">&gt; whoami</p>
                <p>Pham Thanh Chung</p>
                <p className="text-brand-accent opacity-50">&gt; role</p>
                <p>IT Helpdesk | System & Network Enthusiast</p>
                <p className="text-brand-accent opacity-50">&gt; passion</p>
                <p>Building stable systems & Infrastructure</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">System Maintenance</span>
                  <span className="text-[10px] font-mono text-brand-accent">99.9%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent w-[99.9%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">MODULE.TECH_STACK</div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-[32px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">System & Network</h3>
              </div>
              <div className="space-y-4">
                <SkillBar label="Windows Server" progress={90} />
                <SkillBar label="VMware" progress={85} />
                <SkillBar label="Networking" progress={80} />
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Active Directory', 'DNS/DHCP', 'Cisco Packet Tracer'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-mono border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">IT Support</h3>
              </div>
              <div className="space-y-4">
                <SkillBar label="Troubleshooting" progress={95} />
                <SkillBar label="Hardware Installation" progress={90} />
                <SkillBar label="System Maintenance" progress={85} />
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Software', 'Printer', 'Network Support'].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-mono border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Other Tech</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">Web Development</div>
                  <div className="space-y-4">
                    <SkillBar label="WordPress" progress={85} />
                    <div className="flex flex-wrap gap-2">
                      {['cPanel', 'HTML/CSS/JS'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">Design Tools</div>
                  <div className="flex flex-wrap gap-2">
                    {['Photoshop', 'Illustrator', 'Figma'].map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono border border-white/10 text-brand-accent">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-black/30">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-4">
            <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">LOG.EXPERIENCE</div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Work Experience</h2>
          </div>

          <div className="space-y-16">
            <ExperienceItem 
              title="IT Technician" 
              company="NIDTECH" 
              period="07/2025 — 09/2025" 
              responsibilities={[
                "Thiết kế website WordPress theo yêu cầu khách hàng",
                "Lắp ráp, cài đặt và xử lý sự cố máy tính",
                "Hỗ trợ triển khai hệ thống camera và mạng doanh nghiệp",
                "Kiểm tra và bảo trì thiết bị CNTT"
              ]}
            />
            <ExperienceItem 
              title="Designer / IT Helpdesk" 
              company="Green Nature" 
              period="02/2025 — 07/2025" 
              responsibilities={[
                "Thiết kế banner, social media content",
                "Chụp ảnh sản phẩm mỹ phẩm",
                "Quản lý và bảo trì website",
                "Hỗ trợ sửa chữa máy tính, máy in và thiết bị mạng"
              ]}
            />
            <ExperienceItem 
              title="Coach" 
              company="Goley Việt Nam" 
              period="10/2023 — Present" 
              responsibilities={[
                "Huấn luyện viên Patin nâng cao",
                "Hướng dẫn kỹ năng và đào tạo học viên"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">MODULE.PROJECTS</div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Featured Projects</h2>
            </div>
            <FolderKanban size={60} className="text-brand-accent opacity-20 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <ProjectCard 
              title="Enterprise Network & Cloud Infrastructure"
              role="Graduation Project — Team Leader"
              desc="Triển khai hạ tầng mạng và máy chủ doanh nghiệp trên nền tảng cloud, bao gồm quản lý máy ảo, storage, network và monitoring hệ thống."
              tech={['VMware ESXi', 'Windows Server', 'Network Infra', 'Cloud Deployment']}
            />
            <ProjectCard 
              title="Linux Replication Deployment"
              role="Personal Graduation Project"
              desc="Nghiên cứu và triển khai REPLICATION trên hệ điều hành Linux nhằm tối ưu khả năng đồng bộ dữ liệu và backup hệ thống."
              tech={['Linux', 'Replication', 'Database', 'Security']}
            />
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section-padding bg-black/20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">MODULE.CERTIFICATIONS</div>
              <h2 className="text-4xl font-serif font-bold text-white">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['MOS Excel 2019 Associate', 'MOS Word 2019 Associate', 'Chứng chỉ Ứng dụng CNTT cơ bản'].map((cert, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-brand-accent/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">MODULE.ACHIEVEMENTS</div>
              <h2 className="text-4xl font-serif font-bold text-white">Achievements & Awards</h2>
            </div>
            <div className="space-y-4">
              {[
                "🏆 Giải Nhất Cuộc Thi Data Analytics 2024",
                "🏆 Giải Nhất Cuộc Thi UI/UX & Web Design 2024",
                "🏆 Top 50 Sinh Viên Xuất Sắc Spring 2025",
                "🏆 Top 50 Sinh Viên Xuất Sắc Fall 2024",
                "🏆 Top 30 Sinh Viên Xuất Sắc Summer 2024"
              ].map((award, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all font-serif italic text-slate-300">
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">MODULE.STRENGTHS</div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Personal Strengths</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StrengthCard title="Problem Solving" desc="Khả năng xử lý sự cố và tìm giải pháp nhanh chóng." icon={<Zap />} />
            <StrengthCard title="Teamwork" desc="Làm việc nhóm hiệu quả trong môi trường kỹ thuật." icon={<User />} />
            <StrengthCard title="Continuous Learning" desc="Luôn cập nhật công nghệ mới và phát triển kỹ năng." icon={<Cpu />} />
            <StrengthCard title="Creativity" desc="Kết hợp tư duy kỹ thuật và thiết kế để tạo trải nghiệm tốt." icon={<Heart />} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-6xl mx-auto glass p-12 md:p-24 rounded-[60px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] -mr-40 -mt-40" />
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="font-mono text-brand-accent text-xs tracking-[0.4em] uppercase">CONNECT.GATEWAY</div>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">Let’s Connect</h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed italic border-l-2 border-brand-accent/30 pl-8">
                  Tôi luôn sẵn sàng học hỏi, hợp tác và tham gia các dự án liên quan đến Hạ tầng mạng, Quản trị hệ thống và Cloud Computing.
                </p>
              </div>
              
              <div className="space-y-8">
                <ContactLink icon={<Mail />} label="Secure Email" value="zzchungzz123@gmail.com" />
                <ContactLink icon={<Phone />} label="Direct Line" value="0354 239 534" />
                <ContactLink icon={<Globe />} label="Facebook" value="facebook.com/chunggchuu" />
              </div>
            </div>
            
            <div className="glass-dark p-10 rounded-[40px] border border-white/5 shadow-inner">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 ml-2">Digital_Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-accent/50 transition-all font-light" placeholder="Tên của bạn..." />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 ml-2">Digital_Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-accent/50 transition-all font-light" placeholder="Email liên hệ..." />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500 ml-2">Message_Payload</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-accent/50 transition-all font-light resize-none" placeholder="Nội dung thảo luận..." />
                  </div>
                </div>
                
                <button className="w-full py-5 bg-brand-accent text-brand-primary rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group relative overflow-hidden shadow-2xl shadow-brand-accent/20">
                  <span className="relative z-10">Execute Connection</span>
                  <MousePointer2 size={16} className="relative z-10 animate-bounce" />
                  <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding pt-0">
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold text-white tracking-widest uppercase">PHẠM THANH CHUNG<span className="text-brand-accent">.SYS</span></div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Digital Infrastructure Portfolio // 2026</p>
          </div>
          
          <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            <a href="#" className="hover:text-brand-accent transition-all">Systems</a>
            <a href="#" className="hover:text-brand-accent transition-all">Networks</a>
            <a href="#" className="hover:text-brand-accent transition-all">Cloud</a>
          </div>
          
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            Uptime: 99.99% // Built with <Zap size={10} className="inline text-brand-accent mb-1" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillHex({ title, icon, desc }: { title: string, icon: ReactNode, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 glass rounded-[32px] space-y-6 group cursor-default transition-all"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-500 font-light leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ExperienceItem({ title, company, period, responsibilities }: { title: string, company: string, period: string, responsibilities: string[] }) {
  return (
    <div className="relative pl-12 border-l border-white/10 group">
      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-150 transition-transform" />
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <h3 className="text-3xl font-serif font-bold text-white">{title}</h3>
          <span className="font-mono text-brand-accent text-sm bg-brand-accent/10 px-4 py-1 rounded-full border border-brand-accent/20 uppercase tracking-widest">
            {period}
          </span>
        </div>
        <div className="text-brand-accent text-lg font-serif italic mb-2">{company}</div>
        <div className="text-slate-400 space-y-3 text-lg font-light leading-relaxed">
          {responsibilities.map((r, i) => (
            <p key={i} className="flex items-start gap-4">
              <span className="text-brand-accent mt-1 tracking-tighter opacity-50 font-mono text-xs">{(i + 1).toString().padStart(2, '0')}</span>
              {r}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, role, desc, tech }: { title: string, role: string, desc: string, tech: string[] }) {
  return (
    <div className="glass p-10 rounded-[32px] group hover:border-brand-accent/30 transition-all space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <FolderKanban size={40} />
      </div>
      <div className="space-y-2">
        <div className="font-mono text-[10px] text-brand-accent tracking-widest uppercase">{role}</div>
        <h3 className="text-3xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors">{title}</h3>
      </div>
      <p className="text-slate-400 font-light leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 bg-brand-accent/5 rounded-full text-[10px] font-mono border border-brand-accent/10 text-brand-accent/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

function StrengthCard({ title, desc, icon }: { title: string, desc: string, icon: ReactNode }) {
  return (
    <div className="glass p-8 rounded-[40px] space-y-6 hover:bg-brand-accent/5 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-4">
        <h4 className="text-xl font-serif font-bold text-white">{title}</h4>
        <p className="text-sm text-slate-500 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SkillBar({ label, progress }: { label: string, progress: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
        <span className="text-slate-500">{label}</span>
        <span className="text-brand-accent">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        />
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all border border-white/10 group-hover:border-brand-accent/30">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-xl font-serif font-bold text-white group-hover:text-brand-accent transition-colors">{value}</div>
      </div>
    </div>
  );
}

