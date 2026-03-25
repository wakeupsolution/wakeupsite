"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // --- MEMORY STATES ---
  const [userName, setUserName] = useState(""); 
  const [lastTopic, setLastTopic] = useState(""); // Remembers what you are talking about

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi there! I'm Noaii from Wakeup Solution 👋 How can I help you today? (Try asking about Websites, Apps, SEO, or Pricing!)" }
  ]);

  const WAKEUP_PHONE_NUMBER = "1234567890"; 
  const defaultMessage = "Hello Wakeup Solution team, I'm interested in discussing a software project.";
  const whatsappUrl = `https://wa.me/${WAKEUP_PHONE_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
  const themeColor = "#7134f5"; 

  // --- DATA ARRAYS ---
  const webDesignPlans = [
    { name: "Basic", price: "9,000", isPopular: false, features: [ "100% Customized Design", "Up to 10 Pages", "Free Domain (1 yr)", "SSL Security Included" ] },
    { name: "Standard", price: "12,000", isPopular: true, features: [ "100% Customized Design", "Up to 15 Pages", "Free Domain", "Google Analytics Setup", "12 months Maintenance" ] },
    { name: "Premium", price: "20,000", isPopular: false, features: [ "100% Customized Design", "Up to 40 Pages", "2 Business Emails", "Unlimited Storage" ] }
  ];
  const ecommercePlans = [
    { name: "Basic Store", price: "25,000", isPopular: false, features: [ "Up to 50 Products", "Payment Gateway Integration", "Mobile Responsive Design" ] },
    { name: "Growth Store", price: "45,000", isPopular: true, features: [ "Up to 500 Products", "100% Custom UI/UX", "Advanced Inventory", "Abandoned Cart Recovery" ] },
    { name: "Enterprise Store", price: "85,000", isPopular: false, features: [ "Unlimited Products", "Multi-Vendor Capability", "Custom API Integrations" ] }
  ];
  const appPlans = [
    { name: "Hybrid Starter", price: "60,000", isPopular: false, features: [ "Android & iOS Apps", "User Authentication", "Push Notifications" ] },
    { name: "Business App", price: "1,20,000", isPopular: true, features: [ "React Native Build", "Payment Gateway", "Real-time Chat" ] },
    { name: "Enterprise Scale", price: "2,50,000", isPopular: false, features: [ "Native or Advanced Hybrid", "Live Tracking", "Custom Admin ERP" ] }
  ];
  const standardSeoPlans = [ { name: "STARTER", price: "15,000" }, { name: "DIAMOND", price: "75,000" } ];
  const eliteSeoPlans = [ { name: "ELITE-1", price: "90,000" }, { name: "PAN INDIA", price: "6,00,000" } ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const containsWord = (text, wordsArray) => wordsArray.some(word => text.includes(word));

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue; 
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: userText }]);
    setInputValue(""); 
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const userMsg = userText.toLowerCase().trim();
      let reply = "";
      let foundMatch = false;

      // --- KEYWORDS ---
      const kwWeb = ["web", "website", "websit", "site", "landing page", "desing"];
      const kwApp = ["app", "mobile", "android", "ios", "application", "apk"];
      const kwEcom = ["ecommerce", "e-commerce", "ecom", "store", "shop"];
      const kwSeo = ["seo", "ranking", "marketing", "traffic"];
      const kwPrice = ["price", "cost", "package", "plan", "how much", "charge"];
      const kwSpecs = ["spec", "detail", "tech", "feature", "include"];
      const kwHello = ["hello", "hi", "hey", "hola", "greetings"];
      const kwContact = ["call", "contact", "number", "talk to human", "team"];
      const kwYes = ["yes", "yeah", "sure", "yep", "ok", "okay", "please", "both"]; // New Affirmative words

      // Update Topic Memory based on user input
      if (containsWord(userMsg, kwWeb)) setLastTopic("web");
      if (containsWord(userMsg, kwApp)) setLastTopic("app");
      if (containsWord(userMsg, kwEcom)) setLastTopic("ecom");
      if (containsWord(userMsg, kwSeo)) setLastTopic("seo");

      // ==========================================
      // 1. NAME DETECTION 
      // ==========================================
      const nameMatch = userMsg.match(/(?:i am|iam|i'm|im|my name is|this is) ([a-z\s]+)/i);
      if (nameMatch && !userName) {
        let extractedName = nameMatch[1].trim();
        extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
        setUserName(extractedName); 
        reply = `Nice to meet you, ${extractedName}! How can our team at Wakeup Solution help your business today?`;
        foundMatch = true;
      }

      // ==========================================
      // 2. CONTACT REQUESTS
      // ==========================================
      else if (containsWord(userMsg, kwContact)) {
        reply = `I can arrange that${userName ? ', ' + userName : ''}. Could you please drop your phone number or email here, or message us directly at ${WAKEUP_PHONE_NUMBER}?`;
        foundMatch = true;
      }

      // ==========================================
      // 3. LOGIC: AFFIRMATIVE ANSWERS ("yes", "sure")
      // Uses `lastTopic` memory to know what they are saying "yes" to!
      // ==========================================
      else if (containsWord(userMsg, kwYes) && !containsWord(userMsg, kwPrice) && !containsWord(userMsg, kwSpecs)) {
        if (lastTopic === "web") {
          reply = `Awesome${userName ? ' ' + userName : ''}! For Websites, our packages are Basic (₹9,000), Standard (₹12,000), and Premium (₹20,000). All plans include Custom Design, a Free Domain, and SSL Security. Would you like to proceed with one of these?`;
          foundMatch = true;
        } else if (lastTopic === "app") {
          reply = `Great! App Development starts at ₹60,000 (Hybrid), ₹1,20,000 (Business), and ₹2,50,000 (Enterprise). They include UI/UX design, push notifications, and Admin dashboards. Shall we discuss your app idea?`;
          foundMatch = true;
        } else if (lastTopic === "ecom") {
          reply = `Perfect. Our E-Commerce stores range from ₹25,000 to ₹85,000. They include Payment Gateways, Mobile Responsive Design, and Inventory Management. Ready to start selling online?`;
          foundMatch = true;
        } else if (lastTopic === "seo") {
          reply = `Excellent. Our SEO plans range from ₹15,000 to ₹75,000 monthly, ensuring guaranteed results and ROI reporting. Want to start optimizing your site?`;
          foundMatch = true;
        } else {
          reply = `Great! Could you specify if you are interested in our Website, App, E-commerce, or SEO services so I can give you the right details?`;
          foundMatch = true;
        }
      }

      // ==========================================
      // 4. LOGIC: SPECIFICATIONS & FEATURES
      // ==========================================
      else if (containsWord(userMsg, kwWeb) && containsWord(userMsg, kwSpecs)) {
        reply = `For websites, we offer 100% Customized Designs, Free Domain & SSL. Our most popular ${webDesignPlans[1].name} plan (₹${webDesignPlans[1].price}) includes: ${webDesignPlans[1].features.join(', ')}.`;
        foundMatch = true;
      }
      else if (containsWord(userMsg, kwApp) && containsWord(userMsg, kwSpecs)) {
        reply = `Our App development covers Android & iOS. The popular ${appPlans[1].name} (₹${appPlans[1].price}) includes: ${appPlans[1].features.join(', ')}.`;
        foundMatch = true;
      }

      // ==========================================
      // 5. LOGIC: PRICING
      // ==========================================
      else if (containsWord(userMsg, kwWeb) && containsWord(userMsg, kwPrice)) {
        reply = `Our Web Design packages are: ${webDesignPlans.map(p => `${p.name} (₹${p.price})`).join(', ')}. Which fits your needs?`;
        foundMatch = true;
      } 
      else if (containsWord(userMsg, kwApp) && containsWord(userMsg, kwPrice)) {
        reply = `Our App Development packages are: ${appPlans.map(p => `${p.name} (₹${p.price})`).join(', ')}. Do you have a specific app idea in mind?`;
        foundMatch = true;
      } 
      
      // ==========================================
      // 6. LOGIC: GENERAL INQUIRIES
      // ==========================================
      else if (containsWord(userMsg, kwWeb)) {
        reply = `We craft fast, beautiful, and SEO-friendly websites${userName ? ', ' + userName : ''}! Are you looking for our pricing packages or technical features?`;
        foundMatch = true;
      }
      else if (containsWord(userMsg, kwApp)) {
        reply = "We build high-performance mobile apps for iOS and Android. Would you like to see our App pricing packages or technical specifications?";
        foundMatch = true;
      }
      else if (containsWord(userMsg, kwHello)) {
        reply = `Hello${userName ? ' ' + userName : ''} 👋 Are you looking for technical details or pricing for a Website, App, or SEO today?`;
        foundMatch = true;
      }

      // ==========================================
      // 7. PROFESSIONAL CONVERSATIONAL FALLBACK
      // ==========================================
      if (!foundMatch) {
        if (userName) {
          reply = `I want to make sure I give you the best answer, ${userName}. Are you looking to build a Website, a Mobile App, or do you need SEO services?`;
        } else {
          reply = "I'm a virtual assistant, so I'm best at answering questions about our Website, App, and SEO services. Which of those are you interested in?";
        }
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "bot", text: reply }]);

    }, 1500); 
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* --- LIVE CHAT WINDOW --- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[340px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col mb-2 relative border border-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 pb-4 border-b border-gray-100 bg-white z-10 relative">
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl font-medium absolute left-1/2 -translate-x-1/2 w-max" style={{ color: themeColor }}>
                Hello, I'm Noaii
              </h3>
              <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: themeColor }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={themeColor} strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9 15h6" />
                </svg>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto h-[320px] bg-[#f8f9fc]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "gap-2 items-end"}`}>
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-[#e9e4f9] flex items-center justify-center shrink-0 mb-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke={themeColor} strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M16 10h.01M8 14h8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    </div>
                  )}
                  <div className={`p-3.5 text-sm font-medium leading-relaxed ${msg.sender === "user" ? "text-white rounded-2xl rounded-br-sm max-w-[85%]" : "bg-[#e9e4f9] rounded-2xl rounded-bl-sm max-w-[85%]"}`}
                    style={{ backgroundColor: msg.sender === "user" ? themeColor : "#e9e4f9", color: msg.sender === "bot" ? themeColor : "white" }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 rounded-full bg-[#e9e4f9] flex items-center justify-center shrink-0 mb-1">
                     <svg viewBox="0 0 24 24" fill="none" stroke={themeColor} strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M16 10h.01M8 14h8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                  </div>
                  <div className="bg-[#e9e4f9] py-3.5 px-4 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.3s]" style={{ backgroundColor: themeColor }}></span>
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:-0.15s]" style={{ backgroundColor: themeColor }}></span>
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: themeColor }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." className="flex-1 bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 rounded-full px-4 py-2.5 outline-none focus:ring-1 focus:border-[#7134f5] transition-all"/>
              <button type="submit" disabled={!inputValue.trim()} className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-opacity disabled:opacity-50" style={{ backgroundColor: themeColor }}>
                <svg className="w-4 h-4 text-white transform translate-x-px -translate-y-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING BUTTONS --- */}
      <div className="flex flex-col gap-4">
        <motion.button onClick={() => setIsChatOpen(!isChatOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ml-auto ${isChatOpen ? 'bg-[#1e293b] hover:shadow-lg' : 'hover:shadow-[0_10px_40px_rgba(113,52,245,0.4)]'}`} style={{ backgroundColor: isChatOpen ? '#1e293b' : themeColor }}>
            {isChatOpen ? (
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            )}
        </motion.button>
      </div>

    </div>
  );
}