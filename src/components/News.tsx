
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Federal Reserve signals potential rate cuts in 2024 amid cooling inflation",
    excerpt: "The Federal Reserve indicated it may cut interest rates three times next year as inflation continues to moderate and economic growth remains steady.",
    source: "Market Watch",
    time: "2 hours ago",
    category: "Economy",
    imageUrl: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Tech stocks rally on positive earnings reports and AI advancements",
    excerpt: "Major technology companies surged following better-than-expected quarterly results and announcements of new artificial intelligence initiatives.",
    source: "Tech Insights",
    time: "4 hours ago",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Global supply chain improvements drive manufacturing optimism",
    excerpt: "Easing of logistics bottlenecks and declining shipping costs are boosting manufacturing activity and improving delivery times worldwide.",
    source: "Industry Today",
    time: "6 hours ago",
    category: "Global Markets",
    imageUrl: "https://images.unsplash.com/photo-1566315191319-dd9de92c5fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
];

// Sample analysis data
const analysisItems = [
  {
    id: 1,
    title: "Q4 Market Outlook: Opportunities in a Transitioning Economy",
    excerpt: "Analysis of potential market movements as central banks shift policies and economic indicators evolve.",
    author: "Sarah Johnson",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Emerging Technologies Reshaping Financial Services",
    excerpt: "How AI, blockchain, and digital currencies are transforming traditional banking and investment models.",
    author: "Michael Chen",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "ESG Investing: Beyond the Buzzword",
    excerpt: "Evaluating the real impact and performance of environmental, social, and governance investing strategies.",
    author: "Priya Patel",
    readTime: "5 min read",
  },
];

const News = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">News & Insights</h2>
          <p className="text-muted-foreground text-lg">Stay informed with the latest financial news, in-depth analysis, and market commentary from trusted sources.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Latest News</h3>
              
              {newsItems.map((news) => (
                <div 
                  key={news.id} 
                  className="group premium-card flex flex-col md:flex-row gap-6 hover:-translate-y-1"
                >
                  <div className="md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
                    <img 
                      src={news.imageUrl} 
                      alt={news.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium rounded-full px-2 py-1 bg-secondary text-muted-foreground">
                        {news.category}
                      </span>
                      <span className="text-xs text-muted-foreground ml-3 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.time}
                      </span>
                      <span className="text-xs text-muted-foreground ml-3">
                        {news.source}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    
                    <p className="text-muted-foreground mt-2 text-sm line-clamp-2 mb-4">
                      {news.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <button className="text-sm font-medium text-primary flex items-center group-hover:text-primary/80 transition-colors">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="mx-auto mt-8 flex items-center justify-center rounded-lg px-6 py-3 bg-white text-foreground font-medium border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                View All News
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Market Analysis</h3>
            
            <div className="space-y-5">
              {analysisItems.map((analysis) => (
                <div 
                  key={analysis.id}
                  className="premium-card group hover:-translate-y-1"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {analysis.author}</span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {analysis.readTime}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {analysis.title}
                  </h4>
                  
                  <p className="text-muted-foreground mt-2 text-sm mb-4">
                    {analysis.excerpt}
                  </p>
                  
                  <button className="text-sm font-medium text-primary flex items-center group-hover:text-primary/80 transition-colors mt-2">
                    Read Analysis
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h4 className="text-lg font-semibold mb-3">Financial Education</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Enhance your financial literacy with our curated educational resources and expert guides.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Investment Fundamentals</div>
                    <div className="text-xs text-muted-foreground">4-part course • Beginner friendly</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Technical Analysis</div>
                    <div className="text-xs text-muted-foreground">6-part course • Intermediate</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7C8 8.10457 7.10457 9 6 9C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5C7.10457 5 8 5.89543 8 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15C7.10457 15 8 15.8954 8 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 17C20 18.1046 19.1046 19 18 19C16.8954 19 16 18.1046 16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 7C20 8.10457 19.1046 9 18 9C16.8954 9 16 8.10457 16 7C16 5.89543 16.8954 5 18 5C19.1046 5 20 5.89543 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Portfolio Management</div>
                    <div className="text-xs text-muted-foreground">5-part course • Advanced</div>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full rounded-lg px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors">
                Browse All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
