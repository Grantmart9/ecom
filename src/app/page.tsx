import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 via-primary-purple/5 to-primary-pink/5">
      {/* Modern Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecommerce
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Products
              </a>
              <a
                href="/deals"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Deals
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Login
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="/cart" className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                    />
                  </svg>
                  <span>Cart</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-primary-purple/10 to-primary-pink/10 rounded-3xl mx-4 animate-fadeInUp"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary-cyan to-secondary-teal rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent-lime to-accent-emerald rounded-full opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="container mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-blue via-primary-purple to-primary-pink bg-clip-text text-transparent leading-tight animate-fadeInUp">
                Your Premium Shopping Experience
              </h2>
              <p
                className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                Discover curated products, exclusive deals, and seamless
                shopping in our modern digital marketplace
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <Button size="lg" className="neon-button text-lg px-8 py-3">
                  <a href="/products">Shop Now</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-2 border-primary-purple hover:bg-primary-purple/10 hover:border-primary-indigo transition-all duration-300"
                >
                  <a href="/deals">View Deals</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of online shopping with our innovative
                features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Products Card */}
              <div className="vibrant-card group overflow-hidden animate-fadeInUp">
                <div className="p-8">
                  <div className="colorful-icon w-16 h-16 mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Premium Products
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore our carefully curated collection of high-quality
                    products from trusted brands worldwide.
                  </p>
                  <a
                    href="/products"
                    className="inline-flex items-center text-primary-blue hover:text-primary-purple font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Explore Products
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Deals Card */}
              <div
                className="vibrant-card group overflow-hidden animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="p-8">
                  <div className="colorful-icon w-16 h-16 mb-6 bg-gradient-to-r from-primary-orange to-primary-pink">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Exclusive Deals
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Don't miss out on limited-time offers, flash sales, and
                    exclusive member discounts.
                  </p>
                  <a
                    href="/deals"
                    className="inline-flex items-center text-primary-orange hover:text-primary-pink font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Deals
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Support Card */}
              <div
                className="vibrant-card group overflow-hidden animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="p-8">
                  <div className="colorful-icon w-16 h-16 mb-6 bg-gradient-to-r from-accent-green to-accent-emerald">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    24/7 Support
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get instant help from our dedicated customer support team
                    whenever you need assistance.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-accent-green hover:text-accent-emerald font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Contact Us
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-neutral-warm to-neutral-cool">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div className="animate-fadeInUp">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-primary-pink bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Products</div>
              </div>
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-green to-accent-emerald bg-clip-text text-transparent mb-2">
                  99%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary-cyan to-secondary-teal bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-primary-purple/20 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-primary-pink/5"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-purple rounded-lg flex items-center justify-center animate-float">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                  Ecommerce
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your premier destination for quality products, exceptional
                deals, and outstanding customer service.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary-purple/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-primary-orange to-primary-pink rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary-pink/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-accent-green to-accent-emerald rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent-green/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products"
                    className="text-gray-300 hover:text-primary-blue transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/deals"
                    className="text-gray-300 hover:text-primary-orange transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Deals
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-accent-green transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="text-gray-300 hover:text-primary-purple transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-accent-green to-accent-emerald bg-clip-text text-transparent">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-accent-emerald transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary-pink transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-secondary-cyan transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-secondary-teal transition-colors hover:translate-x-1 transform duration-200"
                  >
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Ecommerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
