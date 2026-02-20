import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, Lightbulb, ChevronRight } from 'lucide-react';
import { bookInfo, navigation } from '../data/navigation';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 px-6 py-16 text-white lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <BookOpen className="h-4 w-4" />
            <span>Complete Digital Edition</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {bookInfo.title}
          </h1>
          
          <p className="mb-4 text-xl text-indigo-100">
            by {bookInfo.author}
          </p>
          
          <p className="mx-auto max-w-2xl text-lg text-indigo-100/80">
            A comprehensive guide for English teachers, covering techniques, methods, 
            and approaches for effective English language teaching in India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/foreword"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-lg"
            >
              Start Reading
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/unit1/chapter1"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Browse Chapters
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              What You'll Learn
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Master the art of English teaching with comprehensive coverage of all essential topics
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: 'Techniques & Methods',
                description: 'Learn various teaching methods including Direct, Bilingual, Structural, and Communicative approaches.',
              },
              {
                icon: GraduationCap,
                title: 'Skill Development',
                description: 'Master the teaching of Listening, Speaking, Reading, Writing, Grammar, and Composition.',
              },
              {
                icon: Users,
                title: 'Classroom Management',
                description: 'Understand planning, techniques, and evaluation methods for effective teaching.',
              },
              {
                icon: Lightbulb,
                title: 'Practical Applications',
                description: 'Apply psychological principles and modern approaches to real classroom situations.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900/30">
                  <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Structure Section */}
      <section className="bg-slate-50 px-6 py-16 dark:bg-slate-900/50 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Book Structure
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Organized into three comprehensive units covering all aspects of English teaching
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {navigation.slice(1, 4).map((section, index) => (
              <div
                key={section.id}
                className="rounded-xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {section.title.split(':')[0]}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  {section.title.split(':')[1]}
                </p>
                <ul className="space-y-2">
                  {section.items.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {item.title.split(':')[1] || item.title}
                      </Link>
                    </li>
                  ))}
                  {section.items.length > 4 && (
                    <li className="text-xs text-slate-400 dark:text-slate-500">
                      +{section.items.length - 4} more chapters
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-center text-white lg:p-12">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Ready to Start Learning?
          </h2>
          <p className="mb-8 text-indigo-100">
            Begin your journey to becoming an effective English teacher. 
            Read the foreword to understand the purpose and scope of this book.
          </p>
          <Link
            to="/foreword"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-lg"
          >
            Read the Foreword
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {bookInfo.title} by {bookInfo.author}
          </p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            Published by {bookInfo.publisher}, {bookInfo.location} | First Edition {bookInfo.firstEdition}
          </p>
        </div>
      </footer>
    </div>
  );
}
