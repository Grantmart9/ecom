import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 via-primary-purple/5 to-primary-pink/5">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Ecommerce
              </a>
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

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Cart Item */}
              {[1, 2, 3].map((item, index) => (
                <div
                  key={item}
                  className="vibrant-card p-6 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-neutral-warm to-neutral-cool rounded-xl flex items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          item === 1
                            ? "bg-gradient-to-r from-primary-blue to-primary-purple"
                            : item === 2
                            ? "bg-gradient-to-r from-primary-orange to-primary-pink"
                            : "bg-gradient-to-r from-accent-green to-accent-emerald"
                        }`}
                      >
                        <span className="text-white font-bold">P{item}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        Product {item}
                      </h3>
                      <p className="text-gray-600">
                        High-quality product with premium features
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 bg-neutral-warm hover:bg-neutral-cool rounded-lg flex items-center justify-center transition-colors">
                            <span className="text-gray-600">-</span>
                          </button>
                          <span className="font-medium">1</span>
                          <button className="w-8 h-8 bg-neutral-warm hover:bg-neutral-cool rounded-lg flex items-center justify-center transition-colors">
                            <span className="text-gray-600">+</span>
                          </button>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                          $99.99
                        </span>
                      </div>
                    </div>
                    <button className="text-secondary-rose hover:text-primary-pink transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div
              className="vibrant-card p-6 h-fit animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-primary-blue">$299.97</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-accent-green">$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-primary-orange">
                    $29.99
                  </span>
                </div>
                <div className="border-t border-neutral-cool pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
                      Total
                    </span>
                    <span className="bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
                      $339.95
                    </span>
                  </div>
                </div>
              </div>
              <Button className="w-full neon-button text-lg py-3 mt-6">
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full text-lg py-3 mt-3 border-2 border-primary-purple hover:bg-primary-purple/10 hover:border-primary-indigo transition-all duration-300"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <h3 className="text-xl font-bold">Ecommerce</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your premier destination for quality products, exceptional
                deals, and outstanding customer service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/deals"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Deals
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Ecommerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
