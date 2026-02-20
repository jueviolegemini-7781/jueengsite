export interface NavItem {
  id: string;
  title: string;
  path: string;
}

export interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    id: "frontmatter",
    title: "Front Matter",
    items: [
      { id: "foreword", title: "Foreword", path: "/foreword" },
      { id: "preface", title: "Preface", path: "/preface" },
    ],
  },
  {
    id: "unit1",
    title: "Unit 1: Techniques and Methods",
    items: [
      { id: "ch1", title: "Chapter 1: State of English Teaching in India", path: "/unit1/chapter1" },
      { id: "ch2", title: "Chapter 2: Importance of Learning English", path: "/unit1/chapter2" },
      { id: "ch3", title: "Chapter 3: Factors for Universal Importance", path: "/unit1/chapter3" },
      { id: "ch4", title: "Chapter 4: Position of English in Gujarat", path: "/unit1/chapter4" },
      { id: "ch5", title: "Chapter 5: Problems of Teaching English", path: "/unit1/chapter5" },
      { id: "ch6", title: "Chapter 6: Psychology of Learning", path: "/unit1/chapter6" },
      { id: "ch7", title: "Chapter 7: Objectives of Teaching English", path: "/unit1/chapter7" },
      { id: "ch8", title: "Chapter 8: Planning", path: "/unit1/chapter8" },
      { id: "ch9", title: "Chapter 9: Techniques", path: "/unit1/chapter9" },
      { id: "ch10", title: "Chapter 10: Methods of Teaching", path: "/unit1/chapter10" },
      { id: "ch11", title: "Chapter 11: Skills of Teaching", path: "/unit1/chapter11" },
    ],
  },
  {
    id: "unit2",
    title: "Unit 2: Development of Basic Skills",
    items: [
      { id: "ch12", title: "Chapter 12: Teaching of Listening", path: "/unit2/chapter12" },
      { id: "ch13", title: "Chapter 13: Speech and Pronunciation", path: "/unit2/chapter13" },
      { id: "ch14", title: "Chapter 14: Teaching of Reading", path: "/unit2/chapter14" },
      { id: "ch15", title: "Chapter 15: Teaching of Writing", path: "/unit2/chapter15" },
      { id: "ch16", title: "Chapter 16: Teaching of Grammar", path: "/unit2/chapter16" },
      { id: "ch17", title: "Chapter 17: Teaching of Prose and Poetry", path: "/unit2/chapter17" },
      { id: "ch18", title: "Chapter 18: Teaching of Composition", path: "/unit2/chapter18" },
    ],
  },
  {
    id: "unit3",
    title: "Unit 3: Evaluation Techniques",
    items: [
      { id: "ch19", title: "Chapter 19: Evaluation in English", path: "/unit3/chapter19" },
      { id: "ch20", title: "Chapter 20: Types of Tests", path: "/unit3/chapter20" },
      { id: "ch21", title: "Chapter 21: Diagnostic Test & Remedial Teaching", path: "/unit3/chapter21" },
      { id: "ch22", title: "Chapter 22: Textbook Evaluation", path: "/unit3/chapter22" },
      { id: "ch23", title: "Chapter 23: Audio-Visual Aids", path: "/unit3/chapter23" },
      { id: "ch24", title: "Chapter 24: The English Teacher", path: "/unit3/chapter24" },
    ],
  },
  {
    id: "reference",
    title: "Reference Material",
    items: [
      { id: "ch25", title: "Speaking Skills", path: "/reference/speaking-skills" },
      { id: "ch26", title: "Proverbs for Everyday Conversation", path: "/reference/proverbs" },
      { id: "ch27", title: "Model Lesson Plans", path: "/reference/lesson-plans" },
    ],
  },
];

export const bookInfo = {
  title: "Teaching of English",
  author: "Dr. Fruit Punch Samurai",
  publisher: "Sakamoto Publication",
  location: "Sakamotobad",
  firstEdition: "2023",
  price: "Rs. 320-00",
};

export const getAllPaths = () => {
  const paths: { path: string; title: string; section: string }[] = [];
  navigation.forEach((section) => {
    section.items.forEach((item) => {
      paths.push({
        path: item.path,
        title: item.title,
        section: section.title,
      });
    });
  });
  return paths;
};

export const getNextPrev = (currentPath: string) => {
  const allPaths = getAllPaths();
  const currentIndex = allPaths.findIndex((p) => p.path === currentPath);
  
  return {
    prev: currentIndex > 0 ? allPaths[currentIndex - 1] : null,
    next: currentIndex < allPaths.length - 1 ? allPaths[currentIndex + 1] : null,
  };
};
