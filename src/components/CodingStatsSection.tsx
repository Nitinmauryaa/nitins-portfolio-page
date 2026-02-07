import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Flame, Award } from "lucide-react";

const platforms = [
  {
    name: "LeetCode",
    handle: "Nitin_maurya_",
    rating: "1569",
    problems: "218 DSA",
    badge: "100 Days Badge",
    color: "from-amber-500 to-orange-500",
    link: "https://leetcode.com/u/Nitin_maurya_/",
  },
  {
    name: "CodeChef",
    handle: "bask_shapes_03",
    rating: "1402",
    problems: "21 solved",
    badge: "Max: 1574",
    color: "from-emerald-500 to-teal-500",
    link: "https://www.codechef.com/users/bask_shapes_03",
  },
  {
    name: "Codeforces",
    handle: "nitinmauryaaa",
    rating: "704",
    problems: "14 solved",
    badge: "Newbie",
    color: "from-blue-500 to-indigo-500",
    link: "https://codeforces.com/profile/nitinmauryaaa",
  },
  {
    name: "HackerRank",
    handle: "nitinmauryaa95",
    rating: "Gold",
    problems: "5 badges",
    badge: "C++ & Problem Solving",
    color: "from-green-500 to-emerald-500",
    link: "https://www.hackerrank.com/profile/nitinmauryaa95",
  },
  {
    name: "GeeksForGeeks",
    handle: "nitinmaug3bk",
    rating: "21",
    problems: "10 solved",
    badge: "Coding Score",
    color: "from-green-600 to-lime-500",
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
    <section id="stats" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Coding Stats</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Overall stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {overallStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <stat.icon size={24} className="text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold font-mono text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Platform cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {platforms.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded-full bg-gradient-to-r ${platform.color} text-background font-bold`}
                  >
                    {platform.rating}
                  </span>
                </div>
                <div className="text-xs font-mono text-muted-foreground mb-2">
                  @{platform.handle}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{platform.problems}</span>
                  <span className="text-xs text-primary">{platform.badge}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* DSA Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-mono text-primary text-sm font-semibold mb-5 uppercase tracking-wider">
              DSA Topic Distribution
            </h3>
            <div className="flex flex-wrap gap-3">
              {dsaTopics.map((topic, i) => {
                const maxCount = dsaTopics[0].count;
                const opacity = 0.3 + (topic.count / maxCount) * 0.7;
                return (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
                    className="px-3 py-2 rounded-lg border border-primary/20 text-sm"
                    style={{
                      backgroundColor: `hsl(185 80% 50% / ${opacity * 0.15})`,
                      borderColor: `hsl(185 80% 50% / ${opacity * 0.4})`,
                    }}
                  >
                    <span className="text-foreground">{topic.name}</span>
                    <span className="text-primary font-mono ml-2 text-xs">{topic.count}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStatsSection;
