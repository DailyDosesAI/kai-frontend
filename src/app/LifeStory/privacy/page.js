"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LifeStoryPrivacy() {
  useEffect(() => {
    // Enable scrolling for this page only
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    
    // Cleanup: restore original styles when leaving this page
    return () => {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nav-bar to-white flex flex-col">
      {/* Header */}
      <header className="bg-nav-bar py-4 sm:py-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-10">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Kai Language Lab</h1>
          <Link href="/LifeStory" className="bg-blue text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base cursor-pointer hover:bg-blue/90 transition-colors">
            <h2>← Back to LifeStory</h2>
          </Link>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[60px] sm:h-[72px]" />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-10 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">
              LifeStory Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-blue/5 border-l-4 border-blue p-6 rounded-r-lg mb-8">
                <p className="text-lg font-medium text-blue mb-2">Your Learning Journey, Your Privacy</p>
                <p className="text-gray-600">
                  LifeStory is designed to track and celebrate your personal language learning journey while keeping your data secure and private.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">What is LifeStory?</h2>
                <p>
                  LifeStory is a feature within Kai Language Lab that creates a personalized timeline of your language learning journey. 
                  It tracks your progress, milestones, and memorable conversations to help you visualize and celebrate your growth.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data We Collect for LifeStory</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue mr-2">•</span>
                    <div>
                      <strong>Learning Progress:</strong> Lesson completions, quiz scores, skill improvements, and time spent learning
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">•</span>
                    <div>
                      <strong>Milestones:</strong> Achievement unlocks, level progressions, and learning streaks
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">•</span>
                    <div>
                      <strong>Conversation Highlights:</strong> Memorable exchanges with Kai (only with your explicit consent)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">•</span>
                    <div>
                      <strong>Learning Patterns:</strong> Your preferred study times, session lengths, and learning preferences
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How We Use Your LifeStory Data</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <div>Create your personalized learning timeline and progress visualization</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <div>Generate insights about your learning patterns and suggest improvements</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <div>Celebrate your achievements and motivate continued learning</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <div>Provide personalized recommendations based on your learning history</div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Your Control Over LifeStory Data</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">You have complete control:</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Pause tracking</strong> at any time from your settings</li>
                    <li>• <strong>Delete specific entries</strong> from your timeline</li>
                    <li>• <strong>Export your data</strong> in a readable format</li>
                    <li>• <strong>Completely reset</strong> your LifeStory and start fresh</li>
                    <li>• <strong>Choose what to include</strong> in your story (conversations, scores, etc.)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Security & Storage</h2>
                <p>
                  Your LifeStory data is encrypted and stored securely on our servers. We use industry-standard security measures 
                  including end-to-end encryption for sensitive information and regular security audits.
                </p>
                <p className="mt-4">
                  <strong>Data Retention:</strong> Your LifeStory data is kept as long as your account is active. 
                  If you delete your account, all LifeStory data is permanently removed within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Third-Party Sharing</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-red-800 font-semibold mb-2">We DO NOT share your LifeStory data with:</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• Advertisers or marketing companies</li>
                    <li>• Social media platforms</li>
                    <li>• Data brokers or analytics companies</li>
                    <li>• Educational institutions (without explicit consent)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact & Questions</h2>
                <p>
                  If you have questions about how LifeStory handles your data, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:privacy@kaistory.ai" className="text-blue hover:underline">privacy@kaistory.ai</a></p>
                  <p><strong>Subject:</strong> LifeStory Privacy Inquiry</p>
                </div>
              </section>

              <section className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  This LifeStory Privacy Policy is part of our main Privacy Policy and Terms of Service. 
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-nav-bar">
        <p className="text-gray text-sm">© 2024 Kai Language Lab. Your personal AI tutor.</p>
        <div className="mt-2">
          <Link href="/privacy-policy" className="text-blue hover:underline text-sm mr-4">
            Main Privacy Policy
          </Link>
          <Link href="/LifeStory" className="text-blue hover:underline text-sm">
            Back to LifeStory
          </Link>
        </div>
      </footer>
    </div>
  );
}
