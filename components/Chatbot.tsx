import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, X, ShieldAlert, Cpu, TerminalSquare, Sparkles, Mail } from 'lucide-react';
import { PERSONAL_INFO, WORK_HISTORY, EDUCATION, PROJECTS, PUBLICATIONS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../constants';
import { trackEvent } from '../utils/telemetry';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: `Hi! I'm Hemanth's portfolio AI assistant. Ask me any question about his experience, projects, or system designs.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isContactMode, setIsContactMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleContactMode = () => {
    trackEvent('chatbot_toggle_email', { active: !isContactMode });
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (!isContactMode) {
      setIsContactMode(true);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Email connection ready. Type your message below to compose an email directly to Hemanth.",
        timestamp: time
      }]);
    } else {
      setIsContactMode(false);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Reverted back to chatbot chat session.",
        timestamp: time
      }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage, timestamp: time }]);
    setIsLoading(true);

    if (isContactMode) {
      trackEvent('chatbot_email_draft');
      setTimeout(() => {
        const subject = `Portfolio Ingress Query from Website`;
        const body = userMessage;
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoUrl;

        setMessages(prev => [...prev, { 
          role: 'model', 
          text: "Message composed! Opened your mail client. Hit send in your email application to finalize transmission.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        }]);
        setIsContactMode(false);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      trackEvent('chatbot_query');
      // Loaded on first query so the SDK stays out of the initial page bundle
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are Hemanth's AI Assistant on his personal portfolio website. 
        Answer questions about Hemanth's background, experience, projects and education based strictly on this dataset.
        Use UK English. Do not add titles, metrics, employers or skills that are not in the dataset.
        Personal Info: ${JSON.stringify(PERSONAL_INFO)}
        Work History: ${JSON.stringify(WORK_HISTORY)}
        Education: ${JSON.stringify(EDUCATION)}
        Skills: ${JSON.stringify(SKILL_CATEGORIES)}
        Projects: ${JSON.stringify(PROJECTS)}
        Publications: ${JSON.stringify(PUBLICATIONS)}
        Achievements: ${JSON.stringify(ACHIEVEMENTS)}
 
        Guidelines:
        1. Maintain a high-tech, professional, slightly system-operator-like tone.
        2. Keep replies structured and clear. Limit responses to 100 words.
        3. Cover backend, robotics and ML work as relevant to the question.
        4. If a question goes outside this dataset, respond with: "I do not have that information in my current records."
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemContext,
        },
      });

      const responseText = response.text || "Connection handshake failed. Please ping host again later.";
      const finishTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: finishTime }]);
    } catch (error) {
      const errTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setMessages(prev => [...prev, { role: 'model', text: "Error: Service Unavailable. API key limit reached or configuration key is missing.", timestamp: errTime }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* High-Tech Terminal Command Trigger Button */}
      <button
        onClick={() => {
          const nextState = !isOpen;
          setIsOpen(nextState);
          trackEvent(nextState ? 'chatbot_open' : 'chatbot_close');
        }}
        className={`fixed bottom-6 left-6 md:left-auto md:right-6 z-50 p-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border font-mono
          ${isOpen 
            ? 'bg-cyber-card text-cyber-cyan border-cyber-cyan glow-cyan' 
            : 'bg-cyber-card text-cyber-amber border-cyber-border hover:border-cyber-amber/50 animate-pulse'
          }
        `}
        aria-label="Toggle Sidecar Debugger"
      >
        {isOpen ? <X size={20} /> : <Terminal size={20} />}
      </button>

      {/* Floating System Log Terminal Screen */}
      <div 
        className={`fixed bottom-24 left-6 md:left-auto md:right-6 w-[90vw] md:w-[420px] bg-cyber-card/95 border border-cyber-border rounded-xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden backdrop-blur-md font-mono text-[11px] scanline
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}
        `}
        style={{ height: '480px', maxHeight: '75vh' }}
      >
        {/* Terminal Header */}
        <div className="p-3 bg-cyber-border/40 flex items-center justify-between text-slate-300 border-b border-cyber-border">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-cyber-cyan animate-pulse" />
            <div>
              <h3 className="font-bold text-[10px] tracking-wide text-white">assistant_daemon.sh</h3>
              <p className="text-[8px] text-slate-500 font-normal">Status: Online</p>
            </div>
          </div>
          <button 
            onClick={toggleContactMode}
            className={`p-1.5 rounded transition-colors ${isContactMode ? 'bg-cyber-amber/20 text-cyber-amber border border-cyber-amber/40 shadow-md shadow-cyber-amber/10' : 'bg-cyber-bg border border-cyber-border hover:border-slate-500 text-slate-400'}`}
            title="Toggle Direct Endpoint"
          >
            <Mail size={12} />
          </button>
        </div>

        {/* Message Log Console */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cyber-bg/50 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className="flex flex-col gap-1 border-b border-cyber-border/20 pb-2.5"
            >
              {/* Telemetry log prefix */}
              <div className="flex justify-between text-[8px] text-slate-500">
                <span>
                  [{msg.timestamp}] {msg.role === 'user' ? 'USER::QUERY' : 'SYSTEM::RESPONSE'}
                </span>
                <span>OK</span>
              </div>
              <div className="flex gap-2">
                <span className={`font-bold shrink-0 ${msg.role === 'user' ? 'text-cyber-cyan' : 'text-cyber-amber'}`}>
                  {msg.role === 'user' ? '$ query:' : '$ system:'}
                </span>
                <span className="text-slate-300 leading-relaxed font-sans text-xs">
                  {msg.text}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[8px] text-slate-500">
                <span>[{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}] EXEC_THREAD</span>
                <span className="animate-pulse">BUSY</span>
              </div>
              <div className="flex items-center gap-2 text-cyber-cyan">
                <TerminalSquare size={14} className="animate-spin text-cyber-cyan" />
                <span className="text-[10px] tracking-wider animate-pulse">
                  {isContactMode ? 'Composing message...' : 'Processing query...'}
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Terminal Input prompt */}
        <div className="p-3 border-t border-cyber-border bg-cyber-card">
          <div className="flex items-center gap-2 bg-cyber-bg rounded-lg px-3 py-2 border border-cyber-border focus-within:border-cyber-cyan/50 transition-colors">
            <span className="text-cyber-cyan font-bold select-none">$</span>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isContactMode ? "Write email contents payload..." : "Query cluster parameters..."}
              className="flex-1 bg-transparent border-none outline-none text-[11px] text-slate-200 placeholder-slate-600 font-mono"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="p-1 bg-cyber-cyan/15 text-cyber-cyan hover:bg-cyber-cyan/35 border border-cyber-cyan/30 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={10} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;