import { useState, useEffect } from 'react';
import useCourseData from './hooks/useCourseData';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructors from './components/Instructors';
import FAQ from './components/FAQ';
import Routine from './components/Routine';
import FreeItems from './components/FreeItems';
import Pointers from './components/Pointers';
import DemoClass from './components/DemoClass';
import Testimonials from './components/Testimonials';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import Navbar from './components/Navbar';
import Variants from './components/Variants';
import { motion } from 'framer-motion';

function App() {
    const { courseData, variantsData, loading, selectedBatchIndex, setSelectedBatchIndex } = useCourseData();
    const [showVariants, setShowVariants] = useState(false);

    // Scroll handler for variants visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 600) {
                setShowVariants(true);
            } else {
                setShowVariants(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    // Extract sections from courseData
    const features = courseData.sections.find(s => s.type === 'features')?.values || [];
    const instructors = courseData.sections.find(s => s.type === 'instructors')?.values || [];
    const faqs = courseData.sections.find(s => s.type === 'faq')?.values || [];
    const routine = courseData.sections.find(s => s.type === 'routine');
    const freeItems = courseData.sections.find(s => s.type === 'free_items');
    const pointers = courseData.sections.find(s => s.type === 'pointers');
    const demoClass = courseData.sections.find(s => s.type === 'demo_class_book_engagement');
    const testimonials = courseData.sections.find(s => s.type === 'testimonials');
    const about = courseData.sections.find(s => s.type === 'about');

    // Get the selected variant's target date
    const targetDate = variantsData.items[selectedBatchIndex]?.plan.content_available_end_at;

    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <div className='relative'>
                    <div className='relative bg-gradient-to-br from-gray-900 to-gray-600'>
                        <Hero
                            title={courseData.title}
                            description={courseData.description}
                            targetDate={targetDate}
                        />
                    </div>
                    <div className="p-4 rounded-lg border max-w-[480px] md:absolute right-4 top-4 bg-gray-100">
                        <MediaGallery media={courseData.media} />
                        <Variants
                            variants={variantsData.items}
                            checklist={courseData.checklist}
                            currentIndex={selectedBatchIndex}
                            setCurrentIndex={setSelectedBatchIndex}
                        />
                    </div>
                    <div className='flex'>
                        <div className='max-w-3xl'>
                            <DemoClass demoClass={demoClass} />
                        </div>
                    </div>
                </div>
                <div className='relative px-4 md:mr-[480px]'>
                    {
                        showVariants && window.innerWidth > 768 &&
                        <motion.div 
                            className="md:fixed md:right-4 md:p-4 md:bg-gray-100 md:rounded-t-lg md:top-20 max-w-[480px]"
                            initial={{ x: '100%' }}
                            animate={{ x: '0' }}
                            transition={{ duration: 0.5 }}
                        >
                            <Variants
                                variants={variantsData.items}
                                checklist={courseData.checklist}
                                currentIndex={selectedBatchIndex} 
                                setCurrentIndex={setSelectedBatchIndex}
                            />
                        </motion.div>
                    }
                    <div id="instructorsDiv">
                        <Instructors instructors={instructors} />
                    </div>
                    <Features features={features} />
                    <Routine routine={routine} />
                    <About about={about} />
                    <Pointers pointers={pointers} />
                    <Testimonials testimonials={testimonials} />
                    <FAQ faqs={faqs} />
                    <FreeItems freeItems={freeItems} />
                </div>
            </div>
        </div>
    );
}

export default App;
