import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaSchool, FaBriefcase, FaPaperPlane } from 'react-icons/fa';

const SchoolContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        designation: '',
        schoolName: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const response = await fetch(`${apiBaseUrl}/api/school-applications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                // Reset form and close after a delay
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        number: '',
                        designation: '',
                        schoolName: '',
                        message: ''
                    });
                    onClose();
                }, 3000);
            } else {
                alert(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Server error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-all z-10"
                        >
                            <FaTimes size={18} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
                            {/* Form Area */}
                            <div className="md:col-span-12 p-8 sm:p-10">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
                                            ✓
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Request Received!</h3>
                                        <p className="text-gray-600">Thank you for your interest. Our team will contact you shortly to discuss how we can implement Inlighn Tech at your school.</p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Implement at School</h2>
                                            <p className="text-gray-500">Partner with us to bring future-ready skills to your students.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Name</label>
                                                    <div className="relative">
                                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            required
                                                            type="text"
                                                            name="name"
                                                            placeholder="Full Name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Email</label>
                                                    <div className="relative">
                                                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            required
                                                            type="email"
                                                            name="email"
                                                            placeholder="Official Email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Number</label>
                                                    <div className="relative">
                                                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            required
                                                            type="tel"
                                                            name="number"
                                                            placeholder="Phone Number"
                                                            value={formData.number}
                                                            onChange={handleChange}
                                                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Designation</label>
                                                    <div className="relative">
                                                        <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            required
                                                            type="text"
                                                            name="designation"
                                                            placeholder="e.g. Principal"
                                                            value={formData.designation}
                                                            onChange={handleChange}
                                                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">School Name</label>
                                                <div className="relative">
                                                    <FaSchool className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        required
                                                        type="text"
                                                        name="schoolName"
                                                        placeholder="Name of your institution"
                                                        value={formData.schoolName}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Message</label>
                                                <textarea
                                                    name="message"
                                                    placeholder="How can we help you?"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all text-gray-900 resize-none"
                                                ></textarea>
                                            </div>

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 ${isSubmitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-[#ff6b35] hover:bg-[#e55a2b] hover:scale-[1.02] active:scale-[0.98]'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                ) : (
                                                    <>
                                                        <span>Send Request</span>
                                                        <FaPaperPlane size={16} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SchoolContactModal;
