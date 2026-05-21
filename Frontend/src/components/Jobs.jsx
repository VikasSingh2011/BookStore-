import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
    coverLetter: "",
  });
  const [fileName, setFileName] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-Time",
      description: "Join our core team to build hyper-optimized React interfaces. Experience with Tailwind CSS, React 19, and Vite is required.",
      responsibilities: [
        "Architect and maintain highly scalable frontend structures and libraries.",
        "Implement pixel-perfect designs with smooth animations and robust micro-interactions.",
        "Profile and optimize React render trees to ensure seamless 60fps performance."
      ],
      requirements: [
        "4+ years of professional React experience building high-traffic client portals.",
        "Expert-level control over Tailwind CSS configurations, CSS variables, and layout models.",
        "A keen eye for modern UI aesthetics, glassmorphism, and interactive feedback mechanisms."
      ],
      benefits: [
        "Competitive international-grade salary packages.",
        "100% remote workspace setup and annual learning allowance.",
        "Premium comprehensive medical insurance."
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-Time",
      description: "Shape the future of digital reading. We are looking for someone obsessed with glassmorphism, micro-interactions, and premium aesthetics.",
      responsibilities: [
        "Create high-fidelity interactive prototypes in Figma with strict compliance to grid systems.",
        "Design consistent, cohesive color tokens, typography scales, and modular visual components.",
        "Collaborate actively with development teams to assure design fidelity is preserved."
      ],
      requirements: [
        "Robust portfolio demonstrating contemporary, elegant design patterns and clean layouts.",
        "Expert knowledge of user psychology, spacing ratios, and minimalistic principles.",
        "Ability to clearly articulate design directions, trade-offs, and interactive feedback."
      ],
      benefits: [
        "Comprehensive design hardware budgets (MacBooks, high-PPI monitors).",
        "Flexible working hours with core asynchronous timezones.",
        "Bi-annual team retreats and professional conference coverage."
      ]
    },
    {
      id: 3,
      title: "Content Strategist",
      department: "Marketing",
      location: "New York / Hybrid",
      type: "Part-Time",
      description: "Curate the best books and educational materials. You will work directly with authors and publishers to bring premium content to bookStore.",
      responsibilities: [
        "Crate high-performing editorial schedules and newsletters that resonate with tech professionals.",
        "Liaise with premium publishing houses and writers to secure exclusive catalogs.",
        "Analyze reading metrics to spot emerging topics and key growth categories."
      ],
      requirements: [
        "Strong portfolio of technical copywriting, copyediting, or educational content creation.",
        "Passion for literature, computer science blueprints, and the publishing ecosystem.",
        "Basic understanding of SEO principles, landing page copy, and conversions."
      ],
      benefits: [
        "Competitive hourly compensation with performance-based catalog bonuses.",
        "Direct mentorship with seasoned founders and publishing pioneers.",
        "Free unlimited access to our entire premium bookstore digital catalogue."
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit");
        return;
      }
      setFileName(file.name);
      toast.success(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName) {
      toast.error("Please upload your CV/Resume to submit application.");
      return;
    }
    setLoading(true);

    // Simulate backend submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      toast.success("Application Submitted Successfully! 🎉");
    }, 2000);
  };

  const resetForm = () => {
    setSelectedJob(null);
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      branch: "",
      coverLetter: "",
    });
    setFileName("");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-20 flex flex-col items-center min-h-screen">
        
        {/* Navigation & Header */}
        {!selectedJob && (
          <>
            {/* Back Button */}
            <div className="w-full max-w-5xl flex justify-start mb-4">
              <Link to="/" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                Back to Home
              </Link>
            </div>

            {/* Header Section */}
            <div className="text-center space-y-6 max-w-3xl mb-16 animate-floating">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                Join the <span className="text-blue-600 dark:text-blue-500">bookStore</span> Team
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                We are always looking for passionate individuals to help us build the ultimate learning platform. Discover our open roles and build the future with us.
              </p>
            </div>

            {/* Job Listings Grid */}
            <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
              {jobs.map((job) => (
                <div key={job.id} className="glass-card p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:-translate-y-2 transition-all duration-300 premium-glow">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-slate-500/10 text-slate-500 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-500/20">
                        {job.location}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{job.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm md:text-base">
                      {job.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="shrink-0 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform active:scale-95 cursor-pointer">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Application Page (Details + Form) */}
        {selectedJob && !isSubmitted && (
          <div className="w-full max-w-6xl space-y-6">
            
            {/* Back Button */}
            <button 
              onClick={() => setSelectedJob(null)} 
              className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium">
              <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              Back to Open Roles
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Job Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass-card p-8 rounded-3xl space-y-6 border border-slate-300/20 dark:border-white/5 premium-glow">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                        {selectedJob.department}
                      </span>
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                        {selectedJob.type}
                      </span>
                      <span className="px-3 py-1 bg-slate-500/10 text-slate-500 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-500/20">
                        {selectedJob.location}
                      </span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{selectedJob.title}</h2>
                  </div>
                  <hr className="border-slate-300/30 dark:border-white/10" />

                  {/* Core Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 dark:text-white">Role Overview</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">{selectedJob.description}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 dark:text-white">Key Responsibilities</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-light list-disc list-inside pl-1">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 dark:text-white">Requirements</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-light list-disc list-inside pl-1">
                      {selectedJob.requirements.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-800 dark:text-white">Perks & Benefits</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-light list-disc list-inside pl-1">
                      {selectedJob.benefits.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Application Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6 premium-glow relative overflow-hidden">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white">Apply for this Position</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fill in your information below to submit your candidacy to our talent team.</p>
                  </div>
                  <hr className="border-slate-300/30 dark:border-white/10" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        placeholder="johndoe@example.com" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400 text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400 text-sm"
                      />
                    </div>

                    {/* Course/Degree */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Course / Degree</label>
                      <select 
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white text-sm cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400 dark:bg-slate-950">Select Course</option>
                        <option value="B.Tech" className="dark:bg-slate-950">B.Tech (Bachelor of Technology)</option>
                        <option value="MCA" className="dark:bg-slate-950">MCA (Master of Computer Applications)</option>
                        <option value="BCA" className="dark:bg-slate-950">BCA (Bachelor of Computer Applications)</option>
                        <option value="M.Tech" className="dark:bg-slate-950">M.Tech (Master of Technology)</option>
                        <option value="B.Sc / M.Sc" className="dark:bg-slate-950">B.Sc / M.Sc (Computer Science / IT)</option>
                        <option value="Other" className="dark:bg-slate-950">Other Specialization</option>
                      </select>
                    </div>
                  </div>

                  {/* Branch / Specialization */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Branch / Field of Study</label>
                    <input 
                      type="text" 
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required 
                      placeholder="e.g. Computer Science, Information Technology, UI Design" 
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400 text-sm"
                    />
                  </div>

                  {/* Custom Resume Drag & Drop Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Upload CV / Resume</label>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-2xl p-6 bg-slate-50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer relative group">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400 group-hover:text-blue-500 transition-colors duration-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {fileName || "Upload Resume (CV)"}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Supports PDF, DOC, DOCX up to 5MB
                      </span>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Cover Letter / Message (Optional)</label>
                    <textarea 
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows="4" 
                      placeholder="Tell us a little bit about yourself and why you'd be a great fit for this role..."
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400 text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 cursor-pointer mt-4"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

        {/* Success Confirmation Page */}
        {selectedJob && isSubmitted && (
          <div className="w-full max-w-2xl text-center space-y-8 animate-floating">
            <div className="glass-card p-10 rounded-3xl space-y-6 border border-slate-300/20 dark:border-white/5 premium-glow relative overflow-hidden">
              
              {/* Animated Glowing Checkmark */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center rounded-full shadow-lg shadow-emerald-500/10 relative overflow-hidden group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transform scale-100 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">Application Submitted!</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Thank you, <span className="font-bold text-slate-800 dark:text-white">{formData.name}</span>. Your application for the <span className="font-bold text-blue-600 dark:text-blue-400">{selectedJob.title}</span> position has been successfully recorded.
                </p>
              </div>
              <hr className="border-slate-300/30 dark:border-white/10" />

              {/* Summary of Submitted Details */}
              <div className="space-y-4 text-left bg-slate-50/50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-300/10 dark:border-white/5">
                <h3 className="font-bold text-slate-800 dark:text-white text-sm uppercase tracking-wider">Summary of Submission</h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-light text-slate-600 dark:text-slate-400">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Degree & Branch</span>
                    {formData.course} - {formData.branch}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Phone Number</span>
                    {formData.phone}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Email</span>
                    {formData.email}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Resume Attached</span>
                    📄 {fileName}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto">
                Our HR and hiring department will review your credentials, curriculum vitae, and branch portfolio details. We will reach out to you at <span className="text-blue-500 select-all font-medium">{formData.email}</span> within 3-5 business days.
              </p>

              <button 
                onClick={resetForm}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform active:scale-95 cursor-pointer mt-4"
              >
                Return to Careers
              </button>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
};

export default Jobs;

