import Link from 'next/link';


        const header = () => {
            return (
              <header className="flex flex-col items-center bg-gray-100 text-sm">
                <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-phone-alt"></i>
                      <span>(123) 555-6789</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <i className="fas fa-envelope"></i>
                      <span>email@example.com</span>
                    </span>
                  </div>
                  <p className="text-green-600 font-medium">Subscribe and get 80% discount!</p>
                  <div className="flex items-center space-x-2">
                    <span>Follow Us:</span>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
                  <h1 className="text-lg font-bold">Bandage</h1>
                  <nav className="flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/contact">Contact</Link>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Link href="/login" className="flex items-center">
                      <i className="fas fa-user"></i>
                      <span className="ml-1">Login/Register</span>
                    </Link>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
              </header>
       );
     };

     export default header;