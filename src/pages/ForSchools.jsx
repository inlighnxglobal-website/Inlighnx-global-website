import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaRobot,
    FaBalanceScale,
    FaMobileAlt,
    FaLock,
    FaCloud,
    FaLink
} from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import {
    MdAnalytics,
    MdBarChart,
    MdMessage,
    MdVisibility,
    MdDevices
} from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SchoolContactModal from '../components/SchoolContactModal';
import './ForSchools.css';
import heroImg from '../assets/school-banner.jpeg';

function ForSchools() {
    const navigate = useNavigate();
    const statsRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToStats = () => {
        statsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    };

    const staggerItem = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    const tagIcons = {
        "Python": <SiPython />,
        "Web Development": <FaCode />,
        "Robotics": <FaRobot />,
        "IoT": <MdDevices />,
        "Data Science": <MdAnalytics />,
        "Machine Learning": <GiBrain />,
        "Data Viz": <MdBarChart />,
        "AI Ethics": <FaBalanceScale />,
        "NLP": <MdMessage />,
        "Computer Vision": <MdVisibility />,
        "App Dev": <FaMobileAlt />,
        "Cybersecurity": <FaLock />,
        "Cloud": <FaCloud />,
        "Blockchain": <FaLink />
    };

    return (
        <div className="for-schools-page">
            {/* Hero Section */}
            <section className="schools-hero-section">
                <div className="container">
                    <div className="hero-grid">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="hero-badges">
                                <span className="badge">NEP 2020 Aligned</span>
                                <span className="badge">ISO Certified</span>
                                <span className="badge">Startup India</span>
                            </div>
                            <h1>
                                Transforming <br />
                                School Education <br />
                                for a <span className="highlight">Skill-Driven Future</span>
                            </h1>
                            <p>
                                Empowering schools with NEP 2020-aligned, industry-led learning and
                                skills that prepare students for tomorrow's careers.
                            </p>
                            <div className="hero-actions">
                                <button className="btn-orange" onClick={() => setIsModalOpen(true)}>Implement at your school</button>
                                <button className="btn-outline" onClick={scrollToStats}>Learn More</button>
                            </div>
                        </motion.div>
                        <motion.div
                            className="hero-media"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="image-wrapper">
                                <img src={heroImg} alt="Skill Driven Future" />
                                <motion.div
                                    className="stat-overlay"
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <span className="stat-count">6,000+</span>
                                    <span className="stat-label">Students Joined</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar-section" ref={statsRef}>
                <div className="container">
                    <motion.div
                        className="stats-grid"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        {[
                            { count: "6,000+", label: "Students Trained" },
                            { count: "50+", label: "Partner Schools" },
                            { count: "100%", label: "NEP 2020 Aligned" },
                            { count: "ISO", label: "Certified Programs" }
                        ].map((stat, idx) => (
                            <motion.div key={idx} className="stat-item" variants={staggerItem}>
                                <h3>{stat.count}</h3>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Innovation Section */}
            <motion.section
                className="innovation-section"
                {...fadeInUp}
            >
                <div className="container">
                    <h2 className="section-title">Pioneering <span className="highlight">EdTech Innovation</span> in India</h2>
                    <div className="innovation-list">
                        <motion.div className="innovation-item" variants={staggerItem} initial="initial" whileInView="whileInView">
                            <div className="icon">🚀</div>
                            <p>Inlighn Tech (InlighnX Global Private Limited) is a recognized EdTech StartUp recognized under the <strong>Startup India (DPIIT)</strong> initiative and backed by ISB Executive academics and industry leaders experts.</p>
                        </motion.div>
                        <motion.div className="innovation-item" variants={staggerItem} initial="initial" whileInView="whileInView" transition={{ delay: 0.2 }}>
                            <div className="icon">🏆</div>
                            <p>Recognized as the <strong>"Best Emerging EdTech StartUp"</strong> at the Global Business Awards 2021, Inlighn Tech has successfully trained <strong>5,000+ students</strong> across India and abroad through immersive, project-based learning programs.</p>
                        </motion.div>
                        <motion.div className="mission-box" variants={staggerItem} initial="initial" whileInView="whileInView" transition={{ delay: 0.4 }}>
                            <div className="mission-icon">🎯</div>
                            <div className="mission-content">
                                <span className="mission-label">Our Mission</span>
                                <p>"To bridge the gap between school education and real-world industry skills—starting at the school level."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Vision Section */}
            <motion.section
                className="vision-section"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container">
                    <motion.span className="subtitle" variants={fadeInUp}>OUR VISION</motion.span>
                    <motion.h2 className="section-title" variants={fadeInUp}>From Passive Learners to <span className="highlight">Student-Innovators</span></motion.h2>
                    <motion.div
                        className="vision-grid"
                        variants={staggerContainer}
                    >
                        {[
                            { image: "https://images.stockcake.com/public/5/9/1/591793ca-e5fb-4f9a-9b89-637baa29386c_large/kids-computer-class-stockcake.jpg", title: "Replace Rote Learning", text: "Transform traditional classrooms into hands-on learning with smart technology." },
                            { image: "https://www.iitms.co.in/blog/img/nep-2024-complete-guide-info.webp", title: "NEP 2020 Aligned Skills", text: "Skill based curricula fully matched & aligned with National Education Policy 2020." },
                            { image: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/05/critical-thinking.jpg", title: "Critical Thinking", text: "Problem-solving & real-world projects that enhance logical reasoning." },
                            { image: "https://www.kuder.com/wp-content/uploads/2023/11/access-and-diversity-blog-67900d15906a8.webp", title: "Career Readiness", text: "Prepare students for competitive exams and future internships." }
                        ].map((card, idx) => (
                            <motion.div key={idx} className="vision-card" variants={staggerItem}>
                                <div className="card-image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="services-section"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container">
                    <motion.span className="subtitle" variants={fadeInUp}>OUR SERVICES</motion.span>
                    <motion.h2 className="section-title" variants={fadeInUp}>What We <span className="highlight">Provide Schools</span></motion.h2>
                    <motion.p className="section-intro" variants={fadeInUp}>Comprehensive support to transform your school's educational experience.</motion.p>
                    <motion.div
                        className="services-grid"
                        variants={staggerContainer}
                    >
                        {[
                            { image: "https://ulipsu.com/wp-content/uploads/2024/01/Artboard-30-copy-3-1-850x600.png", title: "NEP 2020-Aligned Curriculum", text: "Standardized skills for Class 5-12 students through industry-mapped learning." },
                            { image: "https://www.tbsnews.net/sites/default/files/styles/social_share/public/images/2022/08/08/iso-9001-certification.png", title: "ISO-Certified Training Standards", text: "Quality training guaranteed by international certification standards." },
                            { image: "https://media.licdn.com/dms/image/v2/D5612AQEClDebtRwWVg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692686453112?e=2147483647&v=beta&t=tGr6qr2e2AyH3sADeRuYEYxRfIfEOrdAp1Uxff-YTAY", title: "Industry-Driven Project Orientation", text: "Hands-on projects simulate real-industry challenges and environments." },
                            { image: "https://www.mentoringcomplete.com/wp-content/uploads/2023/11/A-Complete-Guide-to-Mentorship-Program-Structure-and-Expert-Tips.webp", title: "Expert Mentorship", text: "Live interaction sessions with industry professionals and expert mentors." },
                            { image: "https://www.asuprepdigital.org/wp-content/uploads/2024/09/hybrid-vs-online-learning.jpg", title: "Online & Hybrid Delivery", text: "Flexible learning modules delivered through our advanced LMS portal." },
                            { image: "https://www.teachermagazine.com/assets/images/teacher/Expert-QA-School-experiences-and-student-performance-lower-res.jpg", title: "Performance & Impact Reports", text: "Detailed results tracking to show student progress and learning outcomes." }
                        ].map((service, idx) => (
                            <motion.div key={idx} className="service-card" variants={staggerItem}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Framework Section */}
            <motion.section
                className="framework-section"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container">
                    <motion.span className="subtitle" variants={fadeInUp}>Program Overview</motion.span>
                    <motion.h2 className="section-title" variants={fadeInUp}>4-Level School <span className="highlight">Program Framework</span></motion.h2>
                    <motion.p className="section-intro" variants={fadeInUp}>A structured learning path from basics to advanced specializations.</motion.p>
                    <motion.div
                        className="framework-grid"
                        variants={staggerContainer}
                    >
                        {[
                            { level: "LEVEL 1", title: "Foundation & Basics", classes: "Class 5-8", tags: ["Python", "Web Development", "Robotics", "IoT"], color: "level-1" },
                            { level: "LEVEL 2", title: "Intelligent Systems", classes: "Class 8-10", tags: ["Data Science", "Machine Learning", "Data Viz"], color: "level-2" },
                            { level: "LEVEL 3", title: "Applied AI", classes: "Class 10-12", tags: ["AI Ethics", "NLP", "Computer Vision"], color: "level-3" },
                            { level: "LEVEL 4", title: "Specialized Skills", classes: "Class 12+", tags: ["App Dev", "Cybersecurity", "Cloud", "Blockchain"], color: "level-4" }
                        ].map((lvl, idx) => (
                            <motion.div key={idx} className={`framework-card ${lvl.color}`} variants={staggerItem}>
                                <div className="card-header">
                                    <span className="level">{lvl.level}</span>
                                    <h3>{lvl.title}</h3>
                                    <span className="class-range">{lvl.classes}</span>
                                </div>
                                <div className="tags">
                                    {lvl.tags.map((tag, tIdx) => (
                                        <span key={tIdx}>
                                            {tagIcons[tag]}
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Bottom Section */}
            <motion.section
                className="bottom-section"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <div className="ai-academics-box">
                        <motion.div
                            className="ai-content"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                        >
                            <motion.div className="ai-icon" variants={staggerItem}>✨</motion.div>
                            <div className="ai-header">
                                <motion.span className="ai-tag" variants={staggerItem}>INLIGHN TECH</motion.span>
                                <motion.h3 variants={staggerItem}>AI for Academics</motion.h3>
                            </div>
                            <motion.p variants={staggerItem}>At Inlighn Tech, we build innovative AI solutions for schools, helping faculty automate administrative tasks and enable personalized learning for their students.</motion.p>
                            <motion.div className="ai-topics" variants={staggerContainer}>
                                {["Student Assessment", "Learning Path", "Career Roadmaps"].map((topic, idx) => (
                                    <motion.span key={idx} variants={staggerItem}>{topic}</motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <FloatingWhatsApp />
            <SchoolContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default ForSchools;
