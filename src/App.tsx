import { useState, useEffect } from 'react';
import {
  SignedIn,
  // SignedOut,
  // SignInButton,
  // SignUpButton,
  // SignIn,
  // SignUp,
  UserButton, useUser
} from "@clerk/clerk-react";
import { useClerk } from '@clerk/clerk-react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { ContactPage } from './components/ContactPage';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { SellerPortal } from './components/SellerPortal';
import { Product, CartItem } from './types';
// import { products } from './data/mockData';

function App() {

  const { user } = useUser();
  const { openSignUp, openUserProfile } = useClerk();

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recommendedCountry, setRecommendedCountry] = useState<string>('India');

  // Simulate IP-based country recommendation
  useEffect(() => {
    const simulateIPDetection = () => {
      const recommendedCountries = ['India', 'China', 'Mexico', 'Thailand'];
      const randomCountry = recommendedCountries[Math.floor(Math.random() * recommendedCountries.length)];
      setRecommendedCountry(randomCountry);
    };

    simulateIPDetection();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUserClick = () => {
    if (user) {
      openUserProfile(); // If signed in, show profile dropdown/modal
    } else {
      openSignUp(); // If signed out, open Sign-Up modal
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            recommendedCountry={recommendedCountry}
            onNavigateToProducts={() => setCurrentPage('products')}
          />
        );
      case 'products':
        return <ProductsPage onAddToCart={handleAddToCart} />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'contact':
        return <ContactPage />;
      case 'seller-portal':
        return <SellerPortal />;
      // case 'sign-in':
      //   return <SignIn routing="virtual" path="/sign-in" />;
      // case 'sign-up':
      //   return <SignUp routing="virtual" path="/sign-up" />;

      default:
        return (
          <HomePage 
            recommendedCountry={recommendedCountry}
            onNavigateToProducts={() => setCurrentPage('products')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onUserClick={handleUserClick}
      />

      <div className="flex justify-end items-center p-4 bg-white shadow-sm">
        {/*<SignedOut>*/}
        {/*  <SignInButton className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" />*/}
        {/*  <SignUpButton className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" />*/}
        {/*</SignedOut>*/}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {renderCurrentPage()}

      <Footer />



      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>

  );
}

export default App;
