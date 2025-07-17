import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-4 font-space">Naitik</div>
          <p className="text-light-gray mb-6">Graphic Designer & Video Editor</p>
          <div className="flex justify-center items-center space-x-6">
            <span className="text-light-gray flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>naitik@example.com</span>
            </span>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-gray">
            <p className="text-light-gray text-sm">© 2024 Naitik. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
