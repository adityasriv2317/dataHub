
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Database } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const navItems = [
//     { name: 'Projects', path: '/projects' },
//     { name: 'Team', path: '/team' },
//     { name: 'Database', path: '/database' },
//     { name: 'AI Tools', path: '/ai-tools' },
//     { name: 'Chat', path: '/chat' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//             <Database className="h-8 w-8 text-blue-400 mr-2" />
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               DataHub
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => navigate(item.path)}
//                   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//               Sign In
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-400 hover:text-white"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-black/95 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => {
//                   navigate(item.path);
//                   setIsOpen(false);
//                 }}
//                 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
//               >
//                 {item.name}
//               </button>
//             ))}
//             <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
//               Sign In
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;
