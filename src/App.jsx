import { useEffect, useState } from 'react';
import { fetchCourseDetails, fetchCourseVariants } from './api/courseApi';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructors from './components/Instructors';
import FAQ from './components/FAQ';
import { CheckList } from './components/CheckList';
import Routine from './components/Routine';
import FreeItems from './components/FreeItems';
import Pointers from './components/Pointers';
import DemoClass from './components/DemoClass';
import Testimonials from './components/Testimonials';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import Navbar from './components/Navbar';
import Variants from './components/Variants';

function App() {
    const [courseData, setCourseData] = useState(null);
    const [variantsData, setVariantsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [course, variants] = await Promise.all([
                    fetchCourseDetails(),
                    fetchCourseVariants()
                ]);
                setCourseData(course.data);
                setVariantsData(variants.data);
            } catch (error) {
                console.error('Error fetching course data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            </div>
        );
    }

    const features = courseData.sections.find(s => s.type === 'features')?.values || [];
    const instructors = courseData.sections.find(s => s.type === 'instructors')?.values || [];
    const faqs = courseData.sections.find(s => s.type === 'faq')?.values || [];
    const routine = courseData.sections.find(s => s.type === 'routine');
    const freeItems = courseData.sections.find(s => s.type === 'free_items');
    const pointers = courseData.sections.find(s => s.type === 'pointers');
    const demoClass = courseData.sections.find(s => s.type === 'demo_class_book_engagement');
    const testimonials = courseData.sections.find(s => s.type === 'testimonials');
    const about = courseData.sections.find(s => s.type === 'about');

    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <div className='relative'>
                    <div className='relative bg-gradient-to-br from-gray-900 to-gray-800'>
                        <Hero
                            title={courseData.title}
                            description={courseData.description}
                        />
                        <CheckList checklist={courseData.checklist} />
                    </div>
                    <div className="p-4 rounded-lg border w-[450px] absolute right-4 top-4 bg-gray-100">
                        <MediaGallery media={courseData.media} />
                        <Variants variants={variantsData.items} />
                    </div>
                    <div className='flex'>

                        <div className='max-w-xl'>
                            <DemoClass demoClass={demoClass} />
                        </div>
                    </div>
                </div>
                <div className='max-w-3xl'>
                    <Instructors instructors={instructors} />
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