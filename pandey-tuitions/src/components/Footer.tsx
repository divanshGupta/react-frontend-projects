import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">
                  Pandey Tuition Bureau
                </h3>
                <p className="text-sm text-white/80">Quality Education, Trusted Tutors</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              We are committed to providing quality home tuition services that help students 
              achieve their academic goals with the guidance of experienced and dedicated tutors.
            </p>
            
            <div className="flex space-x-4">
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Services',
                'Find a Tutor',
                'Join as Tutor',
                'Success Stories',
                'Contact Us'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Popular Subjects</h4>
            <ul className="space-y-3">
              {[
                'Mathematics',
                'Science (PCB)',
                'English',
                'Social Studies',
                'Computer Science',
                'Competitive Exams'
              ].map((subject, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {subject}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <div>
                  <p className="text-white/90 text-sm">
                    123 Education Street<br />
                    Knowledge Park<br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-white/90 text-sm">+91 98765 43210</p>
                  <p className="text-white/90 text-sm">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-white/90 text-sm">contact@pandeytuition.com</p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white/10 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Working Hours</h5>
              <div className="text-sm text-white/90 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>9 AM - 7 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10 AM - 4 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Pandey Tuition Bureau. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Empowering students through quality education and dedicated teaching.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;