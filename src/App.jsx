import { useEffect, useState } from 'react';
import { fetchCourseDetails, fetchCourseVariants } from './api/courseApi';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructors from './components/Instructors';
import FAQ from './components/FAQ';
import PricingCard from './components/PricingCard';
import { CheckList } from './components/CheckList';
import Routine from './components/Routine';
import FreeItems from './components/FreeItems';
import Pointers from './components/Pointers';
import DemoClass from './components/DemoClass';
import Testimonials from './components/Testimonials';
import About from './components/About';

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
            <Hero
                title={courseData.title}
                description={courseData.description}
                media={courseData.media}
            />

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Available Batches</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {variantsData.items.map(variant => (
                        <>
                            <PricingCard key={variant.id} variant={variant} />
                            <CheckList checklist={courseData.checklist} />
                        </>
                    ))}
                </div>
            </div>
            <DemoClass demoClass={demoClass} />
            <Features features={features} />
            <Pointers pointers={pointers} />
            <Instructors instructors={instructors} />
            <Testimonials testimonials={testimonials} />
            <FAQ faqs={faqs} />
            <Routine routine={routine} />
            <FreeItems freeItems={freeItems} />
            <About about={about} />
        </div>
    );
}

export default App;