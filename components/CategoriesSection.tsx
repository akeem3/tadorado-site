"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Female Outfit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/download%20(4).jpg?alt=media&token=eebb77a1-7744-408b-8923-ddb6d1b78958",
  },
  {
    name: "Male Outfit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/male%20outfit.jpeg?alt=media&token=a808db44-ba9f-4e9c-9372-2a65a466caa6",
  },
  {
    name: "Kid's Outfit",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/kids%20ankara.jpeg?alt=media&token=bddd7dbf-b599-4d73-9f02-ddbdcca83f95",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#46332E] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              VIEW OUR CATEGORIES
            </motion.h2>
            <motion.p
              className="text-base text-[#46332E]/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been theLorem
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link
              href="/collections"
              className="hidden sm:flex items-center text-[#46332E] hover:text-[#46332E]/80 transition-colors"
            >
              View all
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={400}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#46332E]">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link
            href="/collections"
            className="inline-flex items-center text-[#46332E] hover:text-[#46332E]/80 transition-colors"
          >
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
