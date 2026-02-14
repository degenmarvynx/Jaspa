'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { ChevronDown } from 'lucide-react';
import type { GuideTopic } from './guidesData';

type Category = 'FAQs' | 'Guides' | 'Calculator' | 'Blog';
type ResourceItem = { id: string; title: string; description: string; category: Category };
type ViewMode = 'featured' | 'faq' | 'guides' | 'calculator' | 'blog';

const ALL_ITEMS: ResourceItem[] = [
  { id: 'faq-1', title: 'FAQs', description: 'Get answers to common queries and frequently asked questions.', category: 'FAQs' },
  { id: 'guide-1', title: 'Guides', description: 'Step-by-step guides to help you use Jaspa’s products and services.', category: 'Guides' },
  { id: 'calc-1', title: 'Calculator', description: 'Calculate your loan repayments instantly.', category: 'Calculator' },
  { id: 'blog-1', title: 'Blog', description: 'Explore stories, updates, and insights that keep you ahead.', category: 'Blog' },
];

const FAQ_ITEMS = [
  {
    id: 'q1',
    q: 'Is Jaspa MFB licensed and regulated?',
    a: 'Yes. Jaspa Microfinance Bank operates under applicable regulatory oversight in Nigeria and adheres to required compliance standards to protect customers and ensure safe banking.'
  },
  {
    id: 'q2',
    q: 'What makes Jaspa different from other microfinance banks?',
    a: 'We focus on secure savings, flexible loans, and digital banking with customer-first experiences, transparent fees, and tools that help individuals and businesses grow.'
  },
  {
    id: 'q3',
    q: 'Does Jaspa MFB have physical branches in Nigeria?',
    a: 'We provide digital-first banking. Branch and service touchpoints are communicated via official channels; customers can transact seamlessly via our app and supported platforms.'
  },
  {
    id: 'q4',
    q: 'What kinds of accounts can I open with Jaspa?',
    a: 'Personal and business accounts with features like savings, transfers, card services, and value-add tools designed to match your goals.'
  },
  {
    id: 'q5',
    q: 'Can customers send and receive money internationally?',
    a: 'Supported rails and partners determine international flows. Check the app or official resources for current availability and supported corridors.'
  },
  {
    id: 'q6',
    q: 'Can I use Jaspa’s debit cards on any POS terminal?',
    a: 'Jaspa cards are designed to work on supported POS networks across Nigeria. Availability depends on network and merchant configurations.'
  },
  {
    id: 'q7',
    q: 'How does Jaspa support small businesses?',
    a: 'We offer tailored accounts, payment tools, loans, and guidance programs to help SMEs manage cash flow, accept payments, and grow sustainably.'
  },
  {
    id: 'q8',
    q: 'Can I incorporate Jaspa into my business system?',
    a: 'Yes. Integrations and partner programs help businesses connect workflows like accounting, payroll, and payments. See our resources for details.'
  },
  {
    id: 'q9',
    q: 'Is my information safe and secure with Jaspa?',
    a: 'We implement industry-standard security practices, encryption, and compliance measures to protect customer data and transactions.'
  },
  {
    id: 'q10',
    q: 'Does Jaspa offer referral benefits of any kind to its customers?',
    a: 'Promotions and referral programs may be announced via official channels. Check the app and website for current offers.'
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState<Category>('FAQs');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<ViewMode>('featured');
  const [transitionError, setTransitionError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const faqTabRef = useRef<HTMLButtonElement | null>(null);
  const faqListRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const guidesTabRef = useRef<HTMLButtonElement | null>(null);
  const [guides, setGuides] = useState<GuideTopic[] | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [guidePanelOpen, setGuidePanelOpen] = useState(false);
  const guidePanelRef = useRef<HTMLDivElement | null>(null);
  const [guideMaxHeight, setGuideMaxHeight] = useState(0);
  const calculatorTabRef = useRef<HTMLButtonElement | null>(null);
  const [principal, setPrincipal] = useState<number>(100000);
  const [months, setMonths] = useState<number>(3);
  const blogTabRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const t = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, [active]);

  const items = useMemo(() => ALL_ITEMS.filter(i => i.category === active), [active]);

  const onKeyNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const order: Category[] = ['FAQs', 'Guides', 'Calculator', 'Blog'];
    const idx = order.indexOf(active);
    if (e.key === 'ArrowRight') setActive(order[(idx + 1) % order.length]);
    if (e.key === 'ArrowLeft') setActive(order[(idx - 1 + order.length) % order.length]);
  };

  const activateFAQ = (source: 'tab' | 'card') => {
    try {
      setTransitionError(null);
      setActive('FAQs');
      setMode('faq');
      requestAnimationFrame(() => {
        faqTabRef.current?.focus();
      });
    } catch {
      setTransitionError('Failed to activate FAQs');
    }
  };

  const activateGuides = async (source: 'tab' | 'card') => {
    try {
      setTransitionError(null);
      setActive('Guides');
      setMode('guides');
      setGuidePanelOpen(false);
      if (!guides) {
        const mod = await import('./guidesData');
        setGuides(mod.GUIDES);
        setSelectedGuideId(mod.GUIDES[0]?.id ?? null);
      }
      requestAnimationFrame(() => {
        guidesTabRef.current?.focus();
      });
    } catch {
      setTransitionError('Failed to activate Guides');
    }
  };

  const activateCalculator = (source: 'tab' | 'card') => {
    try {
      setTransitionError(null);
      setActive('Calculator');
      setMode('calculator');
      setGuidePanelOpen(false);
      requestAnimationFrame(() => {
        calculatorTabRef.current?.focus();
      });
    } catch {
      setTransitionError('Failed to activate Calculator');
    }
  };

  const activateBlog = (source: 'tab' | 'card') => {
    try {
      setTransitionError(null);
      setActive('Blog');
      setMode('blog');
      setGuidePanelOpen(false);
      requestAnimationFrame(() => {
        blogTabRef.current?.focus();
      });
    } catch {
      setTransitionError('Failed to activate Blog');
    }
  };

  const onAccordionToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const onAccordionKey = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const ids = FAQ_ITEMS.map(i => i.id);
    if (e.key === 'ArrowDown') {
      const next = (index + 1) % ids.length;
      const nextId = ids[next];
      document.getElementById(`faq-btn-${nextId}`)?.focus();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      const prev = (index - 1 + ids.length) % ids.length;
      const prevId = ids[prev];
      document.getElementById(`faq-btn-${prevId}`)?.focus();
      e.preventDefault();
    } else if (e.key === 'Home') {
      document.getElementById(`faq-btn-${ids[0]}`)?.focus();
      e.preventDefault();
    } else if (e.key === 'End') {
      document.getElementById(`faq-btn-${ids[ids.length - 1]}`)?.focus();
      e.preventDefault();
    } else if (e.key === 'Enter' || e.key === ' ') {
      onAccordionToggle(ids[index]);
      e.preventDefault();
    } else if (e.key === 'Escape') {
      setOpenId(null);
    }
  };

  useEffect(() => {
    const updateHeight = () => {
      if (guidePanelOpen && guidePanelRef.current) {
        setGuideMaxHeight(guidePanelRef.current.scrollHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [guidePanelOpen, selectedGuideId]);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16 md:pt-20 pb-20 md:pb-24" aria-labelledby="resources-title">
        {/* Hero */}
        <section className="relative overflow-hidden" role="region" aria-label="Resources hero">
          <div className="relative h-[220px] md:h-[300px]">
            <div className="absolute inset-0 bg-[url('/figma/screenshot_683_208.png')] bg-cover bg-center" aria-hidden="true" />
            <div className="absolute inset-0 bg-[url('/figma/screenshot_683_209.png')] bg-cover bg-center opacity-60 mix-blend-multiply" aria-hidden="true" />
            <Container>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 id="resources-title" className="z-10 text-white font-extrabold text-[36px] md:text-[56px] leading-[1.1]">
                  {mode === 'faq' ? 'Frequently Asked Questions' : mode === 'guides' ? 'How‑To Guides' : 'Resources'}
                </h1>
              </div>
            </Container>
          </div>
        </section>

        {/* Intro + Filters */}
        <Container>
          <p className="mt-6 text-[#012e6d] text-[15px] md:text-[18px] text-center">
            Jaspa’s Resource Center is your knowledge hub for smarter banking — from FAQs to financial guides, designed to help you make confident, informed financial decisions.
          </p>

          <div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
            role="tablist"
            aria-label="Resource categories"
            onKeyDown={onKeyNav}
          >
            {(['FAQs', 'Guides', 'Calculator', 'Blog'] as Category[]).map(cat => {
              const selected = active === cat;
              const boldActive =
                (cat === 'FAQs' && active === 'FAQs' && mode === 'faq') ||
                (cat === 'Guides' && active === 'Guides' && mode === 'guides') ||
                (cat === 'Calculator' && active === 'Calculator' && mode === 'calculator') ||
                (cat === 'Blog' && active === 'Blog' && mode === 'blog');
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${cat}`}
                  className={
                    boldActive
                      ? 'relative w-full h-[85px] rounded-[8px] tab-focused text-[20px] font-semibold focus:outline-none'
                      : `w-full h-[85px] rounded-[8px] bg-[#f5f5f5] text-[#044ea4] shadow-[0_4px_10px_0_#00000040] text-[18px] md:text-[20px] font-semibold ${selected ? 'ring-2 ring-[#87b6ed]' : ''} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#044ea4]`
                  }
                  onClick={() => {
                    if (cat === 'FAQs') activateFAQ('tab');
                    else if (cat === 'Guides') activateGuides('tab');
                    else if (cat === 'Calculator') activateCalculator('tab');
                    else if (cat === 'Blog') activateBlog('tab');
                    else {
                      setMode('featured');
                      setActive(cat);
                      setGuidePanelOpen(false);
                    }
                  }}
                  ref={
                    cat === 'FAQs'
                      ? faqTabRef
                      : cat === 'Guides'
                      ? guidesTabRef
                      : cat === 'Calculator'
                      ? calculatorTabRef
                      : cat === 'Blog'
                      ? blogTabRef
                      : undefined
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Featured Resource Highlights */}
          <section aria-label="Featured Resource Highlights" className="mt-12">
            <h2 className="text-center text-[#044ea4] font-extrabold text-[22px] md:text-[28px]">
              {mode === 'faq' ? 'Frequently Asked Questions' : mode === 'guides' ? 'How‑To Guides' : mode === 'blog' ? 'Jaspa Blog' : 'Featured Resource Highlights'}
            </h2>
            {mode === 'featured' && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 [&>article]:w-full [&>article]:min-h-[280px] [&>article]:flex [&>article]:flex-col [&>article]:justify-between [&>article>div>img]:w-[90px] [&>article>div>img]:h-auto [&>article>div>div>h3]:text-[22px] md:[&>article>div>div>h3]:text-[26px] [&>article>button]:w-[250px] [&>article>button]:h-[70px] [&>article>button]:rounded-[10px] [&>article>button]:text-[20px] [&>article>button]:font-semibold transition-opacity duration-300">
                <article className="mx-auto w-[320px] md:w-[360px] h-[300px] rounded-[20px] bg-[#044ea4] p-6 text-white flex flex-col justify-between" aria-label="FAQs highlight">
                  <div className="flex items-start gap-4">
                    <img src="/figma/screenshot_1075_940.png" alt="FAQs icon" className="w-[90px] h-auto" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-[24px] md:text-[26px]">FAQs</h3>
                      <p className="mt-2 text-white/90 text-[14px] md:text-[16px] w-[317px] max-w-full">
                        Get answers to some common queries and frequently asked questions.
                      </p>
                    </div>
                  </div>
                  <button
                    className="self-start bg-[#df2202] text-white rounded-[10px] w-[250px] h-[70px] text-[20px] font-semibold"
                    onClick={() => activateFAQ('card')}
                    aria-label="Learn more about FAQs"
                  >
                    Learn More
                  </button>
                </article>
                <article className="mx-auto w-[320px] md:w-[360px] h-[300px] rounded-[20px] bg-[#044ea4] p-6 text-white flex flex-col justify-between" aria-label="Guides highlight">
                  <div className="flex items-start gap-4">
                    <img src="/figma/screenshot_1078_941.png" alt="Guides icon" className="w-[90px] h-auto" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-[24px] md:text-[26px]">Guides</h3>
                      <p className="mt-2 text-white/90 text-[14px] md:text-[16px]">
                        Step-by-step guides to help you use Jaspa’s products and services with ease.
                      </p>
                    </div>
                  </div>
                  <button
                    className="self-start bg-[#df2202] text-white rounded-[10px] w-[250px] h-[70px] text-[20px] font-semibold"
                    onClick={() => activateGuides('card')}
                    aria-label="Learn more about Guides"
                  >
                    Learn More
                  </button>
                </article>
                <article className="mx-auto w-[320px] md:w-[360px] h-[300px] rounded-[20px] bg-[#044ea4] p-6 text-white flex flex-col justify-between" aria-label="Calculator highlight">
                  <div className="flex items-start gap-4">
                    <img src="/figma/screenshot_1073_2322.png" alt="Calculator icon" className="w-[90px] h-auto" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-[24px] md:text-[26px]">Calculator</h3>
                      <p className="mt-2 text-white/90 text-[14px] md:text-[16px]">
                        Calculate your loan repayments instantly, and see what works best for your budget.
                      </p>
                    </div>
                  </div>
                  <button
                    className="self-start bg-[#df2202] text-white rounded-[10px] w-[250px] h-[70px] text-[20px] font-semibold"
                    onClick={() => activateCalculator('card')}
                    aria-label="Open Loan Calculator"
                  >
                    Check It Out
                  </button>
                </article>
                <article className="mx-auto w-[320px] md:w-[360px] h-[300px] rounded-[20px] bg-[#044ea4] p-6 text-white flex flex-col justify-between" aria-label="Blog highlight">
                  <div className="flex items-start gap-4">
                    <img src="/figma/screenshot_1075_939.png" alt="Blog icon" className="w-[90px] h-auto" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-[24px] md:text-[26px]">Blog</h3>
                      <p className="mt-2 text-white/90 text-[14px] md:text-[16px]">
                        Explore stories, updates, and expert insights that keep you ahead in your financial journey.
                      </p>
                    </div>
                  </div>
                  <button
                    className="self-start bg-[#df2202] text-white rounded-[10px] w-[250px] h-[70px] text-[20px] font-semibold"
                    onClick={() => activateBlog('card')}
                    aria-label="Open Blog"
                  >
                    Check It Out
                  </button>
                </article>
              </div>
            )}
            {mode === 'faq' && (
              <div className="mt-8">
                <p className="text-[#012e6d] text-[16px] md:text-[18px] text-center">
                  Get answers to some common queries and frequently asked questions.
                </p>
                <div className="mt-6 space-y-4 max-w-4xl mx-auto">
                  {FAQ_ITEMS.map((item, idx) => {
                    const isOpen = openId === item.id;
                    const panelId = `faq-panel-${item.id}`;
                    const btnId = `faq-btn-${item.id}`;
                    const h = faqListRefs.current[item.id]?.scrollHeight ?? 0;
                    return (
                      <div key={item.id} className="rounded-[15px] border-2 border-[#044ea4] bg-[#f5f5f5]">
                        <button
                          id={btnId}
                          className="w-full flex items-center justify-between px-6 py-4 text-[#012e6d] text-[16px] md:text-[18px] font-semibold focus:outline-none focus:ring-0 focus:ring-offset-0"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => onAccordionToggle(item.id)}
                          onKeyDown={(e) => onAccordionKey(e, idx)}
                          style={{ outline: 'none' }}
                        >
                          <span className="text-left">{item.q}</span>
                          <ChevronDown className={`w-6 h-6 text-[#044ea4] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          className="px-6 overflow-hidden transition-all duration-300"
                          style={{ maxHeight: isOpen ? h : 0, opacity: isOpen ? 1 : 0 }}
                          ref={(el) => { faqListRefs.current[item.id] = el; }}
                        >
                          <div className="pb-4 text-[#012e6d] text-[15px] md:text-[16px]">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {transitionError && (
                  <div className="mt-4 text-red-700 text-center" role="alert">
                    {transitionError}
                  </div>
                )}
              </div>
            )}
            {mode === 'guides' && (
              <div className="mt-8">
                <div className="space-y-4 max-w-5xl mx-auto">
                  {((guides ?? []).filter(g => (guidePanelOpen && selectedGuideId ? g.id === selectedGuideId : true))).map(g => {
                    const isSelected = selectedGuideId === g.id;
                    return (
                      <article
                        key={g.id}
                        className={`relative w-full rounded-[15px] bg-[#044ea4] text-white px-6 py-5 flex items-center justify-between transition-colors duration-300 ${isSelected ? 'opacity-100' : 'opacity-95'}`}
                        aria-label={g.title}
                      >
                        <div className="flex-1 pr-4">
                          <h3 className="text-[26px] md:text-[34px] leading-[1.2] font-semibold">
                            {g.title}
                          </h3>
                          <p className="mt-[10px] text-[15px] md:text-[18px]">
                            {g.description}
                          </p>
                        </div>
                        <div className="relative w-[140px] min-w-[140px] h-[180px] hidden sm:block">
                          <img
                            src="/figma/screenshot_992_657.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain opacity-50"
                          />
                          <button
                            className={`guides-arrow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isSelected && guidePanelOpen ? 'rotate-90' : ''} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#044ea4]`}
                            aria-label={`Open ${g.title}`}
                            aria-expanded={isSelected && guidePanelOpen}
                            onClick={() => {
                              if (selectedGuideId === g.id && guidePanelOpen) {
                                setGuidePanelOpen(false);
                              } else {
                                setSelectedGuideId(g.id);
                                setGuidePanelOpen(true);
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                if (selectedGuideId === g.id && guidePanelOpen) {
                                  setGuidePanelOpen(false);
                                } else {
                                  setSelectedGuideId(g.id);
                                  setGuidePanelOpen(true);
                                }
                                e.preventDefault();
                              }
                            }}
                          >
                            <img src="/figma/screenshot_992_604.png" alt="Open" className="w-[32px] h-[32px]" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div
                  className="mt-6 overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: guidePanelOpen ? guideMaxHeight : 0, opacity: guidePanelOpen ? 1 : 0 }}
                  role="region"
                  aria-live="polite"
                  aria-hidden={!guidePanelOpen}
                  id={`guide-panel-${selectedGuideId ?? 'none'}`}
                >
                  {guides && selectedGuideId && selectedGuideId === 'open-account' && (
                    <div className="max-w-4xl mx-auto bg-[#044ea4] rounded-[15px] p-4 text-white" ref={guidePanelRef}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1603.png" alt="Step 1" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px] font-semibold">Step 1: Open the Jaspa mobile app and select, “Create Account”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1610.png" alt="Step 2" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 2: Enter your phone number, and verify with the OTP sent via SMS.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1609.png" alt="Step 3" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 3: Fill in your basic information (full name, date of birth, gender, etc.).</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1611.png" alt="Step 4" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 4: Confirm your BVN to unlock full account access.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1605.png" alt="Step 5" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 5: Take a quick selfie for identity verification.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1616.png" alt="Step 6" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 6: Create your 4‑digit PIN to secure your account.</div>
                        </div>
                        <div className="flex flex-col items-center md:col-span-2">
                          <img src="/figma/screenshot_1128_1604.png" alt="Step 7" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 7: Your Jaspa account dashboard will appear — you’re ready to bank.</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {guides && selectedGuideId && selectedGuideId === 'multi-layered' && (
                    <div className="max-w-4xl mx-auto bg-[#044ea4] rounded-[15px] p-4 text-white" ref={guidePanelRef}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2u-0zum9pd.png" alt="Step 1" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px] font-semibold">Step 1: Log into the Jaspa app and open the “Accounts” tab.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2v-h0eiu2e.png" alt="Step 2" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 2: Select “Add New Account Layer”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2u-o7pzzrh.png" alt="Step 3" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 3: Select your account type (Kids, Students, Expenses, Locked Savings, etc.).</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2v-3j6jcft.png" alt="Step 4" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 4: Name the layer according to your preference (e.g., “Fuel Money” or “December Trip”).</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2u-hwry25t.png" alt="Step 5" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 5: Set rules: spending limit, auto‑deposit, or lock duration.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/mljuqh2u-bvnyeqg.png" alt="Step 6" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 6: Confirm and save — your new layer appears instantly.</div>
                        </div>
                        <div className="flex flex-col items-center md:col-span-2">
                          <img src="/figma/mljuqh2v-h0eiu2e.png" alt="Step 7" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 7: Move money between layers anytime through “Transfer Between Accounts”.</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {guides && selectedGuideId && selectedGuideId === 'international-transfer' && (
                    <div className="max-w-4xl mx-auto bg-[#044ea4] rounded-[15px] p-4 text-white" ref={guidePanelRef}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1667.png" alt="Step 1" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px] font-semibold">Step 1: Go to “Transfers” on your Jaspa dashboard.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1670.png" alt="Step 2" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 2: Select “International Transfer”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1662.png" alt="Step 3" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 3: Choose the country and currency you want to send money to.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1663.png" alt="Step 4" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 4: Enter recipient bank or wallet details.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1669.png" alt="Step 5" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 5: Input transfer amount — Jaspa shows FX rate and fees instantly.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1661.png" alt="Step 6" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 6: Review details and confirm with your transaction PIN.</div>
                        </div>
                        <div className="flex flex-col items-center md:col-span-2">
                          <img src="/figma/screenshot_1128_1668.png" alt="Step 7" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 7: Select “Send Money” — you get confirmation immediately.</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {guides && selectedGuideId && selectedGuideId === 'pos-terminal' && (
                    <div className="max-w-4xl mx-auto bg-[#044ea4] rounded-[15px] p-4 text-white" ref={guidePanelRef}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1711.png" alt="Step 1" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px] font-semibold">Step 1: Log in to the Jaspa mobile app and go to “Business Tools”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1712.png" alt="Step 2" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 2: Select “Request POS Terminal”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1717.png" alt="Step 3" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 3: Fill in your business information (name, location, turnover, etc.).</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1713.png" alt="Step 4" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 4: Choose POS model and preferred delivery method.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1719.png" alt="Step 5" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 5: Submit request — you’ll see your application status immediately.</div>
                        </div>
                        <div className="flex flex-col items-center md:col-span-2">
                          <img src="/figma/screenshot_1128_1718.png" alt="Step 6" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 6: A Jaspa representative will contact you for onboarding and activation.</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {guides && selectedGuideId && selectedGuideId === 'payroll-system' && (
                    <div className="max-w-4xl mx-auto bg-[#044ea4] rounded-[15px] p-4 text-white" ref={guidePanelRef}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1645.png" alt="Step 1" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px] font-semibold">Step 1: Open the Jaspa app and go to “Business Tools”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1646.png" alt="Step 2" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 2: Select “Payroll Manager”.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1647.png" alt="Step 3" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 3: Add your employees and verify their bank details.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1651.png" alt="Step 4" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 4: Enter salary amounts and frequency (weekly, monthly, custom).</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1652.png" alt="Step 5" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 5: Review the payroll summary and funding source.</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src="/figma/screenshot_1128_1653.png" alt="Step 6" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 6: Select “Approve & Run Payroll” to process payments instantly.</div>
                        </div>
                        <div className="flex flex-col items-center md:col-span-2">
                          <img src="/figma/screenshot_1128_1654.png" alt="Step 7" className="w-[80px] h-[180px] object-contain" />
                          <div className="mt-2 text-white text-[12px] md:text-[14px]">Step 7: View payroll history anytime under “Payroll Reports”.</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {transitionError && (
                  <div className="mt-4 text-red-700 text-center" role="alert">
                    {transitionError}
                  </div>
                )}
              </div>
            )}
            {mode === 'blog' && (
              <div className="mt-8">
                <p className="text-[#012e6d] text-[14px] md:text-[16px] text-center">Explore stories, updates, and expert insights that keep you ahead in your financial journey.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1377_1255.png" alt="CBN logo (with background)" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">CBN to Expand Financial Inclusion Framework in 2025</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">New CBN policies aim to deepen micro credit penetration across underserved states.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1382_1266.png" alt="only Jaspa every 1" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">Jaspa Launches New Business Account Layers</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">A simpler way for SMEs to segment spending and forecast cash flow.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1123_1561.png" alt="TNB - November 2 1" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">Digital Payments Drive 67% of Urban Transactions</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">New data shows continued growth in cashless adoption.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1377_1257.png" alt="NDIC Logo (with background) 2" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">Understanding NDIC Deposit Insurance</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">What NDIC protection means for everyday customers of microfinance banks.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1379_1259.png" alt="Jaspa POS three 1" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">5 Ways POS Merchants Can Increase Revenue</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">Simple strategies to increase daily turnover and customer retention.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                  <article className="bg-white rounded-[12px] shadow-[0_6px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <img src="/figma/screenshot_1379_1258.png" alt="Jaspa POS get 1" className="w-full h-[180px] object-contain bg-[#f5f5f5]" />
                    <div className="p-4">
                      <h4 className="text-[#044ea4] font-bold text-[18px]">Quick Guide: How to Apply for Jaspa POS</h4>
                      <p className="mt-2 text-[#012e6d] text-[14px]">Step-by-step process to get your device and activate it quickly.</p>
                      <button className="mt-4 bg-[#df2202] text-white rounded-[7px] px-4 py-2">Check It Out</button>
                    </div>
                  </article>
                </div>
              </div>
            )}
            {mode === 'calculator' && (
              <div className="mt-8 transition-all duration-300 ease-in-out">
                <div className="max-w-5xl mx-auto bg-white rounded-[15px] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
                  <h3 className="text-[#044ea4] text-[22px] md:text-[28px] font-extrabold">Loan Calculator</h3>
                  <p className="mt-1 text-[#012e6d] text-[14px] md:text-[16px]">Calculate your loan repayments instantly and see what works best for your budget.</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="lc-amount" className="block text-[#012e6d] text-[14px] md:text-[15px] font-semibold">How much do you want to borrow?</label>
                      <input
                        id="lc-amount"
                        type="text"
                        min={1000}
                        max={2000000}
                        step={1000}
                        value={new Intl.NumberFormat('en-NG').format(Number.isFinite(principal) ? principal : 0)}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value.replace(/[^\d]/g, ''));
                          if (!isNaN(v) && v >= 0) setPrincipal(Math.min(Math.max(v, 0), 50000000));
                        }}
                        className="mt-2 w-full h-[44px] rounded-[8px] border border-[#044ea4] px-3 text-[#012e6d] focus:outline-none focus:ring-2 focus:ring-[#044ea4]"
                        aria-label="Loan amount"
                      />
                      <input
                        aria-label="Loan amount slider"
                        type="range"
                        min={1000}
                        max={2000000}
                        step={1000}
                        value={Number.isFinite(principal) ? principal : 0}
                        onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                        className="mt-3 w-full lc-slider"
                        style={{ ['--progress' as any]: `${((Number.isFinite(principal) ? principal : 0) - 1000) / (2000000 - 1000) * 100}%` }}
                      />
                      <div className="flex justify-between text-[#012e6d] text-[12px] mt-1">
                        <span>1,000</span>
                        <span>2,000,000</span>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lc-months" className="block text-[#012e6d] text-[14px] md:text-[15px] font-semibold">How long will it take you to repay the money?</label>
                      <input
                        id="lc-months"
                        type="number"
                        min={1}
                        max={3}
                        step={1}
                        value={Number.isFinite(months) ? months : 0}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10);
                          if (!isNaN(v) && v > 0) setMonths(Math.min(Math.max(v, 1), 3));
                        }}
                        className="mt-2 w-full h-[44px] rounded-[8px] border border-[#044ea4] px-3 text-[#012e6d] focus:outline-none focus:ring-2 focus:ring-[#044ea4]"
                        aria-label="Repayment period in months"
                      />
                      <input
                        aria-label="Repayment months slider"
                        type="range"
                        min={1}
                        max={3}
                        step={1}
                        value={Number.isFinite(months) ? months : 0}
                        onChange={(e) => setMonths(parseInt(e.target.value, 10))}
                        className="mt-3 w-full lc-slider"
                        style={{ ['--progress' as any]: `${((Number.isFinite(months) ? months : 0) - 1) / (3 - 1) * 100}%` }}
                      />
                      <div className="flex justify-between text-[#012e6d] text-[12px] mt-1">
                        <span>1 month</span>
                        <span>3 months</span>
                      </div>
                    </div>
                  </div>
                  <CalculatorResults principal={principal} months={months} />
                </div>
              </div>
            )}
          </section>

          
        </Container>
      </main>
      <Footer />
    </div>
  );

function CalculatorResults({ principal, months }: { principal: number; months: number }) {
  const fmt = useMemo(() => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }), []);
  const results = useMemo(() => {
    const P = Math.max(0, principal || 0);
    const n = Math.max(1, months || 0);
    const r = 0.08 / 12;
    const pow = Math.pow(1 + r, n);
    const m = P === 0 ? 0 : (P * r * pow) / (pow - 1);
    const totalRepay = m * n;
    const interest = totalRepay - P;
    return { P, n, r, m, interest, totalRepay };
  }, [principal, months]);
  return (
    <div className="mt-8 bg-white rounded-[15px] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.12)]" aria-live="polite">
      <h4 className="text-center text-[#044ea4] text-[22px] md:text-[26px] font-extrabold">Repayment Details</h4>
      <p className="mt-1 text-center text-[#012e6d] text-[12px] md:text-[13px]">This repayment information is just an estimate. You can get an exact repayment amount when you apply for a loan on the Jaspa mobile app. Terms and conditions apply.</p>
      <div className="mx-auto mt-3 h-[3px] w-[120px] bg-[#df2202]"></div>
      <div className="mt-6 max-w-xl mx-auto space-y-3 text-[#012e6d]">
        <div className="flex justify-between"><span>Principal</span><span className="font-semibold">{fmt.format(results.P)}</span></div>
        <div className="flex justify-between"><span>Monthly Interest Rate</span><span className="font-semibold">8%</span></div>
        <div className="flex justify-between"><span>Number of repayments</span><span className="font-semibold">{results.n}</span></div>
        <div className="flex justify-between"><span>Monthly Repayment</span><span className="font-semibold">{fmt.format(Math.round(results.m))}</span></div>
        <div className="flex justify-between"><span>Total Interest</span><span className="font-semibold">{fmt.format(Math.round(results.interest))}</span></div>
        <div className="flex justify-between"><span>Total Repayment</span><span className="font-semibold">{fmt.format(Math.round(results.totalRepay))}</span></div>
      </div>
      <div className="mt-8 flex justify-center">
        <a href="/download" className="inline-flex items-center gap-3 bg-[#df2202] text-white rounded-[8px] px-6 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#df2202]" aria-label="Apply for loan">
          Apply for Loan now
          <Image src="/figma/arrow-white.svg" alt="" width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
}
