import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Insight {
  title: string;
  category: string;
  excerpt: string;
  url: string;
  readTime: string;
}

const insights: Insight[] = [
  {
    title: "What is Facilities Management?",
    category: "Compliance Essentials",
    excerpt: "Comprehensive guide to FM covering hard services, soft services, and statutory compliance requirements.",
    url: "/resources/what-is-facilities-management",
    readTime: "8 min"
  },
  {
    title: "How Often Should Fire Alarms Be Tested?",
    category: "Fire & Safety",
    excerpt: "Legal testing frequencies, responsible person duties, and consequences of non-compliance under BS 5839.",
    url: "/resources/fire-alarm-testing-frequency",
    readTime: "6 min"
  },
  {
    title: "What is ACOP L8?",
    category: "Water & Hygiene",
    excerpt: "Legionella control guidance covering risk assessments, testing frequencies, and employer responsibilities.",
    url: "/resources/what-is-acop-l8",
    readTime: "7 min"
  },
  {
    title: "FM Challenges in PBSA",
    category: "Sector Intelligence",
    excerpt: "Purpose-built student accommodation requires specialist FM approaches for compliance and resident satisfaction.",
    url: "/resources/pbsa-fm-challenges",
    readTime: "8 min"
  }
];

export const LatestInsights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Latest FM Insights</h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Technical guidance, compliance frameworks, and operational intelligence from our FM experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={insight.url}>
                <Card className="p-6 h-full hover:border-primary/50 transition-all hover-lift group">
                  <Badge className="mb-4">{insight.category}</Badge>
                  <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{insight.readTime}</span>
                    </div>
                    <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                      <span>Read more</span>
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/resources"
            className="inline-flex items-center gap-2 text-primary hover:underline font-light"
          >
            View all resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
