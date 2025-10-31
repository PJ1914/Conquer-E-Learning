import mongoose from "mongoose";
import dotenv from "dotenv";
import connectMongoDB from "../config/mongodb.js";
import {
  HomepageStats,
  HomepagePopularCourses,
  HomepageFaqs,
} from "../models/index.js";

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    console.log("🌱 Starting to seed database...");

    // Clear existing data
    await HomepageStats.deleteMany({});
    await HomepagePopularCourses.deleteMany({});
    await HomepageFaqs.deleteMany({});

    console.log("✅ Cleared existing data");

    // Seed Homepage Stats
    const stats = await HomepageStats.create({
      studentsEnrolled: 10000,
      coursesAvailable: 150,
      instructors: 50,
      successRate: 95,
      isActive: true,
    });
    console.log("✅ Created Homepage Stats");

    // Seed Popular Courses
    const courses = await HomepagePopularCourses.insertMany([
      {
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive course.",
        instructor: "John Doe",
        duration: "40 hours",
        level: "Beginner",
        rating: 4.8,
        enrolledStudents: 1200,
        thumbnail: "https://example.com/web-dev.jpg",
        price: 2999,
        discount: 20,
        category: "Web Development",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        displayOrder: 1,
        isActive: true,
      },
      {
        title: "Python for Data Science",
        description: "Master Python programming and data science libraries like NumPy, Pandas, and Matplotlib.",
        instructor: "Jane Smith",
        duration: "35 hours",
        level: "Intermediate",
        rating: 4.9,
        enrolledStudents: 950,
        thumbnail: "https://example.com/python-ds.jpg",
        price: 3499,
        discount: 15,
        category: "Data Science",
        tags: ["Python", "Data Analysis", "Machine Learning"],
        displayOrder: 2,
        isActive: true,
      },
      {
        title: "Digital Marketing Masterclass",
        description: "Learn SEO, social media marketing, email marketing, and more.",
        instructor: "Mike Johnson",
        duration: "25 hours",
        level: "Beginner",
        rating: 4.7,
        enrolledStudents: 800,
        thumbnail: "https://example.com/digital-marketing.jpg",
        price: 1999,
        discount: 25,
        category: "Marketing",
        tags: ["SEO", "Social Media", "Email Marketing"],
        displayOrder: 3,
        isActive: true,
      },
    ]);
    console.log(`✅ Created ${courses.length} Popular Courses`);

    // Seed FAQs
    const faqs = await HomepageFaqs.insertMany([
      {
        question: "How do I enroll in a course?",
        answer: "You can enroll in any course by clicking the 'Enroll Now' button on the course page. After payment, you'll get instant access to all course materials.",
        category: "General",
        displayOrder: 1,
        isActive: true,
      },
      {
        question: "Are there any prerequisites for courses?",
        answer: "Prerequisites vary by course. Check the course description for specific requirements. Most beginner courses have no prerequisites.",
        category: "Courses",
        displayOrder: 2,
        isActive: true,
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and UPI payments through Razorpay. All transactions are secure and encrypted.",
        category: "Payment",
        displayOrder: 3,
        isActive: true,
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course, contact our support team for a full refund.",
        category: "Payment",
        displayOrder: 4,
        isActive: true,
      },
      {
        question: "How long do I have access to the course?",
        answer: "Once enrolled, you have lifetime access to the course materials, including all future updates and additions.",
        category: "Courses",
        displayOrder: 5,
        isActive: true,
      },
    ]);
    console.log(`✅ Created ${faqs.length} FAQs`);

    console.log("\n🎉 Database seeded successfully!");
    console.log("\nSeeded Data Summary:");
    console.log(`- Homepage Stats: ${stats ? 1 : 0}`);
    console.log(`- Popular Courses: ${courses.length}`);
    console.log(`- FAQs: ${faqs.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
