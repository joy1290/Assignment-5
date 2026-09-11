import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechnologySection from "./components/Technology/TechnologySection";
import YourStack from "./components/YourStack";

import type { Technology } from "./components/type/Technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addTechnology = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  
  const removeTechnology = (id: number) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    if (!technology) return;

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    toast.success(
      `${technology.name} removed from your stack!`
    );
  };

  
  const removeAll = () => {
    if (stack.length === 0) {
      toast.error("Your stack is already empty!");
      return;
    }

    setStack([]);

    toast.success("All technologies removed!");
  };

  return (
    <>
      
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
        containerStyle={{
          zIndex: 999999,
        }}
      />

      <div className="min-h-screen bg-white">
        
        <Navbar />

        
        <main>
          
          <Hero />

          
          <section
            id="technologies"
            className="bg-gray-50 px-4 py-16 sm:px-6"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">

                
                <TechnologySection
                  stack={stack}
                  onAdd={addTechnology}
                />

              
                <div className="lg:pt-[72px]">
                  <YourStack
                    stack={stack}
                    onRemove={removeTechnology}
                    onRemoveAll={removeAll}
                  />
                </div>

              </div>
            </div>
          </section>
        </main>

      
        <Footer />
      </div>
    </>
  );
}

export default App;