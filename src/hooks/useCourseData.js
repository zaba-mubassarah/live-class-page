import { useState, useEffect } from 'react';
import { fetchCourseDetails, fetchCourseVariants } from '../api/courseApi';

const useCourseData = () => {
    const [courseData, setCourseData] = useState(null);
    const [variantsData, setVariantsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedBatchIndex, setSelectedBatchIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [course, variants] = await Promise.all([
                    fetchCourseDetails(),
                    fetchCourseVariants()
                ]);
                setCourseData(course.data);
                setVariantsData(variants.data);
                setSelectedBatchIndex(0); // Initialize to first batch
            } catch (error) {
                console.error('Error fetching course data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        courseData,
        variantsData,
        loading,
        selectedBatchIndex,
        setSelectedBatchIndex,
    };
};

export default useCourseData;
