import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-primary leading-tight">
                Quality Home Tuitions for
                <span className="text-secondary"> Every Student</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with experienced tutors in your area. We provide personalized home tuition 
                services for all classes and subjects with dedicated, qualified teachers who care 
                about your child's success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="font-semibold">
                <GraduationCap className="h-5 w-5" />
                Find a Tutor
              </Button>
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5" />
                Join as Tutor
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Students learning with tutor" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-success-light p-2 rounded-lg">
                  <Award className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Certified Tutors</div>
                  <div className="text-xs text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary-light p-2 rounded-lg">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Personalized</div>
                  <div className="text-xs text-muted-foreground">Learning Approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;