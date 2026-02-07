import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Flame, Award, ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "LeetCode",
    handle: "Nitin_maurya_",
    rating: "1569",
    solved: "218 DSA",
    extra: "100 Days Badge",
    link: "https://leetcode.com/u/Nitin_maurya_/",
  },
  {
    name: "CodeChef",
    handle: "bask_shapes_03",
    rating: "1402",
    solved: "21 solved",
    extra: "Max: 1574",
    link: "https://www.codechef.com/users/bask_shapes_03",
  },
  {
    name: "Codeforces",
    handle: "nitinmauryaaa",
    rating: "704",
    solved: "14 solved",
    extra: "Newbie",
    link: "https://codeforces.com/profile/nitinmauryaaa",
  },
  {
    name: "HackerRank",
    handle: "nitinmauryaa95",
    rating: "Gold",
    solved: "5 badges",
    extra: "C++ & Problem Solving",
    link: "https://www.hackerrank.com/profile/nitinmauryaa95",
  },
  {
    name: "GeeksForGeeks",
    handle: "nitinmaug3bk",
    rating: "21",
    solved: "10 solved",
    extra: "Coding Score",
    link: "https://www.geeksforgeeks.org/profile/nitinmaug3bk",
  },
];

const overallStats = [
  { icon: Target, value: "260+", label: "Total Problems" },
  { icon: Flame, value: "100", label: "Max Streak" },
  { icon: Trophy, value: "14", label: "Contests" },
  { icon: Award, value: "5", label: "Awards" },
];

const dsaTopics = [
  { name: "Arrays", count: 129 },
  { name: "Math", count: 50 },
  { name: "HashMap & Set", count: 46 },
  { name: "Two Pointers", count: 37 },
  { name: "String", count: 36 },
  { name: "Sorting", count: 30 },
  { name: "Binary Search", count: 27 },
  { name: "Dynamic Programming", count: 17 },
  { name: "Bit Manipulation", count: 16 },
  { name: "Sliding Window", count: 16 },
];

const CodingStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-28 relative" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-mono text-primary mb-3 block">Competitive Programming</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Coding Profiles
          </h2>
        </motion.div>

        {/* Overall stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {overallStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon size={22} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                    {platform.rating}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-3">
                @{platform.handle}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{platform.solved}</span>
                <span className="text-xs text-primary/70">{platform.extra}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* DSA Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-5 font-medium">
            DSA Topic Distribution
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {dsaTopics.map((topic, i) => {
              const maxCount = dsaTopics[0].count;
              const intensity = 0.3 + (topic.count / maxCount) * 0.7;
              return (
                <motion.div
                  key={topic.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.04, duration: 0.3 }}
                  className="px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-primary/15"
                  style={{
                    backgroundColor: `hsl(155 70% 50% / ${intensity * 0.1})`,
                    border: `1px solid hsl(155 70% 50% / ${intensity * 0.25})`,
                  }}
                >
                  <span className="text-foreground">{topic.name}</span>
                  <span className="text-primary font-mono ml-2 text-xs">{topic.count}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStatsSection;
