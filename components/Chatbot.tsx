import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles, Mail } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, WORK_HISTORY, EDUCATION, PROJECTS, FREELANCE_PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm ${PERSONAL_INFO.name}'s AI assistant. Ask me anything about his experience, projects, or skills!` }
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
    if (!isContactMode) {
      setIsContactMode(true);
      setMessages(prev => [...prev, { role: 'model', text: "Sure! Type your message below, and I'll draft an email to Hemanth for you." }]);
    } else {
      setIsContactMode(false);
      setMessages(prev => [...prev, { role: 'model', text: "Cancelled email mode. You can continue chatting with me about Hemanth's experience." }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    if (isContactMode) {
      setTimeout(() => {
        const subject = `Portfolio Inquiry from ${PERSONAL_INFO.name}'s Website`;
        const body = userMessage;
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoUrl;

        setMessages(prev => [...prev, { 
          role: 'model', 
          text: "I've opened your default email client with your message ready. Please hit send to contact Hemanth!" 
        }]);
        setIsContactMode(false);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are an AI assistant for Hemanth Kumar Galam's professional portfolio website.
        Your goal is to answer questions about Hemanth's background, skills, and experience to recruiters or visitors.
        
        Here is the data about Hemanth:
        Personal Info: ${JSON.stringify(PERSONAL_INFO)}
        Work History: ${JSON.stringify(WORK_HISTORY)}
        Education: ${JSON.stringify(EDUCATION)}
        Skills: ${JSON.stringify(SKILL_CATEGORIES)}
        Featured Projects: ${JSON.stringify(PROJECTS)}
        Freelance Projects: ${JSON.stringify(FREELANCE_PROJECTS)}
        Achievements: ${JSON.stringify(ACHIEVEMENTS)}

        Guidelines:
        1. Be professional, friendly, and concise.
        2. Answer strictly based on the provided data. If you don't know the answer, say "I don't have that information in my current records."
        3. Highlight his Node.js and key achievements when relevant.
        4. Keep responses short and readable (under 100 words preferred unless detailed info is asked).
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

      const responseText = response.text || "I'm having trouble connecting right now. Please try again later.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please check your connection or API key." }]);
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
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center
          ${isOpen ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rotate-90' : 'bg-primary-600 text-white animate-bounce'}
        `}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}
        `}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="p-4 bg-primary-600 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Portfolio Assistant</h3>
              <p className="text-xs text-primary-100">Ask about my skills & experience</p>
            </div>
          </div>
          <button 
            onClick={toggleContactMode}
            className={`p-2 rounded-lg transition-colors ${isContactMode ? 'bg-white text-primary-600 shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'}`}
            title="Drop a message (Send Email)"
          >
            <Mail size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                  ${msg.role === 'user' ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'}
                `}
              >
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div 
                className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0 mt-1 text-indigo-600 dark:text-indigo-400">
                <Bot size={14} />
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-primary-500" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {isContactMode ? 'Preparing email...' : 'Thinking...'}
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 border border-slate-200 dark:border-slate-700 focus-within:border-primary-500 transition-colors">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isContactMode ? "Type your message for the email..." : "Ask about my projects..."}
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="p-1.5 bg-primary-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;