const COURSE_API = 'https://api.10minuteschool.com/discovery-service/api/v1/products';

export const fetchCourseDetails = async () => {
  const response = await fetch(`${COURSE_API}/ielts-live-batch`);
  return response.json();
};

export const fetchCourseVariants = async () => {
  const response = await fetch(`${COURSE_API}/ielts-live-batch/variants`);
  return response.json();
};