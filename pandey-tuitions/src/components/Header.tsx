import { Button } from "@/components/ui/button";
import { BookOpen, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-poppins text-primary">
                Pandey Tuition Bureau
              </h1>
              <p className="text-xs text-muted-foreground">Quality Education, Trusted Tutors</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contact@pandeytuition.com</span>
            </div>
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Contact Button */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;